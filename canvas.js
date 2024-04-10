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


/*Ojos*/
lienzo.beginPath();

lienzo.ellipse(200, 220, 65, 90, 0, 0, 2 * Math.PI);
lienzo.fillStyle="#FDE3CA";
lienzo.fill();

lienzo.fillStyle="#FDE3CA";
lienzo.ellipse(300, 220, 65, 90, 0, 0, 2 * Math.PI);
lienzo.fill();

lienzo.beginPath();

lienzo.fillStyle="white";
lienzo.ellipse(225, 235, 20, 40, 0, 0, 2 * Math.PI);
lienzo.fill();
lienzo.lineWidth=3;
lienzo.stroke();

lienzo.beginPath();
lienzo.ellipse(280, 235, 20, 40, 0, 0, 2 * Math.PI);
lienzo.fill();
lienzo.lineWidth=3;
lienzo.stroke();
/*lienzo.moveTo(0,0);
lienzo.lineTo(450,0)*/