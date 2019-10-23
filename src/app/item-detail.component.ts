import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from './api.service';

@Component( {
  selector: 'item-detail',
  templateUrl: 'item-detail.component.html',
  styleUrls: [ './item-detail.component.css' ]
} )
export class ItemDetailComponent implements OnInit {

  item: any;

  constructor( private apiService: ApiService, private activatedRoute: ActivatedRoute ) { };

  ngOnInit() {
    this.apiService.getItem( this.activatedRoute.snapshot.params[ 'id' ] ).subscribe( res => {
      this.item = res;
    } );
  }
}