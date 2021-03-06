import type { ComputedRef } from 'vue';

import type { Nullable, Optional } from '#/helpers';

export interface RouteItem {
  name?: string | symbol;
  path: string;
  meta: {
    breadcrumb?: string;
  };
}

export type QBreadcrumbsPropRoute = Nullable<RouteItem[]>;

export interface QBreadcrumbsProps {
  linkComponent: Nullable<string>;
  last: Nullable<string>;
  route: QBreadcrumbsPropRoute;
}

export interface QBreadcrumbsInstance {
  pushTo: (arg0: {
    name?: string | symbol;
    path?: string;
  }) => Optional<string | Record<'name', string | symbol>>;
  breadcrumbs: ComputedRef<RouteItem[]>;
  lastCrumb: ComputedRef<string>;
}
