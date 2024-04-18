import { Hero } from "./_components/hero";
import { Details } from "./_components/details";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="p-24">
        <Details />
      </div>
    </div>
  );
}