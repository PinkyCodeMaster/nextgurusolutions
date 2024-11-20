import { Badge } from '@repo/design-system/components/ui/badge';
import { Card, CardContent } from '@repo/design-system/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@repo/design-system/components/ui/carousel';
import { ArrowRight, Code, Globe, Mail, ShoppingCart } from 'lucide-react';

const techStack = [
  { name: 'Next.js 15', icon: <Globe className="h-6 w-6" /> },
  { name: 'Stripe', icon: <ShoppingCart className="h-6 w-6" /> },
  { name: 'MedusaJS', icon: <Code className="h-6 w-6" /> },
  { name: 'Clerk', icon: <Mail className="h-6 w-6" /> },
  { name: 'React Email', icon: <Mail className="h-6 w-6" /> },
  { name: 'Resend', icon: <Mail className="h-6 w-6" /> },
];

const services = [
  {
    name: 'Web Development',
    description: 'Custom websites tailored to your needs',
  },
  {
    name: 'E-commerce Solutions',
    description: 'Powerful online stores with Stripe and MedusaJS',
  },
  {
    name: 'Digital Marketing',
    description: 'Boost your online presence and reach',
  },
  {
    name: 'IT Services',
    description: 'Comprehensive tech support for your business',
  },
];

export const Cases = () => {
  return (
    <div className="w-full bg-gradient-to-b from-primary/10 to-background py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="mx-auto text-center font-bold text-3xl tracking-tighter md:text-5xl lg:max-w-3xl">
            Your One-Stop Shop for IT and Web Solutions! 🚀
          </h2>
          <p className="mx-auto max-w-2xl text-center text-muted-foreground">
            We're just getting started, but we're already making waves! Check
            out our awesome tech stack and services:
          </p>

          <Carousel className="mx-auto w-full max-w-md">
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem key={service.name}>
                  <Card>
                    <CardContent className="flex h-48 flex-col items-center justify-center p-6">
                      <h3 className="mb-2 font-semibold text-xl">
                        {service.name}
                      </h3>
                      <p className="text-center text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <Badge
                key={tech.name}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {tech.icon}
                <span className="ml-2">{tech.name}</span>
              </Badge>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-muted-foreground">
              We're proud to be working with our first three amazing clients!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-primary hover:underline"
            >
              Ready to join them? Let's chat!
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
