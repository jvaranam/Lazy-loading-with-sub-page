import { Component } from '@angular/core';

/**
 * Generated class for the DeleteButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'delete-button',
  templateUrl: 'delete-button.html'
})
export class DeleteButtonComponent {

  text: string;

  constructor() {
    console.log('Hello DeleteButtonComponent Component');
    this.text = 'Hello World';
  }

}
