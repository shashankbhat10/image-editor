// Adding User Image from Url Provided
$("#url-form").on("submit", function(e){
    var url = $(".url-box").val();
    $("#image").attr("src", url);
    e.preventDefault();
});


// Changing image properties using Css filters

function editImage(){
    var brightness = $("#brightness").val();
    var hue = $("#hue").val();
    var sepia = $("#sepia").val();
    var saturation = $("#saturation").val();
    var invert = $("#invert").val();
    var opacity = $("#opacity").val();
    var greyscale = $("#greyscale").val();
    var contrast = $("#contrast").val();

    $("#image").css("filter", "brightness(" + brightness + "%) hue-rotate(" + hue + "deg) sepia(" + sepia + "%) saturate(" + saturation + "%) invert(" + invert + "%) opacity(" + opacity + "%) grayscale(" + greyscale + "%) contrast(" + contrast + "%)");

    $("#image").css("-webkit-filter", "brightness(" + brightness + "%) hue-rotate(" + hue + "deg) sepia(" + sepia + "%) saturate(" + saturation + "%) invert(" + invert + "%) opacity(" + opacity + "%) grayscale(" + greyscale + "%) contrast(" + contrast + "%)");

    $("#br").text("Brightness: " + brightness);
    $("#hu").text("Hue: " + hue);
    $("#se").text("Sepia: " + sepia);
    $("#sa").text("Saturation: " + saturation);
    $("#in").text("Invert: " + invert);
    $("#op").text("Opacity: " + opacity);
    $("#gr").text("Grayscale: " + greyscale);
    $("#co").text("Contrast: " + contrast);

}


$("input[type=range]").change(editImage).mousemove(editImage);


$(".reset-button").on("click", function(){
    $("#brightness").val(100);
    $("#hue").val(0);
    $("#sepia").val(0);
    $("#saturation").val(100);
    $("#invert").val(0);
    $("#opacity").val(100);
    $("#contrast").val(100);

    $("#greyscale").val(0);

    setTimeout(function() {
		editImage();
	},0);
})
