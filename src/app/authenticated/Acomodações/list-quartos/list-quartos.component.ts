import { Component, OnInit } from '@angular/core';
import { QuartosService } from '../../../service/quartos.service';
import { Quarto } from '../../../Models/Quarto';

@Component({
  selector: 'app-list-quartos',
  templateUrl: './list-quartos.component.html',
  styleUrls: ['./list-quartos.component.css']
})
export class ListQuartosComponent implements OnInit {
  quartos: Quarto[] = [];

  constructor(private quartosService: QuartosService) { }

  ngOnInit() {
    this.quartosService.obterQuartos().subscribe((quartos: Quarto[]) => {
      this.quartos = quartos;
    });
  }
}
