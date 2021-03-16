import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }


  public inputValidatorOnlyNumbers(event: any) {
    const pattern = /^[0-9]+$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g,"");//si se copia reemplaza el valor
      
    }
  }
}
