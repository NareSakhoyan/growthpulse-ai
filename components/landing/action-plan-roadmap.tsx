import {
  ActionItem,
  ActionRecommendation,
  getActionPriorityScore,
  sortActionRecommendations,
} from '@/components/landing/action-item';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type RoadmapPhase = {
  monthLabel: string;
  phaseTitle: string;
  summary: string;
  recommendations: readonly ActionRecommendation[];
};

const roadmapPhases: readonly RoadmapPhase[] = [
  {
    monthLabel: 'Month 1',
    phaseTitle: 'Quick Wins',
    summary: 'Patch the obvious leaks before buying more traffic into a broken funnel.',
    recommendations: [
      {
        title: 'Collapse the hero into one measurable promise',
        description:
          'The top fold is carrying too many claims. Force one outcome and one CTA so paid clicks stop bouncing on ambiguity.',
        impact: 'High',
        effort: 'Low',
      },
      {
        title: 'Remove dead-end CTA branches from trial signup',
        description:
          'Audit every button between landing and signup. If a click does not advance intent, it is stealing conversion rate.',
        impact: 'High',
        effort: 'Low',
      },
      {
        title: 'Cut onboarding to the first proof point',
        description:
          'Get new accounts to the first useful report faster. Extra setup steps are acting like a polite churn program.',
        impact: 'High',
        effort: 'Medium',
      },
    ],
  },
  {
    monthLabel: 'Month 2',
    phaseTitle: 'Optimization',
    summary: 'Use behavioral data to tighten targeting, messaging, and activation quality.',
    recommendations: [
      {
        title: 'Rewrite pricing around the top three objections',
        description:
          'Price is rarely the first problem. Confusion is. Reframe the page around ROI, time-to-value, and switching risk.',
        impact: 'High',
        effort: 'Medium',
      },
      {
        title: 'Tag funnel drop-off by source and landing promise',
        description:
          'Break activation loss down by channel and message angle so weak traffic can stop hiding behind aggregate averages.',
        impact: 'High',
        effort: 'Medium',
      },
      {
        title: 'Pause paid terms that miss activation thresholds',
        description:
          'Do not optimize on cheap clicks. Cut campaigns that generate signups without meaningful product engagement.',
        impact: 'Medium',
        effort: 'Low',
      },
    ],
  },
  {
    monthLabel: 'Month 3',
    phaseTitle: 'Scaling',
    summary: 'Scale only what survives scrutiny on payback, activation depth, and repeatability.',
    recommendations: [
      {
        title: 'Expand SEO into high-intent comparison clusters',
        description:
          'The next content push should target evaluation-stage queries, not vanity traffic with no purchase posture.',
        impact: 'High',
        effort: 'Medium',
      },
      {
        title: 'Clone the best onboarding path across segments',
        description:
          'Take the activation flow with the strongest completion rate and adapt it for adjacent personas instead of inventing new flows.',
        impact: 'Medium',
        effort: 'Medium',
      },
      {
        title: 'Raise spend only on channels that clear payback targets',
        description:
          'Scale budget with a hard guardrail: no channel gets more cash unless it earns efficient activation and acceptable CAC payback.',
        impact: 'High',
        effort: 'Low',
      },
    ],
  },
] as const;

const sortedRoadmapPhases = roadmapPhases.map((phase) => ({
  ...phase,
  recommendations: sortActionRecommendations(phase.recommendations),
}));

const highestPriorityScore = Math.max(
  ...sortedRoadmapPhases.flatMap((phase) =>
    phase.recommendations.map((recommendation) => getActionPriorityScore(recommendation)),
  ),
);

export function ActionPlanRoadmap(): React.JSX.Element {
  return (
    <Card className='border-transparent bg-transparent text-white shadow-none'>
      <CardHeader className='space-y-4 px-2 pt-0 pb-5 sm:px-0'>
        <div className='flex flex-wrap items-start justify-between gap-3'>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <CardTitle className='text-base'>AI-Generated Action Plan</CardTitle>
              <Badge className='border border-sky-300/20 bg-sky-500/15 text-sky-200'>
                90-day roadmap
              </Badge>
            </div>
            <CardDescription className='max-w-2xl text-slate-300'>
              Three months of corrective moves ranked by leverage, not by how comfortable they are
              to present in a meeting.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className='space-y-4 px-2 pb-0 sm:px-0'>
        {sortedRoadmapPhases.map((phase, index) => (
          <section
            key={phase.monthLabel}
            className='rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5'
          >
            <div className='flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-start sm:justify-between'>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <Badge className='border border-white/10 bg-white/10 text-slate-100'>
                    {phase.monthLabel}
                  </Badge>
                  <p className='text-sm font-semibold text-white'>{phase.phaseTitle}</p>
                </div>
                <p className='max-w-xl text-sm leading-6 text-slate-300'>{phase.summary}</p>
              </div>

              <div className='rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2 text-right'>
                <p className='text-[11px] tracking-[0.18em] text-slate-500 uppercase'>
                  Phase {index + 1}
                </p>
                <p className='text-sm font-medium text-slate-100'>
                  {phase.recommendations.length} prioritized moves
                </p>
              </div>
            </div>

            <div className='mt-4 space-y-3'>
              {phase.recommendations.map((recommendation) => (
                <ActionItem
                  key={recommendation.title}
                  {...recommendation}
                  isHighlighted={getActionPriorityScore(recommendation) === highestPriorityScore}
                />
              ))}
            </div>
          </section>
        ))}
      </CardContent>
    </Card>
  );
}
