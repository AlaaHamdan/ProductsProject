import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule ,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import {ProductServiceService} from './product-service.service';
import { CategoryComponent } from './category/category.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import {HttpClient} from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component'

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    routingComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    

  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
