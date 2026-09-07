// src/pages/Products.jsx
import { useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [params] = useSearchParams();
  const category = params.get("category") || "all";
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(150);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const matchesCategory = category === "all" || p.category === category;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesPrice = p.price <= maxPrice;
      return matchesCategory && matchesSearch && matchesPrice;
    });

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [category, search, sort, maxPrice]);

  return (
    <section className="section products-page">
      <div className="container">
        <div className="page-header">
          <div>
            <span className="eyebrow">OUR COLLECTION</span>
            <h1>{category === "all" ? "All Products" : `${category.charAt(0).toUpperCase() + category.slice(1)}'s Collection`}</h1>
            <p>Discover pieces that reflect your unique style.</p>
          </div>
          <div className="product-count">{filtered.length} products</div>
        </div>

        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>

          <label>
            Max Price: ${maxPrice}
            <input
              type="range"
              min="20"
              max="150"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <h2>No products found</h2>
            <p>Try changing your search or filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}