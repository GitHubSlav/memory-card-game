import { Component } from "@angular/core";

@Component ({
    selector : "memory-game",
    templateUrl : `./memoryGame.component.html`,
    styleUrls: ["./memoryGame.component.css"]
})

export class MemoryGameComponent {
    images : string[] = [
        "bi bi-alarm", 
        "bi bi-apple", 
        "bi bi-arrow-through-heart", 
        "bi bi-balloon", 
        "bi bi-bandaid",
        "bi bi-bank"
    ]
    cards : string[] = [];
    numOfCards : number = 12;
    
    constructor(){
        for (let i = 0; i < this.numOfCards; i += 2){
            this.cards.push(this.images[i/2]);
            this.cards.push(this.images[i/2]);
        }

        for (let i = 0; i < this.numOfCards * 2; i++){
            let idx_1 = Math.floor(Math.random() * this.numOfCards);
            let idx_2 = Math.floor(Math.random() * this.numOfCards);

            [this.cards[idx_1], this.cards[idx_2]] = [this.cards[idx_2], this.cards[idx_1]];
        }
    }
}