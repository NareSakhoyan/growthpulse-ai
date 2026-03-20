import {
  BarChart3Icon,
  BriefcaseBusinessIcon,
  DatabaseZapIcon,
  LineChartIcon,
  MailIcon,
  PlusIcon,
} from 'lucide-react';

export const integrations = [
  {
    id: 'hubspot',
    name: 'HubSpot',
    icon: BriefcaseBusinessIcon,
    accentClassName: 'border-orange-200/80 bg-orange-50/90 text-orange-700',
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    icon: LineChartIcon,
    accentClassName: 'border-sky-200/80 bg-sky-50/90 text-sky-700',
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads',
    icon: BarChart3Icon,
    accentClassName: 'border-indigo-200/80 bg-indigo-50/90 text-indigo-700',
  },
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    icon: MailIcon,
    accentClassName: 'border-emerald-200/80 bg-emerald-50/90 text-emerald-700',
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    icon: DatabaseZapIcon,
    accentClassName: 'border-cyan-200/80 bg-cyan-50/90 text-cyan-700',
  },
  {
    id: 'more',
    name: '+30 more',
    icon: PlusIcon,
    accentClassName: 'border-violet-200/80 bg-violet-50/90 text-violet-700',
  },
] as const;
