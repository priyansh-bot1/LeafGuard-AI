import { NavigationIntent } from '../types/chat';

export const navigationIntents: NavigationIntent[] = [
  {
    patterns: [/home/i, /go.*home/i, /back.*home/i],
    path: '/home',
    response: "Taking you to the home page!"
  },
  {
    patterns: [/features/i, /what.*can.*do/i, /explore.*features/i],
    path: '/features',
    response: "Let's dive into our features page!"
  },
  {
    patterns: [/monitor/i, /tree.*monitor/i, /track.*orchard/i, /leaf.*tracking/i],
    path: '/monitor',
    response: "I'll guide you to the monitoring page for orchard tracking."
  },
  {
    patterns: [/protect.*orchard/i, /save.*trees/i, /protect.*trees/i, /secure.*farm/i],
    path: '/protect-orchard',
    response: "Heading over to the orchard protection page!"
  },
  {
    patterns: [/results/i, /view.*results/i, /detection.*results/i],
    path: '/results',
    response: "Let's check the latest analysis results!"
  },
  {
    patterns: [/get.*started/i, /begin.*journey/i, /start.*now/i],
    path: '/get-started',
    response: "I'll take you to the Get Started page to begin your journey with us!"
  },
  {
    patterns: [
      /open\s*demo/i,
      /test.*disease.*detection/i,
      /try.*ai.*model/i,
      /demo.*page/i,
      /leaf.*detection.*demo/i
    ],
    path: '/open-demo',
    response: "I'll take you to the Disease Detection Demo page where you can test our AI model!"
  },
  {
    patterns: [
      /real.*time.*monitoring/i,
      /live.*tracking/i,
      /monitor.*now/i,
      /real.*time.*tracking/i
    ],
    path: '/real-time-monitoring',
    response: "Taking you to the Real-Time Monitoring page!"
  },
  {
    patterns: [
      /disease.*analysis/i,
      /analyze.*disease/i,
      /disease.*report/i,
      /leaf.*disease.*check/i
    ],
    path: '/disease-analysis',
    response: "I'll take you to the Disease Analysis page!"
  },
  {
    patterns: [
      /growth.*tracking/i,
      /track.*growth/i,
      /tree.*growth/i,
      /monitor.*development/i
    ],
    path: '/growth-tracking',
    response: "Let's monitor the growth of your trees on the Growth Tracking page!"
  },
  {
    patterns: [
      /leaf.*health.*map/i,
      /health.*overview/i,
      /tree.*health.*visual/i
    ],
    path: '/leaf-health-map',
    response: "Redirecting you to the Leaf Health Map for a visual overview!"
  },
  {
    patterns: [
      /protect.*trees/i,
      /tree.*protection/i,
      /shield.*trees/i
    ],
    path: '/protect-trees',
    response: "Let's secure your orchard through the Tree Protection page!"
  },
  {
    patterns: [
      /disease.*identification/i,
      /identify.*disease/i,
      /spot.*infection/i
    ],
    path: '/disease-identification',
    response: "I'll direct you to the Disease Identification page."
  },
  {
    patterns: [
      /health.*analysis/i,
      /analyze.*health/i,
      /tree.*condition/i
    ],
    path: '/health-analysis',
    response: "Taking you to the Health Analysis page to assess leaf conditions."
  },
  {
    patterns: [
      /alerts.*notifications/i,
      /view.*alerts/i,
      /notifications/i
    ],
    path: '/alerts-notifications',
    response: "I'll take you to Alerts and Notifications to keep you informed."
  },
  {
    patterns: [
      /growth.*monitoring/i,
      /watch.*growth/i,
      /tree.*development/i
    ],
    path: '/growth-monitoring',
    response: "Redirecting you to the Growth Monitoring page."
  },
  {
    patterns: [
      /alert.*details/i,
      /view.*alert/i,
      /alert.*info/i
    ],
    path: '/alert-details',
    response: "Let's check the details of your alerts."
  },
  {
    patterns: [
      /historical.*analysis/i,
      /past.*records/i,
      /disease.*history/i
    ],
    path: '/historical-analysis',
    response: "I'll take you to the Historical Analysis page for past records."
  },
  {
    patterns: [
      /choose.*plan/i,
      /upgrade/i,
      /plan.*selection/i
    ],
    path: '/choose-plan',
    response: "Redirecting to the Choose Plan page to explore options."
  },
  {
    patterns: [
      /explore.*resources/i,
      /learn.*more/i,
      /resource.*center/i
    ],
    path: '/explore-resources',
    response: "Let me show you our Resources page!"
  },
  {
    patterns: [
      /contact.*support/i,
      /help.*desk/i,
      /reach.*out/i,
      /support/i
    ],
    path: '/contact-support',
    response: "I'll take you to the Contact Support page!"
  },
  {
    patterns: [
      /start.*chat/i,
      /live.*chat/i,
      /talk.*to.*us/i
    ],
    path: '/start-chat',
    response: "Let's start a chat with our support team!"
  },
  {
    patterns: [
      /about.*us/i,
      /learn.*about/i,
      /company.*info/i
    ],
    path: '/about',
    response: "Here's more information about LeafGuard AI on our About Us page."
  },
  {
    patterns: [/.*/],
    path: '/home',
    response: "Couldn't quite catch that. Redirecting to the home page!"
  }
];