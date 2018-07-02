import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GLOBALS } from '../../helper/global';

import { SearchService } from './search.service';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [GLOBALS, SearchService]
})
export class SearchPage {
  searchTerm: string;
  returnJSON: string;

  constructor(public navCtrl: NavController, 
    private globals: GLOBALS,
    private searchService: SearchService) {

  }

  searchJisho(event, term){
    this.searchService.getJishoTerm(term).subscribe(result => this.returnJSON = result);
  }

}