import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() { 
    this.profile = {
      studentid: '',
      name: '',
      gender: '',
      birthyear: 0,
      email: '',
      phone: '',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
    this.profile.studentid = "B6014728";
    this.profile.name= "Keangkai Buaban";
    this.profile.gender = "Male";
    this.profile.birthyear = 1999;
    this.profile.email = "b6014728@g.sut.ac.th";
    this.profile.phone = "0902789787";
    this.profile.img = 'https://api.adorable.io/avatars/285/abott@adorable.io.png';
    this.profile.address  = 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand';
  }
  
  showaddress(){
    alert(this.profile.address);
  }

}
