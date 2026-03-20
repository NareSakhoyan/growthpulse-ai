import { ArrowUpRightIcon } from 'lucide-react';

import { ReportDownloadButton } from '@/components/landing/report-download-button';
import { Card } from '@/components/ui/card';

type ReportMetric = {
  label: string;
  value: string;
  note: string;
};

type ReportScore = {
  label: string;
  score: number;
  commentary: string;
};

type ReportRecommendation = {
  title: string;
  description: string;
  owner: string;
};

const reportMeta = {
  companyName: 'Northstar CRM',
  reportDate: 'March 20, 2026',
  executiveSummary:
    'Northstar CRM is generating enough interest to grow, but too much of that interest decays between first click and first value. Retention is healthy, which is exactly why the acquisition and activation leaks are so expensive: the product can keep customers, the funnel just is not earning enough of them.',
  overallScore: 78,
} as const;

const keyMetrics: readonly ReportMetric[] = [
  {
    label: 'Growth Score',
    value: '78 / 100',
    note: 'Healthy retention is masking avoidable top-of-funnel waste.',
  },
  {
    label: 'Acquisition Efficiency',
    value: '65',
    note: 'Traffic quality is uneven and message-match is lagging.',
  },
  {
    label: 'Activation Rate',
    value: '71',
    note: 'The first success moment arrives later than it should.',
  },
  {
    label: 'Retention Strength',
    value: '82',
    note: 'Customers who activate tend to stay. That is the leverage point.',
  },
] as const;

const visualizedScores: readonly ReportScore[] = [
  {
    label: 'Acquisition',
    score: 65,
    commentary: 'Paid and organic traffic are landing on a promise stack that is too broad.',
  },
  {
    label: 'Activation',
    score: 71,
    commentary: 'Trial users need fewer steps between signup and visible value.',
  },
  {
    label: 'Revenue Capture',
    score: 76,
    commentary: 'Monetization is respectable, but expansion motion is underused.',
  },
  {
    label: 'Retention',
    score: 82,
    commentary: 'The product keeps customers once they cross the activation threshold.',
  },
] as const;

const strategicRecommendations: readonly ReportRecommendation[] = [
  {
    title: 'Rewrite the hero around one measurable outcome',
    description:
      'The current above-the-fold narrative is trying to sound comprehensive and ends up sounding cautious. One promise will outperform five adjacent claims.',
    owner: 'Growth + Brand',
  },
  {
    title: 'Strip onboarding down to the first useful report',
    description:
      'Activation is too dependent on patience. Reduce setup depth and surface a real output before asking users for more configuration.',
    owner: 'Product',
  },
  {
    title: 'Stop scaling campaigns that miss activation thresholds',
    description:
      'Cheap acquisition is still expensive when it produces weak accounts. Hold spend behind activation quality, not click volume.',
    owner: 'Performance',
  },
] as const;

function getScoreTone(score: number): {
  barClassName: string;
  labelClassName: string;
} {
  if (score >= 80) {
    return {
      barClassName: 'bg-[linear-gradient(90deg,#4f46e5,#22c55e)]',
      labelClassName: 'text-slate-900',
    };
  }

  if (score >= 70) {
    return {
      barClassName: 'bg-[linear-gradient(90deg,#4f46e5,#60a5fa)]',
      labelClassName: 'text-slate-900',
    };
  }

  return {
    barClassName: 'bg-[linear-gradient(90deg,#6366f1,#f59e0b)]',
    labelClassName: 'text-slate-900',
  };
}

function ReportSectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}): React.JSX.Element {
  return (
    <div className='flex items-center gap-4 border-b border-slate-200 pb-3'>
      <span className='text-[11px] font-semibold tracking-[0.24em] text-slate-600 uppercase'>
        {index}
      </span>
      <h3 className='text-lg font-semibold tracking-tight text-slate-950'>{title}</h3>
    </div>
  );
}

export function ReportSummarySection(): React.JSX.Element {
  return (
    <section className='space-y-4'>
      <ReportSectionHeading index='01' title='Executive Summary' />
      <p className='max-w-3xl text-sm leading-7 text-slate-700'>{reportMeta.executiveSummary}</p>
    </section>
  );
}

