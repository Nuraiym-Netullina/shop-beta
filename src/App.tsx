import ProductItem from './components/ProductItem';

function App() {
  return (
    <div className=" container m-auto pt-8">
      <div className="flex flex-wrap gap-x-5">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default App;
