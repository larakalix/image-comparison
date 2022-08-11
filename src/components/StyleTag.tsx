interface Props {
  name: string;
  sku: string;
}

const StyleTag = ({ name, sku }: Props) => {
  return (
    <div className="flex justify-between items-center transition-all">
      <span className="text-[0.775rem] font-bold">{name}</span>
      <span className="text-[0.775rem] text-[#757575]">{sku}</span>
    </div>
  );
};

export default StyleTag;
