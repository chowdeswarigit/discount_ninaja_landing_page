import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListPage from "@/components/blog.tsx";
const Blog = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <BlogListPage />
      <Footer />
    </div>
  );
};

export default Blog;
