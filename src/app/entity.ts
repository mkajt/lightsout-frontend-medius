export class Problem {
  problemId: number | undefined;
  matrix: number[] | undefined;
  matrixSize: number | undefined;
}

export class Solution {
  solutionId: number | undefined;
  problem: Problem | undefined;
  solutionSteps: Solution_step[] | undefined;
}

export class Solution_step {
  solutionStepId: number | undefined;
  solutionSteps: number[] | undefined;
  sequence: number | undefined;
}
