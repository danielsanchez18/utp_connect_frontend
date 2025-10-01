import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClipboardListIcon, House, Lightbulb, LucideAngularModule, NewspaperIcon, Bell, TrendingUp, User } from 'lucide-angular';

@Component({
  selector: 'component-shared-sidebar',
  imports: [
    LucideAngularModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
})
export class ComponentSharedSidebar {

  readonly House = House;
  readonly NewspaperIcon = NewspaperIcon;
  readonly ClipboardListIcon = ClipboardListIcon;
  readonly Lightbulb = Lightbulb;
  readonly Bell = Bell;
  readonly TrendingUp = TrendingUp;
  readonly User = User;

  links = [
    { href: "proyectos", text: "Proyectos", icon: ClipboardListIcon },
    { href: "ideas", text: "Semillero de Ideas", icon: Lightbulb },
    { href: "tendencias", text: "Tendencias", icon: TrendingUp },
    { href: "notificaciones", text: "Notificaciones", icon: Bell },
    { href: "Perfil", text: "Perfil", icon: User },
  ];

  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();

    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 1024;
  }


}
