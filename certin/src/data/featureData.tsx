import { FeatureItem } from '@/components/landing/features/FeatureSection'
import {
  MessageSquare,
  BellRing,
  Clock,
  CheckCircle2,
  LayoutDashboard,
  TrendingUp,
  FileBarChart,
  Target,
  FileText,
  Banknote,
  Zap,
  Filter,
  PieChart,
  BarChart2,
  Calendar,
  Shield,
} from 'lucide-react'

export const featuresData: FeatureItem[] = [
  {
    id: 'message-manager',
    icon: MessageSquare,
    title: 'Never miss an important message again.',
    subtitle: 'Reduce message management time by 70% with our smart automation system.',
    primaryColor: '#2563eb', // primary
    secondaryColor: '#dbeafe', // blue-100
    howItWorks: {
      steps: [
        'Messages from all your communication channels are automatically collected and organized',
        'CERTIN analyzes content to detect signals & urgency and categorizes them for you',
        'Smart reminders ensure timely responses and follow-ups, so you can focus on what matters most',
      ],
    },
    keyBenefits: {
      items: [
        {
          icon: BellRing,
          text: 'Priority alerts across platforms',
        },
        {
          icon: Clock,
          text: 'Automated follow-ups',
        },
        {
          icon: CheckCircle2,
          text: 'Smart message categorization',
        },
        {
          icon: Filter,
          text: 'Custom notification rules',
        },
        {
          icon: Zap,
          text: 'Instant response templates',
        },
      ],
    },
    demoType: 'message-manager',
  },
  {
    id: 'business-dashboard',
    icon: LayoutDashboard,
    title: 'All your business information at your fingertips.',
    subtitle: 'Make data-driven decisions without being a data expert.',
    primaryColor: '#7c3aed', // accent (violet-600)
    secondaryColor: 'rgba(124, 58, 237, 0.1)', // accent/10
    howItWorks: {
      steps: [
        'Connect your existing tools and upload files, excels & photos - no technical skills needed',
        'Data is automatically collected and organized for you to run your business most efficiently',
        'Get automated reports, insights and recommendations to make data-driven decisions',
      ],
    },
    keyBenefits: {
      items: [
        {
          icon: TrendingUp,
          text: 'Identify profitable routes',
        },
        {
          icon: FileBarChart,
          text: 'One-click reports',
        },
        {
          icon: Target,
          text: 'Automatic trend detection',
        },
        {
          icon: BarChart2,
          text: 'Custom KPI tracking',
        },
        {
          icon: PieChart,
          text: 'Visual data insights',
        },
      ],
    },
    demoType: 'business-dashboard',
  },
  {
    id: 'invoice-creator',
    icon: FileText,
    title: 'Professional invoices, created automatically.',
    subtitle: 'Get paid 40% faster with smart invoicing and payment tracking.',
    primaryColor: '#16a34a', // green-600
    secondaryColor: '#dcfce7', // green-100
    howItWorks: {
      steps: [
        'CERTIN automatically captures billable items from messages and stores them in your business dashboard',
        'Automatically create professional invoices with professional templates and your branding in seconds',
        'Sends reminders to clients and track payments automatically - experience cashflow like never before',
      ],
    },
    keyBenefits: {
      items: [
        {
          icon: Banknote,
          text: 'Automated payment tracking',
        },
        {
          icon: Clock,
          text: 'Save 5+ weekly hours',
        },
        {
          icon: CheckCircle2,
          text: '90% fewer billing errors',
        },
        {
          icon: Shield,
          text: 'Secure payment gateway',
        },
        {
          icon: Calendar,
          text: 'Scheduled recurring invoices',
        },
      ],
    },
    demoType: 'invoice-creator',
  },
]
