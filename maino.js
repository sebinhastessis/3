function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ETFEdeebn/model.json", h)
}
    function h(){
console.log("a");
classifier.classify(w);
    }
function w(error,result){
 if(error){
console.log(error);
 }
    else{
        console.log(result);
        document.getElementById("result_label").innerHTML=result[0].label;
        document.getElementById("result_confidence").innerHTML=result[0].confidence;
    }
}