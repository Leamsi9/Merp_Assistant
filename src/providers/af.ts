import {Injectable, NgZone} from "@angular/core";
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';


@Injectable()
export class AF {
  
  public characters: FirebaseListObservable<any[]>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  public keyCharMap:[{key:string,char:any}];

  constructor(private ngZone: NgZone,public db: AngularFireDatabase,public  afAuth: AngularFireAuth) {
     db.database.goOnline;
     afAuth.authState;
     this.characters = this.db.list('characters');
    }


  zoneRun() {
        this.ngZone.run( () => {} );
    }
  

  saveCharacter(key:string,stats,perception,health,movement,weapons,generals,subtrefuge,magic,defense,name){  
      let keyAtEnd = "";
      if(key==""){
             var characterCreate = {
                name:name,
                email:this.email,
                stats:stats,
                perception:perception,
                health:health,
                movement:movement,
                weapons:weapons,
                generals:generals,
                subtrefuge:subtrefuge,
                magic:magic,
                defense:defense,
                timestamp:Date.now()
            }
         this.characters.push(characterCreate).then(item=>{
                keyAtEnd = item.key;
              })
      }else{
        keyAtEnd=key;
        var characterUpdate = {
          stats:stats,
          perception:perception,
          health:health,
          movement:movement,
          weapons:weapons,
          generals:generals,
          subtrefuge:subtrefuge,
          magic:magic,
          defense:defense,
          timestamp:Date.now()
      }
      this.characters.update(key,characterUpdate);
    }
    return keyAtEnd;
  }
}