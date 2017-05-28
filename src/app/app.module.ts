import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

import { AppConfig } from './app.config';
import { SpotifyService } from './spotify.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArtistsListComponent,
    ArtistComponent,
    AlbumComponent,
  ],
  providers: [
    AppConfig,
    SpotifyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
