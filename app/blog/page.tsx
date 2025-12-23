import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogPostCard } from "@/components/blog-post-card";
import { mockBlogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:p-8">
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tighter mb-4">
            The yapping log
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Our totally-not-cringey thoughts on vibes, safety, and making friends online.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
