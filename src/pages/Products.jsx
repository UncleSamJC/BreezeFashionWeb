import SubPageHero from '../components/basic/SubPageHero';
import ProductCategories from '../components/products/ProductCategories';
import FinalCTA from '../components/home/FinalCTA';
import productHeaderImg from "../assets/images/headerimg/tyler-davis-e0fnsLoNhH0-unsplash.jpg"

function Products() {
  return (
    <>
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
