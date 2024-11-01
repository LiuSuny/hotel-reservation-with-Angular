import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations : Reservation[] = [];

  private apiUrl = 'http://localhost:3001';

  // constructor() {
  //    let savedReservations = localStorage.getItem("reservations");
  //    this.reservations = savedReservations? JSON.parse(savedReservations) : [];
  //  }

  constructor(private http: HttpClient) {}

   //CRUD OPERATION
  getReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }

   getReservation(id: string):Observable<Reservation[]> {
    //return this.reservations.find(res => res.id === id);
    return this.http.get<Reservation[]>(this.apiUrl + '/reservation/'+id);
  }

  addReservation(reservation: Reservation): Observable<void> {
   
    //reservation.id = Date.now().toString();
    //return this.http.post<Reservation[]>(this.apiUrl + '/reservation/'+id);
   // this.reservations.push(reservation);
    //localStorage.setItem("reservations", JSON.stringify(this.reservations));

    return this.http.post<void>(this.apiUrl + '/reservation', reservation);
  }

  deleteReservation(id: string): Observable<void> {
    // let index = this.reservations.findIndex(res => res.id === id);
    // this.reservations.splice(index, 1)
    //localStorage.setItem("reservations", JSON.stringify(this.reservations));

    return this.http.delete<void>(this.apiUrl + '/reservation/'+ id);
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    // let index = this.reservations.findIndex(res => res.id === id);
    // this.reservations[index] = updatedReservation;
   // localStorage.setItem("reservations", JSON.stringify(this.reservations));

   return this.http.put<void>(this.apiUrl + '/reservation/'+id, updatedReservation);
  }
  
}