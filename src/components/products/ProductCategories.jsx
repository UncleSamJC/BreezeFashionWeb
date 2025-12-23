import { colors, typography } from "../../lib/designTokens";
import { Link } from "react-router-dom";
import grainImg from '../../assets/images/common/grain.png';

// Fashion Kimono images
import kimono1 from "../../assets/images/products/1fashionk/1U107039.jpg";
import kimono2 from "../../assets/images/products/1fashionk/1U107068.jpg";
import kimono3 from "../../assets/images/products/1fashionk/1U107073.jpg";
import kimono4 from "../../assets/images/products/1fashionk/1U107103.jpg";

// Swimwear images
import swim1 from "../../assets/images/products/2swimscud/swim001.jpg";
import swim2 from "../../assets/images/products/2swimscud/swim002.jpg";
import swim3 from "../../assets/images/products/2swimscud/swim003.jpg";
import swim4 from "../../assets/images/products/2swimscud/swim004.jpg";
import swim5 from "../../assets/images/products/2swimscud/swim005.jpg";
import swim6 from "../../assets/images/products/2swimscud/swim006.jpg";
import swim7 from "../../assets/images/products/2swimscud/swim007.jpg";
import swim8 from "../../assets/images/products/2swimscud/swim008.jpg";

// Fashion Lace & Crochet images
import lace1 from "../../assets/images/products/3fashionlc/f3-001.jpg";
import lace2 from "../../assets/images/products/3fashionlc/f3-002.jpg";
import lace3 from "../../assets/images/products/3fashionlc/f3-003.jpg";
import lace4 from "../../assets/images/products/3fashionlc/f3-004.jpg";

// Burnout Velvet images
import velvet1 from "../../assets/images/products/4fashionbv/vv001.jpg";
import velvet2 from "../../assets/images/products/4fashionbv/vv002.jpg";
import velvet3 from "../../assets/images/products/4fashionbv/vv003.jpg";
import velvet4 from "../../assets/images/products/4fashionbv/vv004.jpg";
import velvet5 from "../../assets/images/products/4fashionbv/vv005.jpg";
import velvet6 from "../../assets/images/products/4fashionbv/vv006.jpg";
import velvet7 from "../../assets/images/products/4fashionbv/vv007.jpg";
import velvet8 from "../../assets/images/products/4fashionbv/vv008.jpg";

// Fashion Holiday images
import holiday1 from "../../assets/images/products/5fashionh/f5-001.jpg";
import holiday2 from "../../assets/images/products/5fashionh/f5-002.jpg";
import holiday3 from "../../assets/images/products/5fashionh/f5-003.jpg";
import holiday4 from "../../assets/images/products/5fashionh/f5-004.jpg";

// Fashion Scarf images
import scarf1 from "../../assets/images/products/6fashions/f6-001.jpg";
import scarf2 from "../../assets/images/products/6fashions/f6-002.jpg";
import scarf3 from "../../assets/images/products/6fashions/f6-003.jpg";
import scarf4 from "../../assets/images/products/6fashions/f6-004.jpg";
import scarf5 from "../../assets/images/products/6fashions/f6-005.jpg";
import scarf6 from "../../assets/images/products/6fashions/f6-006.jpg";
import scarf7 from "../../assets/images/products/6fashions/f6-007.jpg";
import scarf8 from "../../assets/images/products/6fashions/f6-008.jpg";

function ProductCategories() {
  const categories = [
    {
      id: "kimono",
      title: "Fashion Kimono",
      description:
        "Elegant and versatile kimono designs combining traditional aesthetics with modern fashion. Perfect for casual wear, beach outings, and layering.",
      productCount: 4,
      backgroundColor: colors.background.whiteChocolate,
      images: [kimono1, kimono2, kimono3, kimono4],
    },
    {
      id: "swimwear",
      title: "Swim Suits & Cover-Up Dress",
      description:
        "Stylish swimwear and beach cover-ups designed for comfort and elegance. From casual beach dresses to sophisticated cover-ups.",
      productCount: 8,
      backgroundColor: colors.background.isabelline,
      images: [swim1, swim2, swim3, swim4, swim5, swim6, swim7, swim8],
    },
    {
      id: "lace",
      title: "Fashion Lace & Crochet",
      description:
        "Delicate lace and crochet pieces perfect for beach wear and summer fashion. Handcrafted details with bohemian charm.",
      productCount: 4,
      backgroundColor: colors.background.whiteChocolate,
      images: [lace1, lace2, lace3, lace4],
    },
    {
      id: "velvet",
      title: "Fashion Burnout Velvet",
      description:
        "Luxurious burnout velvet kimonos featuring intricate patterns and rich textures. Ideal for evening wear and special occasions.",
      productCount: 8,
      backgroundColor: colors.background.isabelline,
      images: [velvet1, velvet2, velvet3, velvet4, velvet5, velvet6, velvet7, velvet8],
    },
    {
      id: "holiday",
      title: "Fashion Holiday",
      description:
        "Festive and glamorous pieces featuring sequins, metallics, and statement designs. Perfect for celebrations and special events.",
      productCount: 4,
      backgroundColor: colors.background.whiteChocolate,
      images: [holiday1, holiday2, holiday3, holiday4],
    },
    {
      id: "scarf",
      title: "Fashion Scarf",
      description:
        "Premium scarves in various materials, patterns, and styles. From silk squares to wool wraps, perfect for any season.",
      productCount: 8,
      backgroundColor: colors.background.isabelline,
      images: [scarf1, scarf2, scarf3, scarf4, scarf5, scarf6, scarf7, scarf8],
    },
  ];

  return (
    <section className="relative">
      {categories.map((category, index) => (
        <div
          key={category.id}
          className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
          style={{ backgroundColor: category.backgroundColor }}
        >
          {/* Background grain texture */}
          <img
            src={grainImg}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            style={{ zIndex: 0, opacity: 0.03 }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Category Header */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
                <div>
                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl mb-4"
                    style={{
                      fontFamily: typography.fontFamily.heading,
                      color: colors.text.primary,
                      lineHeight: typography.lineHeight.tight,
                      letterSpacing: typography.letterSpacing.tight,
                    }}
                  >
                    {category.title}
                  </h2>
                  <p
                    className="text-base md:text-lg max-w-2xl"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.secondary,
                      lineHeight: "1.7",
                    }}
                  >
                    {category.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link to={"/contact"}>
                    <button
                      className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-80"
                      style={{
                        backgroundColor: colors.button.primary,
                        color: colors.text.light,
                        fontFamily: typography.fontFamily.body,
                      }}
                    >
                      Request Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: category.productCount }).map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {category.images && category.images[idx] ? (
                    <img
                      src={category.images[idx]}
                      alt={`${category.title} ${idx + 1}`}
                      className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${category.id === 'velvet' ? 'object-top' : ''}`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                      <div className="text-center">
                        <div
                          className="text-6xl mb-2"
                          style={{ color: colors.primary, opacity: 0.3 }}
                        >
                          📷
                        </div>
                        <p
                          className="text-sm"
                          style={{
                            fontFamily: typography.fontFamily.body,
                            color: colors.text.secondary,
                            opacity: 0.5,
                          }}
                        >
                          Product {idx + 1}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductCategories;
