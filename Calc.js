let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '⌫') {
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        }
        else if (buttonText == '1/x') {
            screenValue += buttonText.substring(0, buttonText.length - 1);
            screen.value = screenValue;
        }
        else if (buttonText == 'π') {
            screenValue += Math.PI.toFixed(2);
            screen.value = screenValue;
        }
        else if (buttonText == 'e') {
            screenValue += Math.E.toFixed(2);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}
