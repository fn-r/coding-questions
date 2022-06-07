function defineSuit(card) {
    suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
    }
    for (suit in suits) {
        if (card.includes(suit)) return suits[suit]
    }
}