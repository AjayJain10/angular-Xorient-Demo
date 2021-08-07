import { Component, VERSION } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  hotelForm: FormGroup;
  ratingValues: Array<number> = [1,2,3,4,5];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.hotelForm = this.fb.group({
      hotelName: ['', Validators.compose([Validators.required, Validators.min(8)])],
      rating: [null, Validators.required],
      description: []
    });
  }

}
