import SEO from "../components/SEO";
import SubPageHero from '../components/basic/SubPageHero';
import ProductCategories from '../components/products/ProductCategories';
import FinalCTA from '../components/home/FinalCTA';
import productHeaderImg from "../assets/images/headerimg/20251110183833_130_856.jpg"

function Products() {
  return (
    <>
      <SEO
        title="Products"
        url="/products"
        description="Explore Breeze Fashion's diverse range of premium apparel including kimonos, scarves, and more. Quality craftsmanship meets contemporary design."
      />
      <SubPageHero
        backgroundImage={productHeaderImg}
        title="Discover Our Fashion Collections"
        description="Explore our diverse range of premium apparel from elegant kimonos to stylish scarves. Quality craftsmanship meets contemporary design."
        showButtons={true}
      />

      <ProductCategories />

      <FinalCTA />
    </>
  );
}

export default Products;
