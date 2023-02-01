import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      id: 1,
      title: "first book",
      price: 45,
      desc: "My first book is availabe now",
    },
    {
      id: 2,
      title: "first book",
      price: 45,
      desc: "My first book is availabe now",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
