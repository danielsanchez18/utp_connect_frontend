import { Component } from '@angular/core';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'component-student-feed-search',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './search.component.html',
})
export class ComponentStudentFeedSearch {

  readonly Search = Search;

}
