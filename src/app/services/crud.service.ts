import { Injectable } from '@angular/core';
//importamos angular firestore y angular collection
import {AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { ROUTER_CONFIGURATION } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // creamos un alias para el AngularFireStore, en este caso se llamara AFS

  constructor(private afs: AngularFirestore) {
    //Esta impresion es opcional, la agrego para confirmar que el servicio esta funcionando
    console.log('Service CRUD on!');
  }

  //C.R.U.D en esta parte es dinde vamos a crear cada una de las operaciones basícas
  //Create, Read, Update, Delete

  //Crea un nuevo paciente
  public createPatient(data: {
    nombre: string,
    documento: string,
    ciudad: string,
    url: string
  }) {
    return this.afs.collection('patients').add(data);
  }

  //obtener un paciente
  public getPatient(documentId: string){
    return this.afs.collection('patients').doc(documentId).snapshotChanges();
  }

  //obtener todos los pacientes 
  public getPatients(){
    return this.afs.collection('patients').snapshotChanges();
  }

  //Actualizar un paciente
  public updatePatient(documentId: string, data: {
    nombre?: string,
    documento?: string,
    ciudad?: string,
    url?: string
  }) {
    return this.afs.collection('patients').doc(documentId).set(data);
  }

  //eliminar un paciente
  public deletePatient(documentId: string) {
    return this.afs.collection('patients').doc(documentId).delete();
  }

 }
