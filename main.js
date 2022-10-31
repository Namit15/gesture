

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}

console.log("ml5 version - ",ml5.version);
Classifier=ml5.imageClassifier('https://storage.googleapis.com/tm-model/p2okdIRaw/model.json',modelLodded);

function modelLodded()
{
    console.log("Your model is lodded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data1 = "The first Prediction is"+prediction_1;
    speak_data2 = "The second Prediction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
     
      document.getElementById("result_emotion_name").innerHTML = results[0].label;
  
      gesture = results[0].label;
     
      toSpeak = "";
     
      if(gesture == "amazing")
      {
        toSpeak = "This is looking amazing";
        document.getElementById("resultEmoji").innerHTML = "&#128076;";
      }
      else if(gesture == "best")
      {
        toSpeak = "All the best";
        document.getElementById("resultEmoji").innerHTML = "&#128077;";
      }
      else if(gesture == "victory")
      {
        toSpeak = "That was the marvelous victory";
        document.getElementById("resultEmoji").innerHTML = "&#9996;";
      }
  
      speak();
    }
  }