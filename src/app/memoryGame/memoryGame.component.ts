import { Component } from "@angular/core";
import { Card } from './../../utilities/card';

@Component ({
    selector : "memory-game",
    templateUrl : `./memoryGame.component.html`,
    styleUrls: ["./memoryGame.component.css"]
})

export class MemoryGameComponent {
    private readonly images : string[] = [
        "bi bi-alarm", 
        "bi bi-apple", 
        "bi bi-arrow-through-heart", 
        "bi bi-balloon", 
        "bi bi-bandaid",
        "bi bi-bank"
    ]
    private _cards : Card[];
    private _isGameOver = false;
    private numOfCards : number = 12;
    private numFlipped : number = 0;
    private numMatched : number = 0;

    get cards(){
        return this._cards;
    }

    get isGameOver(){
        return this._isGameOver;
    }
    
    constructor(){
        this._cards = Array<Card>(this.numOfCards);
        for (let i = 0; i < this.numOfCards; i += 2){
            for (let twice = 0; twice < 2; twice++){
                let randIdx = Math.floor(Math.random() * this.numOfCards);

                while(this._cards[randIdx] !== undefined){
                    randIdx = (randIdx + 1) % this.numOfCards;
                }

                this._cards[randIdx] = new Card(randIdx, this.images[i/2]);
            }
        }
    }

    Restart(){
        this.numMatched = 0;
        this._isGameOver = false;
        for (let i = 0; i < this.numOfCards; i += 2){
            for (let twice = 0; twice < 2; twice++){
                let randIdx = Math.floor(Math.random() * this.numOfCards);
                while(!this._cards[randIdx].isMatched){
                    randIdx = (randIdx + 1) % this.numOfCards;
                }
                this._cards[randIdx] = new Card(randIdx, this.images[i/2]);
            }
        }
    }

    Match(){
        let flippedCards : Card[] = this._cards.filter(element => element.isFlipped);

        setTimeout (() => {
            this.numFlipped = 0;
            this._cards[flippedCards[0].num].Flip();
            this._cards[flippedCards[1].num].Flip();

            if (flippedCards[0].image === flippedCards[1].image){
                this.numMatched += 2;
                this._cards[flippedCards[0].num].Match();
                this._cards[flippedCards[1].num].Match();
                if (this.numMatched === this.numOfCards){
                    setTimeout (() => {this._isGameOver = true;}, 100);
                }
            }
        }, 1000);
    }

    onFlip(e : number){
        if (!this._cards[e].isFlipped && this.numFlipped < 2){
            this._cards[e].Flip();
            if (++this.numFlipped == 2){
                this.Match();
            }
        }
    }
}