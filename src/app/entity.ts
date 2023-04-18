export interface Problem {
  problemId: number | undefined;
  matrix: number[];
  matrixSize: number;
}

export class Solution {
  solutionId: number;
  problem: Problem;
  solutionSteps: Solution_step[];

  constructor(solutionId: number, problem: Problem, solutionSteps: Solution_step[]) {
    this.solutionId = solutionId;
    this.problem = problem;
    this.solutionSteps = solutionSteps;
  }

}

export class Solution_step {
  solutionStepId: number;
  solutionSteps: number[];
  sequence: number;

  constructor(solutionStepId: number, solutionSteps: number[], sequence: number) {
    this.solutionStepId = solutionStepId;
    this.solutionSteps = solutionSteps;
    this.sequence = sequence;
  }
}
