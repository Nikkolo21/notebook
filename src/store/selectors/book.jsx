import { createSelector } from 'reselect';

export const bookSelector = state =>
  state.book;

export const helpModalSelector = createSelector(
  bookSelector,
  state => state.helpModal,
);

export const defaultError = createSelector(bookSelector, state => state.error);
