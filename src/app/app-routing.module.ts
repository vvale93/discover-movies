import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: 'discover', component: DiscoverComponent }
// ];
const routes = []; //remove this when DiscoverComponent is enabled.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
