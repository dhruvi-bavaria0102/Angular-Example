import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployees(){
    return[
      {"id":1, "name": "Dhruvi", "age" : 21},
      {"id":2, "name": "Shivangi", "age" : 21},
      {"id":3, "name": "Vaishvi", "age" : 22},
      {"id":4, "name": "Ayushi", "age" : 21},
    ]
  }
}
