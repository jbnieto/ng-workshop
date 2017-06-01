import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { AlbumsComponent } from './albums/albums.component';

import { AppConfig } from './app.config';
import { SpotifyService } from './spotify.service';
import { SongsComponent } from './songs/songs.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsListComponent,
    AlbumsComponent,
    SongsComponent
  ],
  providers: [
    AppConfig,
    SpotifyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
