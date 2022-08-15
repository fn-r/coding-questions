function DNAStrand(dna){
  const comp_dna = {
    A: "T",
    C: "G",
    G: "C",
    T: "A"
  }
  
  return dna.split('').map(letter => comp_dna[letter]).join('')
}