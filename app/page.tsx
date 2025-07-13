
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10 max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to RealtorBot AI</h1>
      <p className="text-lg text-gray-700">
        Your all-in-one AI assistant for real estate agents.
      </p>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li><Link href="/features/leads" className="text-blue-600 underline">▶ Instant Lead Response</Link></li>
        <li><Link href="/features/appointments" className="text-blue-600 underline">▶ Appointment Scheduler</Link></li>
        <li><Link href="/features/marketing" className="text-blue-600 underline">▶ MLS & Social Marketing Tools</Link></li>
        <li><Link href="/features/forms" className="text-blue-600 underline">▶ Autofill Real Estate Forms</Link></li>
        <li><Link href="/features/contracts" className="text-blue-600 underline">▶ Contract Breakdown Assistant</Link></li>
        <li><Link href="/features/guides" className="text-blue-600 underline">▶ Local Area Guides</Link></li>
      </ul>
    </main>
  );
}
