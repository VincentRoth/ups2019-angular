import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const startDate = Date.now();
    return next.handle(req).pipe(
      finalize(() => {
        const endDate = Date.now();
        console.log(req.url, `Taken time: ${endDate - startDate}ms`);
      })
    );
  }
}
