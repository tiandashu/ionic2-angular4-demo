import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
/*service*/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackButtonService } from '../providers/backButton.service'

/*component*/
import { SettingPage } from '../pages/setting/setting';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from "../pages/login/login";



@NgModule({
  declarations: [
    MyApp,
    SettingPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage
  ],
  entryComponents: [
    MyApp,
    SettingPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackButtonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  bootstrap: [IonicApp]

})
export class AppModule {}
