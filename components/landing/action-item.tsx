import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type PriorityLevel = 'High' | 'Medium' | 'Low';

export type ActionRecommendation = {
  title: string;
  description: string;
  impact: PriorityLevel;
  effort: PriorityLevel;
};

type ActionItemProps = ActionRecommendation & {
  isHighlighted?: boolean;
};

const impactScore: Record<PriorityLevel, number> = {
  High: 3,
  Medium: 2,
  Low: 1,
};

const effortScore: Record<PriorityLevel, number> = {
  Low: 3,
  Medium: 2,
  High: 1,
};

export function getActionPriorityScore(item: ActionRecommendation): number {
  return impactScore[item.impact] * 10 + effortScore[item.effort];
}

export function sortActionRecommendations(
  items: readonly ActionRecommendation[],
): ActionRecommendation[] {
  return [...items].sort((left, right) => {
    const priorityDifference = getActionPriorityScore(right) - getActionPriorityScore(left);

    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return left.title.localeCompare(right.title);
  });
}

function getImpactBadgeClassName(level: PriorityLevel): string {
  if (level === 'High') {
    return 'border-emerald-400/20 bg-emerald-500/15 text-emerald-200';
  }

  if (level === 'Medium') {
    return 'border-amber-400/20 bg-amber-500/15 text-amber-200';
  }

  return 'border-slate-400/20 bg-slate-500/15 text-slate-200';
}

function getEffortBadgeClassName(level: PriorityLevel): string {
  if (level === 'High') {
    return 'border-rose-400/20 bg-rose-500/15 text-rose-200';
  }

  if (level === 'Medium') {
    return 'border-sky-400/20 bg-sky-500/15 text-sky-200';
  }

  return 'border-cyan-400/20 bg-cyan-500/15 text-cyan-200';
}

export function ActionItem({
  title,
  description,
  impact,
  effort,
  isHighlighted = false,
}: ActionItemProps): React.JSX.Element {
  return (
    <article
      className={cn(
        'rounded-2xl border bg-white/[0.03] p-4 transition-colors',
        isHighlighted
          ? 'border-sky-300/40 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_42%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(15,23,42,0.72))] shadow-[0_18px_40px_-28px_rgba(56,189,248,0.7)]'
          : 'border-white/10',
      )}
    >
      <div className='flex flex-wrap items-start justify-between gap-3'>
        <div className='space-y-2'>
          {isHighlighted ? (
            <p className='text-[11px] font-semibold tracking-[0.18em] text-sky-300 uppercase'>
              Highest Leverage
            </p>
          ) : null}
          <h4 className='text-sm font-semibold text-white'>{title}</h4>
        </div>

        <div className='flex shrink-0 flex-wrap items-center gap-2'>
          <Badge className={cn('border', getImpactBadgeClassName(impact))}>{impact} impact</Badge>
          <Badge className={cn('border', getEffortBadgeClassName(effort))}>{effort} effort</Badge>
        </div>
      </div>

      <p className='mt-3 text-sm leading-6 text-slate-300'>{description}</p>
    </article>
  );
}
