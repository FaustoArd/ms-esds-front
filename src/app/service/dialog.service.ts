import { Injectable } from '@angular/core';
import { DialogTemplateData } from '../model/diaogTemplateData';
import { MatDialog } from '@angular/material/dialog';
import { DialogTemplateComponent } from '../component/dialog_template/dialog-template/dialog-template.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog:MatDialog) { }

  openDialogCreation(data:DialogTemplateData){
    return this.matDialog.open(DialogTemplateComponent,{ data });
  }

 
}
