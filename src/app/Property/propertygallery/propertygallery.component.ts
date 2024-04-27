import { Component } from '@angular/core';
import { PropertyList } from '../../Types/PropertyList';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-propertygallery',
  templateUrl: './propertygallery.component.html',
  styleUrl: './propertygallery.component.css',
})
export class PropertygalleryComponent {
  properties: PropertyList[] = [];
  filteredProperties: PropertyList[] = [];
  constructor(private PropertyServices: PropertyService) {
    // this.GetAllProperty();
  }

  // GetAllProperty(){
  //   this.PropertyServices.property().subscribe(result=>{
  //     console.warn("data",result);

  //     this.properties=result
  //   });
  // }

  ngOnInit(): void {
    this.PropertyServices.GetAllProperties().subscribe({
      next: (c) => {
        this.properties = c;
        this.filteredProperties = this.properties;
      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        console.log('Complete');
      },
    });
  }
  filterPropertyByType(type: string) {
    if (type == 'all') {
      this.filteredProperties = this.properties;
      // return this.filteredProperties;
    }
    this.filteredProperties = this.properties.filter((PropertyList) => {
      return PropertyList.property_Type.toLowerCase() == type.toLowerCase();
    });
    // return this.filteredProperties;
  }
}
