import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCategories } from "./actions/categoriesActions";
import SelectDropdown from "./components/SelectDropdown";
import Header from "./components/Header";
import { getProducts } from "./actions/productsActions";
import Product from "./components/Products";

const App = (props) => {
  const { categories, products, loading_info, dispatch } = props;
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const categoryChangeHandler = ({ target }) => {
    const category = target.value.trim();

    if (category) {
      dispatch(getProducts(category));
    }
  };

  return (
    <div>
      <Header />
      <div className="category-dropdown">
        {categories?.length > 0 ? (
          <SelectDropdown
            categories={categories}
            categoryChangeHandler={categoryChangeHandler}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {loading_info?.error && <p className="errorMsg">{loading_info.error}</p>}

      <div>
        <ul className="products">
          {loading_info?.loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {products.map(({ name, image, id }) => {
                return <Product key={id} name={name} image={image} />;
              })}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { categories, products, loading_info } = state;

  return {
    categories,
    products,
    loading_info,
  };
};

export default connect(mapStateToProps)(App);
