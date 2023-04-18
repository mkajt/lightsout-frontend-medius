import { Component } from '@angular/core';
import {Problem, Solution} from "../entity";
import { mapNumber } from "../mapper/mapNumber";
import { AppService } from "../app.service";
import { mapSolutions } from "../mapper/mapSolutions";

@Component({
  selector: 'app-create-problem',
  templateUrl: './create-problem.component.html',
  styleUrls: ['./create-problem.component.css',  '../app.component.css'],
  providers: [AppService]
})
export class CreateProblemComponent {

  constructor(private appService: AppService) {}

  matrixSize = 0;
  cellSize = "";
  cellIndex: number | undefined;
  currentMatrix: number[] | undefined;
  circleSize = "";
  message = "";
  err: string | undefined;

  private solution: Solution | undefined;
  solutionSteps: number[] | undefined;

  ngOnInit(): void{
  }

  btnClickSize(size: number) {
    this.matrixSize = size;
    this.cellSize = (60/size) + "vmin";
    this.circleSize = (30/size) + "vmin";
    this.setMatrix();
  }

  btnClickCell(index: number) {
    this.cellIndex = index;
    this.currentMatrix = this.appService.changeValuesInMatrix(this.currentMatrix, this.matrixSize, this.cellIndex);
  }

  setMatrix() {
    this.currentMatrix = [];
    for (let i = 0; i < this.matrixSize*this.matrixSize; i++) {
      this.currentMatrix?.push(0);
    }
    this.solutionSteps = undefined;
    this.message = "";
  }

  checkForSolution() {

    // @ts-ignore
    let problem: Problem = { matrix: this.currentMatrix, matrixSize: this.matrixSize };
    let newProblemId = -1;
    this.appService.checkForSolution(problem).pipe(mapNumber).subscribe(
      id => {
        if (id == -1) {
          this.message = 'Unsolvable problem.';
        }
        newProblemId = id;
        this.getSolution(id);
        this.message = 'Congratulations! You have created a solvable problem.';
      }, error => {
        this.err = error;
      }
    );
  }

  private getSolution(problemId: number) {
    this.appService.getSolutionForProblem(problemId)
      .pipe(mapSolutions).subscribe(
      solutions => {
        this.solution = solutions[0];
        this.err = '';
        this.solutionSteps = this.solution?.solutionSteps[0].solutionSteps;
        this.currentMatrix = this.solution.problem.matrix.slice();
      }, error => {
        this.err = error;
      }
    );
  }

  resetMatrix() {
    this.setMatrix();
  }

}
