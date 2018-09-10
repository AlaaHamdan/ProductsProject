import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'
@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  public prod=[];
  public title;
  public cat_id;
  public cat=[];
public catName;
  constructor(private prodServce : ProductServiceService, private route :ActivatedRoute, private router :Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
     let id=parseInt(params.get('id'));
     this.cat_id=id;
     this.prodServce.getCategory().subscribe(data => this.cat=data);
     for(let i of this.cat)
       if(i.id == this.cat_id)
        this.catName=i.name
    });
   

    this.prod=  this.prodServce.getProduct()//.subscribe(data => this.prod=data);
    
    
  }

  Add() {    this.router.navigate(['/AddProduct',this.cat_id]);
}

}
