import { Component, OnInit } from '@angular/core';

import { ISlide } from './slide';
import { SlideService } from './slide.service';



@Component({
    templateUrl: './slide-list.component.html',
    styleUrls: ['./slide-list.component.css']
})
export class SlideListComponent implements OnInit {
    pageTitle: string = 'Slide List';
    //imageWidth: number = 50;
    //imageMargin: number = 2;
    showImage: boolean = true;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredSlides = this.listFilter ? this.performFilter(this.listFilter) : this.slides;
    }

    filteredSlides: ISlide[];
    slides: ISlide[] = [];

    constructor(private _slideService: SlideService) {

    }

    //onRatingClicked(message: string): void {
    //    this.pageTitle = 'Slide List: ' + message;
    //}

    performFilter(filterBy: string): ISlide[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.slides.filter((slide: ISlide) =>
              slide.slideName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    //toggleImage(): void {
    //    this.showImage = !this.showImage;
    //}

    ngOnInit(): void {
        this._slideService.getSlides()
                .subscribe(slides => {
                    this.slides = slides;
                    this.filteredSlides = this.slides;
                },
                    error => this.errorMessage = <any>error);
    }
}
