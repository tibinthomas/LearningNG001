import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newName = '';
  newDetails = '';

  @Output() serverAdd = new EventEmitter<{serverName: string, serverDetails: string}>();
  @Output() blueprintAdd = new EventEmitter<{blueprintName: string, blueprintDetails: string}>();

  constructor() { }

  onAddServer() {
    this.serverAdd.emit({serverName: this.newName, serverDetails: this.newDetails});
  }

  onAddBlueprint() {
    this.blueprintAdd.emit({blueprintName: this.newName, blueprintDetails: this.newDetails});
 }

  ngOnInit() {
    
  }

}
