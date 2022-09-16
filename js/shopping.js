document.getElementById('iphone-plus-btn').addEventListener('click', function(){

    const phoneNumInputValue = document.getElementById('phone-num-input');
    const phoneNumInput = phoneNumInputValue.value;
    const phoneNumNewInput = parseInt(phoneNumInput) + 1;
    if (phoneNumNewInput > 0){
        document.getElementById('phone-num-input').value = phoneNumNewInput;
        document.getElementById('phone-price').innerText = phoneNumNewInput * 1219;
        const subTotalValue = document.getElementById('sub-total').innerText;
        subTotal = parseInt(subTotalValue);
        document.getElementById('sub-total').innerText = subTotal + 1219;
        const newSubTotal = subTotal + 1219;
        document.getElementById('tax').innerText = newSubTotal / 10;
        const newTax = newSubTotal / 10;
        document.getElementById('total').innerText = newSubTotal + newTax;
    }
    

})
document.getElementById('iphone-minus-btn').addEventListener('click', function(){

    const phoneNumInputValue = document.getElementById('phone-num-input');
    const phoneNumInput = phoneNumInputValue.value;
    const phoneNumNewInput = parseInt(phoneNumInput) - 1;
    if (phoneNumNewInput > 0){
        document.getElementById('phone-num-input').value = phoneNumNewInput;
        const phonePrice = document.getElementById('phone-price').innerText;
        document.getElementById('phone-price').innerText = phonePrice - 1219;
        const subTotalValue = document.getElementById('sub-total').innerText;
        subTotal = parseInt(subTotalValue);
        document.getElementById('sub-total').innerText = subTotal - 1219;
        const newSubTotal = subTotal - 1219;
        document.getElementById('tax').innerText = newSubTotal / 10;
        const newTax = newSubTotal / 10;
        document.getElementById('total').innerText = newSubTotal + newTax;
    }
    

})
document.getElementById('case-plus-btn').addEventListener('click', function(){

    const caseNumInputValue = document.getElementById('case-num-input');
    const caseNumInput = caseNumInputValue.value;
    const caseNumNewInput = parseInt(caseNumInput) + 1;
    if (caseNumNewInput > 0){
        document.getElementById('case-num-input').value = caseNumNewInput;
        document.getElementById('case-price').innerText = caseNumNewInput * 59;
        const subTotalValue = document.getElementById('sub-total').innerText;
        subTotal = parseInt(subTotalValue);
        document.getElementById('sub-total').innerText = subTotal + 59;
        const newSubTotal = subTotal + 59;
        document.getElementById('tax').innerText = newSubTotal / 10;
        const newTax = newSubTotal / 10;
        document.getElementById('total').innerText = newSubTotal + newTax;
    }
    

})
document.getElementById('case-minus-btn').addEventListener('click', function(){

    const caseNumInputValue = document.getElementById('case-num-input');
    const caseNumInput = caseNumInputValue.value;
    const caseNumNewInput = parseInt(caseNumInput) - 1;
    if (caseNumNewInput > 0){
        document.getElementById('case-num-input').value = caseNumNewInput;
        const casePrice = document.getElementById('case-price').innerText;
        document.getElementById('case-price').innerText = casePrice - 59;
        const subTotalValue = document.getElementById('sub-total').innerText;
        subTotal = parseInt(subTotalValue);
        document.getElementById('sub-total').innerText = subTotal - 59;
        const newSubTotal = subTotal - 59;
        document.getElementById('tax').innerText = newSubTotal / 10;
        const newTax = newSubTotal / 10;
        document.getElementById('total').innerText = newSubTotal + newTax;
    }
    

})
