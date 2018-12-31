import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  @Input() products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

}
