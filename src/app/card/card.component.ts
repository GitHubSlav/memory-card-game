import { Component, Input, Output, EventEmitter } from "@angular/core";
import { flipAnimation } from './card.animations';

@Component ({
    selector : "card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"],
    animations: [flipAnimation]
})

export class CardComponent {
    @Input() backImage : string;
    @Input() cardNumber : number;
    @Input() isFlipped : boolean;
    @Input() isMatched : boolean;
    
    @Output() onFlip = new EventEmitter<number>();

    Flip(){
        this.onFlip.emit(this.cardNumber);
    }
}