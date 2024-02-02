import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogTemplateComponent } from 'src/app/component/dialog_template/dialog-template/dialog-template.component';
import { AddressCompleteResultResponse } from 'src/app/model/addressCompleteResultResponse';
import { Enterprise } from 'src/app/model/enterprise';
import { StreetAndNumber } from 'src/app/model/streetAndNumber';
import { AddressService } from 'src/app/service/address.service';
import { DialogService } from 'src/app/service/dialog.service';
import { EnterpriseService } from 'src/app/service/enterprise.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-enterprise-new',
  templateUrl: './enterprise-new.component.html',
  styleUrls: ['./enterprise-new.component.css']
})
export class EnterpriseNewComponent {

  streetAndNumber!:StreetAndNumber;
enterprise!:Enterprise;
addressCompleteResultResponse:AddressCompleteResultResponse[]= [];
addressCompleteSelected!:string;

  constructor(private enterPriseService:EnterpriseService,private snackBarService:SnackBarService,
    private addressService:AddressService,private formBuilder:FormBuilder,private dialogService:DialogService){}

enterpriseFormBuilder = this.formBuilder.group({
 socialName:['',Validators.required],
 fantasyName:['',Validators.required],
 responsible:['', Validators.required],
 email:['',Validators.required],
 startDate:['', Validators.required],
 cuit:['', Validators.required],
 cuil:['', Validators.required]
});

addressFormBuilder = this.formBuilder.group({
  street: ['', Validators.required],
  houseNumber: ['', Validators.required],
  gMapsFullname:[this.addressCompleteSelected,Validators.required]
});

getFullAddressFromMaps():void{
  this.streetAndNumber = new StreetAndNumber();
  this.streetAndNumber = Object.assign(this.streetAndNumber,this.addressFormBuilder.value);

  var streetAndNumber = this.streetAndNumber.street + ' ' + this.streetAndNumber.houseNumber;
  this.addressService.searchAddressInMaps(streetAndNumber).subscribe({
    next:(fullAddressResponseData)=>{
      this.addressCompleteResultResponse = fullAddressResponseData;
    },
    error:(errorData)=>{
      this.snackBarService.openSnackBar(errorData,'Cerrar', 3000);
  },
 
  });

}
  private matDialoRef!: MatDialogRef<DialogTemplateComponent>

openDialogAddressComplete(template: TemplateRef<any>){
  this.getFullAddressFromMaps();
  this.matDialoRef = this.dialogService.openDialogCreation({
    template
  });
  this.matDialoRef.afterClosed().subscribe();
  
}

selectFullAddress(fullAddress:string):void{
  this.addressCompleteSelected = fullAddress;
}

createEnterprise():void{

  this.enterprise = new Enterprise();
    this.enterprise = Object.assign(this.enterprise,this.enterpriseFormBuilder.value);
    this.enterprise.address = Object.assign(this.addressFormBuilder.value);
    this.enterprise.address.gMapsFullname = this.addressCompleteSelected;
    console.log(this.enterprise.address)
    this.enterPriseService.createEnterprise(this.enterprise).subscribe({
      next:(enterPriseData)=>{
        this.snackBarService.openSnackBar('Empresa guardada' + ' ' + enterPriseData ,'Cerrar',4000);
      },
      error:(errorData)=>{
        this.snackBarService.openSnackBar(errorData,'Cerrar',3000);
      }
    });
  
}


get socialName(){
  return this.enterpriseFormBuilder.controls.socialName;
}
get fantasyName(){
  return this.enterpriseFormBuilder.controls.fantasyName;
}
get responsible(){
  return this.enterpriseFormBuilder.controls.responsible;
}
get email(){
  return this.enterpriseFormBuilder.controls.email;
}
get startDate(){
  return this.enterpriseFormBuilder.controls.startDate;
}
get cuit(){
  return this.enterpriseFormBuilder.controls.cuit;
}
get cuil(){
  return this.enterpriseFormBuilder.controls.cuil;
}
get street(){
  return this.addressFormBuilder.controls.street;
}
get houseNumber(){
  return this.addressFormBuilder.controls.houseNumber;
}
get gMapsFullname(){
  return this.addressFormBuilder.controls.gMapsFullname;
}
}
