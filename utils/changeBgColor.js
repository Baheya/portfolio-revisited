const changeBgColor = (color1, color2) => {
  let tStart = 100; // Start transition 100px from top
  let tEnd = 700; // End at 500px
  let cStart = color1; // Gold
  let cEnd = color2; // Lime
  let cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[2] - cStart[2]];

  var p = (window.scrollY - tStart) / (tEnd - tStart); // % of transition
  p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
  var cBg = [
    Math.round(cStart[0] + cDiff[0] * p),
    Math.round(cStart[1] + cDiff[1] * p),
    Math.round(cStart[2] + cDiff[2] * p),
  ];
  return cBg;
};

export { changeBgColor };
