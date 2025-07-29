import { html } from 'lit';

export const iconGrid = (size = 24, color = 'var(--primary-color)') => html`<svg
  fill=${color}
  width=${size}
  height=${size}
  viewBox="0 0 32 32"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  stroke="${color}"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0" />

  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <g id="SVGRepo_iconCarrier">
    <title>grid</title>
    <path
      d="M8 12h4v-4h-4v4zM14 12h4v-4h-4v4zM20 8v4h4v-4h-4zM8 18h4v-4h-4v4zM14 18h4v-4h-4v4zM20 18h4v-4h-4v4zM8 24h4v-4h-4v4zM14 24h4v-4h-4v4zM20 24h4v-4h-4v4z"
    />
  </g>
</svg>`;

export const iconBlock = (
  size = 24,
  color = 'var(--primary-color)'
) => html`<svg
  width=${size}
  height=${size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0" />

  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <g id="SVGRepo_iconCarrier">
    <path
      d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
      fill=${color}
    />
    <path
      d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
      fill=${color}
    />
    <path
      d="M3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z"
      fill=${color}
    />
  </g>
</svg>`;

export const iconClose = (size = 20, color = 'var(--primary-color)') => html`
  <svg
    width="${size}"
    height="${size}"
    viewBox="0 0 20 20"
    fill="none"
    aria-label="Close"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="5"
      y1="5"
      x2="15"
      y2="15"
      stroke="${color}"
      stroke-width="2"
      stroke-linecap="round"
    />
    <line
      x1="15"
      y1="5"
      x2="5"
      y2="15"
      stroke="${color}"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
`;

export const iconSearch = (
  size = 24,
  color = 'var(--primary-color)'
) => html`<svg
  slot="icon"
  width=${size}
  height=${size}
  fill="none"
  stroke=${color}
  stroke-width="2"
  viewBox="0 0 24 24"
>
  <circle cx="11" cy="11" r="7" />
  <line x1="16" y1="16" x2="21" y2="21" />
</svg>`;
