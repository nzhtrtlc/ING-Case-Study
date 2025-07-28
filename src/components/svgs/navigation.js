import { html } from 'lit';

export const iconPrev = (size = 24, color = 'var(--primary-color)') => html`
  <svg
    width="${size}"
    height="${size}"
    viewBox="0 0 20 20"
    fill="none"
    aria-label="Previous"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline
      points="13 4 7 10 13 16"
      stroke="${color}"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`;

export const iconNext = (size = 24, color = 'var(--primary-color)') => html`
  <svg
    width="${size}"
    height="${size}"
    viewBox="0 0 20 20"
    fill="none"
    aria-label="Next"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline
      points="7 4 13 10 7 16"
      stroke="${color}"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`;
