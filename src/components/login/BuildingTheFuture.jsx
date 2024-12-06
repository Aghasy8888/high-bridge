import { carouselSlider } from '../../assets';

const BuildingTheFuture = () => {
  return (
    <div className="flex flex-col justify-start items-start relative gap-12 mt-40">
      <div className="flex flex-col relative gap-6 text-white">
        <p className="text-[40px] font-bold text-left">
          Building the Future...
        </p>
        <p className="text-base text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <img src={carouselSlider} alt="carouselSlider" />
    </div>
  );
};

export default BuildingTheFuture;
