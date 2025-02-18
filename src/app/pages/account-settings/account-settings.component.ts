import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.chekCurrentTheme();
  }
  // tslint:disable-next-line:typedef
  changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
  }
}
