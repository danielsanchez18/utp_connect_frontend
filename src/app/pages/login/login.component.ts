import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Info, User } from 'lucide-angular';

@Component({
  selector: 'page-login',
  imports: [
    CommonModule,
    LucideAngularModule,
  ],
  templateUrl: './login.component.html',
})
export class PageLogin {

  readonly Info = Info;
  readonly User = User;

}
