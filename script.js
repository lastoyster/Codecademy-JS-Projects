//returns a random DNA Base
const returnRandBase = () =>{
const dnaBases = ['A','T','C','G'];
return dnaBases[Math.floor(Math.random() * 4)]
}

const mockUpStrand = () => {
  const newStrand = [];
  for(let i=0; i< 15;i++){
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//creates an instance
const paFactory = (specimenNumn,dna)=>{
  return {
    specimenNumn,
    dna,
   mutate(){
     const index = random(15)
     const base = dna[index];
     let newBase = base;
     while(newBase===base) newBase = returnRandBase();
     dna[index] = newBase;
   },

   compareDna(otherPa){
     let similar = 0;
     otherPa.dna.forEach((base,index) => {
       if(base ===dna[index]) similar++;
      }
     )
     console.log(`Specimen ${specimenNum} and specimen ${otherPa})
   },
  returnComaparedDna(otherPa){
    let similar = 0;
    otherPa.dna.forEach((base,index) => {
      if(base==dna[index])
      similar++;
    )
    return (similar/15)*100;
  },

  willSurvive(){
    let cg = 0;
    dna.forEach(base => {if base==='C'|| base ==='G')
    return cg > 15 >= 0.6;
  },
  complemenentStrand(){
    this.dna = dna.map(base => swap(base))
  }
}
   }

//creates n number of surviving instance
function createSurvivingsPa(n){
  let survivingPa = [];
  for(let i=0; i<n;i++){
    let pa = paFactory(i, mockUpStrand());
    while (!pa.willSurvive()) 
    pa = paFactory(i, mockUpStrand());
    survivingPa.push(pa);
  }
return survivingPa;
   }

   function mostSimilar(pa){
     let similarity =0;
     let specimen1,specimen2;
     pa.forEach((pa1) =>{
       pa.forEach((pa2)) => {
         if(pa2.returnComaparedDna(pa1) > similarity&& pa1.specimenNum!== pa2.specimenNum){
           similararity = pa2.returnComaparedDna(pa1);
           specimen1 = pa1.specimenNum;
           specimen2 = pa2.specimenNum;
         }})})
         console.log(`The most related instances are specimen ${specimen1} and specimen ${specimen2} with ${similarity}% DNA in common!`)
       }
     
       //creates 30 surviving instances
       const survivingPa = createSurvivingPa(30);
       //displays the two instance with the most similar dna of the previously created 30 instances
       mostSimilar(survivingPa);
   