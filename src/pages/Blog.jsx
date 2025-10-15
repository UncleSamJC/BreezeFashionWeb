import SubPageHero from '../components/basic/SubPageHero';
import BlogGrid from '../components/blog/BlogGrid';

function Blog() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2e65c45b0d8c4610607e7_image.png"
        title="Industry Insights & Expert Opinions"
        description="Stay informed with the latest fashion trends, manufacturing advice, and practical solutions to navigate apparel production challenges."
        showButtons={true}
      />
      <BlogGrid />
    </>
  );
}

export default Blog;
