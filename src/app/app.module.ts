import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './spinner/component/spinner.component';
import { DiscoverContainerComponent } from './discover/components/discover-container/discover-container.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './utilities/header-interceptor/header-interceptor.service';
import { MovieCardComponent } from './discover/components/movie-card/movie-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    DiscoverContainerComponent,
    NavbarComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true 
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
