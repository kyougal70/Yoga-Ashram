type ClassProps = {
  name: string;
  description: string;
  image: string;
};

function Class({ name, description, image }: ClassProps) {
  const overlayStyles = `p-5 absolute z-30 flex h-[333px] w-[500px] flex-col items-center justify-center
  whitespace-normal bg-tertiary-50 text-center text-white opacity-0 transition duration-500 hover:opacity-80`;
  return (
    <li className="relative mx-5 inline-block h-[333px] w-[500px] ">
      <div className={overlayStyles}>
        <p className="text-2xl text-gray-100">{name}</p>
        <p className="mt-5 text-gray-100">{description}</p>
      </div>
      <img src={image} alt={`${image}`} className="rounded-lg" />
    </li>
  );
}

export default Class;
