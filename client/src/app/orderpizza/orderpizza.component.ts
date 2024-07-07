import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})
export class OrderpizzaComponent implements OnInit {

  pizzalist: any = [];
  total: any ;

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3500/pizzas";


  getVal(price:Number){
    this.total = price ;
    return (this.total)
  }

  addtocart() {
    alert ('Your order has been successfully placed.');
  }

  ngOnInit(): void {
    this.pizzalist = this.http.get(this.url).subscribe(response => this.pizzalist = response);
  }

}
