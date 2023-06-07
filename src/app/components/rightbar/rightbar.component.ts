import { Component } from '@angular/core';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent {
  contacts = [
    { name: 'Manuel Perez', job: 'abogado', following: false },
    { name: 'Lina Maria', job: 'arquitecta', following: false },
    { name: 'Sergio Prada', job: 'policía', followinfg: false },
  ];

  courses = [
    'Cómo aumentar la resilencia',
    'Tutorial de Javascript moderno',
    'Patrones de diseño en el desarrollo de software',
  ];


toggleFollow(contact:any) {
  contact.following = !contact.following;
}
}
