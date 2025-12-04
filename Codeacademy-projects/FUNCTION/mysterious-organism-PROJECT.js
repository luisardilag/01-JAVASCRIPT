// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, arr) => {
  return {
    specimenNum: number,
    dna: arr,
    mutate() {
      // 1. Elegimos una posición al azar en el arreglo de ADN (0 al 14)
      const randIndex = Math.floor(Math.random() * this.dna.length);

      // 2. Guardamos la base actual para comparar
      let currentBase = this.dna[randIndex];
      let newBase = returnRandBase();
      
      // 3. Mientras la nueva base sea IGUAL a la actual, pedimos otra
      // Esto asegura que 'A' no cambie por 'A', sino por 'T', 'C', o 'G'
      while(newBase === currentBase) {
        newBase = returnRandBase();
      }
      
      // 4. Aplicamos el cambio al arreglo original del objeto
      this.dna[randIndex] = newBase;
      
      return this.dna;
    },
    compareDNA(otherOrg) {
      let matches = 0;
      
      for(let i = 0; i <= this.dna.length; i++){
        if(this.dna[i] === otherOrg.dna[i]) {
          matches++;
        }
      }
      
      const percentage = ((matches / this.dna.length) * 100).toFixed(2);
      const msj = `specimen #1 and specimen #2 have ${percentage}% DNA in common`;
      console.log(msj);
      
      return percentage;
    },
    willLikelySurvive(){
      let cgCount = 0;
      
      for(let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === 'C' || this.dna[i] === 'G') {
          cgCount++;
        }
        
        //calculamos la proporción
        const survivalRatio = cgCount / this.dna.length;
        
        return survivalRatio >= 0.6;
        
      }
    }
  };
};

// PRUEBA
const org1 = pAequorFactory(1, mockUpStrand());
const org2 = pAequorFactory(1, mockUpStrand());

console.log("ADN Original: ", org1.dna);
console.log("ADN Mutado:   ", org1.mutate());

console.log(org2.compareDNA(org1))

// Creamos un organismo al azar
const orgTest = pAequorFactory(3, mockUpStrand());

console.log(`ADN del Espécimen 3: ${orgTest.dna.join(', ')}`);
console.log(`Probabilidad de supervivencia (>=60% 'C' o 'G'): ${orgTest.willLikelySurvive()}`);
// >> Esto retornará true o false de forma aleatoria

// --- Prueba con cadena controlada (debe ser TRUE) ---
const safeDNA = ['C', 'G', 'C', 'G', 'C', 'G', 'C', 'G', 'C', 'G', 'A', 'T', 'A', 'T', 'A']; // 10 CG / 15 = 66.6%
const orgSafe = pAequorFactory(4, safeDNA);
console.log(`\nADN de Control (4): ${orgSafe.dna.join(', ')}`);
console.log(`Probabilidad de supervivencia: ${orgSafe.willLikelySurvive()}`);
