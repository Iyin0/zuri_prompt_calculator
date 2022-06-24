let retry = 1

while (retry === 1) {
    let first_num = window.prompt("Enter your first number");
    let op = window.prompt("'+', '-', '/' or ");
    let second_num = window.prompt("Enter your second number");

    let first = parseFloat(first_num);
    let second = parseFloat(second_num);

    if (op === '+') {
        window.alert(first + second)
    }
    else if (op === '-') {
        window.alert(first - second)
    }
    else if (op === '*') {
        window.alert(first * second)
    }
    else if (op === '/') {
        window.alert(first / second)
    }

    else {
        window.alert("Cannot perform such operation...yet!")
    }

    if (window.confirm("Will you like to use the calculator again?")) {
        retry = 1;
    }
    else {
        retry = 0;
    }

}