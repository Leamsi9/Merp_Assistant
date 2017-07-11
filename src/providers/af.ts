import {Injectable, NgZone} from "@angular/core";
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';



export interface USER {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
    characters : FirebaseListObservable<any[]>;
};

@Injectable()
export class AF {
  
  public displayName: string;
  public email: string;
  public currentUser:string = null ;
  private userSubject: Subject<any>;
  
  user: USER = {} as USER;

  public selectedCharacter: FirebaseListObservable<any>;


  constructor(private ngZone: NgZone,public db: AngularFireDatabase,public  afAuth: AngularFireAuth) {
     db.database.goOnline;
     afAuth.authState;
     }


  zoneRun() {
        this.ngZone.run( () => {} );
  }

  getCharacters(){
//    this.userSubject.next(this.currentUser);
    return this.user.characters;
  }

  setCurrentUser(user){
                    this.user.providerId = user.providerId;
                    this.user.uid = user.uid;
                    this.user.displayName =user.displayName;
                    this.user.email = user.email;
                    this.user.photoURL = user.photoURL;
                    this.currentUser=user.uid;
                    this.user.characters = this.db.list('users'+this.currentUser+'/characters')
                    // console.log("user   logged in: ", this.user);
             
                    return (this.currentUser!=undefined&&this.currentUser!=null)
               
  }

  loadCharacterList(){
  
    }

  saveCharacter(key:string,stats,perception,health,movement,weapons,generals,subtrefuge,magic,defense,name){  
      let keyAtEnd = "";
      if(key==""){
             var characterCreate = {
                name:name,
                user:this.currentUser,
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
         keyAtEnd = this.user.characters.push(characterCreate).key;
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
      this.user.characters.update(key,characterUpdate);
    }
    return keyAtEnd;
  }

  deleteCharacter(char:any){
    this.user.characters.remove(char);
  }

}