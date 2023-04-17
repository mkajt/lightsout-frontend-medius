import { Component } from '@angular/core';
import { SolveProblemService } from "./solve-problem.service";
import { Problem } from "../entity";
<<<<<<< HEAD
import {mapProblems} from "../mapper/mapProblems";

=======
import { mapProblems } from "../mapper/mapProblems";
>>>>>>> 3c2e1aa (Still a bug)

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
  currentMatrix: number[] = new Array<number>;
  err: string | undefined;

  private allProblems: Problem[] | undefined;
  private selectedSizeProblems: Problem[] | undefined;
  private solvedProblems = new Array<number>(6).fill(0);

  btnClickSize(size: number) {
    this.matrixSize = size;
    this.cellSize = (60/size) + "vmin";
    this.setSelectedSizeProblems();

<<<<<<< HEAD
    /*// check which problems were already solved
=======
    // check which problems were already solved
>>>>>>> 3c2e1aa (Still a bug)
    if (this.solvedProblems[this.matrixSize-3] == this.selectedSizeProblems?.length) {
      this.solvedProblems[this.matrixSize-3]= 0;
    } else {
      this.solvedProblems[this.matrixSize-3]++;
    }
<<<<<<< HEAD

    // set matrix to solve
    // @ts-ignore
    this.solveMatrix = this.selectedSizeProblems[this.solvedProblems[this.matrixSize-3]].matrix;
    this.currentMatrix = this.solveMatrix.slice();*/
=======
    // set matrix to solve
    // @ts-ignore
    this.solveMatrix = this.selectedSizeProblems[this.solvedProblems[this.matrixSize-3]].matrix;

    // @ts-ignore
    this.currentMatrix = this.solveMatrix.slice();
>>>>>>> 3c2e1aa (Still a bug)
  }

  btnClickCell(index: number) {
    this.cellIndex = index;
  }

  cellColor(index: number) {
    return '#363636';
  }

  private setSelectedSizeProblems() {
    // @ts-ignore
    for (let problem of this.allProblems) {
      if (problem.matrixSize == this.matrixSize) {
        this.selectedSizeProblems?.push(problem);
      }
    }
<<<<<<< HEAD
=======
  }

  ngOnInit(): void{
    this.solveProblemService.getProblems().pipe(mapProblems).subscribe(
      problems => {
        this.allProblems = problems;
        this.err = ''; // Reset error message if it exists
      }, error => {
        this.err = error;
      }
    );
>>>>>>> 3c2e1aa (Still a bug)
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
