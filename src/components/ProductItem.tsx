import { Link } from 'react-router-dom';

const ProductItem = () => {
  return (
    <Link to={'/products/1'} className="w-72 cursor-pointer">
      <div className="relative mb-1 h-[430px]">
        <img
          className=" h-full w-full"
          src="https://static.zara.net/photos///2023/V/0/2/p/0962/410/401/2/w/574/0962410401_2_1_1.jpg?ts=1673542212416"
          alt="Product Item"
        />
        <button className="absolute left-2/4 bottom-4 h-6 w-6 -translate-x-1/2 rounded-full bg-neutral-50 text-gray-800">
          <i className="fa-regular fa-plus text-xs font-light text-gray-600"></i>
        </button>
      </div>
      <div className="flex justify-between">
        <p className="text-2xs font-light text-gray-700">ХУДИ С ПРИНТОМ BABAR ®™</p>
        <p className="text-2xs font-light text-gray-700">24 990,00 KZT</p>
      </div>
    </Link>
  );
};

export default ProductItem;
