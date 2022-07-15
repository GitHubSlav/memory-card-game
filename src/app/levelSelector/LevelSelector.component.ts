import { Component, Output, Input, EventEmitter} from "@angular/core";

@Component ({
    selector : "level-selector",
    templateUrl : `./LevelSelector.component.html`,
    styleUrls: ["./LevelSelector.component.css"]
})

export class LevelSelectorComponent {
    @Output() OnSelectLevel = new EventEmitter<number>();

    SelectLevel(val : number){
        this.OnSelectLevel.emit(val);
        console.log(val);
    }
}