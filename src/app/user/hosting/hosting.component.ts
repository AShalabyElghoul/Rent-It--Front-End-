import { Component, OnInit } from '@angular/core';
import { HostAddDto } from '../../Types/HostAddDto'; 
import { UserService } from '../../services/user.service'; 
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { attributeObject } from '../../Types/attributeObject'; 
import { placeTypeDto } from '../../Types/placeTypeDto'; 
import { propertyTypeDto } from '../../Types/propertyTypeDto';
import { GovernorateDto } from '../../Types/GovernorateDto';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrl: './hosting.component.css',
})
export class HostingComponent {
  images: any;

  OnSelectedImages(e: any) {
    this.images = e.target.files;
    console.log(this.images);
  }

  attrubutesToAddDtoOptions: attributeObject[] = [
    { id: 1, name: 'WiFi' },
    { id: 2, name: 'Washer' },
    { id: 3, name: 'Extra Pilows and Blankets' },
    { id: 4, name: 'Iron' },
    { id: 5, name: 'TV' },
    { id: 6, name: 'Air conditioning' },
    { id: 7, name: 'Heating' },
    { id: 8, name: 'Carbon Monoxide Alarm' },
    { id: 9, name: 'Kitchen Essintionals' },
    { id: 10, name: 'Outdoor Dining Area' },
    { id: 12, name: 'BBQ Grill' },
    { id: 13, name: 'Security cameras' },
    { id: 14, name: 'Smoke Alarm' },
    { id: 15, name: 'Free Parking' }
  ];
  attrubutesToAddDto: number[] = this.attrubutesToAddDtoOptions.map(
    (obj) => obj.id
  );

  placeTypes: placeTypeDto[] = [
    { id: 1, name: 'Room' },
    { id: 2, name: 'Entire Hoom' },
  ];
  PlaceType_ID: number[] = this.placeTypes.map((obj) => obj.id);

  propertyTypes: propertyTypeDto[] = [
    { id: 1, name: 'Entire House' },
    { id: 2, name: 'Private Room' },
    { id: 3, name: 'Shared Room' },
    { id: 4, name: 'Villa' },
    { id: 5, name: 'Condo' },
    { id: 6, name: 'TownHouse' },
    { id: 7, name: 'Cotage/Cabin' },
    { id: 8, name: 'Bangalow' },
    { id: 9, name: 'Charet' },
    { id: 10, name: 'Farm Stay' },
    { id: 11, name: 'Boat/Yacht' },
    { id: 12, name: 'Tree House' },
    { id: 13, name: 'Yurt' },
    { id: 14, name: 'Tent/Campsite' },
    { id: 15, name: 'Iglo' },
  ];
  PropetyTypeId: number[] = this.propertyTypes.map((obj) => obj.id);

  Governorates: GovernorateDto[] = [
    { id: 1, name: 'Cairo' },
    { id: 2, name: 'Alexandrai' },
    { id: 3, name: 'Giza' },
    { id: 4, name: 'Shubra El-Kheima' },
    { id: 5, name: 'Port Said' },
    { id: 6, name: 'Suez' },
    { id: 7, name: 'Luxor' },
    { id: 8, name: 'Asyut' },
    { id: 9, name: 'Aswan' },
    { id: 10, name: 'Damietta' }
  ];
  GovernateId: number[] = this.Governorates.map((obj) => obj.id);

  HostingForm: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.HostingForm = this.fb.group({
      Property_Name: ['', Validators.required],
      Nighly_Price: [, Validators.required],
      Description: ['', Validators.required],
      Nums_Guests: [, Validators.required],
      Nums_Beds: [, Validators.required],
      Nums_Bathrooms: [, Validators.required],
      Nums_Bedrooms: [, Validators.required],
      Street: ['', Validators.required],
      City: ['', Validators.required],
      Building_no: [, Validators.required],
      Building_name: ['', Validators.required],
      District_name: ['', Validators.required],
      Location_url: ['', Validators.required],
      GovernateId: [, Validators.required],
      PlaceType_ID: [, Validators.required],
      PropetyTypeId: [, Validators.required],
      imgs: [[]],
      attrubutesToAddDto: [[]],
    });
  }

  submitData() {
    let fd = new FormData();
    fd.append('Property_Name', this.HostingForm.value.Property_Name);
    fd.append('Nighly_Price', this.HostingForm.value.Nighly_Price);
    fd.append('Description', this.HostingForm.value.Description);
    fd.append('Nums_Guests', this.HostingForm.value.Nums_Guests);
    fd.append('Nums_Beds', this.HostingForm.value.Nums_Beds);
    fd.append('Nums_Bathrooms', this.HostingForm.value.Nums_Bathrooms);
    fd.append('Nums_Bedrooms', this.HostingForm.value.Nums_Bedrooms);
    fd.append('Street', this.HostingForm.value.Street);
    fd.append('City', this.HostingForm.value.City);
    fd.append('Building_no', this.HostingForm.value.Building_no);
    fd.append('Building_name', this.HostingForm.value.Building_name);
    fd.append('District_name', this.HostingForm.value.District_name);
    fd.append('Location_url', this.HostingForm.value.Location_url);
    fd.append('GovernateId', this.HostingForm.value.GovernateId);
    fd.append('PlaceType_ID', this.HostingForm.value.PlaceType_ID);
    fd.append('PropetyTypeId', this.HostingForm.value.PropetyTypeId);
    Array.from(this.images).forEach((f: any) => {
      fd.append('imgs', f);
    });
    Array.from(this.HostingForm.value.attrubutesToAddDto).forEach((attr:any)=>{
      fd.append('attrubutesToAddDto',attr);
    });
    
    this.userService.submitHostRequest(fd).subscribe((response) => {
      console.log('Request host added successfully', response);
    });
  }
  onFileSelected(event: any) {
    this.HostingForm.patchValue({ imgs: event.target.files });
  }
}

//  property: HostAddDto = {
//     Property_Name: this.HostingForm.value.Property_Name,
//     Nighly_Price: this.HostingForm.value.Nighly_Price!,
//     Description: this.HostingForm.value.Description!,
//     City: this.HostingForm.value.City!,
//     Location_url: this.HostingForm.value.Location_url!,
//     Nums_Beds: this.HostingForm.value.Nums_Beds!,
//     Nums_Bathrooms: this.HostingForm.value.Nums_Bathrooms!,
//     Nums_Bedrooms: this.HostingForm.value.Nums_Bedrooms!,
//     Street: this.HostingForm.value.Street!,
//     Building_no: this.HostingForm.value.Building_no!,
//     Building_name: this.HostingForm.value.Building_name!,
//     District_name: this.HostingForm.value.District_name!,
//     imgs:this.HostingForm.value.imgs!,
//     attrubutesToAddDto:this.HostingForm.value.attrubutesToAddDto!,
//     Nums_Guests: this.HostingForm.value.Nums_Guests!,
//     GovernateId: this.HostingForm.value.GovernateId!,
//     PlaceType_ID: this.HostingForm.value.PlaceType_ID!,
//     PropetyTypeId: this.HostingForm.value.PropetyTypeId!
//   };
