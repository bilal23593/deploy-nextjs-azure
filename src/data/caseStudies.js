import { taxonomyLabelToSlug } from "@/lib/contentTaxonomy";

export const caseStudies = [
  {
    slug: "lumio-fintech-tutorial-video-system",
    title: "Lumio Fintech Tutorial Video System",
    metaTitle: "Lumio Tutorial Video System Case Study | Cube Cake Studiios",
    description:
      "How Cube Cake Studiios designed a tutorial video system for Lumio that improved product activation, reduced onboarding tickets, and helped users understand a complex fintech workflow faster.",
    excerpt:
      "A tutorial video case study showing how structured motion design, UI callouts, and chapter-based education can turn product confusion into faster activation.",
    client: "Lumio Finance",
    industry: "Fintech SaaS",
    location: "United States",
    serviceLine: "Tutorial Video Design",
    contentType: "Tutorial Video",
    heroSummary:
      "Lumio's product had a strong feature set but a weak first-use experience. The team needed tutorial videos that could guide new users through setup, build confidence, and reduce dependence on support without making the product feel difficult.",
    featuredResult: "31% reduction in onboarding support tickets",
    image: "/images/case-studies/tutorial-video-activation.svg",
    videoEmbedUrl: "https://www.youtube.com/embed/EOlp1K1KKKU?rel=0",
    videoDuration: "PT1M26S",
    serviceSlugs: ["product-demo-animation-services", "saas-explainer-videos"],
    articleSlugs: ["tutorial-video-design-for-product-adoption", "why-design-clarity-helps-businesses-explain-services"],
    stats: [
      { value: "-31%", label: "Support tickets", detail: "during onboarding" },
      { value: "+22%", label: "Activation lift", detail: "for guided setup users" },
      { value: "6", label: "Tutorial modules", detail: "mapped to setup milestones" },
    ],
    challenge:
      "New users were entering the product from demos and free trials but getting stuck during account setup and first workflow configuration. Written documentation existed, yet it did not match the speed or clarity users needed in the moment.",
    solution:
      "We created a modular tutorial video system built around task-specific chapters, motion-guided UI focus points, and a visual structure that mirrored the order of product actions instead of the internal product architecture.",
    process: [
      "Mapped support tickets and activation drop-off points against the onboarding flow",
      "Prioritized six tutorial moments tied to setup and first-value milestones",
      "Designed a motion language for UI zooms, action cues, and progress framing",
      "Produced reusable tutorial assets for help center, lifecycle email, and in-app guidance",
    ],
    deliverables: [
      "Learning-flow audit",
      "Tutorial scripts and chapter outlines",
      "Annotated UI motion storyboard",
      "Six tutorial video modules",
      "Cut-down versions for help center embeds and email onboarding",
    ],
    designImpact: [
      "Color-coded action cues reduced the time users spent searching for the next step",
      "Short chapter design made learning feel achievable instead of heavy",
      "Motion-guided UI focus improved perceived product clarity during setup",
    ],
    outcomes: [
      "Support volume dropped because repetitive onboarding questions were answered visually",
      "Product marketing gained a reusable education system instead of a one-off tutorial",
      "Customer success teams embedded the same assets into onboarding and renewal workflows",
    ],
    testimonial: {
      text: "The new tutorial system made onboarding feel dramatically clearer. Users needed less hand-holding and reached activation faster.",
      author: "Maya Roberts",
      role: "Head of Customer Success",
    },
    publishedAt: "2026-02-27",
    updatedAt: "2026-02-28",
  },
  {
    slug: "northstar-service-explainer-funnel",
    title: "Northstar Service Explainer Funnel",
    metaTitle: "Northstar Service Explainer Funnel Case Study | Cube Cake Studiios",
    description:
      "A service explainer case study showing how design and motion helped Northstar clarify complex offers, improve lead quality, and explain its services faster to buyers.",
    excerpt:
      "This case study focuses on how explainer design can help a service business simplify positioning, show process, and improve conversion intent.",
    client: "Northstar Advisory",
    industry: "B2B Services",
    location: "United Kingdom",
    serviceLine: "Explainer Video Strategy",
    contentType: "Explainer Video",
    heroSummary:
      "Northstar sold high-value services with a long sales cycle, but its site explained the offer in dense language. The team needed a clearer way to show how the service worked, why the process was credible, and what outcomes buyers should expect.",
    featuredResult: "42% increase in qualified consultation requests",
    image: "/images/case-studies/explainer-video-funnel.svg",
    videoEmbedUrl: "https://www.youtube.com/embed/EOlp1K1KKKU?rel=0",
    videoDuration: "PT1M12S",
    serviceSlugs: ["explainer-video-production-for-startups", "brand-story-animation-for-startups"],
    articleSlugs: ["explainer-video-framework-for-service-businesses", "why-design-clarity-helps-businesses-explain-services"],
    stats: [
      { value: "+42%", label: "Qualified leads", detail: "after launch" },
      { value: "74 sec", label: "Explainer runtime", detail: "for homepage and outbound" },
      { value: "3", label: "Funnel placements", detail: "site, decks, outbound email" },
    ],
    challenge:
      "The business had multiple services, overlapping terminology, and a sales narrative that changed depending on who presented it. Prospects often booked calls without understanding the offer, which created friction later in the funnel.",
    solution:
      "We restructured the service story around a simple problem, process, and outcome sequence, then translated that into an explainer supported by cleaner page design, visual hierarchy, and more direct service-language framing.",
    process: [
      "Audited sales decks, service pages, and qualification-call notes",
      "Simplified the service narrative into one primary buyer journey",
      "Designed scenes that matched each stage of the service process",
      "Aligned the motion asset with homepage copy, outreach decks, and consultation prep",
    ],
    deliverables: [
      "Offer clarity workshop",
      "Service narrative script",
      "Explainer storyboard and visual direction",
      "Homepage explainer video",
      "Short versions for outbound and proposal decks",
    ],
    designImpact: [
      "Clearer information hierarchy reduced mental effort on the service page",
      "Visual process mapping made an intangible service feel concrete and reliable",
      "Consistent design language improved trust before prospects reached the call",
    ],
    outcomes: [
      "Sales conversations started with better-informed prospects",
      "Lead quality improved because the page and explainer filtered out poor-fit inquiries earlier",
      "Northstar gained a reusable system for explaining new service packages later",
    ],
    testimonial: {
      text: "Our services finally felt easy to understand. The difference in lead quality was obvious within weeks.",
      author: "Daniel Ward",
      role: "Managing Partner",
    },
    publishedAt: "2026-02-26",
    updatedAt: "2026-02-28",
  },
  {
    slug: "atlas-health-2d-animation-design-system",
    title: "Atlas Health 2D Animation Design System",
    metaTitle: "Atlas Health 2D Animation Design System Case Study | Cube Cake Studiios",
    description:
      "How a 2D animation design system helped Atlas Health explain a complex healthcare workflow more clearly across demos, marketing, and onboarding content.",
    excerpt:
      "A 2D animation design case study about turning fragmented visuals into a cohesive motion system that improved product understanding.",
    client: "Atlas Health",
    industry: "HealthTech",
    location: "Global",
    serviceLine: "2D Animation Design",
    contentType: "2D Animation Design",
    heroSummary:
      "Atlas Health had strong product capabilities but inconsistent visuals across the buyer journey. We built a 2D animation design system that helped the team explain a regulated workflow with more clarity, trust, and consistency.",
    featuredResult: "36% increase in demo-to-trial conversion",
    image: "/images/case-studies/2d-animation-design-system.svg",
    videoEmbedUrl: "https://www.youtube.com/embed/EOlp1K1KKKU?rel=0",
    videoDuration: "PT1M05S",
    serviceSlugs: ["2d-animation-studio", "2d-animation-studio-for-startups"],
    articleSlugs: ["2d-animation-design-systems-for-multi-channel-growth", "how-to-choose-a-2d-animation-studio"],
    stats: [
      { value: "+36%", label: "Demo-to-trial", detail: "after new visual rollout" },
      { value: "11", label: "Reusable components", detail: "for scenes and callouts" },
      { value: "4", label: "Buyer stages", detail: "covered by one system" },
    ],
    challenge:
      "The product served multiple healthcare stakeholders, yet the visual story changed across landing pages, decks, demos, and onboarding. That inconsistency made the platform feel harder to understand than it actually was.",
    solution:
      "We created a reusable 2D animation design system with scene components, icon logic, character framing, and UI callout rules so every asset could explain the product with the same visual language.",
    process: [
      "Mapped the buyer journey from awareness through onboarding",
      "Defined repeatable visual components for interfaces, outcomes, and data stories",
      "Built a motion system that could scale from short explainers to demo support clips",
      "Rolled the design language into product marketing, sales enablement, and onboarding assets",
    ],
    deliverables: [
      "Visual-system audit",
      "2D animation design library",
      "Storyboard templates",
      "Core explainer scenes",
      "Design guidance for future campaign and onboarding assets",
    ],
    designImpact: [
      "Consistency improved perceived product maturity across buyer touchpoints",
      "Reusable motion components reduced production time for future assets",
      "A clearer design system helped teams explain the same product story with less friction",
    ],
    outcomes: [
      "The sales team gained more consistent storytelling tools across the pipeline",
      "Marketing no longer had to rebuild visual concepts for every new campaign",
      "The product felt easier to grasp because the same design logic appeared everywhere",
    ],
    testimonial: {
      text: "The animation design system gave us more than a video. It gave us a consistent way to explain the product everywhere.",
      author: "Sana Qureshi",
      role: "Product Marketing Lead",
    },
    publishedAt: "2026-02-24",
    updatedAt: "2026-02-28",
  },
  {
    slug: "cloudsync-saas-explainer-video",
    title: "CloudSync SaaS Explainer Video",
    metaTitle: "CloudSync SaaS Explainer Video Case Study | Cube Cake Studiios",
    description:
      "How Cube Cake Studiios produced a SaaS explainer video for CloudSync that reduced support friction and improved product understanding.",
    excerpt:
      "A product-storytelling case study showing how a short SaaS explainer turned a complex workflow into a clearer buyer journey.",
    client: "CloudSync Software",
    industry: "B2B SaaS",
    location: "Global",
    serviceLine: "SaaS Explainer Videos",
    contentType: "Explainer Video",
    heroSummary:
      "CloudSync needed to explain a technical platform to non-technical buyers without losing speed or clarity. We built a story-first explainer anchored around the core user outcome instead of the feature list.",
    featuredResult: "48% reduction in feature-related support queries",
    image: "/images/case-studies/explainer-video-funnel.svg",
    videoEmbedUrl: "https://www.youtube.com/embed/EOlp1K1KKKU?rel=0",
    videoDuration: "PT1M18S",
    serviceSlugs: ["saas-explainer-videos", "explainer-video-production-for-startups"],
    articleSlugs: ["saas-explainer-video-production-checklist", "2d-animation-studio-pricing-guide"],
    stats: [
      { value: "-48%", label: "Support queries", detail: "after launch" },
      { value: "78 sec", label: "Runtime", detail: "for homepage + sales use" },
      { value: "3", label: "Variants", detail: "website, paid, sales deck" },
    ],
    challenge:
      "The product team had too many features competing for attention. Buyers were arriving from ads, bouncing from the homepage, and entering demos without a clear picture of what the platform solved.",
    solution:
      "We condensed the story into a simple pain-point to outcome arc, wrote a concise script around one primary workflow, then designed modular scenes that could be reused across the site, outbound sales, and paid campaigns.",
    process: [
      "Reviewed support tickets, sales objections, and the product demo flow",
      "Reframed the script around user outcomes instead of feature inventory",
      "Created storyboard scenes optimized for homepage retention and demo prep",
      "Delivered a master cut plus shorter paid and lifecycle variants",
    ],
    deliverables: [
      "Messaging workshop",
      "Conversion-focused script",
      "Storyboard and styleframes",
      "Primary SaaS explainer video",
      "Paid social cut-downs",
    ],
    designImpact: [
      "Design hierarchy kept attention on the core workflow instead of secondary features",
      "Scene pacing improved comprehension for non-technical buyers",
      "A modular visual system made the asset reusable beyond the homepage",
    ],
    outcomes: [
      "Support team reported fewer repetitive onboarding questions after launch",
      "Sales reps reused the video before live demos to create shared context",
      "Marketing gained reusable assets for homepage, outbound, and retargeting",
    ],
    testimonial: {
      text: "Our support team thanked us for this video. Customer inquiries dropped significantly.",
      author: "Sarah Johnson",
      role: "Product Manager",
    },
    publishedAt: "2026-02-18",
    updatedAt: "2026-02-24",
  },
  {
    slug: "harbor-logistics-service-clarity-system",
    title: "Harbor Logistics Service Clarity System",
    metaTitle: "Harbor Logistics Service Clarity Case Study | Cube Cake Studiios",
    description:
      "A service-clarity case study showing how motion design and structured visuals helped Harbor Logistics explain complex service offerings and improve consultation intent.",
    excerpt:
      "This case study shows how design can help a business explain services more clearly when the offer is operationally complex but commercially hard to understand.",
    client: "Harbor Logistics Group",
    industry: "Logistics",
    location: "UAE",
    serviceLine: "Service Marketing Design",
    contentType: "Service Clarity",
    heroSummary:
      "Harbor Logistics had multiple supply-chain services, strong operational capability, and weak service explanation. We redesigned the visual story with motion-based service maps and outcome framing to help prospects understand the offer faster.",
    featuredResult: "28% increase in consultation requests",
    image: "/images/case-studies/service-clarity-motion.svg",
    videoEmbedUrl: "https://www.youtube.com/embed/EOlp1K1KKKU?rel=0",
    videoDuration: "PT0M58S",
    serviceSlugs: ["2d-animation-studio", "brand-story-animation-for-startups"],
    articleSlugs: ["explainer-video-framework-for-service-businesses", "why-design-clarity-helps-businesses-explain-services"],
    stats: [
      { value: "+28%", label: "Consultation requests", detail: "from service pages" },
      { value: "5", label: "Service maps", detail: "turned into motion assets" },
      { value: "3", label: "Sales surfaces", detail: "site, decks, proposals" },
    ],
    challenge:
      "Prospects understood individual tasks like warehousing or transport, but not how the company packaged those services into outcomes. The website described operations, not value, which weakened lead intent.",
    solution:
      "We developed a service-clarity system using 2D motion diagrams, cleaner service grouping, and visual outcome sequences that made the operational process easier to understand for non-specialist buyers.",
    process: [
      "Mapped the commercial offer against buyer objections and proposal notes",
      "Grouped service lines into clearer customer-facing solution buckets",
      "Designed animated process diagrams for operations, visibility, and outcomes",
      "Applied the same visuals to service pages, sales presentations, and proposal intros",
    ],
    deliverables: [
      "Service positioning workshop",
      "Animated service-map storyboard",
      "Process explainer visuals",
      "Short service overview motion asset",
      "Reusable sales and proposal visuals",
    ],
    designImpact: [
      "Visual grouping reduced the complexity of a multi-service offer",
      "Motion diagrams helped buyers understand sequence, accountability, and outcomes",
      "Cleaner service design made proposals feel more premium and credible",
    ],
    outcomes: [
      "Prospects reached calls with a clearer understanding of the service structure",
      "The company reused the same visuals in proposals, making the offer easier to defend",
      "Marketing could explain a complex service mix without overloading the page with text",
    ],
    testimonial: {
      text: "The service story became much easier to sell once buyers could see how everything connected.",
      author: "Farhan Malik",
      role: "Commercial Director",
    },
    publishedAt: "2026-02-16",
    updatedAt: "2026-02-28",
  },
  {
    slug: "tech-retail-product-animation-launch",
    title: "Tech Retail Product Animation Launch",
    metaTitle: "Product Animation Launch Case Study | Cube Cake Studiios",
    description:
      "A product animation case study showing how Cube Cake Studiios helped a retail brand increase engagement with a sharper 2D launch asset.",
    excerpt:
      "This case study covers how a feature-led product story became a tighter launch animation built for landing pages and campaign assets.",
    client: "Tech Retail Co.",
    industry: "E-commerce",
    location: "North America",
    serviceLine: "2D Animation Studio",
    contentType: "2D Animation Design",
    heroSummary:
      "Tech Retail Co. needed a launch-ready animation that showed the product benefit quickly on a crowded ecommerce page. The challenge was to improve clarity without making the story feel technical or slow.",
    featuredResult: "35% increase in product page engagement",
    image: "/images/case-studies/2d-animation-design-system.svg",
    videoEmbedUrl: "https://www.youtube.com/embed/EOlp1K1KKKU?rel=0",
    videoDuration: "PT0M52S",
    serviceSlugs: ["2d-animation-studio", "product-demo-animation-services"],
    articleSlugs: ["how-to-choose-a-2d-animation-studio", "2d-animation-studio-pricing-guide"],
    stats: [
      { value: "+35%", label: "Page engagement", detail: "on launch pages" },
      { value: "52 sec", label: "Runtime", detail: "optimized for ecommerce" },
      { value: "4", label: "Exports", detail: "web, paid, social, deck" },
    ],
    challenge:
      "The existing product page depended on static visuals and dense copy. Shoppers were scanning but not understanding how the product worked or why it was different from alternatives.",
    solution:
      "We built a short 2D animation with a cleaner hook, a faster feature reveal, and reusable visual scenes that could be deployed across multiple campaign surfaces.",
    process: [
      "Mapped the first 15 seconds around the strongest differentiator",
      "Designed motion scenes that could loop cleanly on landing pages",
      "Produced export variants for email, paid media, and product launches",
      "Aligned copy overlays to match the ecommerce conversion flow",
    ],
    deliverables: [
      "Creative brief and hook strategy",
      "Storyboard",
      "Primary 2D animation",
      "Looping micro-edits for product pages",
      "Launch asset export pack",
    ],
    designImpact: [
      "The visual hook made the product story easier to scan in seconds",
      "Reusable scenes helped the team create consistent messaging across channels",
      "Sharper motion hierarchy improved product understanding without adding more text",
    ],
    outcomes: [
      "Merchandising team gained a reusable hero asset for future launches",
      "Landing-page engagement improved after the static hero was replaced",
      "Paid team repurposed the same narrative into a multi-format creative set",
    ],
    testimonial: {
      text: "The animation was exactly what we needed. It increased our product page engagement significantly.",
      author: "John Smith",
      role: "Marketing Manager",
    },
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-22",
  },
  {
    slug: "social-launch-animation-campaign",
    title: "Social Launch Animation Campaign",
    metaTitle: "Social Launch Animation Campaign Case Study | Cube Cake Studiios",
    description:
      "A campaign case study detailing how Cube Cake Studiios produced a short-form animation system that generated 2.5M+ views for a launch sprint.",
    excerpt:
      "A short-form campaign case study focused on story variation, platform-native edits, and asset reuse across launch channels.",
    client: "Creative Agency Partner",
    industry: "Campaign Creative",
    location: "EMEA",
    serviceLine: "Brand Story Animation",
    contentType: "Service Clarity",
    heroSummary:
      "This launch campaign needed a set of motion assets that could travel across social platforms without losing the core narrative. We treated the campaign as a modular animation system instead of a single video.",
    featuredResult: "2.5M+ campaign views in 3 weeks",
    image: "/images/case-studies/service-clarity-motion.svg",
    videoEmbedUrl: "https://www.youtube.com/embed/EOlp1K1KKKU?rel=0",
    videoDuration: "PT0M34S",
    serviceSlugs: ["brand-story-animation-for-startups", "2d-animation-studio"],
    articleSlugs: ["how-to-choose-a-2d-animation-studio", "2d-animation-design-systems-for-multi-channel-growth"],
    stats: [
      { value: "2.5M+", label: "Views", detail: "across campaign channels" },
      { value: "6", label: "Videos", detail: "delivered in sprint" },
      { value: "3 weeks", label: "Launch window", detail: "from concept to rollout" },
    ],
    challenge:
      "The campaign needed speed, variety, and platform-fit. A single hero video would not cover the number of hooks needed for social rollout.",
    solution:
      "We created one core narrative system and broke it into multiple edits, each with a different opening, pacing pattern, and CTA suited to the target channel.",
    process: [
      "Identified the campaign message hierarchy and hero visual assets",
      "Developed a motion system with modular scenes and interchangeable hooks",
      "Rendered channel-specific versions for feed, reels, and paid placements",
      "Delivered creative files structured for follow-up iterations",
    ],
    deliverables: [
      "Campaign concept board",
      "Narrative system",
      "Six launch-ready motion edits",
      "Hook variations",
      "Platform export kit",
    ],
    designImpact: [
      "Modular design made channel testing faster without changing the whole campaign",
      "Stronger openings improved watch behavior on fast-scrolling platforms",
      "Shared motion logic kept the brand story coherent across multiple edits",
    ],
    outcomes: [
      "Campaign team gained reusable assets instead of one-off video files",
      "The launch sprint covered paid, organic, and partner placements with one system",
      "Performance creative testing became faster because openings were already modular",
    ],
    testimonial: {
      text: "The animations were fantastic and perfectly suited for social media. Great ROI!",
      author: "Lisa Anderson",
      role: "Social Media Manager",
    },
    publishedAt: "2026-02-06",
    updatedAt: "2026-02-20",
  },
];

