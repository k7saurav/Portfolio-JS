let input = document.getElementById('inputBox');
let btn = document.querySelectorAll('button');

let str = "";

btn.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case '=':
                // Handle percentage calculations and potentially other errors
                try {
                    str = str.replace(/%/g, "/100");
                    str = eval(str);
                } catch (error) {
                    str = "Error";
                }
                break;
            case 'AC':
                str = "";
                break;
            case 'DEL':
                str = str.slice(0, -1);
                break;
            default:
                str += e.target.innerHTML;
        }
        input.value = str;
    });
});

// Using 'eval()' can introduce security vulnerabilities.