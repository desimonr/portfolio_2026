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
  handleHeroScroll();
  // Initialize the lightbox for project page images
  initializeImageLightbox();
  // --- End of combined logic ---
});

/**
 * Handles the hero scroll animation on the home page.
 */
function handleHeroScroll() {
  const wrapper = document.querySelector('.hero-scroll-wrapper');
  const heroMainText = document.querySelector('.hero-main-text');
  const storySection = document.querySelector('.story-section');

  if (!wrapper || !heroMainText || !storySection) {
    return; // Only run on the home page
  }

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const wrapperTop = wrapper.offsetTop;
        const wrapperHeight = wrapper.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calculate scroll progress within the wrapper (0 to 1)
        const progress = Math.max(0, Math.min(1, (scrollY - wrapperTop) / (wrapperHeight - viewportHeight)));

        // Fade out hero text in the first half of the scroll
        const heroFadeEnd = 0.5;
        const heroOpacity = 1 - Math.min(1, progress / heroFadeEnd);
        heroMainText.style.opacity = heroOpacity.toFixed(2);

        // Fade in story section in the second half of the scroll
        const storyFadeStart = 0.5;
        let storyOpacity = 0;
        if (progress > storyFadeStart) {
          storyOpacity = (progress - storyFadeStart) / (1 - storyFadeStart);
        }
        storySection.style.opacity = storyOpacity.toFixed(2);

        if (storyOpacity > 0) {
          storySection.style.pointerEvents = 'auto';
        } else {
          storySection.style.pointerEvents = 'none';
        }

        ticking = false;
      });

      ticking = true;
    }
  });
}

/**
 * Initializes a lightbox for images within project content.
 */
function initializeImageLightbox() {
  const projectPage = document.querySelector('.project-page');
  if (!projectPage) {
    return; // Only run on project pages
  }

  // Select all images within the .project-page, excluding any that might be part of the nav/footer
  const images = projectPage.querySelectorAll('img');
  images.forEach(img => {
    // Ensure we don't attach listeners to images that are already part of the lightbox itself (if any)
    if (!img.closest('#lightbox-overlay')) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        openLightbox(img.getAttribute('src'));
      });
    }
  });
}

/**
 * Opens the lightbox with the specified image source.
 * @param {string} src The source URL of the image to display.
 */
function openLightbox(src) {
  // Create lightbox elements
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox-overlay';

  const lightboxContent = document.createElement('div');
  lightboxContent.className = 'lightbox-content';

  const lightboxImage = document.createElement('img');
  lightboxImage.src = src;
  lightboxImage.alt = 'Lightbox image';
  lightboxImage.style.display = 'block';

  // Add error handling for the image
  lightboxImage.onerror = () => {
    console.error('Failed to load image in lightbox:', src);
    // Optionally display a broken image icon or message
    lightboxImage.alt = 'Image failed to load';
    // You might want to remove the image or display a placeholder
    // lightboxImage.style.display = 'none';
  };

  const lightboxControls = document.createElement('div');
  lightboxControls.className = 'lightbox-controls';
  lightboxControls.innerHTML = `
    <button id="lightbox-zoom-in" title="Zoom In"><i class="fa fa-plus"></i></button>
    <button id="lightbox-zoom-out" title="Zoom Out"><i class="fa fa-minus"></i></button>
  `;

  const closeButton = document.createElement('button');
  closeButton.id = 'lightbox-close';
  closeButton.title = 'Close';
  closeButton.innerHTML = '&times;';

  lightboxContent.appendChild(lightboxImage);
  lightboxContent.appendChild(lightboxControls);
  lightboxContent.appendChild(closeButton);
  lightbox.appendChild(lightboxContent);

  document.body.appendChild(lightbox);
  document.body.style.overflow = 'hidden'; // Prevent background scrolling

  let scale = 1;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let translateX = 0;
  let translateY = 0;

  // Close functionality
  const closeLightbox = () => {
    document.body.removeChild(lightbox);
    document.body.style.overflow = 'auto';
  };

  closeButton.addEventListener('click', closeLightbox);
  // Close when clicking on the background overlay
  lightbox.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox-overlay') {
      closeLightbox();
    }
  });

  // Zoom functionality
  const zoomInButton = lightbox.querySelector('#lightbox-zoom-in');
  const zoomOutButton = lightbox.querySelector('#lightbox-zoom-out');

  const updateZoom = () => {
    lightboxImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  };

  zoomInButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing lightbox
    scale += 0.2;
    updateZoom();
  });

  zoomOutButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing lightbox
    if (scale > 0.4) { // Set a minimum zoom out level
      scale -= 0.2;
      updateZoom();
    }
  });

  // Dragging functionality
  lightboxImage.addEventListener('mousedown', (e) => {
    if (scale > 1) {
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      lightboxImage.style.cursor = 'grabbing';
    }
  });

  lightboxImage.addEventListener('mousemove', (e) => {
    if (isDragging) {
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      updateZoom();
    }
  });

  lightboxImage.addEventListener('mouseup', () => {
    isDragging = false;
    if (scale > 1) {
      lightboxImage.style.cursor = 'grab';
    }
  });

  lightboxImage.addEventListener('mouseleave', () => {
    isDragging = false;
    if (scale > 1) {
      lightboxImage.style.cursor = 'grab';
    }
  });

  // Allow closing with the Escape key
  const handleEscKey = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      window.removeEventListener('keydown', handleEscKey);
    }
  };
  window.addEventListener('keydown', handleEscKey);
}