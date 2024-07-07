import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { url } from '../../state-management/selectors/global-pages.selector';
import { GlobalState } from '../../state-management/states/global.state';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  url$: Observable<string> = this.store.pipe(select(url));
  constructor(private store: Store<GlobalState>) {

  }
}
