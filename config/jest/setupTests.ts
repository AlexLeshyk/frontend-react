import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import ResizeObserver from 'resize-observer-polyfill';

global.ResizeObserver = ResizeObserver;
