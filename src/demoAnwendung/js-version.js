function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

function fibNumbers(from, to) {
    const numbers = [];
    for (let i = from; i <= to; i++) {
        numbers.push(fib(i));
    }
    return numbers;
}

module.exports = () => {
    const txtFrom = document.getElementById('txtFrom');
    const txtTo = document.getElementById('txtTo');
    const btnCalculate = document.getElementById('btnCalculate');
    const resultBox = document.getElementById('resultBox');
    const infoBox = document.getElementById('infoBox');

    btnCalculate.addEventListener('click', () => {
        const start = new Date().getTime();
        const from = parseInt(txtFrom.value);
        const to = parseInt(txtTo.value);
        const numbers = fibNumbers(from, to);

        resultBox.textContent = '';
        const table = document.createElement('table');
        table.classList.add('table');
        resultBox.appendChild(table);
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        for (let i = 0; i < numbers.length; i++) {
            const row = document.createElement('tr');
            const titleCol = document.createElement('td');
            const valueCol = document.createElement('td');

            titleCol.innerText = 'fib(' + (i + from) + ')';
            valueCol.innerText = numbers[i].toString();

            row.appendChild(titleCol);
            row.appendChild(valueCol);
            tbody.appendChild(row);
        }
        const end = new Date().getTime();

        infoBox.classList.remove('invisible');
        infoBox.innerText = 'Generated Fibonacci ... in JavaScript! ...';
    });
};