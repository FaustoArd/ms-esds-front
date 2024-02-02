import { Component, OnInit } from '@angular/core';
import { FortNightReponse } from 'src/app/model/fortNightResponse';
import { FortNight } from 'src/app/model/fortNight';
import { FortNightService } from 'src/app/service/fort-night.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-fort-night-complete',
  templateUrl: './fort-night-complete.component.html',
  styleUrls: ['./fort-night-complete.component.css']
})
export class FortNightCompleteComponent implements OnInit {
fortNight!:FortNight;
fortNightResponse!:FortNightReponse;

constructor(private fortNightService:FortNightService,private snackBarService:SnackBarService){}

  ngOnInit(): void {
      
  }

  findFortNightbyId(id:number):void{
    this.fortNightService.findfortNightById(id).subscribe({
      next:(responseData)=>{
        this.fortNightResponse = responseData;
      },
      error:(errorData)=>{
        this.snackBarService.openSnackBar(errorData,'Cerrar',3000);
      }
    })
  }
}
