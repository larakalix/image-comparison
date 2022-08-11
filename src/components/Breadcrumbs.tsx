interface Props {
  title: string;
}

const Breadcrumbs = ({ title }: Props) => {
  return (
    <div className="absolute z-10 top-0 w-full px-4">
      <p className="text-[0.65rem] pt-4">
        <span className="font-light">
          Home / New Arrivals / Mens New Arrivals /{' '}
        </span>
        <b>{title}</b>
      </p>
    </div>
  );
};

export default Breadcrumbs;