export const caseStudyList = caseStudies;

const caseStudyTrackDefinitions = {
  "2D Animation Design": {
    title: "2D Animation Design Case Studies for Product, Campaign, and Launch Clarity",
    description:
      "A case-study hub covering reusable 2D animation systems, product launch assets, and motion design work built to improve understanding and engagement.",
    heroSummary:
      "These case studies focus on 2D animation design as a business tool: clearer product stories, stronger launch assets, and reusable visual systems that scale across channels.",
    introParagraphs: [
      "2D animation design performs best when it helps buyers understand a product faster and gives internal teams reusable creative assets for future launches.",
      "This hub collects projects where motion design improved clarity, engagement, and message consistency across the buyer journey.",
    ],
    keywords: [
      "2d animation design case studies",
      "product animation case study",
      "animation launch campaign examples",
      "2d animation studio portfolio",
    ],
    image: "/images/case-studies/2d-animation-design-system.svg",
  },
  "Explainer Video": {
    title: "Explainer Video Case Studies for Product and Service Clarity",
    description:
      "A case-study hub focused on explainer videos that improved lead quality, product understanding, and buyer confidence.",
    heroSummary:
      "Use this hub to review how explainer structure, message simplification, and motion design helped teams explain services and SaaS products more effectively.",
    introParagraphs: [
      "Explainer videos are strongest when they simplify complex offers without flattening the value proposition. These case studies show how that work translates into better lead quality and lower friction.",
      "Each project here demonstrates how story structure, visual hierarchy, and pacing can improve understanding before the sales call or trial.",
    ],
    keywords: [
      "explainer video case studies",
      "saas explainer examples",
      "service explainer case study",
      "explainer video results",
    ],
    image: "/images/case-studies/explainer-video-funnel.svg",
  },
  "Tutorial Video": {
    title: "Tutorial Video Case Studies for Onboarding and Product Adoption",
    description:
      "A case-study hub showing how tutorial video systems improved onboarding clarity, activation, and support efficiency.",
    heroSummary:
      "These projects focus on tutorial content designed around user tasks, activation milestones, and product education systems rather than one-off help-center videos.",
    introParagraphs: [
      "Tutorial content becomes commercially useful when it reduces support load, accelerates activation, and makes product workflows feel easier to learn.",
      "This hub collects projects where instructional motion design helped teams build better onboarding and product education systems.",
    ],
    keywords: [
      "tutorial video case studies",
      "product onboarding videos",
      "tutorial video design examples",
      "saas tutorial system case study",
    ],
    image: "/images/case-studies/tutorial-video-activation.svg",
  },
  "Service Clarity": {
    title: "Service Clarity Case Studies for Complex Offers and Campaign Systems",
    description:
      "A case-study hub for design and motion work that helped service businesses explain offers, packages, and campaign narratives more clearly.",
    heroSummary:
      "These projects focus on service explanation and campaign clarity: making complex offers easier to understand before the consultation or launch rollout.",
    introParagraphs: [
      "Service businesses often struggle to explain intangible work, process-heavy offers, or multi-part campaign narratives. These case studies show how motion and design reduced that friction.",
      "The common thread is clarity: better grouping, better sequencing, and better visual explanations that improved commercial conversations.",
    ],
    keywords: [
      "service clarity case studies",
      "service explainer case study",
      "campaign animation case study",
      "design for service marketing",
    ],
    image: "/images/case-studies/service-clarity-motion.svg",
  },
};

