import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})

export class PatientsComponent implements OnInit {

  public patients = []; //aqui guardaremos todos los datos obtenidos de afs
  
  //renombraremos con un alias el servicio(buena practica el guion bajo el inicio )
  constructor(private _crudService: CrudService) { }

  ngOnInit() {
    this._crudService.getPatients().subscribe( (patientsSnapshot) => {
      this.patients = [];
      patientsSnapshot.forEach( (patientData: any) => {
        this.patients.push({
          id: patientData.payload.doc.id,
          data: patientData.payload.doc.data()
        });
      });
    });
  }

}
