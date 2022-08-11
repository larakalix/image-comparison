import StyleTag from './StyleTag';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface Props {
  range: number;
  variants: any;
}

const Types = ({ range, variants }: Props) => {
  const [active, setActive] = useState(
    range > 60 ? variants.green.sku : variants.red.sku
  );

  return (
    <section className="pt-4">
      <span>{active}</span>
      {range > 60 ? (
        <StyleTag name={variants.green.name} sku={variants.green.sku} />
      ) : (
        <StyleTag name={variants.red.name} sku={variants.red.sku} />
      )}
      <div className="flex flex-wrap space-x-1 mt-4">
        {Object.entries(variants).map(([key, value]) => {
          const { thumbnail, sku } = value as any;

          return (
            <div key={key} className="overflow-hidden">
              <img
                src={thumbnail}
                alt={sku}
                loading="lazy"
                className="w-[60px]"
              />
              <span
                className={`block w-full h-[4px] mt-[0.9px] ${
                  active.sku === sku ? 'bg-black' : 'bg-gray'
                }`}
              ></span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Types;
