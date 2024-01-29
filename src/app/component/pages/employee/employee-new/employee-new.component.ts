import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogTemplateComponent } from 'src/app/component/dialog_template/dialog-template/dialog-template.component';
import { Employee } from 'src/app/model/employee';
import { JobRole } from 'src/app/model/jobRole';
import { DialogService } from 'src/app/service/dialog.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private snackBarService:SnackBarService,
    private dialogService:DialogService,private formBuilder:FormBuilder){}

    jobRole!:JobRole;
    jobRoles:JobRole[]=[];
    employee!:Employee;
    employees:Employee[]=[];
  

    ngOnInit(): void {
        this.getAllJobRoles();
        this.getAllEmployees();
    }

    jobRoleFormBuilder = this.formBuilder.group({
      role:['', Validators.required],
      payHour:[Validators.required],
      payExtraHour50:[Validators.required],
      payExtraHour100:[Validators.required],
      prize:[Validators.required],
      holiday:[Validators.required]
    });

    employeeFormBuilder = this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      phone:['', Validators.required],
      email:['', Validators.required],
      dni:['', Validators.required],
      jobRoleId:[]
    });

    private matDialoRef!: MatDialogRef<DialogTemplateComponent>

    openDialogJobRoleCreate(template: TemplateRef<any>){
      
      this.matDialoRef = this.dialogService.openDialogCreation({
        template
      });
      this.matDialoRef.afterClosed().subscribe();
      

  }
  createJobRole(){
    if(this.jobRoleFormBuilder.valid){
      this.jobRole = new JobRole();
      this.jobRole = Object.assign(this.jobRole,this.jobRoleFormBuilder.value);
      this.employeeService.createJobRole(this.jobRole).subscribe({
        next:(jobRoleData)=>{
          this.snackBarService.openSnackBar('Se creo el rol de trabajo: ' + jobRoleData,' Cerrar',3000);
        },
        error:(errorData)=>{
          this.snackBarService.openSnackBar(errorData,'Cerrar',3000);
        }
      });
    }else{
      this.snackBarService.openSnackBar('Revise los datos y vuelva a guardar','Cerrar',3000);
    }
    
  }

  openDialogEmployeeCreate(template: TemplateRef<any>){
      
    this.matDialoRef = this.dialogService.openDialogCreation({
      template
    });
    this.matDialoRef.afterClosed().subscribe();
    
  }

  createEmployee(){
    if(this.employeeFormBuilder.valid){
      this.employee = new Employee();
      this.employee = Object.assign(this.employee,this.employeeFormBuilder.value);
      this.employeeService.createEmployee(this.employee).subscribe({
        next:(employeeData)=>{
          this.snackBarService.openSnackBar('Se creo el empleado: ' + employeeData,' Cerrar',3000);
        },
        error:(errorData)=>{
          this.snackBarService.openSnackBar(errorData,'Cerrar',3000);
        }
       });
    }else{
      this.snackBarService.openSnackBar('Revise los datos y vuelva a guardar','Cerrar',3000);
    }
  }



  getAllJobRoles(){
    this.employeeService.findAllJobRoles().subscribe({
      next:(jobRolesData)=>{
        this.jobRoles = jobRolesData;
      },
      error:(errorData)=>{
        this.snackBarService.openSnackBar(errorData,'Cerrar',3000)
      }
    });
  }
  getAllEmployees(){
    this.employeeService.findAllEmployees().subscribe({
      next:(employeesData)=>{
        this.employees = employeesData;
      },
      error:(errorData)=>{
        this.snackBarService.openSnackBar(errorData,'Cerrar',3000);
      }
    });
  }

  get role(){
    return this.jobRoleFormBuilder.controls.role;
}
get payHour(){
  return this.jobRoleFormBuilder.controls.payHour;
}
get payExtraHour50(){
  return this.jobRoleFormBuilder.controls.payExtraHour50;
}
get payExtraHour100(){
  return this.jobRoleFormBuilder.controls.payExtraHour100;
}
get prize(){
  return this.jobRoleFormBuilder.controls.prize;
}
get holiday(){
  return this.jobRoleFormBuilder.controls.holiday;
}
get name(){
  return this.employeeFormBuilder.controls.name;
}
get lastname(){
  return this.employeeFormBuilder.controls.lastname;
}
get phone(){
  return this.employeeFormBuilder.controls.phone;
}
get email(){
  return this.employeeFormBuilder.controls.email;
}
get dni(){
  return this.employeeFormBuilder.controls.dni;
}
get jobRoleId(){
  return this.employeeFormBuilder.controls.jobRoleId;
}



}
