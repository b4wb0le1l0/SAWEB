import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  data: {
    entry: boolean,
    r: number,
    x: number,
    y: number,
    timeOfCreated: string
  }[] = [];


  hit: any = {
    "r": 1,
    "x": 0,
    "y": 0
  }
  updateHit(newHit: any) {
    this.hit = newHit;
  }
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem("Authorization");
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    this.http.post("http://localhost:8080/api/v1/user/get-all", "", {headers}).subscribe(
      (res: any) =>{
        this.data = res;
        const table = document.getElementById('table_end');
        // @ts-ignore
        table.style.border = '1px solid black';
        this.data.forEach((item) => {
          // @ts-ignore
          const row = table.insertRow();
          // Create and insert cells with data
          const cell1 = row.insertCell();
          cell1.textContent = String(item.entry);
          const cell2 = row.insertCell();
          cell2.textContent = String(item.x);
          const cell3 = row.insertCell();
          cell3.textContent = String(item.y);
          const cell4 = row.insertCell();
          cell4.textContent = String(item.r);
          const cell5 = row.insertCell();
          cell5.textContent = item.timeOfCreated.substring(11, 19);
        });
      }
    )
  }

  addHit(){
    const token = localStorage.getItem("Authorization");
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    if (this.hit.y <= 5 && this.hit.y >= -3) {
      this.http.post("http://localhost:8080/api/v1/user/add-hit", this.hit, {headers}).subscribe(
        (res: any) => {
          const table = document.getElementById('table_end');
          // @ts-ignore
          const row = table.insertRow(1);
          // Create and insert cells with data
          const cell1 = row.insertCell();
          cell1.textContent = String(res.entry);
          const cell2 = row.insertCell();
          cell2.textContent = String(res.x);
          const cell3 = row.insertCell();
          cell3.textContent = String(res.y);
          const cell4 = row.insertCell();
          cell4.textContent = String(res.r);
          const cell5 = row.insertCell();
          cell5.textContent = res.timeOfCreated.substring(11, 19);
          // @ts-ignore
          document.getElementById("err").innerHTML = "";
        });
    } else {
      // @ts-ignore
      document.getElementById("err").innerHTML = "Y must be between -3 and 5";
    }
  }

  exit(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
