import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() type = 'primary';
  @Output() clickEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit(): void {
  }

  onClick(){
    this.clickEventEmitter.emit(true);
  }
}
