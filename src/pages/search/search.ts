import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GLOBALS } from '../../helper/global';

import { SearchService } from './search.service';

import { CardCreate } from '../card/card.create';

import { KeywordResult } from '../../models/KeywordResult';
import { DataResult } from '../../models/DataResult';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [GLOBALS, SearchService]
})
export class SearchPage {
  searchTerm: string;
  returnJSON: KeywordResult;

  constructor(public navCtrl: NavController, 
    private globals: GLOBALS,
    private searchService: SearchService) {
      this.returnJSON = {
        data: []
      } as KeywordResult;
  }

  searchJisho(event, term){
    this.searchService.getJishoTerm(term).subscribe(result => this.returnJSON = result);
  }

  createCard(dataResult: DataResult){
    alert(dataResult.is_common);
    this.navCtrl.push(CardCreate, { cardResult: dataResult });
  }

}
