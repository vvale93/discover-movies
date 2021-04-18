import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpinnerService } from '../services/spinner.service'

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  loadingSub: BehaviorSubject<boolean>;

  constructor(private spinnerService: SpinnerService) {
    this.loadingSub = this.spinnerService.isLoading;
   }

  ngOnInit(): void {
  }

}
