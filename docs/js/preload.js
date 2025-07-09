
  // 1.preload background-image
  const preloadBackgroundImages = () => {
    const elements = document.querySelectorAll('*');
    const urls = new Set();

    elements.forEach(el => {
      const bg = window.getComputedStyle(el).getPropertyValue('background-image');
      const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
      if (match) {
        urls.add(match[1]);
      }
    });

    urls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  };

  // 2. pre load all <img src="...">
  const preloadImgTags = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const preload = new Image();
      preload.src = img.src;
    });
  };

  // 3. run 2 function when the page is on reload 
  window.addEventListener('DOMContentLoaded', () => {
    preloadBackgroundImages();
    preloadImgTags();
  });

