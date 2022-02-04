
prediction_1="victory";
prediction_2="rock";
prediction_3="thumb up";
prediction_4="thumb down";
prediction_5="good";

Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='capture_img' src='"+data_uri+"'/>";
    });
}
console.log("ml5 version:",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ceGfYDo7P/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
    speak();
}

function speak(){
    var synth=window.speechSynthesis;
speak_data_1="The prediction is "+prediction_1;
speak_data_2="The prediction is "+prediction_2;
speak_data_3="The prediction is "+prediction_3;
speak_data_4="The prediction is "+prediction_4;
speak_data_5="The prediction is "+prediction_5;
var utterthis=new SpeechSynthesisUtterance(speak_data_1,speak_data_2,speak_data_3,speak_data_4,speak_data_5);
synth.speak(utterthis);
}




