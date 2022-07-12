import { Component } from "@angular/core";
import { Card } from './../../utilities/card';

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
    cards : Card[];
    numOfCards : number = 12;
    numFlipped : number = 0;
    
    constructor(){
        this.cards = Array<Card>(this.numOfCards);
        for (let i = 0; i < this.numOfCards; i += 2){
            for (let twice = 0; twice < 2; twice++){
                let randIdx = Math.floor(Math.random() * this.numOfCards);

                while(this.cards[randIdx] !== undefined){
                    randIdx = (randIdx + 1) % this.numOfCards;
                }

                this.cards[randIdx] = new Card(randIdx, this.images[i/2]);
            }
        }
    }

    onFlip(e : number){
        if (!this.cards[e].isFlipped && this.numFlipped < 2){
            this.cards[e].Flip();
            if (++this.numFlipped == 2){
                setTimeout (() => {
                    this.numFlipped = 0;
                    this.cards.forEach(element => {
                    if (element.isFlipped) element.Flip();
                });
                }, 1000);
            }
        }
    }
}