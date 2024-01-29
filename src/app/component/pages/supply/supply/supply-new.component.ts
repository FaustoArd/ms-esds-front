import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Provider } from 'src/app/model/provider';
import { Supply } from 'src/app/model/supply';
import { ProviderService } from 'src/app/service/provider.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';
import { SupplyService } from 'src/app/service/supply.service';

@Component({
  selector: 'app-supply',
  templateUrl: './supply-new.component.html',
  styleUrls: ['./supply-new.component.css']
})
export class SupplyNewComponent implements OnInit {

  constructor(private supplyService:SupplyService,private snackBarService:SnackBarService
    ,private formBuilder:FormBuilder,private providerService:ProviderService){}

  supply!:Supply;
  supplies:Supply[]= [];
  providers:Provider[] = [];
  providerNameResult!:string;

  ngOnInit(): void {
      this.getAllProviders();
  }

  supplyFormBuilder = this.formBuilder.group({
    type:['', Validators.required],
    brand:['',Validators.required],
    description:['', Validators.required],
    providerId:[],
    
    price:[0,Validators.required]
  });

  createSupply(){
   this.supply = new Supply();
    this.supply = Object.assign(this.supply,this.supplyFormBuilder.value);
    this.providers.filter(p => p.id==this.supply.providerId).map(p => this.providerNameResult= p.socialName);
    this.supply.providerName = this.providerNameResult;
    console.log(this.supply)
    this.supplyService.createSupply(this.supply).subscribe({
      next:(supplyMessage)=>{
        this.snackBarService.openSnackBar('Se creo el material: ' + supplyMessage + ' ','Cerrar',3000);
      },
      error:(errorData)=>{
        this.snackBarService.openSnackBar(errorData,'Cerrar',3000);
      }
    });
  }


  getAllSupplies(){
    this.supplyService.getAllSupplies().subscribe({
      next:(suppliesData)=>{
        this.supplies = suppliesData;
      },
      error:(errorData)=>{
        this.snackBarService.openSnackBar(errorData,'Cerrar',3000);
      }
    });
  }

  getAllProviders(){
    this.providerService.getAllProviders().subscribe({
      next:(providersData)=>{
        this.providers = providersData;
      },
      error:(errorData)=>{
        this.snackBarService.openSnackBar(errorData,'Cerrar',3000);
      }
    });
  }

  get type(){
    return this.supplyFormBuilder.controls.type;
  }
  get brand(){
    return this.supplyFormBuilder.controls.brand;
  }
  get description(){
    return this.supplyFormBuilder.controls.description;
  }
 
  get price(){
    return this.supplyFormBuilder.controls.price;
  }
  get providerId(){
    return this.supplyFormBuilder.controls.providerId;
  }
 
}
