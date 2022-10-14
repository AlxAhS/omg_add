import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { OmgFormComponent } from "./omg-home/omg-form/omg-form.component";
import { OmgHomeComponent } from "./omg-home/omg-home.component";
import { OmgPdfComponent } from "./omg-home/omg-pdf/omg-pdf.component";

const routes: Routes = [
    {path: 'home', component: OmgHomeComponent},
    {path: 'form', component: OmgFormComponent},
    {path: 'pdf', component: OmgPdfComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [OmgHomeComponent, OmgFormComponent, OmgPdfComponent]
