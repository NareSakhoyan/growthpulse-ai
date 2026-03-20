export const pricingPlans = [
  {
    name: 'Starter',
    price: '$499',
    cadence: '/mo',
    description: 'A lightweight operating layer for smaller teams that need monthly visibility.',
    cta: 'Choose Starter',
    details: [
      { label: 'Integrations', value: 'Up to 5' },
      { label: 'Reports', value: 'Monthly diagnostic' },
      { label: 'Action Plans', value: 'Quarterly' },
      { label: 'Users', value: '2 seats' },
      { label: 'Support', value: 'Email' },
    ],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$1,299',
    cadence: '/mo',
    description: 'The core plan for teams that want tighter review cycles and faster iteration.',
    cta: 'Choose Growth',
    details: [
      { label: 'Integrations', value: 'Up to 15' },
      { label: 'Reports', value: 'Weekly diagnostic' },
      { label: 'Action Plans', value: 'Monthly' },
      { label: 'Users', value: '5 seats' },
      { label: 'Support', value: 'Priority email + chat' },
    ],
    featured: true,
  },
  {
    name: 'Scale',
    price: '$2,999',
    cadence: '/mo',
    description:
      'A higher-touch setup for larger teams running more surface area and more stakeholders.',
    cta: 'Talk to sales',
    details: [
      { label: 'Integrations', value: 'Unlimited' },
      { label: 'Reports', value: 'Daily diagnostic + alerts' },
      { label: 'Action Plans', value: 'Monthly + live dashboard' },
      { label: 'Users', value: 'Unlimited seats' },
      { label: 'Support', value: 'Dedicated success manager' },
    ],
    featured: false,
  },
] as const;
