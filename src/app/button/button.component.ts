import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component ({
    selector : "btn",
    template : `<div class="btn" (click)="onClick()">{{text}}</div>`,
    styleUrls: ["./button.component.css"]
})

export class ButtonComponent {
    @Input() text : string;
    @Output() btnClick = new EventEmitter();

    onClick(){
        this.btnClick.emit();
    }
}