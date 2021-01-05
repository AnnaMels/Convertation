const deleteDigits = function() {
    document.getElementById('input').value = '';
    document.getElementById("result").value = '';
}

  const x = document.querySelector('.backspace');
    x.addEventListener('click', (e) => {
    const inputText = document.getElementById('input').value;
    const resultText = document.getElementById("result").value;
    document.getElementById("input").value = inputText.substring(0, inputText.length - 1);
    toRoman();
  })
   

function toRoman() {
    let inputText = document.getElementById('input').value;
        const val = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
        let result = 0;
        const arabicDigits = inputText.toUpperCase().split('');
        arabicDigits.reduce(function (r, a, i, aa) {
            result = r + (val[a] < val[aa[i + 1]] ? -val[a] : val[a]);
            return result; 
        }, 0);
    document.getElementById("result").value = result; 
}

// //Handle roman number click
const romanNumberButtons = document.querySelectorAll('.roman-digit');
for(const romanNumberButton of romanNumberButtons) {
    romanNumberButton.addEventListener('click', (e) => {
        const romanDigit = e.originalTarget.innerText;
        document.getElementById('input').value += romanDigit;
        toRoman();
    });
}




