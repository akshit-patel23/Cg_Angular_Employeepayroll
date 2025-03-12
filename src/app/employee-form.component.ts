import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], 
  templateUrl: './employee-form.component.html',
  styleUrls: ['./app.component.css']
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;


  constructor(private http: HttpClient, private fb: FormBuilder,private router: Router) {
    this.employeeForm = this.fb.group({
      name: [''],
      gender: [''],
      email: [''],
      department: [[]],
      salary: [''],
      startDate: [''],
      profilePic: [''],
      note: [''],
      position: ['']
    });
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      const formData = {
        ...this.employeeForm.value,
        department: typeof this.employeeForm.value.department === 'string'
          ? [this.employeeForm.value.department]  
          : this.employeeForm.value.department
      };
  
      console.log("Final Data Sent:", JSON.stringify(formData)); 
  
      this.http.post("http://localhost:8080/employees/add", formData).subscribe({
        next: (response) => {
          console.log("Employee added successfully!", response);
          alert("Employee added successfully!");
          this.router.navigate(['/']); 
        },
        error: (error) => {
          console.error("Error adding employee", error);
          alert("Failed to add employee.");
        }
      });
    } else {
      alert("Please fill all required fields correctly");
    }
  }
  
}
