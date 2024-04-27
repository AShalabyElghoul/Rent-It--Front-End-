import { Component, OnInit } from '@angular/core';
import { RequestHost } from '../../Types/Request Host';
import { RequestRent } from '../../Types/Request Rent';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CLient } from '../../Types/CLient';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.css'
})
export class AdminDetailsComponent implements OnInit {
  Admin: CLient | null = null;
RejectRentHandler(id: number,e: MouseEvent) {
  e.preventDefault();
  this.Userservice.RejectRentByAdmin(id).subscribe({
    next:() =>{
     this.AllRequestRent=this.AllRequestRent.filter(obj => obj.id !==id)
    },
  })
}
AcceptRentHandler(id: number,e: MouseEvent) {
  e.preventDefault();
  this.Userservice.AcceptRentByAdmin(id).subscribe({
    next:() =>{
     this.AllRequestRent=this.AllRequestRent.filter(obj => obj.id !==id)
    },
  })
}
RejectHostHandler(id: number,e: MouseEvent) {
  e.preventDefault();
  this.Userservice.RejectHostByAdmin(id).subscribe({
    next:() =>{
     this.AllrequestsHost=this.AllrequestsHost.filter(obj => obj.id !==id)
    },
  })
}
AccepHosttHandler(id: number,e: MouseEvent) {
  e.preventDefault();
  this.Userservice.AcceptHostByAdmin(id).subscribe({
    next:() =>{
     this.AllrequestsHost=this.AllrequestsHost.filter(obj => obj.id !==id)
    },
  })
}
  
  AllrequestsHost: RequestHost[]=[];
  AllRequestRent: RequestRent[]=[];  
  constructor( private route: ActivatedRoute,
    private Userservice: UserService,
    private router: Router) {}
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id')!;
    this.Userservice.getById().subscribe({
      next: (c) => {
        console.warn('Data', c);
        this.Admin = c;
      }
    })
    this.Userservice.GetAllHostRequests().subscribe({
      next:(c)=>{
        this.AllrequestsHost=c;
      }
    })
    console.log("All request Host",this.AllrequestsHost); 

    this.Userservice.GetAllRentRequests().subscribe({
      next:(c)=>{
        console.warn("data",c)
        this.AllRequestRent=c;
    console.log("All request rent",this.AllRequestRent); 
      }
    })
  }

}

