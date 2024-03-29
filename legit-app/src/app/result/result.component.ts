import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmationPopupComponent } from '../confirmation-popup/confirmation-popup.component'
declare var ga: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ProductService, PagerService]
})
export class ResultComponent implements OnInit {
  
  selectedCollectionId;
  selectedFabricId;
  selectedColourId;
  selectedSortPriceId;
  collections;
  colours;
  fabrics;
  queriedSearch;
  loading:boolean = true;

  startLoading(){
    this.loading = true;
  }

  
  stopLoading(){
    this.loading = false;
  }
  onClear(){
    
    this.startLoading();
    this.selectedCollection = undefined;
    this.selectedFabric = undefined;
    this.selectedColour = undefined;
    this.sortPrice = undefined;
    this.selectedCollectionId = undefined;
    this.selectedFabricId = undefined;
    this.selectedColourId = undefined;
    this.selectedSortPriceId = undefined;
    this.queriedSearch = "";

    this.productService.getFilteredProductList("undefined", "undefined", "undefined", "undefined", this.queriedSearch).subscribe(
       products => {
        
         this.products = products;
         //initialise paginator 
         this.setPage(1);
         this.stopLoading()
       });

    // this.productService.getProductList().subscribe(
    //   products => {
    //     this.products = products;
    //     //initialise paginator 
    //     this.setPage(1);
    //   });

  }
  
  onSelectCollection(collection) {

    this.startLoading()
    this.selectedCollectionId = collection.collectionId;
    console.log(this.selectedCollectionId);
    console.log(this.selectedFabricId);
    console.log(this.selectedColourId);
    console.log(this.selectedSortPriceId);
    console.log(this.queriedSearch);

    this.productService.getFilteredProductList(this.selectedCollectionId, this.selectedFabricId, this.selectedColourId, this.selectedSortPriceId, this.queriedSearch).subscribe(
      products => {
        this.products = products;
        //initialise paginator 
        this.setPage(1);
        this.stopLoading();
      });
  }

  onSelectFabric(fabric) {
    this.startLoading()
    this.selectedFabricId = fabric.fabricId;
    console.log(this.selectedCollectionId);
    console.log(this.selectedFabricId);
    console.log(this.selectedColourId);
    console.log(this.selectedSortPriceId);
    console.log(this.queriedSearch);

    this.productService.getFilteredProductList(this.selectedCollectionId, this.selectedFabricId, this.selectedColourId, this.selectedSortPriceId, this.queriedSearch).subscribe(
      products => {
        this.products = products;
        //initialise paginator 
        this.setPage(1);
        this.stopLoading()
      });
  
  }

  onSelectColour(colour) {
    
    this.startLoading()
    this.selectedColourId = colour.colourId;
    console.log(this.selectedCollectionId);
    console.log(this.selectedFabricId);
    console.log(this.selectedColourId);
    console.log(this.selectedSortPriceId);
    console.log(this.queriedSearch);

    this.productService.getFilteredProductList(this.selectedCollectionId, this.selectedFabricId, this.selectedColourId, this.selectedSortPriceId, this.queriedSearch).subscribe(
      products => {
        this.products = products;
        //initialise paginator 
        this.setPage(1);
        this.stopLoading()
      });
  }
    

  onSelectSort(sortid) {
    this.startLoading()
    this.selectedSortPriceId = sortid.id;
    console.log(this.selectedCollectionId);
    console.log(this.selectedFabricId);
    console.log(this.selectedColourId);
    console.log(this.selectedSortPriceId);
    console.log(this.queriedSearch);

    this.productService.getFilteredProductList(this.selectedCollectionId, this.selectedFabricId, this.selectedColourId, this.selectedSortPriceId, this.queriedSearch).subscribe(
      products => {
        this.products = products;
        //initialise paginator 
        this.setPage(1);
        this.stopLoading()
      });
  }

  onSearch(query: string): void {
    this.startLoading()
    this.queriedSearch = query;
    console.log(this.selectedCollectionId);
    console.log(this.selectedFabricId);
    console.log(this.selectedColourId);
    console.log(this.selectedSortPriceId);
    console.log(this.queriedSearch);

		this.productService.getFilteredProductList(this.selectedCollectionId, this.selectedFabricId, this.selectedColourId, this.selectedSortPriceId, this.queriedSearch).subscribe(
      products => {
        this.products = products;
        //initialise paginator 
        this.setPage(1);
        this.stopLoading()
      });
	}
    
  
  sortPrice:any = null;
  sorts = [
       {id: "asc", name: "Ascending"},
       {id: "desc", name: "Descending"}
     ];
  
  selectedCollection:any = null;
  // collections = [
  //      {id: "CO1", name: "Bestsellers"},
  //      {id: "CO2", name: "2018 Spring"},
  //      {id: "CO3", name: "2018 Summer"},
  //      {id: "CO4", name: "2017 Spring"}
  //    ];

  selectedFabric:any = null;
  // fabrics = [
  //      {id: "F1", name: "Silk"},
  //      {id: "F2", name: "Modal"},
  //      {id: "F3", name: "Long Staple Cotton"},
  //      {id: "F4", name: "Cotton"},
  //      {id: "F5", name: "Lyocell Tencel"},
  //      {id: "F6", name: "Polyester-Cotton"}
  //    ];

