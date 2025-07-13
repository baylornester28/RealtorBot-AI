// Feature Subpages for RealtorBot AI – Fully Enhanced

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    slug: "client-notes",
    title: "Smart Client Notes",
    description: "Track conversations, store detailed notes, and always stay updated on each client’s needs.",
    details: [
      "Auto-tag notes by client name",
      "Syncs with CRM tools",
      "Filter notes by topic or urgency"
    ],
    image: "/features/client-notes.jpg",
    video: "/videos/client-notes-demo.mp4"
  },
  {
    slug: "contracts",
    title: "Contract Assistant",
    description: "Summarize real estate contracts instantly and explain them in simple language.",
    details: [
      "Breaks down clauses",
      "Great for helping first-time buyers",
      "Easily copy explanations for email replies"
    ],
    image: "/features/contracts.jpg",
    video: "/videos/contracts-demo.mp4"
  },
  {
    slug: "forms",
    title: "Form Autofill",
    description: "Auto-completes essential real estate forms with saved client and property data.",
    details: [
      "Fill buyer/seller intake forms",
      "Saves 1–2 hours per client",
      "Export as PDF or Docx"
    ],
    image: "/features/forms.jpg",
    video: "/videos/forms-demo.mp4"
  },
  {
    slug: "leads",
    title: "Instant Lead Response",
    description: "Auto-respond to new leads via email or text with custom templates.",
    details: [
      "Tailored by property type & price range",
      "Includes cold/warm/hot follow-up builder",
      "Text & email ready-to-send replies"
    ],
    image: "/features/leads.jpg",
    video: "/videos/leads-demo.mp4"
  },
  {
    slug: "appointments",
    title: "Appointment Scheduler",
    description: "Auto-fill showing requests and link to calendar availability.",
    details: [
      "Integrates with Google/Outlook Calendar",
      "Book showings in seconds",
      "Shareable links for client scheduling"
    ],
    image: "/features/appointments.jpg",
    video: "/videos/appointments-demo.mp4"
  },
  {
    slug: "marketing",
    title: "Marketing & Descriptions",
    description: "Generate polished MLS descriptions, Instagram captions, and more.",
    details: [
      "MLS-friendly property descriptions",
      "Social media captions in multiple tones",
      "3–5 headline/title options for A/B testing"
    ],
    image: "/features/marketing.jpg",
    video: "/videos/marketing-demo.mp4"
  },
  {
    slug: "admin",
    title: "Admin & Docs Assistant",
    description: "Summarize listings, autofill disclosures, generate client reports and more.",
    details: [
      "Weekly seller reports",
      "Email template writer",
      "Open house sign-in sheet builder"
    ],
    image: "/features/admin.jpg",
    video: "/videos/admin-demo.mp4"
  },
  {
    slug: "guides",
    title: "Local Guides & Comparisons",
    description: "Help buyers explore the area with neighborhood comparisons and top-10 lists.",
    details: [
      "Compare ZIP codes by schools, crime, price",
      "Area knowledge summaries",
      "Generate ‘Best of’ lists for buyers"
    ],
    image: "/features/guides.jpg",
    video: "/videos/guides-demo.mp4"
  }
];

export default function FeaturePage({ params }) {
  const feature = features.find((f) => f.slug === params.slug);
  if (!feature) return <div className="p-8 text-center">Feature not found.</div>;

  return (
    <div className="p-10 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">{feature.title}</h1>
      <p className="text-gray-600 text-lg">{feature.description}</p>

      <Image
        src={feature.image}
        alt={feature.title}
        width={800}
        height={450}
        className="rounded-xl shadow-lg"
      />

      <video
        controls
        src={feature.video}
        className="rounded-xl w-full shadow-lg"
        style={{ marginTop: '1.5rem' }}
      />

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {feature.details.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      <div className="pt-6">
        <Link href="/app">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Try This Feature</Button>
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return features.map((feature) => ({ slug: feature.slug }));
}
