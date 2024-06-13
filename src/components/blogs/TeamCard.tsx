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
        <div className=" flex justify-between py-2 text-slate-600">
          <h1 className=" font-semibold">{team?.fonction}</h1>
          <p className=" line-clamp-1">{team?.full_name}</p>
        </div>
        <div className="space-y-2 py3">
          <h1 className="font-montserrat line-clamp-1 font-bold"></h1>
          <p className="font-montserrat line-clamp-5"></p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
