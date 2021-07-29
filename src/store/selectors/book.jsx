import { createSelector } from 'reselect';

export const bookSelector = state =>
  state.book;

export const helpModalSelector = createSelector(
  bookSelector,
  state => state.helpModal,
);

export const getBlocksSelector = createSelector(
  bookSelector,
  state => state.blocks,
);

export const defaultError = createSelector(bookSelector, state => state.error);
