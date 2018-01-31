import { GillePage } from './../gille/gille';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  images = [
    "wallhaven-613438_400x200.png",
    "wallhaven-613438_400x200.png",
    "wallhaven-613438_400x200.png",
    "wallhaven-613438_400x200.png"
  ];

  // images = [
  //   "camera",
  //   "camera",
  //   "camera",
  //   "camera"
  // ];

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {}

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log(currentIndex);
  }

  postPage() {
    this.navCtrl.push(GillePage);
  }

}
