function calcBMI() {var h_cm = document.getElementById('height_cm').value;
                    var w_kg = document.getElementById('weight_kg').value;
                    var h_m = Number(h_cm) / 100;
                    var weight = Number(w_kg);
                    var bmi = weight / (h_m * h_m);
                    document.getElementById('result').innerText = "あなたのBMIは" + bmi.toFixed(2) + "です";}
