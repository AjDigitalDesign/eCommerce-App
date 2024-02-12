import Image from "next/image";
import { client } from "@/app/lib/sanity";
import Hero from "@/app/components/Hero";
import Latest from "./components/Latest";

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Latest />
    </div>
  );
}
