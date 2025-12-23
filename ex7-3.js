function calcBMI() {var h = Number(document.getElementById('height_cm').value) / 100;
                    var w = Number(document.getElementById('weight_kg').value);
                    var bmi = w / (h * h);
                    document.getElementById('result').innerText = "あなたのBMIは" + bmi.toFixed(2) + "です";}
