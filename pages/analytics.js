// utils/analytics.js

import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-0PE0RPD6G8');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
