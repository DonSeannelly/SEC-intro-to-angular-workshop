import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private users = [
    { name: 'Sean', position: 'President' },
    { name: 'Kevin', position: 'VPE' },
    { name: 'Andrew', position: 'VPR' },
    { name: 'Sabina', position: 'VPPR' },
    { name: 'Adam', position: 'Secretary' }
  ];
  constructor() { }

  /**
   * Returns the collection of users as an array of JSON objects to 
   * 
   * @returns the collection of users as any array 
   */
  public getUsers() {
    return this.users;
  }
}
