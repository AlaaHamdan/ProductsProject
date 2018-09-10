import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
public cat=[];
public title;
  constructor(private catServce : ProductServiceService,private router:Router) { }

  ngOnInit() {
    this.title="Category List";
    this.catServce.getCategory().subscribe(data => this.cat=data);
  }
  OnSelect(category){
    this.router.navigate(['/CategoryDetails',category.id]);
  }
}
