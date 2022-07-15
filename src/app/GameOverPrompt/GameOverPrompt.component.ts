import { Component, Output, Input, EventEmitter} from "@angular/core";
import { fadeInAnimation } from "./GameOverPrompt.animations";

@Component ({
    selector : "game-over-prompt",
    templateUrl : `./GameOverPrompt.component.html`,
    styleUrls: ["./GameOverPrompt.component.css"],
    animations: [fadeInAnimation]
})

export class GameOverPromptComponent {
    @Output() OnRestart = new EventEmitter();
    @Output() OnAnotherLevel = new EventEmitter();

    @Input() isVisible: boolean;

    AgainClicked(){
        this.OnRestart.emit();
    }

    AnotherLevelClicked(){
        this.OnAnotherLevel.emit();
    }
}