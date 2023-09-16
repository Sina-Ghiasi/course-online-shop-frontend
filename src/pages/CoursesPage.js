import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productServices";
import ProductCard from "../components/productCard";

const CoursesPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllProducts();
        const nameAscending = [...data].sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
        setProducts(nameAscending);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const selectSortOptions = [
    { label: "پیش فرض", value: "" },
    { label: "جدیدترین", value: "recent" },
    { label: "قدیمی ترین", value: "old" },
  ];
  const handelSortSelect = (e) => {
    const selected = e.target.value;
    switch (selected) {
      case "recent":
        const recentProducts = [...products].sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
        setProducts(recentProducts);
        break;
      case "old":
        const oldProducts = [...products].sort(
          (a, b) =>
            new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
        );
        setProducts(oldProducts);
        break;

      default:
        const nameAscending = [...products].sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
        setProducts(nameAscending);
        break;
    }

    setSortOption(selected);
  };
  return (
    <div className="container mx-auto px-6 md:px-3 mb-6">
      <div className="flex justify-between items-center mb-4 p-4 bg-neutral-50 shadow-md rounded-md">
        <h2 className="text-lg text-gray-800">دوره های آموزشی</h2>
        <select
          name="sortSelect"
          value={sortOption}
          onChange={handelSortSelect}
          className="bg-neutral-50 border border-gray-300 text-gray-800 rounded-md focus:ring-lime-500 focus:border-lime-500"
        >
          {selectSortOptions.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={product._id}
            product={product}
            className="w-full overflow-hidden rounded-lg bg-neutral-50 shadow-md border border-gray-100"
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
