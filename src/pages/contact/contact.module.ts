import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ContactPage),
  ],
})
export class ContactPageModule {}
