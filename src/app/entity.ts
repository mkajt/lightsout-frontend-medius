export class Problem {
  problemId: number;
  matrix: number[];
  matrixSize: number;

  constructor(problemId: number, matrix: number[], matrixSize: number) {
    this.problemId = problemId;
    this.matrix = matrix;
    this.matrixSize = matrixSize;
  }

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
  solutionSteps: number;
  sequence: number;

  constructor(solutionStepId: number, solutionSteps: number, sequence: number) {
    this.solutionStepId = solutionStepId;
    this.solutionSteps = solutionSteps;
    this.sequence = sequence;
  }
}
