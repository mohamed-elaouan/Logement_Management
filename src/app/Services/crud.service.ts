import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}
  getAllLogements(): Observable<any> {
    return this.http.get('http://localhost:3000/locations');
  }
  getLogementById(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/locations/${id}`);
  }
  DeletebyId(id: number): Observable<any> {
    console.log('DDDD' + id);
    return this.http.delete(`http://localhost:3000/locations/${id}`);
  }
  //Reload Traitement
  private reloadSubject = new Subject<void>();
  reload$ = this.reloadSubject.asObservable();
  triggerReload(): void {
    this.reloadSubject.next();
  }
}
