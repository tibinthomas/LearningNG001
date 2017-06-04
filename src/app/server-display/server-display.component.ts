import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-display',
  templateUrl: './server-display.component.html',
  styleUrls: ['./server-display.component.css']
})
export class ServerDisplayComponent implements OnInit {

  @Input() newItem: {};

  constructor() { }

  ngOnInit() {
  }

}
