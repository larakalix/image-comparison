import { useState } from 'react';
import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import Info from './components/Info';
import MainImage from './components/MainImage';
import Types from './components/Types';
import { useProduct } from './hooks/useProduct';

function App() {
  const [range, setRange] = useState(50);
  const { product } = useProduct();
  const { variants } = product;

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setRange(Number.parseInt(ev.currentTarget.value));
  };

  return (
    <section className="p-0 m-0 w-[100vw] h-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
        <div className="w-full md:max-w-[60vw] bg-[#f6f6f6] flex flex-col justify-center items-center relative">
          <Breadcrumbs title={product.title} />
          <div className="wrapper w-full h-[70vh] relative overflow-hidden">
            <MainImage src={variants.red.thumbnail} alt={variants.red.name} />
            <img
              src={variants.green.thumbnail}
              alt={variants.green.name}
              draggable="false"
              loading="lazy"
              style={{
                clipPath: `polygon(0 0, ${range}% 0, ${range}% 100%, 0 100%`,
              }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={range}
              className="slider"
              onChange={handleChange}
            />
          </div>
          <div className="h-[30vh] w-full bg-[tomato]"></div>
        </div>
        <div className="flex flex-col px-4 py-8">
          <section className="flex-1">
            <Info
              title={product.title}
              subtitle={product.subtitle}
              description={product.description}
              price={product.price}
            />
            <Types range={range} variants={variants} />
          </section>

          <div className="flex">
            <button
              className="border-none bg-[#e5e5e5] text-white w-full py-4 px-8 text-start"
              disabled
            >
              Add to cart
            </button>
            <button className="w-[20px] border-none bg-black text-white w-full py-4 px-8 text-start flex items-center justify-center">
              W
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
