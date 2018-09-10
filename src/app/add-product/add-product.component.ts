import { Component, OnInit } from '@angular/core';
import { IProdcuts } from '../products';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
public newProduct=new IProdcuts()
public cat_id
  constructor(private route :ActivatedRoute, private prodServce : ProductServiceService, private router :Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.cat_id=id;
     });
  }

  addNewProduct(data){
    this.newProduct.p_name=data.Pname;
    this.newProduct.p_img=data.Pimg;
    this.newProduct.p_price=data.Pprice;
    this.newProduct.c_id=this.cat_id;
    this.newProduct.p_id=3; 
    //this.newProduct=    {"p_id":3,"p_name":data.Pname,"p_img":data.Pimg,"p_price":data.Pprice,"c_id":this.cat_id};

    this.prodServce.AddProduct(this.newProduct)
     .subscribe();
      alert(this.newProduct.p_name+" is added");
      this.router.navigate(['/CategoryDetails',this.cat_id]);
  }
}