export function ReportMetricsSection(): React.JSX.Element {
  return (
    <section className='space-y-5'>
      <ReportSectionHeading index='02' title='Key Metrics' />
      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {keyMetrics.map((metric) => (
          <div
            key={metric.label}
            className='rounded-2xl border border-slate-200 bg-slate-50/80 p-4'
          >
            <p className='text-[11px] font-semibold tracking-[0.2em] text-slate-700 uppercase'>
              {metric.label}
            </p>
            <p className='mt-3 text-2xl font-semibold tracking-tight text-slate-950'>
              {metric.value}
            </p>
            <p className='mt-3 text-sm leading-6 text-slate-700'>{metric.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ReportScoresSection(): React.JSX.Element {
  return (
    <section className='space-y-5'>
      <ReportSectionHeading index='03' title='Visualized Scores' />
      <div className='space-y-4'>
        {visualizedScores.map((item) => {
          const tone = getScoreTone(item.score);

          return (
            <div
              key={item.label}
              className='rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_10px_30px_-26px_rgba(15,23,42,0.25)]'
            >
              <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                <div className='min-w-0'>
                  <div className='flex items-center gap-3'>
                    <p className='text-sm font-semibold text-slate-900'>{item.label}</p>
                    <span className={`text-sm font-semibold ${tone.labelClassName}`}>
                      {item.score}
                    </span>
                  </div>
                  <p className='mt-1 text-sm leading-6 text-slate-700'>{item.commentary}</p>
                </div>
                <div className='w-full max-w-xs'>
                  <div className='h-2 overflow-hidden rounded-full bg-slate-200'>
                    <div
                      className={`h-full rounded-full ${tone.barClassName}`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ReportRecommendationsSection(): React.JSX.Element {
  return (
    <section className='space-y-5'>
      <ReportSectionHeading index='04' title='Strategic Recommendations' />
      <div className='space-y-4'>
        {strategicRecommendations.map((recommendation, index) => (
          <article
            key={recommendation.title}
            className='flex flex-col gap-4 rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,250,252,0.98))] p-5 sm:flex-row'
          >
            <div className='flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(79,70,229,0.12),rgba(59,130,246,0.18))] text-sm font-semibold text-indigo-700'>
              0{index + 1}
            </div>
            <div className='space-y-2'>
              <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
                <h4 className='text-base font-semibold text-slate-950'>{recommendation.title}</h4>
                <p className='text-[11px] font-semibold tracking-[0.18em] text-slate-700 uppercase'>
                  Owner: {recommendation.owner}
                </p>
              </div>
              <p className='text-sm leading-7 text-slate-700'>{recommendation.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ReportPreview(): React.JSX.Element {
  return (
    <section
      id='report-preview'
      className='scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(99,102,241,0.12),transparent_20%),radial-gradient(circle_at_84%_14%,rgba(59,130,246,0.1),transparent_18%),linear-gradient(180deg,rgba(241,245,249,0.9),rgba(255,255,255,1))] py-12 sm:py-14 lg:py-16'
    >
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-10 lg:px-8'>
        <div className='max-w-3xl space-y-3 px-2 sm:px-0'>
          <h2 className='text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl'>
            Executive summary report preview
          </h2>
          <p className='text-base leading-7 text-slate-700'>
            Show stakeholders what a board-ready audit export looks like before they ever request
            the real one.
          </p>
        </div>

        <Card className='mx-auto border-slate-200/90 bg-white text-slate-950 shadow-[0_36px_90px_-48px_rgba(15,23,42,0.28)]'>
          <div className='mx-auto max-w-5xl space-y-10 p-6 sm:p-8 lg:space-y-12 lg:p-12'>
            <header className='space-y-6 border-b border-slate-200 pb-8'>
              <div className='flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between'>
                <div className='space-y-3'>
                  <p className='text-[11px] font-semibold tracking-[0.24em] text-slate-700 uppercase'>
                    Board-ready export preview
                  </p>
                  <div className='space-y-2'>
                    <h1 className='text-4xl font-semibold tracking-tight text-slate-950'>
                      Growth Audit Report
                    </h1>
                    <p className='text-sm leading-6 text-slate-700'>
                      {reportMeta.companyName} • {reportMeta.reportDate}
                    </p>
                  </div>
                </div>

                <div className='rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,1),rgba(241,245,249,0.94))] px-5 py-4 ring-1 ring-slate-200/70'>
                  <p className='text-[11px] font-semibold tracking-[0.18em] text-slate-700 uppercase'>
                    Overall score
                  </p>
                  <div className='mt-2 flex items-end gap-2'>
                    <p className='text-4xl font-semibold tracking-tight text-slate-950'>
                      {reportMeta.overallScore}
                    </p>
                    <span className='pb-1 text-sm font-medium text-slate-700'>/ 100</span>
                  </div>
                  <p className='mt-2 flex items-center gap-1 text-sm text-slate-700'>
                    High retention creates room for sharper funnel discipline
                    <ArrowUpRightIcon className='size-4 text-slate-700' />
                  </p>
                </div>
              </div>
            </header>

            <ReportSummarySection />
            <ReportMetricsSection />
            <ReportScoresSection />
            <ReportRecommendationsSection />

            <footer className='flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between'>
              <div className='space-y-1'>
                <p className='text-sm font-medium text-slate-800'>Prepared for executive review</p>
                <p className='text-sm leading-6 text-slate-700'>
                  Mock data only. Built to simulate the structure and tone of a clean PDF export.
                </p>
              </div>
              <ReportDownloadButton />
            </footer>
          </div>
        </Card>
      </div>
    </section>
  );
}
