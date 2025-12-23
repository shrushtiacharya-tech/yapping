import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Sparkles, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:p-8">
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tighter mb-4">
            About yapping
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Just a space to connect, vibe, and maybe make a new friend. No pressure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center my-16">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                <Users className="h-8 w-8" />
              </div>
              <CardTitle className="pt-4">Our Vibe</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're all about low-key, no-stress convos. Think of us as the cozy corner of the internet where you can just be you.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
               <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                <Sparkles className="h-8 w-8" />
              </div>
              <CardTitle className="pt-4">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To create a place where you can find someone to yap with, share a laugh, or just pass the time. It's that simple.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
               <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                <Heart className="h-8 w-8" />
              </div>
              <CardTitle className="pt-4">Our Promise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're committed to keeping this space safe and respectful. You focus on the vibes, we'll handle the rest.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
