import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from "@angular/common/http";
import { UserPlaylistListComponent } from './components/user-playlist-list/user-playlist-list.component';
import { UserPlaylistDetailComponent } from './components/user-playlist-detail/user-playlist-detail.component';
import { DeezerService } from './services/deezer.service';
import { PrimeNgModule } from './primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    UserPlaylistListComponent,
    UserPlaylistDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PrimeNgModule
  ],
  providers: [
    provideAnimationsAsync(),
    DeezerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
