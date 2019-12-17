import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  serverElements = [{type: 'server', name: 'test1', content: 'test server'}];

   onServerAdded (serverData: {serverName: string, serverContent: string} ) {
   this.serverElements.push({
     type: 'server',
     name: serverData.serverName,
    content: serverData.serverContent

   });
}

  onBlueprintAdded (blueprintData: {serverName: string, serverContent: string} ) {
   this.serverElements.push({
     type: 'blueprint',
     name: blueprintData.serverName,
    content: blueprintData.serverContent

   });
}
}
