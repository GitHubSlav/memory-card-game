import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "../card/card.component";
import { MemoryGameComponent } from "./memoryGame.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from "../button/button.component"
import { GameOverPromptComponent } from "../GameOverPrompt/GameOverPrompt.component"
import { LevelSelectorComponent } from './../levelSelector/LevelSelector.component';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule],
    declarations: [MemoryGameComponent, LevelSelectorComponent, CardComponent, GameOverPromptComponent, ButtonComponent],
    bootstrap: [MemoryGameComponent]
})

export class MemoryGameModule {}