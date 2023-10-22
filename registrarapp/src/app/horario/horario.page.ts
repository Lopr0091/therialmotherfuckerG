import { Component, OnInit } from '@angular/core';
import { ApihorarioService } from '../apihorario.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  datos: any;
  datito :any;
  selectedDay: string = '';
  constructor(private ApihorarioService: ApihorarioService) { }

  ngOnInit() {
    this.ApihorarioService.getPosts().subscribe(data=>{
      this.datito = data;
      console.log("Datos completos:", data);
    })

  }
}