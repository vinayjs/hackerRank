// Input Format

// There is one line of input with the string .

// Output Format

// First, print each vowel in  on a new line (in the same order as they appeared in ). 
// Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).


const vowelsAndConsonants = (s) =>  {
    let output = []
    let vowelCharc = []
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let y = s.split('')
    // console.log(y)
    for (let i = 0; i < y.length; i++){
      if (vowels.includes(y[i])){
        vowelCharc.push(y[i])
      }
      else output.push(y[i])
    //   console.log(output)
    }
    for(let j = 0; j < output.length; j++){
        vowelCharc.push(output[j])
    }
    for(let z = 0; z < vowelCharc.length; z++){
        console.log(vowelCharc[z])
    }

}

console.log(vowelsAndConsonants('bcqaei'))