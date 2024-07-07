import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { GlobalLoaderComponent } from '../../shared/global-loader/global-loader.component';
import { isLoadingGlobal } from '../../state-management/selectors/global-pages.selector';
import { GlobalState } from '../../state-management/states/global.state';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavbarComponent, SidebarComponent, GlobalLoaderComponent, AsyncPipe],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingGlobal));

  constructor(private store: Store<GlobalState>) {

  }
}
