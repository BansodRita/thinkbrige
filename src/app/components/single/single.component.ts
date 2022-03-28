import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudServiceService } from 'src/app/services/crud-service.service'
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  userInfo: any = {};
  constructor(private apiservice: CrudServiceService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.apiservice.getcurrent(this.router.snapshot.params.id).subscribe((data) => {
      this.userInfo = data;
      console.log(this.userInfo);
    });
  }
}
