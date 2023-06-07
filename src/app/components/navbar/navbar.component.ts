import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  contacts = [
    { name: 'Contacto 1', job: 'Cargo 1' },
    { name: 'Contacto 2', job: 'Cargo 2' },
    { name: 'Contacto 3', job: 'Cargo 3' },
    // Agrega más contactos aquí
  ];
}

