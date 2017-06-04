import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements = [];


  onServerAdded(server: {serverName: string, serverDetails: string}) {
    this.elements.push({
      type: 'server',
      name: server.serverName,
      content: server.serverDetails
    });
  }

  onBlueprintAdded(blueprint: {blueprintName: string, blueprintDetails: string}) {
    this.elements.push({
      type: 'blueprint',
      name: blueprint.blueprintName,
      content: blueprint.blueprintDetails
    });
  }
}
