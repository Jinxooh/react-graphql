import { css } from 'styled-components';

const SMALL = 376;
const MEDIUM = 768;
const LARGE = 1024;
const HUGE = 1024;

const sizes = {
  phone: SMALL,
  tablet: MEDIUM,
  desktop: LARGE,
  huge: HUGE,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
