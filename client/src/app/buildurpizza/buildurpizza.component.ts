import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildurpizza',
  templateUrl: './buildurpizza.component.html',
  styleUrls: ['./buildurpizza.component.css']
})
export class BuildurpizzaComponent implements OnInit {

  ingredientslist: any = [];
  isActive : any = true

  selectedItems: any = [];
  total: any = 0;

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3500/ingredients";

  placeorder(){
    alert('Your order has been placed successfully. Your total bill is Rs. '+this.total+' !!!')
  }
  // To get price of ingredients and add them based on check option
  getPrice(e:any, price:Number) {
    if(e.target.checked) {
      console.log(price + 'checked');
      this.selectedItems.push(price);
      // this.total =+ price ;
    }
    else {
      console.log(price + 'unchecked')
      this.selectedItems = this.selectedItems.filter((m:any) => m != price);
    }
    
    console.log(this.selectedItems)
    
    // Finally reduce works!!!
    this.total = this.selectedItems.reduce((prev: any,cur: any) => { return prev + cur }, 0 )
    console.log(this.total);
    return (this.total);
  }

  ngOnInit(): void {
    this.ingredientslist = this.http.get(this.url).subscribe(response => this.ingredientslist = response);

    this.selectedItems = new Array<string>();
  }

}
