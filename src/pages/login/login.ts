import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AF } from './../../providers/af';
import { HomePage } from './../../pages/home/home';


@Component({
    selector: 'login-page',
    templateUrl: 'login.html'
})

export class LoginPage implements OnInit {   
    error;

   public user:string;
   public password:string;
   public passwordConfirm:string;

   public userCreate:string;
   public passwordCreate:string;

    constructor(public afAuth: AngularFireAuth,public af: AF, public navCtrl:NavController) {
    }

    ngOnInit() { }
    onClickLogingWithUserAndPass(){
       
        this.afAuth.auth.signInWithEmailAndPassword(this.user,this.password)
            .then(user =>  this.successHandler())
            .catch(e => this.errorHandler(e));
      
    }

    onClickLoginWithGoogle() {
          this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(() => this.successHandler())
            .catch(e => this.errorHandler(e));
    }

    onClickLoginWithFacebook() {
         if (this.passwordCreate==this.passwordConfirm) {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(() => this.successHandler())
            .catch(e => this.errorHandler(e));
              } else {
            this.error = "Password and Confirmation do not match"
        }
    }

    createUser(){
        this.afAuth.auth.createUserWithEmailAndPassword(this.userCreate,this.passwordCreate)
        .then(() =>   this.afAuth.auth.signInWithEmailAndPassword(this.userCreate,this.password)
            .then(() => this.successHandler()))
        .catch(e => this.errorHandler(e));
    }

    successHandler() {
       const authObserver = this.afAuth.authState.subscribe(user=>{
            if (user) {
                if(this.af.setCurrentUser(user)){
                this.navCtrl.setRoot(HomePage);
                authObserver.unsubscribe();
                }
                else {
                this.navCtrl.setRoot(LoginPage);
                authObserver.unsubscribe();
                 }
            }
        })
    //  this.af.loadCharacterList();
    //  this.navCtrl.setRoot(HomePage);
        }
    errorHandler(e) {
        console.log('error: ', e);
        this.error = e.message;
        this.af.zoneRun();
    }
}