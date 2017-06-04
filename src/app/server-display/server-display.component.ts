import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-display',
  templateUrl: './server-display.component.html',
  styleUrls: ['./server-display.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native also avail able
})
export class ServerDisplayComponent implements OnInit {

  @Input() newItem: {}; //@Input('Alias') decorator is used to the property newItem: javascriptObj.
                        //It make this variable visible in parent components

  constructor() { }

  ngOnInit() {
  }

}
