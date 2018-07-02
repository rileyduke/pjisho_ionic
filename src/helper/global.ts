import { Injectable } from '@angular/core';

@Injectable()
export class GLOBALS {
  private JISHO_URL: string = "https://jisho.org/api/v1/search/";
  private JISHO_WORD_SEARCH: string = "words?keyword=";

  getWordSearchURL = function(searchTerm){
      return this.JISHO_URL + this.JISHO_WORD_SEARCH + searchTerm;
  }

}