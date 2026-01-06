function calcBMI() {var h_cm = document.getElementById('height_cm').value;
                    var w_kg = document.getElementById('weight_kg').value;
                    var h_m = Number(h_cm) / 100;
                    var weight = Number(w_kg);
                    var bmi = weight / (h_m * h_m);
                    var resultText = "あなたのBMIは " + bmi.toFixed(2) + " です。";
                    var hantei = "";
if (bmi < 18.5) {hantei = "判定：低体重";} else {if (bmi < 25) {hantei = "判定：普通";} else {hantei = "判定：肥満";}}
document.getElementById('result').innerText = resultText + "\n" + hantei;}
