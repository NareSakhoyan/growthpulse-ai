import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { getScoreTone, ScoreItem } from '@/components/landing/score-item';

const scoreItems = [
  { label: 'Acquisition', shortLabel: 'Acq', score: 65 },
  { label: 'Activation', shortLabel: 'Act', score: 71 },
  { label: 'Retention', shortLabel: 'Ret', score: 82 },
  { label: 'Revenue', shortLabel: 'Rev', score: 76 },
  { label: 'Referral', shortLabel: 'Ref', score: 58 },
  { label: 'SEO Health', shortLabel: 'SEO', score: 74 },
  { label: 'Paid Media Efficiency', shortLabel: 'Paid', score: 69 },
] as const;

const RADAR_LEVELS = [0.25, 0.5, 0.75, 1];
const RADAR_SIZE = 320;
const RADAR_CENTER = RADAR_SIZE / 2;
const RADAR_RADIUS = 108;

function getRadarPoint(angle: number, radius: number): { x: number; y: number } {
  return {
    x: RADAR_CENTER + Math.cos(angle) * radius,
    y: RADAR_CENTER + Math.sin(angle) * radius,
  };
}

function toPointString(points: readonly { x: number; y: number }[]): string {
  return points.map((point) => `${point.x},${point.y}`).join(' ');
}

export function GrowthScoreCard(): React.JSX.Element {
  const axisAngles = scoreItems.map(
    (_, index) => (Math.PI * 2 * index) / scoreItems.length - Math.PI / 2,
  );

  const gridPolygons = RADAR_LEVELS.map((level) =>
    toPointString(axisAngles.map((angle) => getRadarPoint(angle, RADAR_RADIUS * level))),
  );

  const dataPolygon = toPointString(
    scoreItems.map((item, index) =>
      getRadarPoint(axisAngles[index], (RADAR_RADIUS * item.score) / 100),
    ),
  );

  return (
    <Card className='border-white/10 bg-white/5 text-white shadow-none'>
      <CardHeader className='space-y-4'>
        <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
          <div className='space-y-2'>
            <div className='space-y-1'>
              <CardTitle className='text-base'>7-Dimension Growth Score</CardTitle>
              <CardDescription className='text-slate-300'>
                Benchmark vs industry across the core growth levers shaping pipeline efficiency.
              </CardDescription>
            </div>
          </div>
          <div className='rounded-2xl border border-sky-200/25 bg-[radial-gradient(circle_at_18%_18%,rgba(125,211,252,0.2),transparent_28%),linear-gradient(180deg,rgba(241,245,249,0.96),rgba(226,232,240,0.92))] px-4 py-3 shadow-[0_22px_48px_-32px_rgba(56,189,248,0.26)]'>
            <p className='text-[11px] tracking-[0.16em] text-slate-500 uppercase'>Overall Score</p>
            <div className='mt-1 flex items-end gap-2'>
              <p className='text-4xl font-semibold tracking-tight text-sky-700'>78/100</p>
              <span className='pb-1 text-sm text-slate-600'>Benchmark vs industry</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className='grid gap-5 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 sm:p-5'>
          <div className='mb-3 flex items-center justify-between'>
            <p className='text-xs font-medium tracking-[0.18em] text-slate-400 uppercase'>
              Spider View
            </p>
            <p className='text-xs text-slate-400'>7-axis benchmark map</p>
          </div>
          <svg
            viewBox={`0 0 ${RADAR_SIZE} ${RADAR_SIZE}`}
            className='mx-auto block w-full max-w-[24rem]'
            aria-label='7-dimension growth score spider chart'
            role='img'
          >
            {gridPolygons.map((polygon, index) => (
              <polygon
                key={polygon}
                points={polygon}
                fill='none'
                stroke='rgba(148,163,184,0.26)'
                strokeWidth={index === gridPolygons.length - 1 ? 1.4 : 1.1}
              />
            ))}

            {axisAngles.map((angle) => {
              const point = getRadarPoint(angle, RADAR_RADIUS);

              return (
                <line
                  key={angle}
                  x1={RADAR_CENTER}
                  y1={RADAR_CENTER}
                  x2={point.x}
                  y2={point.y}
                  stroke='rgba(148,163,184,0.22)'
                  strokeWidth='1.1'
                />
              );
            })}

            <polygon
              points={dataPolygon}
              fill='rgba(56,189,248,0.24)'
              stroke='rgba(56,189,248,0.95)'
              strokeWidth='2.4'
            />

            {scoreItems.map((item, index) => {
              const point = getRadarPoint(axisAngles[index], (RADAR_RADIUS * item.score) / 100);
              const labelPoint = getRadarPoint(axisAngles[index], RADAR_RADIUS + 24);
              const tone = getScoreTone(item.score);

              return (
                <g key={item.label}>
                  <circle cx={point.x} cy={point.y} r='4.5' className={tone.dotClassName} />
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r='7.5'
                    fill='none'
                    stroke='rgba(255,255,255,0.18)'
                    strokeWidth='1'
                  />
                  <text
                    x={labelPoint.x}
                    y={labelPoint.y}
                    fill='rgba(203,213,225,0.9)'
                    fontSize='11'
                    fontWeight='600'
                    textAnchor={
                      Math.abs(labelPoint.x - RADAR_CENTER) < 16
                        ? 'middle'
                        : labelPoint.x > RADAR_CENTER
                          ? 'start'
                          : 'end'
                    }
                    dominantBaseline={
                      Math.abs(labelPoint.y - RADAR_CENTER) < 16
                        ? 'middle'
                        : labelPoint.y > RADAR_CENTER
                          ? 'hanging'
                          : 'auto'
                    }
                  >
                    {item.shortLabel}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className='space-y-3'>
          {scoreItems.map((item) => (
            <ScoreItem key={item.label} label={item.label} score={item.score} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
