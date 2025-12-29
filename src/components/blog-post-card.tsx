import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/blog-data";
import { ArrowRight } from "lucide-react";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href="#">
      <Card className="h-full flex flex-col group overflow-hidden bg-card/50 border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-all transform hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={post.image.imageUrl}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={post.image.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <Badge variant="secondary" className="mb-2">{post.category}</Badge>
            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
            <p className="text-muted-foreground text-sm line-clamp-3">
              {post.summary}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>{post.date}</span>
            <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Read More <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
