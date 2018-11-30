$(document).ready(function() {

    var canvas = document.getElementById("myCanvas");
    var ctxt = canvas.getContext('2d');


    $("#button_draw_triangle").click(function() {
        ctxt.fillStyle   = '#f00'; //Color when filled
        ctxt.strokeStyle = '#000'; //Color when stroke
        ctxt.lineWidth   = 3; //width of the lines
        ctxt.beginPath(); //Method to start drawing in the canvas
        ctxt.moveTo(60, 240); //Starting point
        ctxt.lineTo(240, 240); //add lines
        ctxt.lineTo(150, 60); //add lines
        ctxt.closePath(); //Completes the path to the starting point
        ctxt.fill(); //Fill the object with the color
        ctxt.stroke(); //Drawing the outline

    });

    $("#button_draw_rotated_triangle").click(function() {
        ctxt.fillStyle   = '#f00';
        ctxt.strokeStyle = '#000';
        ctxt.lineWidth   = 3;
        ctxt.save(); //Saving the context so every context will be the same
        ctxt.translate(canvas.width / 2, canvas.height / 2); //Setting the coordenate X and Y to the center of the canvas
        ctxt.rotate(Math.PI / 4); //Rotating the context, in html to rotate a object we need to rotate the canvas
        ctxt.beginPath();
        ctxt.moveTo(-90, 90);
        ctxt.lineTo(90, 90);
        ctxt.lineTo(0, -90);
        ctxt.closePath();
        ctxt.fill();
        ctxt.stroke();
        ctxt.restore(); //Restoring the context
    });

    $("#button_clear_canvas").click(function() {
        ctxt.clearRect(0, 0, canvas.width, canvas.height) //Clearing the canvas

    });
});