import { ImageResponse } from 'next/og';

import { BrandMarkTile } from '@/components/brand-mark-tile';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default function Icon(): ImageResponse {
  return new ImageResponse(<BrandMarkTile size={64} />, size);
}
