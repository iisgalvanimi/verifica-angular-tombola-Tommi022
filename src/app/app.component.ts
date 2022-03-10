import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Empty-Project';
  list: string[] = ['']
  testo: string=""
  last : string= ""
  constructor(){}

  onClick(){
    this.list.push(this.testo)
    this.last = this.testo
  }
}
