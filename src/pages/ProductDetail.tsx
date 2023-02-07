import Carousel from '../components/Swiper';

const ProductDetail = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex justify-between py-16">
        <div className="flex w-40 flex-shrink-0 flex-col justify-end">
          <h2 className="mb-5 text-xs font-light">СОСТАВ, УХОД И ПРОИСХОЖДЕНИЕ</h2>
          <h3 className="mb-5 text-xs font-light">СОСТАВ</h3>
          <p className="mb-5 text-2xs font-light">
            Мы работаем с программами мониторинга, чтобы убедиться, что наши изделия соответствуют
            социальным и экологическим стандартам, а также стандартам в области охраны здоровья и
            безопасности.
          </p>
          <p className="text-2xs font-light">
            Для оценки соответствия требованиям мы разработали программу аудиторских проверок и
            планы развития в
          </p>
        </div>
        <div className="flex-shrink-0">
          <Carousel />
        </div>
        <div className="flex w-60 flex-shrink-0 flex-col justify-end">
          <h1 className="text-xs font-light">ХУДИ С ПРИНТОМ BABAR ®™</h1>
          <h2 className="mb-5 text-xs font-light">24 990,00 KZT</h2>
          <p className="mb-5 text-xs font-light">
            Худи с регулируемым капюшоном и длинными рукавами. Контрастный принт Babar ®™ Nelvana
            Ltd. с вышивкой и нашивка. Передний карман, детали в рубчик.
          </p>
          <p className="mb-5 text-2xs font-light">МОРСКОЙ СИНИЙ | 0962/410</p>
          <button className="h-10 w-full border border-gray-800 text-xs font-light uppercase hover:border-gray-400">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
