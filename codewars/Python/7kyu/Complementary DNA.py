def DNA_strand(dna):
    dna_str = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }
    return ''.join([dna_str[s] for s in dna])