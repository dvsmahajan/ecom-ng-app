import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  
  addUserAddress(userAddress: any) {
    const httpOptions = {
      headers: new HttpHeaders({

        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    }
     return this.http.post(`http://localhost:8080/api/v1/user/addUsrAddr`,userAddress,httpOptions); 
  }

  getUserProfileDetails() {
    const httpOptions = {
      headers: new HttpHeaders({

        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get('http://localhost:8080/api/v1/user/getProfileDetails', httpOptions  );
  }
  
  checkAuthentication(userData: any) {
    return this.http.post('http://localhost:8080/api/v1/user/signIn',userData);
  }

  constructor(private http: HttpClient) { }
}
