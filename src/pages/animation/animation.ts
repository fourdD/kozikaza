import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-animation',
  templateUrl: 'animation.html',

})
export class AnimationPage {
  state: string = 'small'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small')
    
  }

}
