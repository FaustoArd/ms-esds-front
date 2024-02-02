import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogTemplateComponent } from 'src/app/component/dialog_template/dialog-template/dialog-template.component';
import { AddressCompleteResultResponse } from 'src/app/model/addressCompleteResultResponse';
import { Customer } from 'src/app/model/customer';
import { StreetAndNumber } from 'src/app/model/streetAndNumber';
import { AddressService } from 'src/app/service/address.service';
import { CustomerService } from 'src/app/service/customer.service';
import { DialogService } from 'src/app/service/dialog.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent {

 streetAndNumber!:StreetAndNumber;
 customer!:Customer;
  addressCompleteResultResponse:AddressCompleteResultResponse[]= [];
addressCompleteSelected!:string;


  constructor(private formBuilder: FormBuilder, private addressService: AddressService,
    private customerService:CustomerService, private snackBarService:SnackBarService,
     private dialogService:DialogService) { }

  customerFormBuilder = this.formBuilder.group({
   
    name: ['', Validators.required],
    socialName: ['', Validators.required],
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
createCustomer():void{
  
   this.customer = new Customer();
    this.customer = Object.assign(this.customer,this.customerFormBuilder.value);
    this.customer.address = Object.assign(this.addressFormBuilder.value);
    this.customer.address.gMapsFullname = this.addressCompleteSelected;
    console.log(this.customer.address)
    this.customerService.createCustomer(this.customer).subscribe({
      next:(customerData)=>{
        this.snackBarService.openSnackBar('Cliente guardado' + ' ' + customerData.name ,'Cerrar',4000);
      },
      error:(errorData)=>{
        this.snackBarService.openSnackBar(errorData,'Cerrar',3000);
      }
    });
  
}





  get name() {
    return this.customerFormBuilder.controls.name;
  }
  get socialName() {
    return this.customerFormBuilder.controls.socialName;
  }
  get type() {
    return this.customerFormBuilder.controls.type;
  }
  get cuit() {
    return this.customerFormBuilder.controls.cuit
  }
  get email() {
    return this.customerFormBuilder.controls.email
  }
  get phone(){
    return this.customerFormBuilder.controls.phone;
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
