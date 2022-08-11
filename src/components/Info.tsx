interface Props {
  title: string;
  subtitle: string;
  description: string;
  price: string;
}

const Info = ({ title, subtitle, description, price }: Props) => {
  return (
    <section className="border-b border-b-1 pb-4">
      <h1 className="text-[1.2rem] mb-[0.5rem]">{title}</h1>
      <p className="leading-[1.2] text-[0.875rem] mb-[0.75rem]">${price}</p>
      <p className="text-[0.5625rem] text-[#9b9b9b]">{subtitle}</p>
      <p className="font-light mb-[0.5rem] text-[.875rem]">{description}</p>

      <div>
        <h3 className="text-[1.875rem] uppercase mb-[1rem] leading-[1.31]">
          ALL STAR TERRITORY
        </h3>
        <p className="text-[.775rem] font-light mb-[1.5rem] leading-[1.57]">
          Crafted style meets hiking-inspired innovation and color-pop details
          for a fresh spin on the icon. Athletic-inspired overlays, alternating
          hiker eyelets, and sporty deco stitches go beyond typical Chucks, but
          iconic design details keep this style grounded in familiar territory.
          Finished with OrthoLite cushioning for all-day comfort and a sporty
          color-pop heel pull for easy on and off.
        </p>
        <h4 className="text-[.775rem] font-bold uppercase mb-[1rem] leading-[1.14]">
          WHY YOU SHOULD BE DOWN
        </h4>
        <ul className="list-disc pl-4 text-[.775rem] space-y-2">
          <li>High-top shoe with canvas upper and overylays</li>
          <li>OrthoLite cushioning for all-day comfort</li>
          <li>
            Hiking-inspired design details like hiker eyelets and color-pop heel
            pull for easy on and off
          </li>
          <li>Sport-inspired deco stitch for crafted look</li>
          <li>Iconic details like All Star patch, pinstripe, and toe bumper</li>
        </ul>
      </div>
    </section>
  );
};

export default Info;
