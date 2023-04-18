import { NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SolveProblemComponent } from "./solve-problem/solve-problem.component";
import { CreateProblemComponent } from "./create-problem/create-problem.component";
import { InstructionsComponent } from "./instructions/instructions.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'solve'},
  {path: 'solve', component: SolveProblemComponent},
  {path: 'create', component: CreateProblemComponent},
  {path: 'instructions', component: InstructionsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
