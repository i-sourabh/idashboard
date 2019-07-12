import { getDashboardBookmarkStatus } from './get-dashboard-bookmark-status.helper';
import { getDashboardAccess } from './get-dashboard-access.helper';
import { User } from '@iapps/ngx-dhis2-http-client';
import { Dashboard } from '../models/dashboard.model';
import { standardizeDashboardItem } from './standardize-dashboard-item.helper';

export function standardizeDashboard(
  dashboard: any,
  currentUser: User
): Dashboard {
  if (!dashboard) {
    return null;
  }
  return {
    ...dashboard,
    favorite: dashboard.hasOwnProperty('favorite')
      ? dashboard.favorite
      : getDashboardBookmarkStatus(
          dashboard.favorites || dashboard.bookmarks,
          currentUser ? currentUser.id : ''
        ),
    dashboardItems: (dashboard.dashboardItems || []).map(
      standardizeDashboardItem
    ),
    access: dashboard.access || getDashboardAccess(dashboard, currentUser)
  };
}