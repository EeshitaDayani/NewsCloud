// Cloud.js
export const HEADLINE_COUNT = 30;
export const WHEEL_RADIUS = 35;
export const COLOR_ARRAY = generateColorArray();
export const MOBILE_FONT = 1.5;
export const NON_MOBILE_FONT = 2.5;

function generateColorArray() {
  const colorArr = [];
  const redMultiplier = Math.floor(255/HEADLINE_COUNT);

  for (let index = 0; index < HEADLINE_COUNT; index++) {
    // Calculate the intensity of the red component based on the index
    const redIntensity = Math.min(255, index * redMultiplier);
    const rgbColor = `rgb(255, ${redIntensity}, 0)`;
    
    colorArr.push(rgbColor);
  }

  return colorArr;
}