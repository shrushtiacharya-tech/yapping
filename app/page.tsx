import { Header } from "@/components/header";
import { LandingPage } from "@/components/landing-page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <LandingPage />
      </main>
    </div>
  );
}
