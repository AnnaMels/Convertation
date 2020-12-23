const deleteDigits = function() {
    const a = document.getElementById('test').value = '';
}

function toRoman() {
    let a = document.getElementById('test').value;

        const val = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
        let result = 0;
        const arr = a.toUpperCase().split('');
        const x = arr.reduce(function (r, a, i, aa) {
            result = r + (val[a] < val[aa[i + 1]] ? -val[a] : val[a]);
            return result; 
        }, 0);
    
    document.getElementById("result").value = result; 
}

   
document.querySelector('.convert').addEventListener('click', function(e) {
    toRoman();
});

// //Handle roman number click
const romanNumberButtons = document.querySelectorAll('.roman-digit');
for(const romanNumberButton of romanNumberButtons) {
    romanNumberButton.addEventListener('click', (e) => {
        const romanDigit = e.originalTarget.innerText;
        if(romanDigit === 'I') {
            const a = document.getElementById('test').value += 'I';
        }

        if(romanDigit === 'V') {
            const a = document.getElementById('test').value += 'V';
        }

        if(romanDigit === 'X') {
            const a = document.getElementById('test').value += 'X';
        }
        

        if(romanDigit === 'L') {
            const a = document.getElementById('test').value += 'L';
        }

        if(romanDigit === 'Backspace') {
            const a = document.getElementById('test').value;
            const b = a.substring(0, a.length - 1)
            document.getElementById("test").value = b;
        }
    });
}


//   const toRoman = function() {
//       const romanNumber = document.getElementById('test').value;
//       const romanDigits = romanNumber.toUpperCase().split('');
//       const romanToArabic = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

//       let result = 0;

//       for(let i = 0; i < romanDigits.length; i++) {
//           const currentRomanDigit = romanDigits[i];

//           const currentArabicValue = romanToArabic[currentRomanDigit];

//           result += currentArabicValue;

//           //Correct result
//           if (i > 0) {
//               const previousRomanDigit = romanDigits[i - 1];
//               const previousArabicValue = romanToArabic[previousRomanDigit];

//               if (previousArabicValue < currentArabicValue) {
//                   result -= previousArabicValue * 2;
//               }
//           }
//       }

//       console.log(result);

//     }

