import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { ICategory, IProdcuts } from './products';
import { Observable } from 'rxjs';
//import { write, appendFile ,appendFileSync} from 'fs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class ProductServiceService {
  private CatUrl: string ="/assets/category.json";
  private ProUrl: string="/assets/products-list.json";
  public AllProduct =[
    {"p_id":1,"p_name":"cheese","p_img":"/assets/products/cheese.png","p_price":10,"c_id":1},
    {"p_id":2,"p_name":"milk","p_img":"/assets/products/milk.png","p_price":20,"c_id":1},
    {"p_id":1,"p_name":"broccoli","p_img":"/assets/products/broccoli.png","p_price":10,"c_id":2},
    {"p_id":2,"p_name":"seedless watermelon","p_img":"/assets/products/seedless watermelon.png","p_price":20,"c_id":2},
    {"p_id":1,"p_name":"chicken leg","p_img":"/assets/products/chicken leg.png","p_price":20,"c_id":3},
    {"p_id":2,"p_name":"organic meat patties","p_img":"/assets/products/organic meat patties.png","p_price":20,"c_id":3}
   ]
   
   
  

   
  constructor(private http : HttpClient) { }
  getCategory(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.CatUrl);
  }
  getCategoryName(id){
    let cat=this.getCategory();
    
  }
  getProduct()//: Observable<IProdcuts[]>
  {
    return this.AllProduct; 
    // return this.http.get<IProdcuts[]>(this.ProUrl);
  }


  AddProduct(prod:IProdcuts):Observable<IProdcuts>
  {  this.AllProduct.push(prod);

   return this.http.post<IProdcuts>(this.ProUrl, prod, httpOptions);
  }

 
}
