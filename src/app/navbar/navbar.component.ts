import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  colorSolve: any;
  colorCreate: any;

  ngOnInit(): void {
    this.colorSolve = 'gold';
    this.colorCreate = '#dbd5d1';
  }

  color(name: string) {
    if (name == 'solve') {
      this.colorSolve = 'gold';
      this.colorCreate = '#dbd5d1';
    } else {
      this.colorCreate = 'gold';
      this.colorSolve = '#dbd5d1';
    }
  }
}
