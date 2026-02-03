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
import velvet1 from "../../assets/images/products/4fashionbv-v2/21.jpg";
import velvet2 from "../../assets/images/products/4fashionbv-v2/22.jpg";
import velvet3 from "../../assets/images/products/4fashionbv-v2/23.jpg";
import velvet4 from "../../assets/images/products/4fashionbv-v2/24.jpg";
import velvet5 from "../../assets/images/products/4fashionbv-v2/25.jpg";
import velvet6 from "../../assets/images/products/4fashionbv-v2/26.jpg";
import velvet7 from "../../assets/images/products/4fashionbv-v2/27.jpg";
import velvet8 from "../../assets/images/products/4fashionbv-v2/28.jpg";

// Fashion Holiday images
import holiday1 from "../../assets/images/products/5fashionh-v2/11.jpg";
import holiday2 from "../../assets/images/products/5fashionh-v2/12.jpg";
import holiday3 from "../../assets/images/products/5fashionh-v2/13.jpg";
import holiday4 from "../../assets/images/products/5fashionh-v2/14.jpg";
import holiday5 from "../../assets/images/products/5fashionh-v2/15.jpg";
import holiday6 from "../../assets/images/products/5fashionh-v2/16.jpg";
import holiday7 from "../../assets/images/products/5fashionh-v2/17.jpg";
import holiday8 from "../../assets/images/products/5fashionh-v2/18.jpg";

// Fashion Scarf images (3 series)
import scarf31 from "../../assets/images/products/6fashions-v2/31.jpg";
import scarf32 from "../../assets/images/products/6fashions-v2/32.jpg";
import scarf33 from "../../assets/images/products/6fashions-v2/33.jpg";
import scarf34 from "../../assets/images/products/6fashions-v2/34.jpg";
import scarf35 from "../../assets/images/products/6fashions-v2/35.jpg";
import scarf36 from "../../assets/images/products/6fashions-v2/36.jpg";
import scarf37 from "../../assets/images/products/6fashions-v2/37.jpg";
import scarf38 from "../../assets/images/products/6fashions-v2/38.jpg";
import scarf39 from "../../assets/images/products/6fashions-v2/39.jpg";
import scarf310 from "../../assets/images/products/6fashions-v2/310.jpg";
import scarf311 from "../../assets/images/products/6fashions-v2/311.jpg";
import scarf312 from "../../assets/images/products/6fashions-v2/312.jpg";
// Fashion Scarf images (4 series)
import scarf41 from "../../assets/images/products/6fashions-v2/41.jpg";
import scarf42 from "../../assets/images/products/6fashions-v2/42.jpg";
import scarf43 from "../../assets/images/products/6fashions-v2/43.jpg";
import scarf44 from "../../assets/images/products/6fashions-v2/44.jpg";
import scarf45 from "../../assets/images/products/6fashions-v2/45.jpg";
import scarf46 from "../../assets/images/products/6fashions-v2/46.jpg";
import scarf47 from "../../assets/images/products/6fashions-v2/47.jpg";
import scarf48 from "../../assets/images/products/6fashions-v2/48.jpg";
import scarf49 from "../../assets/images/products/6fashions-v2/49.jpg";
import scarf410 from "../../assets/images/products/6fashions-v2/410.jpg";
import scarf411 from "../../assets/images/products/6fashions-v2/411.jpg";
import scarf412 from "../../assets/images/products/6fashions-v2/412.jpg";

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
      productCount: 8,
      backgroundColor: colors.background.whiteChocolate,
      images: [holiday1, holiday2, holiday3, holiday4, holiday5, holiday6, holiday7, holiday8],
    },
    {
      id: "scarf",
      title: "Fashion Scarf",
      description:
        "Premium scarves in various materials, patterns, and styles. From silk squares to wool wraps, perfect for any season.",
      productCount: 24,
      backgroundColor: colors.background.isabelline,
      images: [
        scarf31, scarf32, scarf33, scarf34, scarf35, scarf36, scarf37, scarf38, scarf39, scarf310, scarf311, scarf312,
        scarf41, scarf42, scarf43, scarf44, scarf45, scarf46, scarf47, scarf48, scarf49, scarf410, scarf411, scarf412
      ],
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
