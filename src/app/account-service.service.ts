import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of, ReplaySubject } from 'rxjs';
import { User } from 'src/models/user';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  baseUrl = "https://localhost:5001/User";
  headers : HttpHeaders;
  registerStatus : boolean = true;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  }
  login(model : any){
    //return this.http.post(this.baseUrl+ '/Login',JSON.stringify(model),{headers: this.headers}).subscribe(response => {localStorage.setItem('user',JSON.stringify(response)); this.setCurrentUser(response)})
    return this.http.post<User>(this.baseUrl+ '/Login',JSON.stringify(model),{headers: this.headers}).pipe(catchError(this.handleError('get user', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  log(arg0: string) {
    throw new Error('Method not implemented.');
  }


  setCurrentUser(user: User){
    this.currentUserSource.next(user);
    this.printCur();
  }

  printCur(){
    this.currentUser$.pipe(map((user : any) => console.log(user)))
  }

  logout() : void{
    localStorage.removeItem('user')
    this.currentUserSource.next(null);
  }

  async register(model : any) {
    this.http.post(this.baseUrl+"/Register",JSON.stringify(model),{headers: this.headers}).subscribe(response => {
    this.registerStatus = true;
     },error => {console.log(error); this.registerStatus = false}
     );
     //console.log('registrationstatus '+ this.registerStatus);
  }

  changeForm(status : boolean){
    this.registerStatus = status;
  }
}
