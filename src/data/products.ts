import productBeige from "@/assets/product-beige-shawl.jpg";
import productRose from "@/assets/product-rose-shawl.jpg";
import productBlack from "@/assets/product-black-shawl.jpg";
import productSage from "@/assets/product-sage-shawl.jpg";
import productBrown from "@/assets/product-brown-shawl.jpg";
import productNavy from "@/assets/product-navy-shawl.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  colors: string[];
  colorNames: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  category: "pashmina" | "shawl";
  material: string;
  size: string;
  description: string;
  careInstructions: string[];
}

export const products: Product[] = [
  {
    id: "seera-shawl-beige",
    name: "Seera Shawl - Cream",
    price: 89000,
    image: productBeige,
    colors: ["#E8DDD3", "#D4A5A5", "#2D2D2D", "#9CAF88", "#C4956A", "#2D4A6E"],
    colorNames: ["Cream", "Rose", "Black", "Sage", "Terracotta", "Navy"],
    isNew: true,
    category: "shawl",
    material: "Premium Rayon",
    size: "180cm x 75cm",
    description:
      "Seera Shawl adalah hijab premium dengan bahan rayon berkualitas tinggi. Tekstur lembut dan jatuh sempurna, memberikan tampilan elegan untuk berbagai kesempatan. Mudah dibentuk dan tidak mudah kusut.",
    careInstructions: [
      "Cuci dengan tangan menggunakan air dingin",
      "Gunakan deterjen lembut",
      "Jangan diperas, cukup diangin-anginkan",
      "Setrika dengan suhu rendah jika diperlukan",
    ],
  },
  {
    id: "seera-shawl-rose",
    name: "Seera Shawl - Rose",
    price: 89000,
    image: productRose,
    colors: ["#E8DDD3", "#D4A5A5", "#2D2D2D", "#9CAF88", "#C4956A", "#2D4A6E"],
    colorNames: ["Cream", "Rose", "Black", "Sage", "Terracotta", "Navy"],
    isBestseller: true,
    category: "shawl",
    material: "Premium Rayon",
    size: "180cm x 75cm",
    description:
      "Seera Shawl adalah hijab premium dengan bahan rayon berkualitas tinggi. Tekstur lembut dan jatuh sempurna, memberikan tampilan elegan untuk berbagai kesempatan. Mudah dibentuk dan tidak mudah kusut.",
    careInstructions: [
      "Cuci dengan tangan menggunakan air dingin",
      "Gunakan deterjen lembut",
      "Jangan diperas, cukup diangin-anginkan",
      "Setrika dengan suhu rendah jika diperlukan",
    ],
  },
  {
    id: "seera-shawl-black",
    name: "Seera Shawl - Black",
    price: 89000,
    image: productBlack,
    colors: ["#E8DDD3", "#D4A5A5", "#2D2D2D", "#9CAF88", "#C4956A", "#2D4A6E"],
    colorNames: ["Cream", "Rose", "Black", "Sage", "Terracotta", "Navy"],
    category: "shawl",
    material: "Premium Rayon",
    size: "180cm x 75cm",
    description:
      "Seera Shawl adalah hijab premium dengan bahan rayon berkualitas tinggi. Tekstur lembut dan jatuh sempurna, memberikan tampilan elegan untuk berbagai kesempatan. Mudah dibentuk dan tidak mudah kusut.",
    careInstructions: [
      "Cuci dengan tangan menggunakan air dingin",
      "Gunakan deterjen lembut",
      "Jangan diperas, cukup diangin-anginkan",
      "Setrika dengan suhu rendah jika diperlukan",
    ],
  },
  {
    id: "seera-shawl-sage",
    name: "Seera Shawl - Sage",
    price: 89000,
    image: productSage,
    colors: ["#E8DDD3", "#D4A5A5", "#2D2D2D", "#9CAF88", "#C4956A", "#2D4A6E"],
    colorNames: ["Cream", "Rose", "Black", "Sage", "Terracotta", "Navy"],
    category: "shawl",
    material: "Premium Rayon",
    size: "180cm x 75cm",
    description:
      "Seera Shawl adalah hijab premium dengan bahan rayon berkualitas tinggi. Tekstur lembut dan jatuh sempurna, memberikan tampilan elegan untuk berbagai kesempatan. Mudah dibentuk dan tidak mudah kusut.",
    careInstructions: [
      "Cuci dengan tangan menggunakan air dingin",
      "Gunakan deterjen lembut",
      "Jangan diperas, cukup diangin-anginkan",
      "Setrika dengan suhu rendah jika diperlukan",
    ],
  },
  {
    id: "seera-shawl-terracotta",
    name: "Seera Shawl - Terracotta",
    price: 89000,
    image: productBrown,
    colors: ["#E8DDD3", "#D4A5A5", "#2D2D2D", "#9CAF88", "#C4956A", "#2D4A6E"],
    colorNames: ["Cream", "Rose", "Black", "Sage", "Terracotta", "Navy"],
    category: "shawl",
    material: "Premium Rayon",
    size: "180cm x 75cm",
    description:
      "Seera Shawl adalah hijab premium dengan bahan rayon berkualitas tinggi. Tekstur lembut dan jatuh sempurna, memberikan tampilan elegan untuk berbagai kesempatan. Mudah dibentuk dan tidak mudah kusut.",
    careInstructions: [
      "Cuci dengan tangan menggunakan air dingin",
      "Gunakan deterjen lembut",
      "Jangan diperas, cukup diangin-anginkan",
      "Setrika dengan suhu rendah jika diperlukan",
    ],
  },
  {
    id: "seera-shawl-navy",
    name: "Seera Shawl - Navy",
    price: 89000,
    image: productNavy,
    colors: ["#E8DDD3", "#D4A5A5", "#2D2D2D", "#9CAF88", "#C4956A", "#2D4A6E"],
    colorNames: ["Cream", "Rose", "Black", "Sage", "Terracotta", "Navy"],
    category: "shawl",
    material: "Premium Rayon",
    size: "180cm x 75cm",
    description:
      "Seera Shawl adalah hijab premium dengan bahan rayon berkualitas tinggi. Tekstur lembut dan jatuh sempurna, memberikan tampilan elegan untuk berbagai kesempatan. Mudah dibentuk dan tidak mudah kusut.",
    careInstructions: [
      "Cuci dengan tangan menggunakan air dingin",
      "Gunakan deterjen lembut",
      "Jangan diperas, cukup diangin-anginkan",
      "Setrika dengan suhu rendah jika diperlukan",
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.isNew || p.isBestseller).slice(0, 4);
};
