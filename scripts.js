const calculate = document.getElementById('calculate');

function bmi () {

    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== '') {
        const bmiValue = (weight / (height * height)).toFixed(1);

        let category = '';        
        if (bmiValue < 18.5) {
            category = 'underweight. Stay safe, eat cake.';
        } else if (bmiValue < 25) {
            category = 'at your ideal weight. Congratulations!';
        } else if (bmiValue < 30) {
            category = 'overweight. Diet and cardio exercises are good options.';
        } else if (bmiValue < 35) {
            category = 'obese class I. Go see a nutricionist.';
        } else if (bmiValue < 40) {
            category = 'obese class II. Watch out.';
        } else {
            category = 'obese class III. This is not good for your health.';
        }

        result.textContent = `${name}, your BMI is ${bmiValue} kg/m² and you are ${category}`;

    } else {
        result.textContent = 'Fill in all fields, please!';
    }
}

calculate.addEventListener('click', bmi);