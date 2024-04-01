function takeScreenshot() {
  var screenshot = document.documentElement
    .cloneNode(true);
  //@ts-ignore
  screenshot.style.pointerEvents = 'none';
  //@ts-ignore
  screenshot.style.overflow = 'hidden';
  //@ts-ignore
  screenshot.style.webkitUserSelect = 'none';
  //@ts-ignore
  screenshot.style.mozUserSelect = 'none';
  //@ts-ignore
  screenshot.style.msUserSelect = 'none';
  //@ts-ignore
  screenshot.style.oUserSelect = 'none';
  //@ts-ignore
  screenshot.style.userSelect = 'none';
  //@ts-ignore
  screenshot.dataset.scrollX = window.scrollX;
  //@ts-ignore
  screenshot.dataset.scrollY = window.scrollY;
  //@ts-ignore
  var blob = new Blob([screenshot.outerHTML], {
    type: 'text/html'
  });
  return blob;
}

function generate() {
  window.URL = window.URL || window.webkitURL;
  window.open(window.URL
    .createObjectURL(takeScreenshot()));
}

