def dna_to_rna(dna):
    rna = {
        'G': 'G',
        'C': 'C',
        'A': 'A',
        'T': 'U',
    }
    return ''.join([rna[x] for x in dna])