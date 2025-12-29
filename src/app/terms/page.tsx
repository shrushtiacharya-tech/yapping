import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:p-8">
        <div className="max-w-3xl mx-auto py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Terms & Conditions</h1>
          <div className="space-y-6 text-muted-foreground">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">The Lowdown (aka T&Cs)</h2>
            <p>Last updated: July 29, 2024</p>
            <p>
              Hey! Welcome to yapping. Before you dive in and start making connections, we gotta go over some ground rules. By using our site, you're agreeing to these terms. It's basically our digital handshake. 🤝
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-foreground">1. Just Be a Good Human</h3>
            <p>
              This is rule #1 for a reason. Be cool. Be kind. Don't be a troll. We're here for good vibes only. That means no hate speech, harassment, spam, or anything illegal. If you wouldn't say it to your favorite person, don't say it here.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-foreground">2. You're In Control</h3>
            <p>
              You're responsible for what you say and do on yapping. We're just the platform. If a conversation gets weird, you have the power to hit "Next" or report it. Use that power wisely.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-foreground">3. Age Stuff</h3>
            <p>
              You gotta be 18 or older to use yapping. No exceptions. We're serious about this.
            </p>
            
            <h3 className="text-lg md:text-xl font-semibold text-foreground">4. We Can Do What We Gotta Do</h3>
            <p>
              If someone's breaking the rules, we reserve the right to show them the door (aka ban them) without warning. We can also change these terms whenever, so it's a good idea to check back here once in a while.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-foreground">5. The Legal Mumbo Jumbo</h3>
            <p>
              yapping is provided "as is." That means we can't guarantee it'll be perfect 100% of the time. Sometimes things break. We're not liable for any digital bumps or bruises you might get while using the site.
            </p>

            <p>
              That's pretty much it. Now go on, start yapping!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
