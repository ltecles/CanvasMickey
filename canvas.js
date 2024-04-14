let elemento=document.getElementById("lienzo");
let lienzo=elemento.getContext('2d');
lienzo.beginPath();

/*Marco*/
lienzo.arc(100, 100, 100, Math.PI, 1.5*Math.PI);
lienzo.arc(400, 100, 100, 1.5*Math.PI, 0);
lienzo.arc(400, 400, 100, 0, 0.5*Math.PI);
lienzo.arc(100, 400, 100, 0.5*Math.PI, Math.PI);

/*lienzo.lineTo(450,0);*/
lienzo.fillStyle="#F7F7F7"
lienzo.fill();
lienzo.beginPath();

/*Orejas*/
lienzo.ellipse(100, 100, 85, 95, 10, 0, 2 * Math.PI);
lienzo.fillStyle="black"
lienzo.fill();

lienzo.ellipse(400, 100, 85, 95, -10, 0, 2 * Math.PI);
lienzo.fillStyle="black"
lienzo.fill();

/*Cabeza*/
lienzo.beginPath();
lienzo.arc(250, 250, 150, 0.8*Math.PI, 0.2*Math.PI);
lienzo.fill();


/*Cara*/
let xoff=15,yoff=-20;

lienzo.beginPath();
lienzo.moveTo(234 + xoff, 183 + yoff);
lienzo.bezierCurveTo(205 + xoff, 92 + yoff, 95 + xoff, 204 + yoff, 142 + xoff, 311 + yoff);
lienzo.bezierCurveTo(10 + xoff, 316 + yoff, 142 + xoff, 455 + yoff, 186 + xoff, 433 + yoff);
lienzo.bezierCurveTo(210 + xoff, 475 + yoff, 271 + xoff, 467 + yoff, 294 + xoff, 431 + yoff);
lienzo.bezierCurveTo(457 + xoff, 373 + yoff, 366 + xoff, 280 + yoff, 318 + xoff, 311 + yoff);
lienzo.bezierCurveTo(391 + xoff, 234 + yoff, 262 + xoff, 72 + yoff, 234 + xoff, 184 + yoff);
lienzo.strokeStyle="#FDE3CA";
lienzo.strokeStyle="black"
lienzo.lineWidth=5;
lienzo.stroke();
/*lienzo.ellipse(220, 220, 70, 100, 0, 0.75 * Math.PI, 1.6 * Math.PI);
lienzo.ellipse(205, 220, 50, 95, 0, 1.6 * Math.PI, 1.8 * Math.PI);
lienzo.ellipse(300, 220, 50, 95, 0, 1.2 * Math.PI, 1.5 * Math.PI);
/*lienzo.ellipse(300, 220, 60, 90, 0, 1.5 * Math.PI, 1.8 * Math.PI);*/
lienzo.fillStyle="#FDE3CA";
lienzo.fill();
/*
lienzo.ellipse(300, 220, 65, 90, 0, 0, 2 * Math.PI);
lienzo.fillStyle="#FDE3CA";
lienzo.fill();
*/
lienzo.beginPath();

lienzo.fillStyle="white";
lienzo.ellipse(226, 235, 15, 45, 0, 0, 2 * Math.PI);
lienzo.fill();
lienzo.strokeStyle="black"
lienzo.lineWidth=3;
lienzo.stroke();

lienzo.beginPath();
lienzo.ellipse(273, 235, 15, 45, 0, 0, 2 * Math.PI);
lienzo.fill();
lienzo.strokeStyle="black"
lienzo.lineWidth=3;
lienzo.stroke();

/*Pupilas*/
lienzo.beginPath();
lienzo.ellipse(228, 258, 8, 20, 0, 0, 2 * Math.PI);
lienzo.fillStyle="black";
lienzo.lineWidth=3;
lienzo.stroke();
lienzo.fill();

lienzo.ellipse(271, 258, 8, 20, 0, 0, 2 * Math.PI);
lienzo.fill();

lienzo.beginPath();
lienzo.arc(250, 326, 50, 1.29*Math.PI, 1.73*Math.PI);
lienzo.lineWidth=3;
lienzo.stroke();

/*Nariz*/
lienzo.beginPath();
lienzo.ellipse(250, 302, 30, 17, 0, 0, 2 * Math.PI);
lienzo.fillStyle="black";
lienzo.fill();

/*Boca*/
lienzo.beginPath();
lienzo.ellipse(250, 250, 126, 120, 0, 0.21 * Math.PI, 0.79*Math.PI);
lienzo.lineWidth=3;
lienzo.stroke();
lienzo.beginPath();
lienzo.beginPath();
/*lienzo.moveTo(167 + xoff, 373 + yoff);
lienzo.bezierCurveTo(218 + xoff, 486 + yoff, 270 + xoff, 474 + yoff, 309 + xoff, 366 + yoff);*/
lienzo.moveTo(168 + xoff, 373 + yoff);
lienzo.bezierCurveTo(219 + xoff, 486 + yoff, 271 + xoff, 475 + yoff, 310 + xoff, 367 + yoff);
lienzo.bezierCurveTo(301 + xoff, 388 + yoff, 203 + xoff, 400 + yoff, 168 + xoff, 373 + yoff);
lienzo.stroke();
lienzo.fillStyle="#b81c1c";
lienzo.fill();

/*Lengua*/
lienzo.beginPath();
lienzo.moveTo(202 + xoff, 429 + yoff);
lienzo.bezierCurveTo(186 + xoff, 432 + yoff, 237 + xoff, 408 + yoff, 249 + xoff, 422 + yoff);
lienzo.bezierCurveTo(234 + xoff, 423 + yoff, 289 + xoff, 401 + yoff, 286 + xoff, 419 + yoff);
lienzo.bezierCurveTo(277 + xoff, 428 + yoff, 251 + xoff, 484 + yoff, 202 + xoff, 429 + yoff);
lienzo.stroke();
lienzo.fillStyle="#fc9a8b";
lienzo.fill();
lienzo.lineWidth=2;
lienzo.stroke();
lienzo.beginPath();
lienzo.ellipse(150, 340, 25, 17, 75.1, 1.3*Math.PI, 1.75 * Math.PI);
lienzo.lineWidth=3
lienzo.stroke();
lienzo.beginPath();
lienzo.ellipse(350, 340, 25, 17, 44.3, 1.25*Math.PI, 1.70 * Math.PI);
lienzo.lineWidth=3;
lienzo.stroke();

/*lienzo.moveTo(0,0);
lienzo.lineTo(450,0)*/