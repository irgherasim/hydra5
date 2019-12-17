import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
  constructor() { }

  login(email: string, password: string): Observable<boolean> {
    return Observable.create(observer => {
      const timeoutId = setTimeout(() => {
        email === 'client' || email === 'bank' ? observer.next(true) : observer.next(false);
        observer.complete();
      }, 500);
      return () => clearTimeout(timeoutId);
    });
  }
}

