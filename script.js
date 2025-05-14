let x = 0;
let y = 0;
 
function rotateCube() {
  x += 1;
  y += 1;
  document.getElementById('cube').style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  requestAnimationFrame(rotateCube);
}
 
rotateCube();
