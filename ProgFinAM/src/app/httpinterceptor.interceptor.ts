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
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA5ODIyMSwiZXhwIjoxNjQzOTYyMjIxfQ.2SgF85Ps7IQmx9oUKnLtukvC3Sy44rWsUEDUEIkFS2_M-8qVKzMkWEZDQgvVAexUUhp7G_vdbpUx75w3dlFVpQ';

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
