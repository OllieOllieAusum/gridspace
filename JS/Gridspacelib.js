const canvasid = "canvas"
const gridsize = "248"
const canvas = document.getElementById(canvasid);
const ctx = canvas.getContext("2d");
var pixelsize = canvas.height / gridsize
function fillpixel(x,y,col) {
	let backcolor = ctx.fillStyle
	ctx.fillStyle = col
	ctx.fillRect(pixelsize*x, pixelsize*y, pixelsize, pixelsize);
	ctx.fillStyle = backcolor
	
}
function fillarea(startx,starty,endx,endy,col){
	let backcolor = ctx.fillStyle
	ctx.fillStyle = col
	ctx.fillRect(pixelsize*startx, pixelsize*starty, pixelsize*endx, pixelsize*endy);
	ctx.fillStyle = backcolor
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
//for (let i = 0; i < gridsize; i++) {
//	fillarea(i,i,i,i,rgbToHex(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)))
//}
for (let i = 0; i < gridsize; i++) {

	setTimeout(function () {   
    fillarea(i*2,i*2,i*2,i*2,rgbToHex(2*i,Math.round(i/2),2*i))
	fillarea(i*3,i*2,i*3,i*2,rgbToHex(2*i,Math.round(i/2),2*i))
	fillarea(i*4,i*2,i*4,i*2,rgbToHex(2*i,Math.round(i/2),2*i))
	fillarea(i*1,i*2,i*1,i*2,rgbToHex(2*i,Math.round(i/2),2*i))
     }, i*25)

}