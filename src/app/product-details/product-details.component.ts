import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService, private listComponent: ProductListComponent) { }

  ngOnInit() {
  }

}
