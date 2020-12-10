import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable()
export class AddressInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          const body = event.body.map(itemBody => {
            return {
              ...itemBody,
              postAddress: `${itemBody.address.zipcode}, ${itemBody.address.city}, ${itemBody.address.street}, ${itemBody.address.suite}`,
            };
          });
          return event.clone({body});
        }
        return event;
      })
    );
  }
}
