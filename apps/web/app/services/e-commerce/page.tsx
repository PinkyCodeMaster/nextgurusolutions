import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import {
  BarChart,
  CheckCircle,
  Globe,
  Lock,
  ShoppingCart,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="container mx-auto space-y-16 px-4 py-16">
      <section className="space-y-4 text-center">
        <h1 className="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl">
          E-Commerce Solutions
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
          Empower your business with our cutting-edge e-commerce platforms and
          services.
        </p>
      </section>

      <section className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-semibold text-3xl tracking-tight">
            Tailored E-Commerce Experiences
          </h2>
          <p className="text-lg text-muted-foreground">
            At NetGuru Solutions, we specialize in creating bespoke e-commerce
            platforms that adapt to your unique business needs. From small
            boutiques to large-scale operations, we deliver solutions that grow
            with your business.
          </p>
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        <div className="relative h-64 md:h-full">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-20" />
          <ShoppingCart className="h-full w-full text-primary opacity-20" />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight">
          Key Features
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Responsive Design',
              description:
                'Mobile-friendly layouts that look great on any device',
              icon: Zap,
            },
            {
              title: 'Secure Payments',
              description:
                'Integration with trusted payment gateways for safe transactions',
              icon: Lock,
            },
            {
              title: 'Inventory Management',
              description:
                'Robust tools to track and manage your product inventory',
              icon: ShoppingCart,
            },
            {
              title: 'SEO Optimization',
              description:
                "Built-in features to improve your store's search engine ranking",
              icon: Globe,
            },
            {
              title: 'Analytics Dashboard',
              description:
                "Comprehensive insights into your store's performance",
              icon: BarChart,
            },
            {
              title: 'Scalable Architecture',
              description: 'Solutions that grow with your business needs',
              icon: CheckCircle,
            },
          ].map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-lg bg-muted p-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight">
          Why Choose Our E-Commerce Solutions?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Customization',
              description:
                'Tailor-made solutions that reflect your brand identity',
            },
            {
              title: 'Scalability',
              description:
                'Platforms that grow with your business, from startup to enterprise',
            },
            {
              title: 'Integration',
              description:
                'Seamless connection with your existing systems and third-party services',
            },
            {
              title: 'Support',
              description: 'Dedicated team for ongoing maintenance and support',
            },
            {
              title: 'Performance',
              description:
                'Optimized for speed and efficiency to enhance user experience',
            },
            {
              title: 'Innovation',
              description:
                'Cutting-edge features to keep you ahead of the competition',
            },
          ].map((benefit) => (
            <div key={benefit.title} className="flex gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 text-center">
        <h2 className="font-semibold text-3xl tracking-tight">
          Ready to Elevate Your Online Store?
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
          Let's create an e-commerce solution that drives your business forward
          and delights your customers.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </section>
    </div>
  );
}
