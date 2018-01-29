import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GalleryPage } from './../gallery/gallery';

/**
 * Generated class for the GillePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gille',
  templateUrl: 'gille.html',
})
export class GillePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GillePage');
  }

  galleryPage() {
    this.navCtrl.push(GalleryPage);
  }

}
