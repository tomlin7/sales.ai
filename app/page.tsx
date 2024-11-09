import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BarChart3,
  Brain,
  LineChart,
  MessageSquareText,
  Mic,
  PieChart,
  Sparkles,
  TrendingUp,
  Users,
  Wand2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import CallAnalytics from '@/components/dashboard/CallAnalytics';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            AI-Powered Sales Intelligence
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold p-2 mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Transform Your Sales Calls Into Actionable Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Leverage advanced AI to analyze sales calls, uncover patterns, and
            boost conversion rates with real-time insights and coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          <div className="mt-16">
            <Card className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-6">
                Live Call Analytics Dashboard
              </h3>
              <CallAnalytics />
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Sales Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-6 w-6" />,
                title: 'AI-Powered Analysis',
                description:
                  'Advanced machine learning algorithms analyze every conversation for key insights and patterns.',
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: 'Real-time Coaching',
                description:
                  'Get live suggestions and improvements during calls to boost conversion rates.',
              },
              {
                icon: <MessageSquareText className="h-6 w-6" />,
                title: 'Sentiment Analysis',
                description:
                  'Understand customer emotions and reactions throughout the conversation.',
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: 'Performance Metrics',
                description:
                  'Track key performance indicators and sales metrics in real-time.',
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: 'Team Analytics',
                description:
                  'Compare team performance and share best practices across your organization.',
              },
              {
                icon: <Wand2 className="h-6 w-6" />,
                title: 'Custom Insights',
                description:
                  'Tailor analytics to your specific sales process and business needs.',
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Preview Section */}
      <section id="analytics" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Real-time Analytics
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Make Data-Driven Decisions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <LineChart className="h-5 w-5" />,
                    title: 'Conversion Tracking',
                    description:
                      'Monitor success rates and identify winning patterns',
                  },
                  {
                    icon: <PieChart className="h-5 w-5" />,
                    title: 'Call Sentiment',
                    description:
                      'Analyze emotional responses and engagement levels',
                  },
                  {
                    icon: <BarChart3 className="h-5 w-5" />,
                    title: 'Performance Metrics',
                    description:
                      'Track KPIs and benchmark against industry standards',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl -z-10" />
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940"
                alt="Analytics Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$49',
                features: [
                  '5 Users',
                  'Basic Analytics',
                  '24/7 Support',
                  '1,000 Call Minutes',
                ],
              },
              {
                name: 'Professional',
                price: '$99',
                features: [
                  '25 Users',
                  'Advanced Analytics',
                  'Priority Support',
                  '10,000 Call Minutes',
                  'Custom Reports',
                ],
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: [
                  'Unlimited Users',
                  'Full Analytics Suite',
                  'Dedicated Support',
                  'Custom Integration',
                  'API Access',
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/signup">
                  <Button
                    className="w-full"
                    variant={index === 1 ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of sales professionals using XYZ.AI to close more
              deals and grow their business.
            </p>
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Mic className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">XYZ.AI</span>
            </Link>
            <div className="text-sm text-muted-foreground">
              © 2024 XYZ.AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
