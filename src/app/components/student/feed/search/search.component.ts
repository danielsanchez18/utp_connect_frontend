import { Component } from '@angular/core';
import { LucideAngularModule, Search, SlidersHorizontal } from 'lucide-angular';

@Component({
  selector: 'component-student-feed-search',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './search.component.html',
})
export class ComponentStudentFeedSearch {

  readonly Search = Search;
  readonly SlidersHorizontal = SlidersHorizontal;

}
