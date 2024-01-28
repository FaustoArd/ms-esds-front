import { Component,TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogTemplateComponent } from 'src/app/component/dialog_template/dialog-template/dialog-template.component';
import { AddressCompleteResultResponse } from 'src/app/model/addressCompleteResultResponse';
import { Provider } from 'src/app/model/provider';
import { StreetAndNumber } from 'src/app/model/streetAndNumber';
import { AddressService } from 'src/app/service/address.service';
import { DialogService } from 'src/app/service/dialog.service';
import { ProviderService } from 'src/app/service/provider.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-provider-new',
  templateUrl: './provider-new.component.html',
  styleUrls: ['./provider-new.component.css']
})
export class ProviderNewComponent {

  streetAndNumber!:StreetAndNumber;
 provider!:Provider;
  addressCompleteResultResponse:AddressCompleteResultResponse[]= [];
addressCompleteSelected!:string;

  constructor(private providerService:ProviderService,private snackBarService:SnackBarService,
    private dialogService:DialogService, private addressService:AddressService,private formBuilder:FormBuilder){}



    providerFormBuilder = this.formBuilder.group({
   
      socialName: ['', Validators.required],
      fantasyName: ['', Validators.required],
      type: [''],
      cuit: [''],
      email: ['', Validators.required,Validators.email],
      phone: [''],
     
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
  createprovider():void{
    
    this.provider = new Provider();
    this.provider = Object.assign(this.provider,this.providerFormBuilder.value);
    this.providerService.createProvider(this.provider).subscribe({
        next:(providerData)=>{
          this.snackBarService.openSnackBar('Cliente guardado' ,'Cerrar',4000);
        },
        error:(errorData)=>{
          this.snackBarService.openSnackBar(errorData,'Cerrar',3000);
        }
      })
    
  }
  
  
  
  
  
   
    get socialName() {
      return this.providerFormBuilder.controls.socialName;
    }
    get fantasyName() {
      return this.providerFormBuilder.controls.fantasyName;
    }
    get type() {
      return this.providerFormBuilder.controls.type;
    }

    get cuit() {
      return this.providerFormBuilder.controls.cuit
    }
    get email() {
      return this.providerFormBuilder.controls.email
    }
    get phone(){
      return this.providerFormBuilder.controls.phone;
    }
    get street(){
      return this.addressFormBuilder.controls.street;
    }
    get houseNumber(){
      return this.addressFormBuilder.controls.houseNumber;
    }
  get gMapsFullName(){
      return this.addressFormBuilder.controls.gMapsFullname;
    }
    
}
