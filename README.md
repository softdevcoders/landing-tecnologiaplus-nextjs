# Tecnología Plus - Next.js Landing Page

![Tecnología Plus Logo](public/android-chrome-192x192.png)

## 📋 Overview

This is the official landing page for Tecnología Plus, a Colombian company specializing in technology solutions for businesses, including turnos (queue systems), llamador de meseros (waiter call systems), and localizadores (customer locator systems). Built with Next.js 14, this website uses modern front-end technologies to provide a fast, responsive, and SEO-friendly experience.

## ✨ Features

- **Modern UI/UX**: Clean design with responsive layouts for all device sizes
- **Performance Optimized**: Fast loading times with optimized assets and code splitting
- **Contact System**: React Hook Form with Zod validation and EmailJS integration
- **SEO Friendly**: Comprehensive metadata, Schema.org data, and semantic HTML
- **Internationalization Ready**: Support for multiple languages (Spanish primary)
- **Product Showcases**: Detailed information about various product offerings
- **WhatsApp Integration**: Direct messaging with pre-filled context from any page

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **React**: UI library
- **SASS/SCSS**: Styling with modules for component scoping
- **React Hook Form**: Form validation and handling
- **Zod**: Schema validation
- **EmailJS**: Email service without backend
- **Cloudinary**: Image hosting and optimization
- **Responsive Design**: Mobile-first approach
- **Swiper**: Modern carousel/slider
- **React Icons**: Icon library

## 📦 Installation & Setup

### Prerequisites

- Node.js 18.17 or later
- pnpm (preferred) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-repo/landing-tecnologiaplus-nextjs.git
cd landing-tecnologiaplus-nextjs
```

2. Install dependencies:
```bash
pnpm install
```

3. Create environment files:

Create `.env.local` for development:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
```

4. Start the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
landing-tecnologiaplus-nextjs/
├── public/               # Static files (images, favicon, etc)
├── src/                  # Source files
│   ├── app/              # Next.js App Router
│   │   ├── components/   # Shared components
│   │   ├── context/      # React contexts
│   │   ├── styles/       # Global styles and mixins
│   │   ├── [product]/    # Product-specific pages
│   │   ├── ver-mas/      # Detailed pages
│   │   ├── layout.js     # Root layout
│   │   └── page.js       # Home page
│   └── components/       # Global components
├── .env.local            # Local environment variables (gitignored)
├── EMAIL_CONFIG.md       # Documentation for email system
├── next.config.js        # Next.js configuration
└── package.json          # Project dependencies and scripts
```

## 🧩 Key Components

### ContactForm

The form component incorporates:

- Floating labels for better UX
- Real-time validation with useful error messages
- Colombian phone number validation
- Anti-spam measures with localStorage rate limiting
- EmailJS integration for serverless email functionality
- Responsive design for all device sizes

### WhatsApp Button

- Fixed position button visible throughout the site
- Contextual message pre-filled with current page information
- Direct link to company WhatsApp for instant communication

### InfiniteSlider

- Smooth animation for showcasing client logos
- Pause on hover functionality
- Responsive design adjusting speed based on screen size

## 🚀 Deployment

The website is designed to be deployed on Vercel:

```bash
pnpm build
vercel --prod
```

Don't forget to set up environment variables in your Vercel project settings.

## 📱 Mobile Responsiveness

The site is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px+)

## 🔍 SEO Considerations

- Semantic HTML structure
- Optimized meta tags
- Schema.org structured data
- Fast loading (95+ Lighthouse score)
- Accessible design practices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

This project is proprietary and belongs to Tecnología Plus. Unauthorized use, modification, or distribution is prohibited.

---

Built with ❤️ for Tecnología Plus.

For more information, visit [tecnologiaplus.com](https://tecnologiaplus.com)
