import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInAnimation = trigger("appear", [
    state("opaque", style({
        opacity: 1,
        zIndex: 0,
        transform: "scale(1)",
    })),
    state("transparent", style({ 
        opacity: 0,
        transform: "scale(0.5)",
        zIndex: -1,
    })),
    transition("transparent => opaque", [animate('1s')])
])