import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productServices";
import ProductCard from "../components/productCard";

const CoursesPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex justify-center">
      {products.map((product, index) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default CoursesPage;
