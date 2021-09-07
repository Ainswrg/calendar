import React from 'react';
import { Login, Event } from '../pages';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

// eslint-disable-next-line no-shadow
export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/',
}

export const publicRoutes: IRoute[] = [{ path: RouteNames.LOGIN, exact: true, component: Login }];

export const privateRoutes: IRoute[] = [{ path: RouteNames.EVENT, exact: true, component: Event }];
