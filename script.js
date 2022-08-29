
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