import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { PJisho } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CardCreate } from '../pages/card/card.create';
import { DeckCreate } from '../pages/deck/deck.create';
import { SearchPage } from '../pages/search/search';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { GLOBALS } from '../helper/global';
import { SQLite } from '@ionic-native/sqlite';
import { Database } from '../database/database.component';

@NgModule({
  declarations: [
    PJisho,
    HomePage,
    ListPage,
    SearchPage,
    CardCreate,
    DeckCreate
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(PJisho),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PJisho,
    HomePage,
    ListPage,
    SearchPage,
    CardCreate,
    DeckCreate,
    Database
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GLOBALS,
    HttpClientModule,
    SQLite
  ]
})
export class AppModule {}
