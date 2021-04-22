import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverContainerComponent } from './discover/components/discover-container/discover-container.component';
import { MovieDetailComponent } from './discover/components/movie-detail/movie-detail.component';
import { MovieResolver } from './utilities/resolvers/movie.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'discover', pathMatch: 'full'},
  { path: 'discover', component: DiscoverContainerComponent },
  { path: 'discover/:id', component: MovieDetailComponent, resolve: { contact: MovieResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
