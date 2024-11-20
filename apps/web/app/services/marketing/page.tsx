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
  Mail,
  Megaphone,
  Search,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="container mx-auto space-y-16 px-4 py-16">
      <section className="space-y-4 text-center">
        <h1 className="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl">
          Marketing Solutions
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
          Boost your online presence and drive growth with our comprehensive
          marketing services.
        </p>
      </section>

      <section className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-semibold text-3xl tracking-tight">
            Strategic Marketing Campaigns
          </h2>
          <p className="text-lg text-muted-foreground">
            At NetGuru Solutions, we craft data-driven marketing strategies
            tailored to your business goals. From SEO to social media
            management, we provide the tools and expertise to elevate your brand
            and attract more customers.
          </p>
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        <div className="relative h-64 md:h-full">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 opacity-20" />
          <Megaphone className="h-full w-full text-primary opacity-20" />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight">
          Our Marketing Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Search Engine Optimization (SEO)',
              description:
                "Improve your website's visibility in search results",
              icon: Search,
            },
            {
              title: 'Pay-Per-Click Advertising (PPC)',
              description:
                'Create targeted ad campaigns to drive traffic and conversions',
              icon: Target,
            },
            {
              title: 'Social Media Marketing',
              description:
                'Engage your audience and build brand awareness on social platforms',
              icon: Users,
            },
            {
              title: 'Email Marketing',
              description:
                'Develop effective email campaigns to nurture leads and retain customers',
              icon: Mail,
            },
            {
              title: 'Content Marketing',
              description:
                'Create valuable content that attracts and retains a clearly defined audience',
              icon: TrendingUp,
            },
            {
              title: 'Analytics and Reporting',
              description:
                'Gain insights into your marketing performance with detailed analytics',
              icon: BarChart,
            },
          ].map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <service.icon className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-lg bg-muted p-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight">
          Why Choose Our Marketing Services?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Data-Driven Strategies',
              description: 'We base our decisions on solid data and analytics',
            },
            {
              title: 'Customized Approach',
              description:
                'Tailored marketing solutions for your unique business needs',
            },
            {
              title: 'Experienced Team',
              description:
                'Our experts have years of experience in digital marketing',
            },
            {
              title: 'Transparent Reporting',
              description:
                'Regular, clear reports on your campaign performance',
            },
            {
              title: 'Continuous Optimization',
              description:
                'We constantly refine our strategies for better results',
            },
            {
              title: 'Integrated Solutions',
              description:
                'Seamless integration with your existing systems and processes',
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
          Ready to Amplify Your Marketing Efforts?
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
          Let's create a marketing strategy that drives your business growth and
          helps you reach your target audience effectively.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </section>
    </div>
  );
}
