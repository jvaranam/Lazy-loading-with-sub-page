import { Component, Input } from '@angular/core';

/**
 * Generated class for the FollowButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'follow-button',
  templateUrl: 'follow-button.html'
})
export class FollowButtonComponent {
  @Input() name: String;
  @Input() userId: String;
  text: string;

  constructor() {
    console.log('Hello FollowButtonComponent Component');
    this.text = 'Follow Button';
  }

  action(){
    console.log(this.name);
  }

}
