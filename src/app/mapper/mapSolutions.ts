import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Solution } from "../entity";

export function mapSolutions(response: Observable<any>): Observable<Solution[]> {
  return response.pipe(
    map(data => {
      return data.map((solutionData: any) => {
        return {solutionId: solutionData.problemId, problem: solutionData.problem, solutionSteps: solutionData.solutionSteps};
      });
    })
  );
}
