import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data = "your perfect banking partner"
  data1 = "enter your ac number"

  acno: any
  psw: any
  userDetails: any = {

    1000: { username: "anu", acno: 1000, password: "abc123", balance: 0 },
    1001: { username: "anamika", acno: 1001, password: "abc123", balance: 0 },
    1002: { username: "angel", acno: 1002, password: "abc123", balance: 0 },
    1003: { username: "agnel", acno: 1003, password: "abc123", balance: 0 }
  }

  //methods

  login() {

    var acnum = this.acno;
    console.log(acnum);
    console.log(typeof acnum);
    
    var psw = this.psw;
    var userDetails = this.userDetails;
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]["password"]) {
        alert('login success')
      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert('incorrect account number')
    }

  }

  acnoChange(event: any) {
   // console.log(event.target.value);
   this.acno=event.target.value

  }
  pswChange(event: any) {
    this.psw = event.target.value
    console.log(this.psw);

  }

}
