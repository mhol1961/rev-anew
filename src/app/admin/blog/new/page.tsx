import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'New Blog Post Redirect - Technology Alliance Solutions',
  description: 'Blog post creation has been removed pending Sanity CMS integration',
};

export default function NewBlogPostPage() {
  // Redirect to home page as blog post creation is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
