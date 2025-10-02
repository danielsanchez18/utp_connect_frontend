import { Component } from '@angular/core';
import { LucideAngularModule, Info, User, AtSign } from 'lucide-angular';

@Component({
  selector: 'page-register',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './register.component.html',
})
export class PageRegister {

  readonly User = User;
  readonly AtSign = AtSign;

}
