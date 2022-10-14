import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-omg-form',
  templateUrl: './omg-form.component.html',
  styles: [
  ]
})

export class OmgFormComponent implements OnInit {

  constructor(public formBuilder : FormBuilder) { }
  
  registerForm = this.formBuilder.group({
    date:'',
    clientName: '',
    idClient:'',
    value:'',
    product:'',
  });
  
  ngOnInit(): void {
  }

  submit(){
    console.log(this.registerForm.value);
  }

  refresh(){
    this.registerForm.patchValue({
      date:'',
      clientName:'',
      idClient:'',
      value:'',
      product:'',
    });
  }
 
  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function ( ) {
        return true;
      }
    };

  }
}
