import type { CSSProperties, JSX } from 'react';

type BrandMarkTileProps = {
  className?: string;
  size?: number;
  style?: CSSProperties;
};

export function BrandMarkTile({ className, size, style }: BrandMarkTileProps): JSX.Element {
  return (
    <svg
      viewBox='0 0 64 64'
      fill='none'
      aria-hidden='true'
      className={className}
      width={size}
      height={size}
      style={style}
    >
      <rect x='6' y='6' width='52' height='52' rx='16' fill='#0f2f5f' />
      <ellipse cx='22' cy='18' rx='14' ry='10' fill='#bae6fd' fillOpacity='0.72' />
      <ellipse cx='47' cy='18' rx='14' ry='10' fill='#a5b4fc' fillOpacity='0.55' />
      <rect x='6' y='6' width='52' height='52' rx='16' fill='url(#paint0_linear_brand_mark_tile)' />
      <rect x='7' y='7' width='50' height='50' rx='15' fill='white' fillOpacity='0.12' />
      <rect x='12' y='12' width='40' height='40' rx='11' fill='white' fillOpacity='0.05' />
      <rect x='12' y='12' width='40' height='40' rx='11' stroke='white' strokeOpacity='0.12' />
      <path
        d='M16 36.5h9.2l5-10 7 15.5 5-8.5H48'
        stroke='white'
        strokeOpacity='0.95'
        strokeWidth='3.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx='25.2' cy='36.5' r='1.8' fill='#cffafe' />
      <circle cx='37.2' cy='42' r='1.8' fill='#bfdbfe' />
      <circle cx='42.2' cy='33.5' r='1.8' fill='#e0e7ff' />
      <defs>
        <linearGradient
          id='paint0_linear_brand_mark_tile'
          x1='12'
          y1='8'
          x2='55'
          y2='58'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#082f49' />
          <stop offset='0.52' stopColor='#1d4ed8' />
          <stop offset='1' stopColor='#4f46e5' />
        </linearGradient>
      </defs>
    </svg>
  );
}
