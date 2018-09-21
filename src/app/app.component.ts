import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage, Settings2Page } from '../pages/index.pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabsPage:any = TabsPage;
  settings2Page:any = Settings2Page;

  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  openPage(pagina:any){
    this.rootPage = pagina;
    this.menuCtrl.close();
  }
}

