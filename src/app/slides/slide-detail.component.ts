import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISlide } from './slide';
import { SlideService } from './slide.service';

@Component({
  templateUrl: './slide-detail.component.html',
  styleUrls: ['./slide-detail.component.css']
})
export class SlideDetailComponent implements OnInit {
  pageTitle: string = 'Slide Detail';
  errorMessage: string;
  slide: ISlide;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _slideService: SlideService) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getSlide(id);
    }
  }

  getSlide(id: number) {
    this._slideService.getSlide(id).subscribe(
      slide => this.slide = slide,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/slides']);
  }

}
