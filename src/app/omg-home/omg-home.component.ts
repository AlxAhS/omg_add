import { Component, OnInit } from '@angular/core';
import { OmgFormComponent } from './omg-form/omg-form.component';
import { OmgPdfComponent } from './omg-pdf/omg-pdf.component';
import { AppModule } from '../app.module';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-omg-home',
  templateUrl: './omg-home.component.html',
  styles: [
  ]
})
export class OmgHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
}
