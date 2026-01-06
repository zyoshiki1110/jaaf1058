function calcBMI710() {var h_cm = document.getElementById('height_cm710').value;
                    var w_kg = document.getElementById('weight_kg710').value;
                    var h_m = Number(h_cm) / 100;
                    var weight = Number(w_kg);
                    var bmi = weight / (h_m * h_m);
                    var resultText = "あなたのBMIは " + bmi.toFixed(2) + " です。";
                    var hantei = "";
if (bmi < 18.5) {hantei = "判定：低体重";} else {if (bmi < 25) {hantei = "判定：普通";} else {hantei = "判定：肥満";}}
document.getElementById('result710').innerText = resultText + "\n" + hantei;}
