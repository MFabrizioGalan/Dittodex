import NavBar from "../landing/NavBar/NavBar";
import ditto from "../../logo/ditto.png";

const Landing = () => {
  return (
    <div className="flex flex-col gap-3">
      <NavBar />
      <div className="flex">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-7xl  font-bold text-left m-44 ">
            JOIN THE COMMUNITY
          </h1>
          <div className="flex gap-5   ">
            <button className="border-solid border-purple-900 bg-white bg-clip-border">
              Sign Up
            </button>
            <button className="border-solid border-black  bg-white">
              Login
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={ditto} alt="ditto" className="w-96 " />
        </div>
      </div>
    </div>
  );
};

export default Landing;
