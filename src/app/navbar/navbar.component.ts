import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  colorSolve: any;
  colorCreate: any;
  colorInstructions: any;

  ngOnInit(): void {
    this.colorSolve = 'gold';
    this.colorCreate = '#dbd5d1';
    this.colorInstructions = '#dbd5d1';
  }

  color(name: string) {
    if (name == 'solve') {
      this.colorSolve = 'gold';
      this.colorCreate = '#dbd5d1';
      this.colorInstructions = '#dbd5d1';
    } else if (name == 'instructions'){
      this.colorInstructions = 'gold';
      this.colorCreate = '#dbd5d1';
      this.colorSolve = '#dbd5d1';
    } else {
      this.colorCreate = 'gold';
      this.colorSolve = '#dbd5d1';
      this.colorInstructions = '#dbd5d1';
    }
  }
}
