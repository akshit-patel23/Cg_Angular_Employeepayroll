import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
    selector:'app-employee-list',
    templateUrl: 'employee-list.component.html',
    styleUrls: ['./app.component.css']
})
export class EmployeeListComponent implements OnInit {
    data: any[] = [];
  
    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
      this.fetchData();
    }
  
    fetchData() {
      this.http.get("http://localhost:8080/employees/all")
        .subscribe((data: any) => {
          this.data = data;
        });
    }
  
    delete(id: number) {
      this.http.delete(`http://localhost:8080/employees/delete/${id}`)
        .subscribe(() => {
          this.fetchData(); 
        });
    }
  }
