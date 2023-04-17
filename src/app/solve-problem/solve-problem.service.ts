import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Problem } from "../entity";
=======
>>>>>>> 3c2e1aa (Still a bug)
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SolveProblemService {

  constructor(private http: HttpClient) {}

  private apiUrl = "http://localhost:8080";

  public getProblems(): Observable<any>{
    const url = this.apiUrl + '/problems';
    return this.http.get(url).pipe(
      catchError(err =>  {
        console.log('Error: ', err);
        return throwError('Something went wrong.');
      })
    );
  }

<<<<<<< HEAD
  private processError(error: any): Promise<any> {
    console.error('Ups! Something went wrong.', error);
    return Promise.reject(error.message || error);
  }
=======
>>>>>>> 3c2e1aa (Still a bug)
}
