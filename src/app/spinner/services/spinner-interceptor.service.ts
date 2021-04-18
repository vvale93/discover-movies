import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptorService {

  private httpRequests: HttpRequest<any>[] = [];

  constructor(private spinnerService: SpinnerService) { }

  private removeHttpRequest(httpRequest: HttpRequest<any>): void {
    const requestIndex = this.httpRequests.indexOf(httpRequest);
    if (requestIndex >= 0) {
      this.httpRequests.splice(requestIndex, 1);
    }
    this.spinnerService.isLoading.next(this.httpRequests.length > 0);
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.httpRequests.push(httpRequest);

    this.spinnerService.isLoading.next(true);
    return new Observable(observer => {
      const subscription = next.handle(httpRequest)
        .subscribe(
          event => {
            if (event instanceof HttpResponse) {
              this.removeHttpRequest(httpRequest);
              observer.next(event);
            }
          },
          err => {
            alert('error' + err);
            this.removeHttpRequest(httpRequest);
            observer.error(err);
          },
          () => {
            this.removeHttpRequest(httpRequest);
            observer.complete();
          });
      return () => {
        this.removeHttpRequest(httpRequest);
        subscription.unsubscribe();
      };
    });
  }
}
