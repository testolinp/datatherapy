import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublishService {

  private publishUrl = 'http://admin.trydatatherapy.com/wp-json/wp/v2/';

  constructor( private http : HttpClient) { }

  getHeader() {
    return this.http.get(`${this.publishUrl}pages/16`)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handlerError)
      )
  }

  getPublish() {
    return this.http.get(`${this.publishUrl}publicaciones`)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handlerError)
      )
  }

  private handlerError(err : HttpErrorResponse) {
    let errorMessage = '';

    if(err.error instanceof ErrorEvent) {
      errorMessage = `Error: ${err.error.message}`
    } else {
      errorMessage = `Error: ${err.status}, message ${err.message}`
    }

    return throwError(errorMessage);
  }
}
