import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FortNight } from 'src/app/model/fortNight';
import { FortNightResponse } from 'src/app/model/fortNightResponse';
import { FortNightService } from 'src/app/service/fort-night.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-fort-night',
  templateUrl: './fort-night-new.component.html',
  styleUrls: ['./fort-night-new.component.css']
})
export class FortNightNewComponent {

  constructor(private fortNightService:FortNightService,private snackBarService:SnackBarService
    ,private formBuilder:FormBuilder){}

  fortNight!:FortNight;
  fortNightResponse!:FortNightResponse;


  fortNightFormBuilder = this.formBuilder.group({
    employeeId:[0],
    date:['',Validators.required],
    hoursQuantity:[0],
    extrasQuantity50:[0],
    extrasQuantity100:[0],
    fortNightDateText:['',Validators.required]
  });

  createFortNight(){
    if(this.fortNightFormBuilder.valid){
      this.fortNight = new FortNight();
      this.fortNight = Object.assign(this.fortNight,this.fortNightFormBuilder.value);
      this.fortNightService.createForthNight(this.fortNight).subscribe({
        next:(responseData)=>{
          this.fortNightResponse = responseData;
        },
        error:(errorData)=>{
          this.snackBarService.openSnackBar(errorData,'Cerrar',3000);
        }
      });
    }

  }
get employeeId(){
  return this.fortNightFormBuilder.controls.employeeId;
}
get date(){
  return this.fortNightFormBuilder.controls.date;
}
get hoursQuantity(){
  return this.fortNightFormBuilder.controls.hoursQuantity;
}
get extrasQuantity50(){
  return this.fortNightFormBuilder.controls.extrasQuantity50;
}
get extrasQuantity100(){
  return this.fortNightFormBuilder.controls.extrasQuantity100;
}
get fortNightDateText(){
  return this.fortNightFormBuilder.controls.fortNightDateText;
}

}
