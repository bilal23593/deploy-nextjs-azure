export const leadProtectionHighlights = [
  'Defined revision rounds',
  'Written scope approval',
  'Refund review if final delivery misses scope',
];

export const routeComparisonColumns = [
  {
    id: 'brief',
    title: 'Direct Brief',
    badge: 'Best Protection',
    type: 'internal',
    href: '/contact',
    label: 'Send Project Brief',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    badge: 'Fastest Reply',
    type: 'external',
    channel: 'WhatsApp',
  },
  {
    id: 'fiverr',
    title: 'Fiverr',
    badge: 'Marketplace',
    type: 'external',
    channel: 'Fiverr',
  },
];

export const routeComparisonRows = [
  {
    label: 'Best for',
    brief: 'Custom scopes, multi-asset projects, and proposals that need written terms.',
    whatsapp: 'Fast fit checks, budget talks, and quick timeline conversations.',
    fiverr: 'Packaged work and buyers who prefer platform-based checkout.',
  },
  {
    label: 'Scope clarity',
    brief: 'Highest. Deliverables, approvals, and direction are written into the brief and quote.',
    whatsapp: 'Medium. Great for fast discussion, but final scope still needs to be written down later.',
    fiverr: 'Good for fixed packages, less flexible for larger custom scopes.',
  },
  {
    label: 'Revision setup',
    brief: 'Defined revision rounds are included in the approved proposal.',
    whatsapp: 'Usually confirmed after the conversation moves into a formal quote.',
    fiverr: 'Revision count follows the selected package or custom order terms.',
  },
  {
    label: 'Protection level',
    brief: 'Strongest option for scope-based refund review and written approval records.',
    whatsapp: 'Helpful for speed, but not the strongest paper trail on its own.',
    fiverr: 'Platform-managed ordering with package-level protection and messaging history.',
  },
  {
    label: 'Response style',
    brief: 'Structured reply with project-fit recommendations and next steps.',
    whatsapp: 'Fastest conversational response.',
    fiverr: 'Platform messaging and offer flow.',
  },
  {
    label: 'Payment flow',
    brief: 'Direct quote, milestone planning, and custom scope alignment.',
    whatsapp: 'Usually moves into direct quote or platform order once scope is clear.',
    fiverr: 'Platform checkout for packaged or offer-based work.',
  },
];

export const offerPackageTiers = [
  {
    name: 'Basic',
    badge: 'Fiverr Package',
    bestFor: '30-second explainer videos for short product pitches, promo clips, and quick launch messaging.',
    price: '$20.99',
    delivery: '3-day delivery',
    revisions: '3 revisions',
    runtime: '30 seconds',
    words: '75 words',
    deliverables: [
      'Full HD 1080p video',
      'Background music included',
      'Professional voiceover',
      'Characters included',
      'Storyboard included',
      'Illustrated background included',
      'Original design',
    ],
  },
  {
    name: 'Standard',
    badge: 'Fiverr Package',
    bestFor: '60-second explainer videos when you need more detail, clearer storytelling, or stronger product education.',
    price: '$36.74',
    delivery: '4-day delivery',
    revisions: '3 revisions',
    runtime: '60 seconds',
    words: '150 words',
    deliverables: [
      'Full HD 1080p video',
      'Background music included',
      'Professional voiceover',
      'Characters included',
      'Storyboard included',
      'Illustrated background included',
      'Original design',
    ],
  },
  {
    name: 'Premium',
    badge: 'Fiverr Package',
    bestFor: '90-second videos for deeper product walkthroughs, richer brand stories, and more complete sales messaging.',
    price: '$52.48',
    delivery: '5-day delivery',
    revisions: '3 revisions',
    runtime: '90 seconds',
    words: '225 words',
    deliverables: [
      'Full HD 1080p video',
      'Background music included',
      'Professional voiceover',
      'Characters included',
      'Storyboard included',
      'Illustrated background included',
      'Original design',
    ],
  },
];

export const revisionScopeGuidance = {
  inScope: [
    'Refinements that stay inside the approved concept, script, or layout direction',
    'Visual polish, pacing, transitions, and detail updates during included review rounds',
    'Copy or scene edits that do not change the production plan or deliverable list',
  ],
  outOfScope: [
    'A new concept direction after the earlier direction was approved',
    'New deliverables, extra formats, or additional channels not listed in the quote',
    'Large content, product, or script changes that require re-planning the work',
  ],
};

export const deliveryTimeline = [
  {
    step: '01',
    title: 'Brief',
    description: 'You share goals, references, deliverables, and timing so the project starts with context.',
  },
  {
    step: '02',
    title: 'Quote',
    description: 'We define scope, revision rounds, timeline, and the clearest route to delivery.',
  },
  {
    step: '03',
    title: 'First Draft',
    description: 'The first version is delivered against the approved brief, not a vague idea of the result.',
  },
  {
    step: '04',
    title: 'Revision Round',
    description: 'Feedback is collected at the agreed checkpoints and refinements stay tied to the written scope.',
  },
  {
    step: '05',
    title: 'Final Delivery',
    description: 'Approved assets are handed over in the agreed formats with cleaner sign-off and reuse support.',
  },
];
