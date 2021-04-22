import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, empty, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DiscoverService } from 'src/app/discover/services/discover.service';
import { DetailsResponse } from '../interfaces/details-response';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<any> {
  constructor(private discoverService: DiscoverService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DetailsResponse> {
    return this.discoverService.getDetails(route.paramMap.get('id')).pipe(
      catchError((error) => {
      return EMPTY;
      }))
  }
}
