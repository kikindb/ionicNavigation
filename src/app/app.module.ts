import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainPage, SettingsPage, Settings2Page, TabsPage, ModalPage, Page2Page, Page3Page } from '../pages/index.pages';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    SettingsPage,
    Settings2Page,
    TabsPage,
    ModalPage,
    Page2Page,
    Page3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: "Go Back"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    SettingsPage,
    Settings2Page,
    TabsPage,
    ModalPage,
    Page2Page,
    Page3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
