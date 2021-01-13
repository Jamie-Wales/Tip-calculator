///value in how much was your meal
const meal = document.getElementById('amount');
const btn = document.getElementById('calculate')
const el = document.createElement('div');
const radioYes = document.getElementById('generous-yes');
const select = document.getElementById('service');
const title = document.getElementById('tip-amount');
//selects



btn.addEventListener('click', () => {
    const amount = meal.value;
    const value = select.value;  
    const tip = getTipAmount(amount, value, radioYes);
    el.innerHTML = `Total tip = £${tip}`;
    btn.appendChild(el);
    clearInput(meal);
    
    
})


function getTipAmount(amount, value, radioYes) {
    let sum = 0;
    sum = amount;
    sum = (sum/100) * value; 
    if (radioYes.checked) {
        sum *= 2;
        
    }
    sum = Math.round(sum);
    return sum;
}

function clearInput(input) {
    input.value = "";
}