import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

interface SubItem {
_id:string;
title:string
}

interface MenuItem {
  icon: string;
  url: string;
  title: string;
  order: number;
  actionIcon: string;
  subItems: SubItem[]; // Asegúrate de que el tipo sea SubItem[]
  isActive: boolean;
}

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent implements OnInit{
  @Input() itemMenu: MenuItem =  {
    icon: '',
    url: '',
    title: '',
    order: 0,
    subItems: [],
    actionIcon: '',
    isActive: true
  }

  safeIcon: SafeHtml= '';
  safeIconAction: SafeHtml = ''
  constructor(private sanitizer: DomSanitizer){ 

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itemMenu']) {
      this.safeIcon = this.sanitizer.bypassSecurityTrustHtml(this.itemMenu.icon);
      this.safeIconAction = this.sanitizer.bypassSecurityTrustHtml(this.itemMenu.actionIcon);
    }}
ngOnInit(): void {
  // console.log('item navbar', this.itemMenu)
}
}
