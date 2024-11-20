import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import {
  CheckCircle,
  Clock,
  Headphones,
  Laptop,
  Network,
  Server,
  Shield,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="container mx-auto space-y-16 px-4 py-16">
      <section className="space-y-4 text-center">
        <h1 className="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl">
          IT Support Services
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
          Reliable and efficient IT support to keep your business running
          smoothly.
        </p>
      </section>

      <section className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-semibold text-3xl tracking-tight">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            At NetGuru Solutions, we provide robust IT support services tailored
            to your business needs. From network management to cybersecurity, we
            ensure your technology infrastructure is secure, efficient, and
            always up-to-date.
          </p>
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        <div className="relative h-64 md:h-full">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20" />
          <Laptop className="h-full w-full text-primary opacity-20" />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight">
          Our IT Support Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Network Management',
              description:
                'Optimize your network infrastructure for peak performance',
              icon: Network,
            },
            {
              title: 'Cybersecurity',
              description:
                'Protect your business from cyber threats and data breaches',
              icon: Shield,
            },
            {
              title: 'Help Desk Support',
              description:
                "Responsive technical support for your team's day-to-day needs",
              icon: Headphones,
            },
            {
              title: 'Cloud Services',
              description:
                'Seamless integration and management of cloud-based solutions',
              icon: Server,
            },
            {
              title: 'IT Consulting',
              description:
                'Strategic guidance to align your IT with business objectives',
              icon: Zap,
            },
            {
              title: '24/7 Monitoring',
              description:
                'Round-the-clock monitoring to prevent and address issues',
              icon: Clock,
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
          Why Choose Our IT Support?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Proactive Approach',
              description:
                'We identify and resolve issues before they impact your business',
            },
            {
              title: 'Customized Solutions',
              description:
                'Tailored IT support plans to meet your specific needs',
            },
            {
              title: 'Experienced Team',
              description:
                'Our certified IT professionals bring years of expertise',
            },
            {
              title: 'Fast Response Times',
              description:
                'Quick resolution to minimize downtime and disruption',
            },
            {
              title: 'Cost-Effective',
              description:
                'Reduce IT costs while improving efficiency and reliability',
            },
            {
              title: 'Scalable Support',
              description: 'Our services grow with your business needs',
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
          Ready to Enhance Your IT Infrastructure?
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
          Let's work together to create an IT support strategy that ensures your
          technology drives your business forward.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </section>
    </div>
  );
}
