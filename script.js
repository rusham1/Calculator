
const numberToCal = document.getElementById('display1');

function appendToDisplay(input) {
    if (numberToCal.value ==='Error') {
        numberToCal.value ='';
    }
    numberToCal.value += input;
}

function clearDisplay() {
    numberToCal.value = '';
}

function calculate() {
    try {
        const result = eval(numberToCal.value);

        if (!Number.isFinite(result)) {
            numberToCal.value = 'Error';
            return;
        }

        numberToCal.value = result.toFixed(6);
    }
    catch (error) {
        numberToCal.value = 'Error';
    }
}
