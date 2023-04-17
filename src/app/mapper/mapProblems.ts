import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Problem} from "../entity";

export function mapProblems(response: Observable<any>): Observable<Problem[]> {
  return response.pipe(
    map(data => {
      return data.problems as Problem[];
    })
  );
}
