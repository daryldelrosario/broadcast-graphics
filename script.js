const goldBar = document.querySelector(".gold-bar");
const blackBar = document.querySelector(".black-bar");
const bottomBar = document.querySelector(".bottom-bar");
const textLayer = document.querySelector(".main-bar-text");
const bottomBarText = document.querySelector(".bottom-bar .bottom-bar-text");

// ON LOAD: adjust bar width
window.onload = () => adjustBarWidth();

// ADJUST bar widths to fit text
function adjustBarWidth() {
  // Get width of main text and bottom text
  const textLayerWidth = textLayer.offsetWidth;
  const bottomBarTextWidth = bottomBarText.offsetWidth;

  // Add margin left from main text 
  const textLayerStyle = window.getComputedStyle(textLayer);
  const marginLeft = parseFloat(textLayerStyle.getPropertyValue('margin-left'));

  // Use the width of main or bottom text layer, whichever is larger
  const barWidth = Math.max(textLayerWidth, bottomBarTextWidth) + marginLeft; 

  // Set widths of bars 
  blackBar.style.width = barWidth + "px";
  bottomBar.style.width = `${barWidth + 8}px`;
  goldBar.style.width = (barWidth + 15) + "px";
}
