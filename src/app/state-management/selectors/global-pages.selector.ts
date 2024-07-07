import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalPageState } from '../states/global-pages.state';


export const LoadingGlobalSelector = createFeatureSelector<GlobalPageState>('globalPages');

const _loadingGlobal = (state: GlobalPageState) => state.isloading;
const _url = (state: GlobalPageState) => state.url;
const _plan = (state: GlobalPageState) => state.plan;


export const isLoadingGlobal = createSelector(LoadingGlobalSelector, _loadingGlobal);
export const url = createSelector(LoadingGlobalSelector, _url);
export const plan = createSelector(LoadingGlobalSelector, _plan);