import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';
import { TripCard } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';


@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],            
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css'],
  providers: [TripData]
})

export class TripListing {

  trips!: Trip[];
  message: string = '';

  constructor(
    private tripDataService: TripData, 
    private router: Router,
    private authenticationService: Authentication) {
    console.log('trip-listing constructor');
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

    public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
          next: (value: any) => {
            this.trips = value;
            if(value.length > 0)
            {
              this.message = 'There are ' + value.length + ' trips available.';
            }
            else{
              this.message = 'There were no trips retireved from the database';
            }
            console.log(this.message);
          },
          error: (error: any) => {
            console.log('Error: ' + error);
          }
    })
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}