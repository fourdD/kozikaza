import { AppButtonComponent } from './../components/app-button/app-button';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GillePage } from '../pages/gille/gille';
import { GalleryPage } from './../pages/gallery/gallery';
import 'slick-carousel/slick/slick';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GillePage,
    GalleryPage,
    AppButtonComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GillePage,
    GalleryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Base64ToGallery,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
