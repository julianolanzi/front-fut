import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  // Salvar token com data de expiração de 6 minutos
  saveToken(token: string): void {
    const now = new Date();
    const expiration = new Date(now.getTime() + 6 * 60 * 1000); // 6 minutos
    const tokenObject = {
      value: token,
      expiration: expiration.toISOString()
    };
    localStorage.setItem('authToken', JSON.stringify(tokenObject));
  }
  // Verificar se o token ainda é válido
  isTokenValid(): boolean {
    const tokenString = localStorage.getItem('authToken');
    if (!tokenString) {
      console.log('token invalido');
      return false;
    }

    const tokenObject = JSON.parse(tokenString);
    const expirationDate = new Date(tokenObject.expiration);

    if (new Date() > expirationDate) {
      console.log('token expirado');
      localStorage.removeItem('authToken');
      return false;
    }

    return true;
  }

  // Obter o token (se válido)
  getToken(): string | null {

    if (this.isTokenValid()) {
      console.log('token valido');
      const tokenObject = JSON.parse(localStorage.getItem('authToken')!);
      return tokenObject.value;
    }
    return null;
  }


}
