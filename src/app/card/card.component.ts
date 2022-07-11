import { Component, Input } from "@angular/core";
import { flipAnimation } from './card.animations';

@Component ({
    selector : "card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"],
    animations: [flipAnimation]
})

export class CardComponent {
    @Input() backImage : string;
    isFlipped : boolean = false;  

    flipCard(){
        this.isFlipped = !this.isFlipped;
    }
}