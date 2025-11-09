import SubPageHero from '../components/basic/SubPageHero';
import BlogGrid from '../components/blog/BlogGrid';
import blogHeaderImg from "../assets/images/headerimg/casey-lee-BQtnVwtu1yM-unsplash.jpg"

function Blog() {
  return (
    <>
      <SubPageHero
        backgroundImage={blogHeaderImg}
        title="Industry Insights & Expert Opinions"
        description="Stay informed with the latest fashion trends, manufacturing advice, and practical solutions to navigate apparel production challenges."
        showButtons={true}
      />
      <BlogGrid />
    </>
  );
}

export default Blog;
