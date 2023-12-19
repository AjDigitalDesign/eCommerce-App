import Image from "next/image";
import { client } from "@/app/lib/sanity";
import Hero from "@/app/components/Hero";
import Latest from "./components/Latest";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Latest />
    </div>
  );
}
