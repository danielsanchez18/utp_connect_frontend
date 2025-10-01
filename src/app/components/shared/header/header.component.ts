import { Component } from '@angular/core';
import { Bell, ChevronDown, ChevronUp, Cog, LogOut, LucideAngularModule, User, Users } from 'lucide-angular';

@Component({
  selector: 'component-shared-header',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './header.component.html',
})
export class ComponentSharedHeader {

  readonly Bell = Bell;
  readonly ChevronDown = ChevronDown;
  readonly ChevronUp = ChevronUp;

  readonly User = User;
  readonly Users = Users;
  readonly Cog = Cog;
  readonly LogOut = LogOut;

}
