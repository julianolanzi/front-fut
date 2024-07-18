import { Component } from '@angular/core';
import { AccountHeaderComponent } from '../account-header/account-header.component';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [AccountHeaderComponent],
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent {

}
