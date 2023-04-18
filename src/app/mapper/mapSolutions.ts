import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Solution, Problem, Solution_step } from "../entity";

export function mapSolutions(response: Observable<any>): Observable<Solution[]> {
  return response.pipe(
    map(data => {
      return data.map((solutionData: any) => {
        return new Solution(
          solutionData.solutionId,
          solutionData.problem,
          solutionData.solutionSteps
        );
      });
    })
  );
}
