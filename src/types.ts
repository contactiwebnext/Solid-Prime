export interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  marketCap: string;
  aiSignal: 'Bullish Bias' | 'Neutral' | 'Volatility Alert' | 'Accumulation';
  aiScore: number;
  dataPoints: number[];
}

export interface AIInsight {
  id: string;
  title: string;
  category: 'Pattern Detection' | 'Volatility' | 'Macro Flow' | 'Risk Boundary';
  summary: string;
  asset: string;
  confidence: number;
  timestamp: string;
  impact: 'High' | 'Medium' | 'Low';
}

export interface ActivityItem {
  id: string;
  type: 'BUY' | 'SELL' | 'REBALANCE' | 'ALERT';
  asset: string;
  quantity: string;
  price: string;
  status: 'Simulated' | 'Triggered' | 'Monitored';
  time: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
