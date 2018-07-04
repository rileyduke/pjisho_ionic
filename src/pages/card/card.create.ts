import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataResult } from '../../models/DataResult';
import { Card } from '../../models/Card';
import { Database } from '../../database/database.component';
import { SQLiteObject } from '@ionic-native/sqlite';

@Component({
    selector: 'create-card',
    templateUrl: 'card.create.html',
    providers: [Database]
})
export class CardCreate {
    public cardResult: DataResult;
    private createdCard: Card;

    constructor(params: NavParams, private dbase: Database) {
        this.cardResult = params.data.cardResult;
    }

    public createCard(){
        this.dbase.insertTest().then((data)=>{ console.log(data)}).then(e=>{
            return this.dbase.getTest().then(x=>{
                console.log("result? " + JSON.stringify(x));
            });
        });
    }
}
