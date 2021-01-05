const deleteDigits = function() {
    document.getElementById('input').value = '';
    document.getElementById("result").value = '';
}

const backspaceDigit = function() {
    const inputText = document.getElementById('input').value;
    const resultText = document.getElementById("result").value;
    document.getElementById("input").value = inputText.substring(0, inputText.length - 1);
    document.getElementById("result").value = resultText.substring(0, resultText.length - 1);  
}

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
        if(romanDigit === 'I') {
            document.getElementById('input').value += 'I';
            
        }

        if(romanDigit === 'V') {
           document.getElementById('input').value += 'V';
        }

        if(romanDigit === 'X') {
            document.getElementById('input').value += 'X';
        }
        

        if(romanDigit === 'L') {
            document.getElementById('input').value += 'L';
        }
    });
}

   
document.querySelector('.I').addEventListener('click', function(e) {
    toRoman();
});

document.querySelector('.V').addEventListener('click', function(e) {
    toRoman();
});

document.querySelector('.X').addEventListener('click', function(e) {
    toRoman();
});

document.querySelector('.L').addEventListener('click', function(e) {
    toRoman();
});



