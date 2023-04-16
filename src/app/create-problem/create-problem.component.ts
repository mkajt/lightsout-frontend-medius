import { Component } from '@angular/core';
import { CreateProblemService} from "./createProblem.service";

@Component({
  selector: 'app-create-problem',
  templateUrl: './create-problem.component.html',
  styleUrls: ['./create-problem.component.css'],
  providers: [CreateProblemService]

})
export class CreateProblemComponent {
  constructor(private createProblemService: CreateProblemService) {}

  ngOnInit(): void{
  }
}
