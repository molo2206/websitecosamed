import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div>
      <div className=" container dark:bg-slate-400 w-full dark:text-white border-t-2 border-gray-300/50 py-8 text-center">
        <div className=" py-2 h-[150px]">
          <h3 className="text-center text-3xl font-bold">
            Le travail de COSAMED
          </h3>
          <p className="text-center text-2xl py-2">
            Constituer une équipe multidisciplinaire disponible et efficace pour
            l’éducation sanitaire des populations, la recherche sur les
            problèmes de santé et le rapprochement des soins de santé primaires
            aux personnes vulnérables, aux plus marginalisées ainsi qu’aux
            malades chroniques.
          </p>
        </div>
      </div>
      <div className=" container dark:bg-slate-900 w-full dark:text-white  border-gray-300/50 py-6 text-center">
        <div className="py-36 h-[150px]">
          <Link to="" onClick={() => window.scroll} className="">
            <button
              className="h-[60px] w-[280px] rounded-lg font-semibold
                              bg-principal text-white"
            >
              DECROUVREZ NOTRE TRAVAIL
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;