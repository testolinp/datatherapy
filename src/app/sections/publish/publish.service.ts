import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PublishService {
  constructor(private http: HttpClient) {}

  getHeader(lang) {
    let currentLang = lang == "en" ? "/en" : "";

    return this.http
      .get(
        `http://admin.trydatatherapy.com${currentLang}/wp-json/wp/v2/pages/16`
      )
      .pipe(
        tap((data) => JSON.stringify(data)),
        catchError(this.handlerError)
      );
  }

  getPublish() {
    return this.http
      .get(`http://admin.trydatatherapy.com/wp-json/wp/v2/publicaciones`)
      .pipe(
        tap((data) => JSON.stringify(data)),
        catchError(this.handlerError)
      );
  }

  private handlerError(err: HttpErrorResponse) {
    let errorMessage = "";

    if (err.error instanceof ErrorEvent) {
      errorMessage = `Error: ${err.error.message}`;
    } else {
      errorMessage = `Error: ${err.status}, message ${err.message}`;
    }

    return throwError(errorMessage);
  }
}
