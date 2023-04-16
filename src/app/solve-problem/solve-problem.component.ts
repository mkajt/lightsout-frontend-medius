import { Component } from '@angular/core';
import { SolveProblemService } from "./solveProblem.service";

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

  btnClickSize(size: number) {
    this.matrixSize = size;
    this.cellSize = (60/size) + "vmin";
  }

  btnClickCell(index: number) {
    this.cellIndex = index;
  }

  cellColor(index: number) {
    return '#363636';
  }

  ngOnInit(): void{
  }



}
