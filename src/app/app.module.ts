import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerNewComponent } from './component/pages/customer/customer-new/customer-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatInputModule} from '@angular/material/input'
import { MatDialogModule} from '@angular/material/dialog'
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from '@angular/material/checkbox'
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/pages/home/home.component';
import { DialogTemplateComponent } from './component/dialog_template/dialog-template/dialog-template.component';
import { ProviderNewComponent } from './component/pages/provider/provider-new/provider-new.component';
import { SupplyNewComponent } from './component/pages/supply/supply/supply-new.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerNewComponent,
    NavbarComponent,
    HomeComponent,
    DialogTemplateComponent,
    ProviderNewComponent,
    SupplyNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
