let screen = document.getElementById('screen');
let screenValue = '';
let buttons = document.querySelectorAll('button');
for(let item of buttons)
{
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if(buttonText == 'X')
        {
            screenValue += '*';
            screen.value = screenValue;
        }
        else if(buttonText == 'C')
        {
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '=')
        {
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}