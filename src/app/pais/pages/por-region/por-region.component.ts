import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    ` 
      button  {
        margin-right:5px;
      }
    `
  ]
})
export class PorRegionComponent  {
  
  regiones:string[]= ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva:string='';
  regionRta:Country[]=[];
  constructor(private paisService:PaisService) { }

  getClassCSS(region:string):string{
     return (region === this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary'
  }

  activarRegion(region:string){
    if(region === this.regionActiva){
      return;
    }
    this.regionRta=[];
    this.regionActiva=region;
 
   this.paisService.buscarRegion(region)
   .subscribe((resp:any)=> {

this.regionRta=resp;

   })
    //TODO hacer el llamado al servicio
  }

 
}
