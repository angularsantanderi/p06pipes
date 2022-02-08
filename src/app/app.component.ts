import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto: string = 'ciudad de Madrid';
  id: any = 23;
  hoy: any = new Date();
  importe: number = 12356.678;
  aciertos: number = 0.097456;

  actor: any = {
    nombre: 'Robert',
    apellidos: 'De Niro',
    edad: 75
  }

  actrizObservable: Observable<any> = new Observable(observer => {
    observer.next({
      nombre: 'Jessica',
      apellidos: 'Chanstain',
      edad: 45
    })
  })

  cantidad: number = 14564.3598543;
  decimales: number = 2;

  ngOnInit() {
    this.id = '000000' + this.id;
    console.log(this.actrizObservable);
  }

  setDecimales(decimales: number): void {
    if (this.decimales >= 0 && this.decimales <= 10) {
      this.decimales += decimales;
    }
  }

}
