import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "../card/card.component";
import { MemoryGameComponent } from "./memoryGame.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule],
    declarations: [MemoryGameComponent, CardComponent],
    bootstrap: [MemoryGameComponent]
})

export class MemoryGameModule {}