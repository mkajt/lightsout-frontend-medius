import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, filter, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SolveProblemService {

  constructor(private http: HttpClient) {}

  public changeValuesInMatrix(matrix: number[] | undefined, size: number, field: number): any {
    if (matrix == undefined) {
      return null;
    }
    // set clicked field
    if (matrix[field] == 1) {
      matrix[field] = 0;
    } else {
      matrix[field] = 1;
    }

    // set left field & if it is not on the border
    if (field % size != 0) {
      if (matrix[field-1] == 1) {
        matrix[field-1] = 0;
      } else {
        matrix[field-1] = 1;
      }
    }

    // set right field & if it is not on the border
    if ((field+1) % size != 0) {
      if (matrix[field+1]== 1) {
        matrix[field+1] = 0;
      } else {
        matrix[field+1] = 1;
      }
    }

    // set top field & if it is not on the top
    if (field - size >= 0) {
      if (matrix[field-size] == 1) {
        matrix[field-size] = 0;
      } else {
        matrix[field-size] = 1;
      }
    }

    // set bottom field & if it is not on the bottom
    if (field + size < Math.pow(size,2)) {
      if (matrix[field+size] == 1) {
        matrix[field+size] = 0;
      } else {
        matrix[field+size] = 1;
      }
    }

    return matrix;
  }

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

  public getSolutionForProblem(problemId: number) : Observable<any>{
    const url = this.apiUrl + '/solutions/problem/' + problemId;
    return this.http.get(url).pipe(
      catchError(err =>  {
        console.log('Error: ', err);
        return throwError('Something went wrong.');
      })
    );
  }
}
