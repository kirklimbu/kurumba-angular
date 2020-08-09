import { ClassxComponent } from "./pages/classx/classx.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClassFormComponent } from "./shared/class-form/class-form.component";

const routes: Routes = [
  {
    path: "",
    component: ClassxComponent,
  },
  {
    path: "addClass",
    component: ClassFormComponent,
    data: {
      breadcrumb: "Add class",
    },
  },
  {
    path: "editClass/:id",
    component: ClassFormComponent,
    data: {
      breadcrumb: "Edit Class",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassxRoutingModule {}
