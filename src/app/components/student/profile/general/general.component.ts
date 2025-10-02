import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Check, LucideAngularModule, Minus, X, ClipboardMinus, ArrowRightLeft, UserPlus, Folder, Lightbulb, Handshake } from 'lucide-angular';

@Component({
  selector: 'component-student-profile-general',
  imports: [
    LucideAngularModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './general.component.html',
})
export class ComponentStudentProfileGeneral {

  readonly Check = Check;
  readonly X = X;
  readonly Minus = Minus;

  readonly ClipboardMinus = ClipboardMinus;
  readonly ArrowRightLeft = ArrowRightLeft;

  readonly UserPlus = UserPlus;
  readonly Folder = Folder;
  readonly Lightbulb = Lightbulb;
  readonly Handshake = Handshake;



}
