import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../../store/app.reducers';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-menu-item-desktop',
  templateUrl: './dashboard-menu-item-desktop.component.html',
  styleUrls: ['./dashboard-menu-item-desktop.component.css']
})
export class DashboardMenuItemDesktopComponent implements OnInit {

  @Input() dashboardMenuItem: any;
  showEditForm: boolean;
  showDashboardItemDropdown: boolean;
  showDeleteBlock: boolean;
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.showEditForm = false;
    this.showDashboardItemDropdown = false;
    this.showDeleteBlock = false;
  }

  get showName() {
    return this.dashboardMenuItem.details.showName && !this.showEditForm && !this.showDeleteBlock;
  }

  ngOnInit() {
  }

  toggleEditForm(e?) {

    if (e) {
      e.stopPropagation();
    }

    this.showEditForm = !this.showEditForm;
    this.showDashboardItemDropdown = false;
  }

  showDropdown(e) {
    e.stopPropagation();
    this.showDashboardItemDropdown = true;
    return false;
  }

  toggleDeleteForm(e) {
    e.stopPropagation();
    this.showDeleteBlock = !this.showDeleteBlock;
    this.showDashboardItemDropdown = false;
  }

  hideDashboardNotificationIcon() {
    // this.store.dispatch(new HideDashboardMenuNotificationIcon(this.dashboardMenuItem));
  }
}