let playingCard = {
    playTable : [],
    drawedCard : [],
    values : ['2','3','4','5','6','7','8','9','10','K','Q','A','J'],
    suits : ['hearts','diamond','spades','clubs'],
    arrangCard(){
        const{values,suits}=this
       for (let value of values) {
        for(let suit of suits){
            this.playTable.push({
                value,
                suit
            })
        }
        
       }
    },
    shuffle() {
        const {playTable} = this
        for (let i = playTable.length -1; i > 0; i--) {
            let j = Math.floor(Math.random()*(i + 1))
            [playTable[i], playTable[j]] = [playTable[j],playTable[i]]
        }
        
       
        

    },
    playcard(){
        let card = this.playTable.pop()
        this.drawedCard.push(card)
        return card
    },
    mutipleCard(numsOfCard){
        let cards = []
        for (let index = 0; index <numsOfCard; index++) {
            cards.push(this.playcard())
            
        }
        return cards

    }

     
}
function initiate(){
   let  values = ['2','3','4','5','6','7','8','9','10','K','Q','A','J']
   let suits = ['hearts','diamond','spades','clubs']
   let deck = []
   for (let value of values) {
    for(let suit of suits){
        deck.push({
            value,
            suit
        })
    }
    
   }
   return deck
}
function PlayCard(){
    let card = []
    card.push(initiate().pop())
    return card
}
