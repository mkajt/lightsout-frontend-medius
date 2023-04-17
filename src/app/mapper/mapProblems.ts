import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Problem} from "../entity";

<<<<<<< HEAD
=======

>>>>>>> 3c2e1aa (Still a bug)
export function mapProblems(response: Observable<any>): Observable<Problem[]> {
  return response.pipe(
    map(data => {
      return data.problems as Problem[];
    })
  );
}
