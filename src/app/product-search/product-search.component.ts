import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Observable, fromEvent, of } from 'rxjs';
import { switchMap, map, filter, debounceTime, tap, switchAll, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  products: Observable<Product[]>;
  @ViewChild('keywordRef') keywordRef: ElementRef;

  constructor(private dataService: ProductService) { }

  ngOnInit() {
    this.reloadData();

    const debounceSearch = fromEvent(this.keywordRef.nativeElement, 'keyup')
      .pipe(
        map((e: any) => {
          return e.target.value;
        }),
        filter((text: string) => text != undefined),
        debounceTime(350),
        map((query: string) => {
          return of(query)
        }),
        distinctUntilChanged()
      );

    debounceSearch.subscribe((result) => {
      result.subscribe(value => this.searchProducts(value));
    })
  }

  private searchProducts(keyword) {
    this.dataService.getProductSearch(keyword).subscribe(products => this.products = products);
  }

  reloadData() {
    this.dataService.getProductList().subscribe(products => this.products = products);
  }
}
