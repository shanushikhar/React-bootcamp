import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const items = [
    {
      id: 1,
      title: "first book",
      price: 45.42,
      desc: "My first book is availabe now",
    },
    {
      id: 2,
      title: "Second book",
      price: 49.335,
      desc: "My Second book is availabe now",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.desc}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
