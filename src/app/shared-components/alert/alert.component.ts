import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {


  @Input() message: string;
  @Input() type: string;
  @Input() display: boolean = false;
  @Output() closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeButton() {
    this.closeEvent.emit();
  }
}
