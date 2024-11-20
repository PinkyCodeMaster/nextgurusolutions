import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

type ContactTemplateProps = {
  readonly firstName: string;
  readonly lastName: string;
  readonly companyName: string;
  readonly email: string;
  readonly meetingDate: string;
  readonly subject: string;
  readonly message: string;
};

export const ContactTemplate = ({
  firstName,
  lastName,
  companyName,
  email,
  meetingDate,
  subject,
  message,
}: ContactTemplateProps) => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>
        New meeting request from {firstName} {lastName}
      </Preview>
      <Body className="bg-zinc-50 font-sans">
        <Container className="mx-auto py-12">
          <Section className="mt-8 rounded-md bg-zinc-200 p-px">
            <Section className="rounded-[5px] bg-white p-8">
              <Text className="mt-0 mb-4 font-semibold text-2xl text-zinc-950">
                New meeting request from {firstName} {lastName}
              </Text>
              <Text className="m-0 text-zinc-500">
                {firstName} {lastName} from {companyName} ({email}) has
                requested a meeting:
              </Text>
              <Hr className="my-4" />
              <Text className="m-0 text-zinc-500">
                <strong>Preferred Meeting Date:</strong> {meetingDate}
              </Text>
              <Text className="m-0 text-zinc-500">
                <strong>Subject:</strong> {subject}
              </Text>
              <Text className="m-0 text-zinc-500">
                <strong>Message:</strong>
              </Text>
              <Text className="m-0 text-zinc-500">{message}</Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

const ExampleContactEmail = () => (
  <ContactTemplate
    firstName="Jane"
    lastName="Smith"
    companyName="Acme Inc."
    email="jane@example.com"
    meetingDate="2023-06-15T10:00:00Z"
    subject="Discuss e-commerce solutions"
    message="Hello, I'm interested in learning more about your e-commerce solutions for our growing business."
  />
);

export default ExampleContactEmail;
