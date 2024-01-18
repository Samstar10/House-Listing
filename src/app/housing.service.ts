import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    },
    {
      id: 1,
      name: 'Test Home 2',
      city: 'Test city 2',
      state: 'ST 2',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    },
    {
      id: 2,
      name: 'Test Home 3',
      city: 'Test city 3',
      state: 'ST 3',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    },
    {
      id: 3,
      name: 'Test Home 4',
      city: 'Test city 4',
      state: 'ST 4',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Test Home 5',
      city: 'Test city 5',
      state: 'ST 5',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Test Home 6',
      city: 'Test city 6',
      state: 'ST 6',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    },
    {
      id: 6,
      name: 'Test Home 7',
      city: 'Test city 7',
      state: 'ST 7',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    },
    {
      id: 7,
      name: 'Test Home 8',
      city: 'Test city 8',
      state: 'ST 8',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    },
    {
      id: 8,
      name: 'Test Home 9',
      city: 'Test city 9',
      state: 'ST 9',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    },
    {
      id: 9,
      name: 'Test Home 10',
      city: 'Test city 10',
      state: 'ST 10',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    }
  ]

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}
