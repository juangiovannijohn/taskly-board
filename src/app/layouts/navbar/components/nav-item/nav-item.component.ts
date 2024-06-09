import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input() itemMenu =  {
    icon: '',
    url: '',
    title: '',
    order: 0,
    actionIcon: '',
    isActive: true
  }

  safeIcon: SafeHtml= '';
  safeIconAction: SafeHtml = ''
  constructor(private sanitizer: DomSanitizer){  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itemMenu']) {
      this.safeIcon = this.sanitizer.bypassSecurityTrustHtml(this.itemMenu.icon);
      this.safeIconAction = this.sanitizer.bypassSecurityTrustHtml(this.itemMenu.actionIcon);
    }}

}
