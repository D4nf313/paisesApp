import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  @Input() placeHolder:string='';
  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer:Subject<string> = new Subject;

  termino:string='';
  buscar(){
    console.log(this.termino)
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  
  }

  constructor() { }

  ngOnInit(){
    this.debouncer
    .pipe(
      debounceTime(300))   
    .subscribe(valor => {
     this.onDebounce.emit(valor);
    })   

  }

}
