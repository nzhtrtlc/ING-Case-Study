import { html } from 'lit';

export const flagEN = (size = 24) => html`
  <svg
    width="${size}"
    height="${(size * 20) / 32}"
    viewBox="0 0 60 36"
    aria-label="United Kingdom flag"
  >
    <rect width="60" height="36" fill="#012169" />
    <g>
      <polygon points="0,0 25,0 60,21 60,36 35,36 0,15" fill="#FFF" />
      <polygon points="60,0 35,0 0,21 0,36 25,36 60,15" fill="#FFF" />
      <polygon points="0,0 27,18 0,36" fill="#C8102E" />
      <polygon points="60,0 33,18 60,36" fill="#C8102E" />
    </g>
    <rect x="24" width="12" height="36" fill="#FFF" />
    <rect y="12" width="60" height="12" fill="#FFF" />
    <rect x="26" width="8" height="36" fill="#C8102E" />
    <rect y="14" width="60" height="8" fill="#C8102E" />
  </svg>
`;

export const flagTR = (size = 24) => html`
  <svg
    width="${size}"
    height="${(size * 20) / 32}"
    viewBox="0 0 60 36"
    aria-label="Turkey flag"
  >
    <rect width="60" height="36" fill="#E30A17" />
    <circle cx="25" cy="18" r="10" fill="#fff" />
    <circle cx="28" cy="18" r="8" fill="#E30A17" />
    <circle cx="32" cy="18" r="2.5" fill="#fff" />
    <polygon points="38,18 44,21 44,15" fill="#fff" />
  </svg>
`;
