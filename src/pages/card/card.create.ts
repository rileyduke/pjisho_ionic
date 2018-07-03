import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataResult } from '../../models/DataResult';
import { Card } from '../../models/Card';

@Component({
    selector: 'create-card',
    templateUrl: 'card.create.html'
})
export class CardCreate {
    public cardResult: DataResult;
    private createdCard: Card;
    constructor(params: NavParams) {
        this.cardResult = params.data.cardResult;
    }

    public createCard(){

    }
}
