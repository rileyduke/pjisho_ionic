import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { GLOBALS } from '../../helper/global';
 
@Injectable()
export class SearchService {
  constructor(private http: HttpClient,
    private globals: GLOBALS) { }

    // get jisho API result based on entered term
    getJishoTerm (term): Observable<string> {
        let headers = new HttpHeaders();

        headers.append('','')

        let url = this.globals.getWordSearchURL(term);
        return this.http.get<string>(url,{headers: headers});
    }
}