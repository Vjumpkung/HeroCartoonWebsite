import { SRLWrapper } from "simple-react-lightbox";
import BackButton from "./BackButton";
const SizeChartDTF = () => {
  return (
    <div className="md:flex md:flex-wrap sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 max-w-3xl">
      <div className="my-5 px-5 w-full">
        <p className="text-center font-bold text-xl my-3 sm:text-4xl">
          ขนาดเสื้อและราคา
        </p>

        <SRLWrapper>
          <img
            src="/image/dtf.png"
            width="2371"
            height="1689"
            loading="lazy"
            alt="Size Chart OV"
            className=" w-4/5 mx-auto"
          ></img>
        </SRLWrapper>
        <p className="text-center mt-2">
          <BackButton />
        </p>
      </div>
    </div>
  );
};
export default SizeChartDTF;
