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
import { MovieResolver } from './utilities/resolvers/movie.resolver';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { CastCrewTableComponent } from './discover/components/movie-detail/cast-crew-table/cast-crew-table.component';
import { CastCrewAccordionComponent } from './discover/components/movie-detail/cast-crew-accordion/cast-crew-accordion.component';
import { MovieDetailNavbarComponent } from './discover/components/movie-detail/movie-detail-navbar/movie-detail-navbar.component';
import { MovieDetailHeaderComponent } from './discover/components/movie-detail/movie-detail-header/movie-detail-header.component';
import { MovieDetailDescriptionComponent } from './discover/components/movie-detail/movie-detail-description/movie-detail-description.component';





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
    CastCrewTableComponent,
    CastCrewAccordionComponent,
    MovieDetailNavbarComponent,
    MovieDetailHeaderComponent,
    MovieDetailDescriptionComponent,
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
    MatFormFieldModule,
    MatChipsModule,
    MatExpansionModule,
    MatTableModule
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
    },
    MovieResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
