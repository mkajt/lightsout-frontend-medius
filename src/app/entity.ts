export interface Problem {
  problemId: number | undefined;
  matrix: number[];
  matrixSize: number;
}

export interface Solution {
  solutionId: number;
  problem: Problem;
  solutionSteps: Solution_step[];
}

export interface Solution_step {
  solutionStepId: number;
  solutionSteps: number[];
  sequence: number;
}
