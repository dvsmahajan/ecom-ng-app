import { UserService } from './../../service/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService) { }
  isLoggedIn=false;
  username='';
  userForm=this.fb.group({
    username: ['', [Validators.required]],
    password: ['',[Validators.required]]
  });
  isLoginModalOpen = false;
  loginButtonCSS = 'indicator indicator--trigger--click';
  // loginButtonCSS1 = 'indicator indicator--trigger--click indicator--open';
  ngOnInit(): void {
      this.checkIsLoggedIn();
  }
  checkIsLoggedIn() {
    let isActiveUser = localStorage.getItem('isActiveUser');
    if(isActiveUser){
      let username = localStorage.getItem('username');
      this.isLoggedIn = true;
      this.username = username;
    }
  }

  onClickProfile(){
    this.isLoginModalOpen = !this.isLoginModalOpen;
    if(this.isLoginModalOpen){
      this.loginButtonCSS='indicator indicator--trigger--click indicator--open';
      
    }else{
      this.loginButtonCSS = 'indicator indicator--trigger--click'; 
    }
  }

  closeAllHeaderPopup(){
    this.loginButtonCSS = 'indicator indicator--trigger--click'; 
    this.isLoginModalOpen = false;
  }

  resp:any = [];
  loginErrMsg='';
  onSubmitLoginDetails(){
    console.log(this.userForm.value);
    this.userService.checkAuthentication(this.userForm.value).subscribe(data=>{
      this.resp = data;
      if(this.resp.isActiveUser){
        this.loginErrMsg = "";
        localStorage.setItem('token',this.resp.token);
        localStorage.setItem('username',this.resp.username);
        localStorage.setItem('isActiveUser',this.resp.isActiveUser);
        this.isLoggedIn = this.resp.isActiveUser;
        this.username = this.resp.username;
      }else{
        this.loginErrMsg = "Invalid Username/Password."
      }
    },
    error=>{
      this.loginErrMsg = "Invalid Username/Password."
    });
  }
}
