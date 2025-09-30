/**
 * Toggles the visibility of the dropdown menu in the navigation.
 * This function is called by the `onclick` attribute in the HTML.
 */
function toggleDropdown() {
  const dropdownContent = document.getElementById('dropdown-menu');
  const dropdownIcon = document.querySelector('.dropdown-btn i');

  if (dropdownContent && dropdownIcon) {
    dropdownContent.classList.toggle('show');
    dropdownIcon.classList.toggle('rotated');
  }
}

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
  // Ensure the click is not on the dropdown button or inside it
  if (!event.target.closest('.dropdown-btn')) {
    const openDropdown = document.querySelector('.dropdown-content.show');
    const openIcon = document.querySelector('.dropdown-btn i.rotated');

    if (openDropdown) {
      openDropdown.classList.remove('show');
    }
    if (openIcon) {
      openIcon.classList.remove('rotated');
    }
  }
});

/**
 * Page transition logic
 */
document.addEventListener('DOMContentLoaded', () => {
  // --- Start of combined logic ---

  // Create transition elements
  const transitionElement = document.createElement('div');
  transitionElement.className = 'page-transition';
  document.body.appendChild(transitionElement);

  // Wrap page content
  const mainContent = document.createElement('div');
  mainContent.className = 'page-content';
  while (document.body.firstChild !== transitionElement) {
    mainContent.appendChild(document.body.firstChild);
  }
  document.body.insertBefore(mainContent, transitionElement);

  // Get current page theme color
  const currentTheme = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-surface').trim();

  // Set initial transition element color
  transitionElement.style.background = currentTheme;

  // Show page content
  document.body.style.opacity = 1;

  // Handle navigation
  const allLinks = document.querySelectorAll('a');

  allLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href');

      // Let the browser handle links with no href, new tabs, or on-page anchors
      if (!href || this.target === '_blank' || href.startsWith('#')) {
        return;
      }

      // Use the URL object to safely check if the link is internal
      try {
        const targetUrl = new URL(href, window.location.origin);
        if (targetUrl.origin !== window.location.origin) {
          return; // It's an external link, do nothing.
        }
      } catch (err) {
        return; // Invalid URL, do nothing.
      }

      event.preventDefault();

      // Start transition sequence
      const pageContent = document.querySelector('.page-content');
      pageContent.classList.add('transitioning');

      // Animate transition element
      transitionElement.style.transform = 'scaleX(1)';
      transitionElement.style.opacity = '1';

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });

  // Run the scroll animation logic for the home page
  handleHomeScrollAnimation();
  // --- End of combined logic ---
});

/**
 * Handles background color transition on scroll for the home page.
 */
function handleHomeScrollAnimation() {
  const heroSection = document.querySelector('.hero');
  const projectsSection = document.querySelector('.projects');
  const navbar = document.querySelector('.navbar');
  const footer = document.querySelector('.footer');
  const navLogo = document.querySelector('.nav-logo');
  const navDropdownBtn = document.querySelector('.dropdown-btn');

  // Only run this on the home page
  if (!heroSection || !projectsSection || !navbar || !footer || !navLogo || !navDropdownBtn) {
    return;
  }

  const styles = getComputedStyle(document.body);
  const startColor = styles.getPropertyValue('--primary-surface').trim();
  const endColor = styles.getPropertyValue('--secondary-surface').trim();
  // Text colors for the navbar
  const startTextColor = styles.getPropertyValue('--secondary-color').trim();
  const endTextColor = styles.getPropertyValue('--fourth-color').trim(); // white

  // Helper to convert hex/rgb to an array of [r, g, b]
  function colorToRgb(color) {
    if (color.startsWith('#')) {
      const bigint = parseInt(color.substring(1), 16);
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    } else if (color.startsWith('rgb')) {
      return color.match(/\d+/g).map(Number);
    }
    // Add more parsers if other color formats are used
    return [255, 255, 255]; // Default to white
  }

  const startRgb = colorToRgb(startColor);
  const endRgb = colorToRgb(endColor);
  const startTextRgb = colorToRgb(startTextColor);
  const endTextRgb = colorToRgb(endTextColor);

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;
    const transitionEnd = heroSection.offsetTop + heroHeight;

    let progress = 0;
    if (scrollY > heroSection.offsetTop && scrollY < transitionEnd) {
      // Calculate progress from the start of the hero section to its end
      progress = (scrollY - heroSection.offsetTop) / heroHeight;
    } else if (scrollY >= transitionEnd) {
      progress = 1;
    }

    // Clamp progress between 0 and 1
    progress = Math.max(0, Math.min(1, progress));

    // Interpolate RGB values
    const bgR = Math.round(startRgb[0] + (endRgb[0] - startRgb[0]) * progress);
    const bgG = Math.round(startRgb[1] + (endRgb[1] - startRgb[1]) * progress);
    const bgB = Math.round(startRgb[2] + (endRgb[2] - startRgb[2]) * progress);
    const currentBgColor = `rgb(${bgR}, ${bgG}, ${bgB})`;

    const textR = Math.round(startTextRgb[0] + (endTextRgb[0] - startTextRgb[0]) * progress);
    const textG = Math.round(startTextRgb[1] + (endTextRgb[1] - startTextRgb[1]) * progress);
    const textB = Math.round(startTextRgb[2] + (endTextRgb[2] - startTextRgb[2]) * progress);
    const currentTextColor = `rgb(${textR}, ${textG}, ${textB})`;

    // Apply the interpolated colors
    document.body.style.backgroundColor = currentBgColor;
    navbar.style.backgroundColor = currentBgColor;
    footer.style.backgroundColor = currentBgColor;
    navLogo.style.color = currentTextColor;
    navDropdownBtn.style.color = currentTextColor;
  });
}