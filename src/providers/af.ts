import {Injectable, NgZone} from "@angular/core";
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import {UserProvider} from  './user/user'


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
   
  user: USER = {} as USER;

  menuIcon = "https://firebasestorage.googleapis.com/v0/b/merp-64b26.appspot.com/o/diceIcon.png?alt=media&token=a7bcb3e7-0cd1-414c-a403-c192095e16fa"; 

  public selectedCharacter: FirebaseListObservable<any>;


  constructor(private ngZone: NgZone,public db: AngularFireDatabase,public  afAuth: AngularFireAuth, public userProvider:UserProvider) {
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
  getProfilePic(uid:string){
    return this.db.object('users/'+uid+'/photoURL');
  }

  setCurrentUser(user){
                    this.user= this.userProvider.getUser(user.uid)
                    
                    this.currentUser=user.uid;
             
                    return (this.currentUser!=undefined&&this.currentUser!=null)
               
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