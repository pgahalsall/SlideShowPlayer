import { NgModule } from '@angular/core';
import { SlideListComponent } from './slide-list.component';
import { SlideDetailComponent } from './slide-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SlideGuardService } from './slide-guard.service';
import { SlideService } from './slide.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'slides', component: SlideListComponent },
        { path: 'slides/:id',
          canActivate: [ SlideGuardService ],
          component: SlideDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    SlideListComponent,
    SlideDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    SlideService,
    SlideGuardService
  ]
})
export class SlideModule { }
