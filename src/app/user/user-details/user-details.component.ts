import { Component, OnInit } from '@angular/core';
import { CLient } from '../../Types/CLient';
import { RequestRent } from '../../Types/Request Rent';
import { RequestHost } from '../../Types/Request Host';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  selectedFile: File | null = null;
 

  RejectHandler(id: number,e:MouseEvent) {
    e.preventDefault();
    this.Userservice.RejectByHost(id).subscribe({
      next: () => {
        this.UserRequestRentForMyProperty = this.UserRequestRentForMyProperty.filter(obj => obj.id !== id);
      },
    });
  }
  AcceptHandler(id: number,e:MouseEvent): void {
    e.preventDefault();
    this.Userservice.AcceptByHost(id).subscribe({
      next: (res) => {
        console.log(res);
        // for (let item of this.UserRequestRentForMyProperty){
        //   if(item.id==id){
        //     this.UserRequestRentForMyProperty.slice(item);
        //   }
        // }
        this.UserRequestRentForMyProperty = this.UserRequestRentForMyProperty.filter(obj => obj.id !== id);

      },
    });

  }
  constructor(
    private route: ActivatedRoute,
    private Userservice: UserService,
    private router: Router
  ) {}
  user: CLient | null = null;
  UserRequestsHost: RequestHost[] = [];
  UserRentRequests: RequestRent[] = [];
  UserRequestRentForMyProperty: RequestRent[] = [];
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id')!;
    this.Userservice.getById().subscribe({
      next: (c) => {
        if(c.role == "User"){

        console.warn('Data', c);
        this.user = c;
        console.log('client', this.user);
        for (let item of this.user.requestsRentForMyProps) {
          if (item.hostId == this.user.id && item.hostStateID ==1) {
            this.UserRequestRentForMyProperty.push(item);
          }
        }
        console.log(
          'my Rent properties',
          this.UserRequestRentForMyProperty.length
         );
        for (let item of this.user.requestsRent) {
          if (item.userId == this.user.id) {
            this.UserRentRequests.push(item);
          }
        }
        reorderUserRentRequests(this.UserRentRequests);
        console.log('my request rent ', this.UserRentRequests.length);
        for (let item of this.user.requestsHost) {
          this.UserRequestsHost.push(item);
        }
        reorderUserHostRequests(this.UserRequestsHost);
      }else{
        this.router.navigate(['User/Admin']);
      }
      },
      error: () => {},
    });
  }
}
function reorderUserRentRequests(itemsList: RequestRent[]): void {
  itemsList.sort((a, b) => a.requestStateID - b.requestStateID);
}
function reorderUserHostRequests(itemsList: RequestHost[]): void {
  itemsList.sort((a, b) => a.request_StateID - b.request_StateID);
}
