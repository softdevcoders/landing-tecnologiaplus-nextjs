/**
 * Lazy loads a script when it's needed
 * @param {string} src - Script URL
 * @param {boolean} defer - Whether to defer script loading
 * @param {Function} callback - Callback to execute after script loads
 */
export const loadScript = (src, defer = true, callback = () => {}) => {
  if (typeof window === 'undefined') return; // Skip on server-side
  
  const existingScript = document.querySelector(`script[src="${src}"]`);
  
  if (existingScript) {
    // Script already loaded
    callback();
    return;
  }
  
  const script = document.createElement('script');
  script.src = src;
  script.defer = defer;
  
  script.onload = () => {
    callback();
  };
  
  document.body.appendChild(script);
};

/**
 * Loads a script when an element is visible in the viewport
 * @param {string} src - Script URL
 * @param {Element} element - Element that triggers script loading when visible
 * @param {Function} callback - Callback function to execute when script loads
 */
export const loadScriptWhenVisible = (src, element, callback = () => {}) => {
  if (typeof window === 'undefined' || !element) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadScript(src, true, callback);
        observer.disconnect();
      }
    });
  }, { rootMargin: '200px' }); // Load script when element is within 200px of viewport
  
  observer.observe(element);
};

/**
 * Creates a facade for a third-party widget
 * Loads actual widget only when user interacts with the facade
 * @param {Element} facade - The placeholder element (facade)
 * @param {Function} loadWidget - Function to load the actual widget
 */
export const createWidgetFacade = (facade, loadWidget) => {
  if (typeof window === 'undefined' || !facade) return;
  
  const activateFacade = () => {
    loadWidget();
    facade.removeEventListener('click', activateFacade);
    facade.removeEventListener('mouseover', activateFacade);
  };
  
  facade.addEventListener('click', activateFacade);
  facade.addEventListener('mouseover', activateFacade);
}; 