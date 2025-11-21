/* ==== WHALE TALK ====

Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/


let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
let resultString ='';

for(let vowelsInput of input ) {
  for(const vowel of vowels) {
    if(vowel === vowelsInput) {
      resultArray.push(vowel);
      if(vowel === 'e') {
        resultArray.push(vowel);
      } else if(vowel === 'u') {
        resultArray.push(vowel);
      }
    }
  }
}

resultString = resultArray.join('').toUpperCase();
console.log(resultArray);


/* CONCLUSIONES:
* Se utilizan dos ciclos for; uno que itera en toda la palabra(input) y el otro sobre cada vocal de referencia(vowels).
* Luego se compara en cada elemento iterado, si la letra está en la lista de vocales. Si está la agrega a un arreglo vacio (resultArray).
* Adicionalmente si hay una vocal 'e' o 'u', se agrega adicionalmente.
* Finalmente se crea una variable que una las vocales y las coloque uppercase.
*/