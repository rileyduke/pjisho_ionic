import { Injectable } from '@angular/core'; 
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
 
import { GLOBALS } from '../helper/global';
import { KeywordResult } from '../models/KeywordResult';
 
@Injectable()
export class Database {
    // database object
    private db: SQLiteObject;

    // options
    private options: any;

    constructor(private globals: GLOBALS, private sqlite: SQLite) { 
        this.initialize();
    }

    // initialize database object. it can be accessed later.
    private initialize():void {
        this.options  = {
            name: this.globals.getDatabaseName(),
            location: 'default',
            createFromLocation: 1
        };
        this.sqlite.create(this.options).then((db: SQLiteObject) => {
   
            this.db = db;
            var sql = 'create table IF NOT EXISTS `user` (username VARCHAR(255), password VARCHAR(255))';

            // init db
            this.db.executeSql(sql, {}).catch(e => "Error: " + JSON.stringify(e));

        }).catch(e => JSON.stringify(e));
    }

    public insertTest() {
        return new Promise((resolve, reject) => {
            let balanceQuery = "insert into user values ('test','test')";
            this.db.executeSql(balanceQuery, []).then((data) => {
                let balance = data.rows.item(0).sumofamount;
                // if we successfully obtain data - we resolve it, means it can be available via callback
                resolve(balance)
            }).catch((err)=>{ console.log(err); reject(err)}) // we deal with errors etc
        })
    }

    public getTest():Promise<void> {
        return new Promise((resolve, reject) => {
            let balanceQuery = "select top 1 from user";
            this.db.executeSql(balanceQuery, []).then((data) => {
                let balance = data.rows.item(0).sumofamount;
                // if we successfully obtain data - we resolve it, means it can be available via callback
                resolve(balance)
            }).catch((err)=>{ console.log(err); reject(err)}) // we deal with errors etc
        })
    
    }
}