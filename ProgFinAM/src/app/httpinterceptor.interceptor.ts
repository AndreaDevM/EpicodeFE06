import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpinterceptorInterceptor implements HttpInterceptor {

  tenantID = 'fe_0621';
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NTQ3OTEyMywiZXhwIjoxNjQ2MzQzMTIzfQ.hxZRlYE0xYHn4MvK36BllS52FwG8l2kZ0dDD1--h9nabeJpzuekx9qqIahrx8Gi6gdK0KXpaelb35H7mawy24g';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      {headers: request.headers.set("Authorization", this.bearerToken)
                               .set("X-TENANT-ID", this.tenantID)
    }
    )
    
    return next.handle(myRequest);
  }
}
