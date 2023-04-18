import { Component } from '@angular/core';
import { SolveProblemService } from "./solve-problem.service";
import {Problem, Solution, Solution_step} from "../entity";
import { mapProblems } from "../mapper/mapProblems";
import { mapSolutions } from "../mapper/mapSolutions";

@Component({
  selector: 'app-solve-problem',
  templateUrl: './solve-problem.component.html',
  styleUrls: ['./solve-problem.component.css'],
  providers: [SolveProblemService]
})
export class SolveProblemComponent {

  constructor(private solveProblemService: SolveProblemService) {}

  matrixSize = 0;
  cellSize = "";
  cellIndex: number | undefined;
  solveMatrix: number[] | undefined;
  currentMatrix: number[] | undefined;
  circleSize = "";
  numberOfMoves = 0;
  err: string | undefined;

  allProblems: Problem[] | undefined;
  selectedSizeProblems: Problem[] | undefined;

  private solvedProblems = new Array<number>(6).fill(0);
  private solveProblem: Problem | undefined;
  private solution: Solution | undefined;

  solutionSteps: number[] | undefined;

  btnClickSize(size: number) {
    this.matrixSize = size;
    this.cellSize = (60/size) + "vmin";
    this.circleSize = (30/size) + "vmin";
    this.setSelectedSizeProblems();

    if (this.solvedProblems[this.matrixSize-3] == this.selectedSizeProblems?.length) {
      this.solvedProblems[this.matrixSize-3]= 0;
    }

    console.log(this.selectedSizeProblems?.[this.solvedProblems[this.matrixSize-3]]);
    this.solveProblem = this.selectedSizeProblems?.[this.solvedProblems[this.matrixSize-3]];

    // set matrix to solve
    this.solveMatrix = this.solveProblem?.matrix;
    this.resetMatrix()

    if (this.solveMatrix !== undefined) {
      this.solvedProblems[this.matrixSize-3]++;
    }
  }

  private setSelectedSizeProblems() {
    this.selectedSizeProblems = [];
    // @ts-ignore
    for (let problem of this.allProblems) {
      if (problem.matrixSize == this.matrixSize) {
        this.selectedSizeProblems?.push(problem);
      }
    }
    // if there is no problems set for certain matrix size
    if (this.selectedSizeProblems.length == 0) {
      this.selectedSizeProblems = undefined;
    }
  }

  btnClickCell(index: number) {
    this.cellIndex = index;
    this.currentMatrix = this.solveProblemService.changeValuesInMatrix(this.currentMatrix, this.matrixSize, this.cellIndex);
    this.numberOfMoves++;
  }

  getSolution() {
    this.numberOfMoves = 0;
    if (this.solveProblem == undefined) {return;}

    this.solveProblemService.getSolutionForProblem(this.solveProblem.problemId)
      .pipe(mapSolutions).subscribe(
      solutions => {
        this.solution = solutions[0];
        this.err = '';
        console.log(this.solution);
        this.solutionSteps = this.solution?.solutionSteps[0].solutionSteps;
        this.currentMatrix = this.solveMatrix?.slice();
      }, error => {
        this.err = error;
      }
    );
  }

  resetMatrix() {
    this.currentMatrix = this.solveMatrix?.slice();
    this.solution = undefined;
    this.solutionSteps = undefined;
    this.numberOfMoves = 0;
  }


  ngOnInit(): void {
    this.solveProblemService.getProblems().pipe(mapProblems).subscribe(
      problems => {
        this.allProblems = problems;
        this.err = ''; // Reset error message if it exists
      }, error => {
        this.err = error;
      }
    );
  }





}
