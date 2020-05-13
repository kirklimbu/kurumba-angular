import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YearComponent } from './pages/year/year.component';


const routes: Routes = [
{
  path:'',
  component:YearComponent
  
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YearRoutingModule { }
