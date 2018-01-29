import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GillePage } from './gille';

@NgModule({
  declarations: [
    GillePage,
  ],
  imports: [
    IonicPageModule.forChild(GillePage),
  ],
})
export class GillePageModule {}