const caseStudyTrackCounts = caseStudies.reduce((map, caseStudy) => {
  const key = caseStudy.contentType || caseStudy.serviceLine;
  map.set(key, (map.get(key) || 0) + 1);
  return map;
}, new Map());

export const caseStudyTrackList = [
  ...Object.entries(caseStudyTrackDefinitions).map(([label, definition]) => ({
    ...definition,
    label,
    slug: definition.slug || taxonomyLabelToSlug(label),
    count: caseStudyTrackCounts.get(label) || 0,
  })),
  ...Array.from(caseStudyTrackCounts.entries())
    .filter(([label]) => !(label in caseStudyTrackDefinitions))
    .map(([label, count]) => ({
      label,
      slug: taxonomyLabelToSlug(label),
      count,
      title: `${label} Case Studies | Cube Cake Studiios`,
      description: "Proof-driven work tied to product understanding and business growth.",
      heroSummary: "A curated proof hub for this case-study group.",
      introParagraphs: ["This hub collects related case studies from Cube Cake Studiios."],
      keywords: [label.toLowerCase()],
      image: "/images/case-studies/2d-animation-design-system.svg",
    })),
].filter((track) => track.count > 0);

export const getCaseStudyTrackBySlug = (slug) =>
  caseStudyTrackList.find((track) => track.slug === slug) || null;

export const getCaseStudiesByTrack = (trackLabel) =>
  caseStudies.filter((caseStudy) => (caseStudy.contentType || caseStudy.serviceLine) === trackLabel);

export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug) || null;

export const getCaseStudiesByServiceSlug = (serviceSlug) =>
  caseStudies.filter((caseStudy) => caseStudy.serviceSlugs?.includes(serviceSlug));

export const getRelatedCaseStudies = (slugs = [], excludeSlug = null) =>
  caseStudies.filter(
    (caseStudy) =>
      caseStudy.slug !== excludeSlug && (slugs.length === 0 || slugs.includes(caseStudy.slug))
  );
