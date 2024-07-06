import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() { }


  public success(message: string, title?: any): void {
    this.showAlert(title, message, 'success');
  }
  public info(message: string, title?: any): void {
    this.showAlert(title, message, 'info');
  }
  public error(message: string, title?: any): void {
    this.showAlert(title, message, 'error');
  }

  public successTimer(message: string, title?: any, timer?: any): void {
    this.showAlertTimer(title, message, 'success', timer);
  }



  private showAlert(
    title: string,
    message: string,
    icon: SweetAlertIcon
  ): void {
    Swal.fire(title, message, icon);
  }

  private showAlertTimer(
    title: string,
    message: string,
    icon: SweetAlertIcon,
    timer: number,
  ): void {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      timer: timer,
      showConfirmButton: false,
    });
  }


}
