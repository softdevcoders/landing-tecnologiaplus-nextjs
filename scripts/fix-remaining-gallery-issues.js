/**
 * Script to fix remaining issues in MobileProductGallery components
 * 
 * Run with: node scripts/fix-remaining-gallery-issues.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// Root directory of ver-mas components
const ROOT_DIR = path.join(__dirname, '../src/app/ver-mas');

// Helper function to find all MobileProductGallery.jsx files recursively
async function findMobileGalleryFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      files = [...files, ...(await findMobileGalleryFiles(fullPath))];
    } else if (entry.name === 'MobileProductGallery.jsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix a single file
async function fixFile(filePath) {
  try {
    console.log(`Checking: ${filePath}`);
    const content = await readFileAsync(filePath, 'utf8');
    
    // Check if this file needs fixing
    if (!content.includes('<Swiper') || content.includes('ref={swiperRef}')) {
      console.log('  ✓ No issues to fix');
      return;
    }
    
    // Apply fixes
    let updated = content;
    
    // Add useRef import if it's missing
    if (!updated.includes('useRef')) {
      if (updated.includes('import { useState }')) {
        updated = updated.replace('import { useState }', 'import { useState, useRef }');
      } else if (updated.includes('import React, {')) {
        updated = updated.replace('import React, {', 'import React, { useRef, ');
      } else if (updated.includes('import {')) {
        updated = updated.replace('import {', 'import { useRef, ');
      } else {
        updated = updated.replace(
          /'use client';/,
          `'use client';\n\nimport { useRef } from 'react';`
        );
      }
    }
    
    // Add swiperRef declaration if missing
    if (!updated.includes('swiperRef')) {
      updated = updated.replace(
        /function\s+MobileProductGallery\(\)\s*{/,
        `function MobileProductGallery() {\n  // Reference to swiper - more efficient than using state\n  const swiperRef = useRef(null);\n`
      );
      
      // Also try arrow function style
      if (!updated.includes('swiperRef')) {
        updated = updated.replace(
          /const\s+MobileProductGallery\s*=\s*\(\)\s*=>\s*{/,
          `const MobileProductGallery = () => {\n  // Reference to swiper - more efficient than using state\n  const swiperRef = useRef(null);\n`
        );
      }
    }
    
    // Add ref to Swiper component
    updated = updated.replace(
      /(<Swiper\s+)/g,
      `$1ref={swiperRef} `
    );
    
    // Check if anything was changed
    if (updated === content) {
      console.log('  ⚠️ Could not automatically fix issues');
      return;
    }
    
    // Write the updated content back to the file
    await writeFileAsync(filePath, updated, 'utf8');
    console.log('  ✓ Fixed successfully!');
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Main function
async function main() {
  console.log('Finding MobileProductGallery files...');
  const files = await findMobileGalleryFiles(ROOT_DIR);
  
  console.log(`Found ${files.length} files to check`);
  
  for (const file of files) {
    await fixFile(file);
  }
  
  console.log('All files have been processed!');
}

main().catch(console.error); 