import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
interface props {
  team?: any;
}
const TeamCard = ({ team }: props) => {
  return (
    <>
      <div className="contain p-4 shadow-lg">
        <div className="overflow-hidden">
          <img
            src={team?.image}
            alt="not found"
            className="mx-auto h-[250px] w-[250px] 
            object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className=" flex justify-center py-2 text-slate-600">
          <h1 className=" font-semibold">{team?.fonction}</h1>
        </div>
        <div className=" flex justify-center py-2 text-slate-600">
          <h1 className=" font-semibold text-xl">{team?.full_name}</h1>
        </div>
        <div className="space-y-2 py3">
        <div className="flex justify-center gap-3 mr-6 items-center">
            <a href="" className=" duration-200 hover:scale-105">
              <FaInstagram className=" text-3xl" />
            </a>
            <a href="" className=" duration-200 hover:scale-105">
              <FaFacebook className=" text-3xl" />
            </a>
            <a href="" className=" duration-200 hover:scale-105">
              <FaLinkedinIn className=" text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
