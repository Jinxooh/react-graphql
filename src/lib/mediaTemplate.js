import { css } from 'styled-components';

const sizes = {
  small: 376,
  medium: 768,
  large: 1024,
  huge: 1200,
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
