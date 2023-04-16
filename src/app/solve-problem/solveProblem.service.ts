import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolveProblemService {

  constructor(private http: HttpClient) {}

  private apiUrl = "http://localhost:8080";

  public getProblem(size: number){}
}
