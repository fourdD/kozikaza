import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  data = [
    {
      id: 1,
      img: 'assets/imgs/wallhaven-618655.jpg'
    },
    {
      id: 2,
      img: 'assets/imgs/wallhaven-618655.jpg'
    },
    {
      id: 3,
      img: 'assets/imgs/wallhaven-618655.jpg'
    },
    {
      id: 4,
      img: 'assets/imgs/wallhaven-618655.jpg'
    },
    {
      id: 5,
      img: 'assets/imgs/wallhaven-618655.jpg'
    },
    {
      id: 6,
      img: 'assets/imgs/wallhaven-618655.jpg'
    },
    {
      id: 7,
      img: 'assets/imgs/wallhaven-618655.jpg'
    },
    {
      id: 8,
      img: 'assets/imgs/wallhaven-618655.jpg'
    },
    {
      id: 9,
      img: 'assets/imgs/wallhaven-618655.jpg'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

}
