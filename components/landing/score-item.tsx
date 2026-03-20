import { cn } from '@/lib/utils';

type ScoreItemProps = {
  label: string;
  score: number;
};

export function getScoreTone(score: number): {
  barClassName: string;
  scoreClassName: string;
  trackClassName: string;
  dotClassName: string;
} {
  if (score >= 80) {
    return {
      barClassName: 'bg-[linear-gradient(90deg,#34d399,#22c55e)]',
      scoreClassName: 'text-emerald-300',
      trackClassName: 'bg-emerald-500/10',
      dotClassName: 'bg-emerald-400 fill-emerald-400',
    };
  }

  if (score >= 60) {
    return {
      barClassName: 'bg-[linear-gradient(90deg,#fbbf24,#f59e0b)]',
      scoreClassName: 'text-amber-300',
      trackClassName: 'bg-amber-500/10',
      dotClassName: 'bg-amber-400 fill-amber-400',
    };
  }

  return {
    barClassName: 'bg-[linear-gradient(90deg,#fb7185,#ef4444)]',
    scoreClassName: 'text-rose-300',
    trackClassName: 'bg-rose-500/10',
    dotClassName: 'bg-rose-400 fill-rose-400',
  };
}

export function ScoreItem({ label, score }: ScoreItemProps): React.JSX.Element {
  const tone = getScoreTone(score);

  return (
    <div className='rounded-2xl border border-white/10 bg-white/5 p-3'>
      <div className='flex items-center justify-between gap-3'>
        <div className='flex min-w-0 items-center gap-2'>
          <span className={cn('size-2 rounded-full', tone.dotClassName)} />
          <p className='truncate text-sm font-medium text-white'>{label}</p>
        </div>
        <span className={cn('text-sm font-semibold', tone.scoreClassName)}>{score}</span>
      </div>

      <div className={cn('mt-3 h-1.5 overflow-hidden rounded-full', tone.trackClassName)}>
        <div
          className={cn('h-full rounded-full transition-[width]', tone.barClassName)}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
