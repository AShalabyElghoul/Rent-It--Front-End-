import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrl: './regestration.component.css'
})
export class RegestrationComponent implements OnInit {
  

  RegisterForm! : FormGroup

  constructor(
    private fb : FormBuilder , 
    private auth : AuthenticationService ,
    private router : Router){}

  ngOnInit(): void
   {
    this.RegisterForm = this.fb.group({
      FName: ['' , Validators.required ,  Validators.maxLength(15)],
      LName:['' , Validators.required ,  Validators.maxLength(15)],
      UserName:['' , Validators.required , Validators.maxLength(20)],
      Email:['' , Validators.required , Validators.email],
      Password:['' , Validators.required] })
  }



  registrationInProgress = false; // Add this variable
  onRegister()
  {
    if (this.registrationInProgress) 
      {
      // Throw an error or display a message here
      alert("This User Already Exist.");
      return;
    }
    console.log(this.RegisterForm.value);

    this.auth.SignUp(this.RegisterForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        this.router.navigate(['login'])
      }
    })
  }


  private validateAllFormFields(formgroup: FormGroup)
  {
    Object.keys(formgroup.controls).forEach(field=>{
      const control = formgroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true})
      }else if(control instanceof FormGroup){
       this.validateAllFormFields(control);
      }
    })
  }













  // RegisterForm! : FormGroup

  // constructor(
  //   private fb : FormBuilder , 
  //   private auth : AuthenticationService ,
  //   private router : Router){}

  // ngOnInit(): void
  //  {
  //   this.RegisterForm = this.fb.group({
  //     FName: ['' , Validators.required],
  //     LName:['' , Validators.required],
  //     UserName:['' , Validators.required],
  //     Email:['' , Validators.required],
  //     Password:['' , Validators.required], })
  // }

  // // onRegister(){
  // //   debugger;

  // //   if(this.RegisterForm.valid){
  // //     const registerDto  = new Object() as RegisterDto;
  // //     registerDto.FName =this.RegisterForm.value.FName,
  // //     registerDto.LName =this.RegisterForm.value.LName,
  // //     registerDto.UserName =this.RegisterForm.value.UserName,
  // //     registerDto.Email =this.RegisterForm.value.Email,
  // //     registerDto.Password =this.RegisterForm.value.Password,

  // //     this.auth.SignUp(registerDto).subscribe(
  // //       (response) => 
  // //       {
  // //      console.log(response)
  // //      this.router
          
         
  // //       },
  // //       (error) => {
  // //        console.log(error)
  // //       })
  // //     }
  // //   }

  // registrationInProgress = false; // Add this variable
  // onRegister() {
  //   if (this.registrationInProgress) 
  //     {
  //     // Throw an error or display a message here
  //     alert("This User Already Exist.");
  //     return;
  //   }
  //   console.log(this.RegisterForm.value);

  //   this.auth.SignUp(this.RegisterForm.value).subscribe({
  //     next:(res)=>{
  //       console.log(res)
  //       this.router.navigate(['login'])
  //     }
  //   })
  // }


  // private validateAllFormFields(formgroup: FormGroup){
  //   Object.keys(formgroup.controls).forEach(field=>{
  //     const control = formgroup.get(field);
  //     if(control instanceof FormControl){
  //       control.markAsDirty({onlySelf:true})
  //     }else if(control instanceof FormGroup){
  //      this.validateAllFormFields(control);
  //     }
  //   })
  //   }




  }
    // error: (err) => {
    //   console.error(err); // Log the error for debugging purposes
    //   alert(err?.error?.message || 'An error occurred during registration.'); // Provide user-friendly error message
    // }





















