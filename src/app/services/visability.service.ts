import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  private isVisibleSubject = new BehaviorSubject<boolean>(true);
  isVisible$ = this.isVisibleSubject.asObservable();
  constructor() { }


  toggleVisibility() {
    this.isVisibleSubject.next(!this.isVisibleSubject.value);
  }




}
