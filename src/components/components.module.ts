import { NgModule } from '@angular/core';
import { FollowButtonComponent } from './follow-button/follow-button';
import { IonicModule } from 'ionic-angular';
import { DeleteButtonComponent } from './delete-button/delete-button';
@NgModule({
	declarations: [FollowButtonComponent,
    DeleteButtonComponent],
	imports: [ IonicModule ],
	exports: [FollowButtonComponent,
    DeleteButtonComponent]
})
export class ComponentsModule {}
