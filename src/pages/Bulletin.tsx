
import BulletinCard from "../components/blogs/BulletinCard";
import BulletinLoad from "../components/blogs/BulletinLoad";
import BulletinServices from "../services/BulletinServices";
import useAsync from "../hooks/useAsync";
const Bulletin = () => {
  const { data, loading } = useAsync(() => BulletinServices.getBulletin());
  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BulletinCard />)
      ) : (
        <div className="container dark:bg-slate-900 w-full dark:text-white py-8">
          <div>
          <div className="container py-2 font-semibold">Accueil/Bulletin</div>
            <section className="mb-10">
              <h1 className=" mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
                Our Latest Newsletters
              </h1>
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {loading
                  ? Array.from(Array(20).keys()).map(() => <BulletinLoad />)
                  : data.map((item: any, index: number) => (
                      <BulletinCard bulletin={item} key={index} />
                    ))}
              </div>
            </section>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default Bulletin;
