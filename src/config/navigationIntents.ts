import { NavigationIntent } from '../types/chat';

export const navigationIntents: NavigationIntent[] = [
  {
    patterns: [
      /open\s*demo/i,
      /test.*disease.*detection/i,
      /try.*disease.*detection/i,
      /check.*leaf.*health/i,
      /analyze.*leaf/i,
      /detect.*disease/i,
      /upload.*leaf.*image/i,
      /test.*model/i,
      /demo.*ai/i
    ],
    path: '/open-demo',
    response: "I'll take you to the Disease Detection Demo page where you can test our AI model!"
  },
  {
    patterns: [/features/i, /what.*can.*do/i],
    path: '/features',
    response: "Let me show you our features page!"
  },
  // Add other navigation intents...
];