import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../service/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService : UserService, private fb : FormBuilder) { }
  updateTxt='';
  alertProfileCSSClass='alert d-none';
  resp:any=[];
  userAddress:any=[];
  showAddress=true;
  userForm = this.fb.group({
    id:['',[Validators.required]],
    username:['',[Validators.required]],
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['',[Validators.required]],
    mobileNumber:['',[Validators.required]]
  });

  userAddressForm = this.fb.group({
    id:['',[]],
	  state:['',[Validators.required]],
	  pincode:['',[Validators.required]],
    addressLine1:['',[Validators.required]],
    addressLine2:['',[Validators.required]],
    addressType:['',[Validators.required]]
  });
  ngOnInit(): void {
    this.getUserDetails();
  }
  getUserDetails() {
    this.userService.getUserProfileDetails().subscribe(data =>{
      this.resp = data;
      // console.log(this.resp);
      if(this.resp.id){
        this.userAddress = this.resp.userAddresses;
        this.userForm.controls['id'].setValue(this.resp.id);
        this.userForm.controls['username'].setValue(this.resp.username);
        this.userForm.controls['firstName'].setValue(this.resp.firstName);
        this.userForm.controls['lastName'].setValue(this.resp.lastName);
        this.userForm.controls['email'].setValue(this.resp.email);
        this.userForm.controls['mobileNumber'].setValue(this.resp.mobileNumber);
      }
    });
  }

  onSubmitUpdateUser(){
    this.userService.updateUserDetails(this.userForm.value).subscribe(data=>{
      this.resp = data;
      console.log(this.resp);
      if(this.resp.code == 200){
        this.alertProfileCSSClass="alert alert-success";
        this.updateTxt="User profile succesfully updated.";
      }else{
        this.alertProfileCSSClass="alert alert-danger";
        this.updateTxt="User profile not updated."
      }
    },
    error=>{
      console.log(error);
      this.alertProfileCSSClass="alert alert-danger";
      this.updateTxt="User profile not updated."
    });
  }

  onSubmitUserAddress(){
    

      this.userService.addUserAddress(this.userAddressForm.value).subscribe(data=>{
        this.resp = data;
        if(this.resp){
          this.userAddress = this.resp;
          console.log(this.userAddress);  
          this.showAddress = true;
          this.alertProfileCSSClass="alert alert-success";
          this.updateTxt="User address succesfully updated.";
        }else{
          this.alertProfileCSSClass="alert alert-danger";
          this.updateTxt="User address not updated."
        }
      },
      error=>{
        console.log(error);
        this.alertProfileCSSClass="alert alert-danger";
        this.updateTxt="User address not updated.";
      });
  }

  addAddrBtn(){
    this.showAddress = false;

  }

  editUserAddress(userAddress){
    console.log(userAddress);
    this.userAddressForm.controls['id'].setValue(userAddress.id);
    this.userAddressForm.controls['state'].setValue(userAddress.state);
    this.userAddressForm.controls['pincode'].setValue(userAddress.pincode);  
    this.userAddressForm.controls['addressType'].setValue(userAddress.addressType);
    this.userAddressForm.controls['addressLine1'].setValue(userAddress.addressLine1);
    this.userAddressForm.controls['addressLine2'].setValue(userAddress.addressLine2);
    this.showAddress = false;
  }


}
