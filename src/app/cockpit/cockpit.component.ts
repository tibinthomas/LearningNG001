import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //newName = '';
  newDetails = '';

  @ViewChild('name') newName: ElementRef;  // here 'name' is the #name local ref in the html
  //Don't assingn value to newName.. Doing so is a bad practice of accessing DOM elements

  @Output() serverAdd = new EventEmitter<{serverName: string, serverDetails: string}>();
  @Output() blueprintAdd = new EventEmitter<{blueprintName: string, blueprintDetails: string}>();

  //@Output('Alias') decorator is used to make the property able to emit to parent component.
  //EventEmitter is use dto make an event {like (click) event} 

  constructor() { }

  onAddServer(details: string) {
    this.newDetails = details;
    this.serverAdd.emit({serverName: this.newName.nativeElement.value, serverDetails: this.newDetails});
    //triggers the event and emit the data provided
    //(serverAdd) = "actionMethod($event)" in .html file to use it. see the app.component.html file
  }

  onAddBlueprint(details: string) {
        this.newDetails = details;
    this.blueprintAdd.emit({blueprintName: this.newName.nativeElement.value, blueprintDetails: this.newDetails});
 }

  ngOnInit() {
    
  }

}
