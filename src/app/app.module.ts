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
import { SpinnerService } from './spinner/services/spinner.service';
import { SpinnerInterceptorService } from './spinner/services/spinner-interceptor.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchMoviesComponent } from './discover/components/search-movies/search-movies.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MovieDetailComponent } from './discover/components/movie-detail/movie-detail.component';
import { StarsFilterComponent } from './discover/components/stars-filter/stars-filter.component';
import { MovieCardsContainerComponent } from './discover/components/movie-cards-container/movie-cards-container.component';




@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    DiscoverContainerComponent,
    NavbarComponent,
    MovieCardComponent,
    SearchMoviesComponent,
    MovieDetailComponent,
    StarsFilterComponent,
    MovieCardsContainerComponent,
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
    MatGridListModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true 
    },
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
