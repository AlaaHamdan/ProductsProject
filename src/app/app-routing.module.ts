import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:"CategoryDetails/:id",component:CatDetailsComponent},
  {path:"AddProduct/:id",component:AddProductComponent}
 // ,{path:'',component:CatDetailsComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

export const routingComponent=[CatDetailsComponent,AddProductComponent]

