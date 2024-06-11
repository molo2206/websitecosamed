import { Link } from "react-router-dom";
import ImgOffres from "../../assets/offre.jpg";
interface props {
  offre?: any;
}
const OffresCard = ({ offre }: props) => {
  return (
    <>
      <Link to={`/offre/detail/` + offre?.id} onClick={() => window.scroll}>
        <div className="p-4 shadow-lg py-2 ">
          <div className=" overflow-hidden">
            <img
              src={ImgOffres}
              alt="not found"
              className="mx-auto h-[250px] w-full 
          object-cover transition duration-700"
            />
          </div>
          <div className=" flex justify-between py-2 text-slate-600">

            <p>Date debutoire {offre?.startdate}</p>
            <p className=" line-clamp-1">Date finale {offre?.enddate}</p>
          </div>
          <div className="space-y-2 py3">
            <h1 className="font-montserrat line-clamp-1 font-bold">
              {offre?.title}
            </h1>
            <p className="font-montserrat line-clamp-2">{offre?.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default OffresCard;
