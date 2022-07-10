import { trigger, state, style, animate, transition } from '@angular/animations';

export const flipAnimation = trigger("flip", [
    state("back", style({
        transform: "rotateY(-180deg)",
    })),
    state("front", style({ 
        transform: "rotateY(0deg)",
    })),
    transition("back <=> front", [animate('0.5s')])
])