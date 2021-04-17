import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverContainerComponent } from './discover/components/discover-container/discover-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'discover', pathMatch: 'full'},
  { path: 'discover', component: DiscoverContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
