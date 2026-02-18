// src/app/page.tsx
import { Hero } from "@/features/home/Hero";
import { ValuesSection } from "@/features/home/ValuesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ValuesSection /> {/* Add the new section here */}
      
      {/* Next Placeholder */}
      <section className="py-20 bg-naramat-brand text-white text-center">
         <p>Stats & Numbers Section</p>
      </section>
    </main>
  );
}