  selectedColour:any = null;
  // colours = [
  //      {id: "C1", name: "White"},
  //      {id: "C2", name: "Black"},
  //      {id: "C3", name: "Red"},
  //      {id: "C4", name: "Yellow"},
  //      {id: "C5", name: "Blue"},
  //      {id: "C6", name: "Green"},
  //      {id: "C7", name: "Pink"},
  //      {id: "C8", name: "Purple"},
  //      {id: "C9", name: "Brown"},
  //      {id: "C10", name: "Gold"},
  //      {id: "C11", name: "Silver"}
  //    ];
  
  //list of products 
  private products = []

  //list of product 
  private filteredProducts = []

  // pager object
  pager: any = {};

  // paged items
  pagedProducts: any[];

  constructor(
    private productService:ProductService, 
    private pagerService: PagerService,
    private dialogService:DialogService,
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, 
    private router: Router) { }
    
  ngOnInit() {
    this.startLoading()
    this.selectedCollection = undefined;
    this.selectedFabric = undefined;
    this.selectedColour = undefined;
    this.sortPrice = undefined;
    this.productService.getProductList().subscribe(
      products => {
        this.products = products;
        console.log(this.products);
        //initialise paginator 
        this.setPage(1);
        this.stopLoading()
      });

    this.productService.getProductCatalogueFilters().subscribe(
      filters => {
        this.collections = filters.collections;
        this.fabrics = filters.fabrics;
        this.colours = filters.colours;
      });
  }

  
  
  // onSelect(product): void {
	// 	let link = ['/productDetails', {patternId: product.id, fabricId: product.fabric_id, colourId: product.colour_id}];
  //   this.router.navigate(link);
  // }
  
  submit(){
    let disposable = this.dialogService.addDialog(ConfirmationPopupComponent, {
      title: 'Request',
      message: 'Your request has been sent succesfully to the childminder! You will be notified via SMS upon a successful request.'
    })
      .subscribe((isConfirmed) => {
        console.log("DIALOG")
        //We get dialog result
        if (isConfirmed) {
          // this.router.navigate([this.returnUrl]);
        }
        else {
          // this.router.navigate([this.returnUrl]);
        }
      });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    setTimeout(() => {
      disposable.unsubscribe();
    }, 5000);
  }
  
  setPage(page: number) {
        if (page < 1) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.products.length, page);
 
        // get current page of items
        this.pagedProducts = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  showQuickView(patternId, pattern_name){
    (function (i, s, o, g, r, a?, m?) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
              (i[r].q = i[r].q || []).push(arguments)
          }, i[r].l = 1 * <any>new Date();
      a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-106185727-2', 'auto');
    ga('require', 'ec');
    ga('ec:addProduct',{
    // productFieldObject stores product click and other details
    
    'id': patternId, // Product ID/SKU - Type: string
    
    'name': pattern_name, // Product name - Type: string
  
    'category': 'Beddings', // Product category - Type: string
  
    'brand': '[Server Variable]', // Product brand - Type: string
    
    });
    
     ga('ec:setAction', 'click', {'list': 'Product List'});
    
      // Send click with an event, then send user to product page.
     ga('send', 'event', 'enhanced ecommerce', 'Quick View Clicks', pattern_name);
     ga('send', 'pageview');

    
    
    

  }

    onProductClick(patternId,pattern_name) {
      (function (i, s, o, g, r, a?, m?) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * <any>new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
      console.log(pattern_name);
      ga('create', 'UA-106185727-2', 'auto');
      ga('require', 'ec');
      ga('ec:addProduct',{
      // productFieldObject stores product click and other details
      
      'id': patternId, // Product ID/SKU - Type: string
      
      'name': pattern_name, // Product name - Type: string
    
      'category': 'Beddings', // Product category - Type: string
    
      'brand': '[Server Variable]', // Product brand - Type: string
      
      });
      
       ga('ec:setAction', 'click', {'list': 'Product List'});
      
        // Send click with an event, then send user to product page.
       ga('send', 'event', 'enhanced ecommerce', 'Product Detail Clicks', pattern_name);
      
       ga('send', 'pageview');

    }

    onQuickViewClick(patternId,pattern_name) {
      (function (i, s, o, g, r, a?, m?) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * <any>new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
      ga('create', 'UA-106185727-2', 'auto');
      ga('require', 'ec');
      ga('ec:addProduct',{
      // productFieldObject stores product click and other details
      
      'id': patternId, // Product ID/SKU - Type: string
      
      'name': pattern_name, // Product name - Type: string
    
      'category': 'Beddings', // Product category - Type: string
    
      'brand': '[Server Variable]', // Product brand - Type: string
      
      });
      
       ga('ec:setAction', 'click', {'list': 'Product List'});
      
        // Send click with an event, then send user to product page.
       ga('send', 'event', 'enhanced ecommerce', 'Quick View Clicks', pattern_name);
       ga('send', 'pageview');
    }

    




}
