import Layout from "../components/navbar/Layout";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/footer/Footer";

const Rejoindre = () => {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    name: "",
    dept: "",
    batch: "",
    varsity: "",
    session: "",
    address: "",
    district: "",
    thana: "",
    post: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const next = () => {
    if (formNo === 1 && state.name && state.dept && state.batch) {
      setFormNo(formNo + 1);
    } else if (
      formNo === 2 &&
      state.varsity &&
      state.session &&
      state.address
    ) {
      setFormNo(formNo + 1);
    } else {
      toast.error("Please fillup all input fields");
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };
  const finalSubmit = () => {
    if (state.district && state.post && state.thana) {
      console.log(state);
    } else {
      toast.error("Please fillup all input fields");
    }
  };
  return (
    <div className="dark:bg-gray-900">
      <Layout />
      <ToastContainer />
      <section className="py-2 ">
        <div className="max-w-6xl mx-auto md:p-13 xl:p-10 ">
          <div className="lg:w-2/2 space-y-5 text-center mx-auto">
            <h1
              className="text-gray-800 uppercase tracking-widest
             dark:text-white font-medium text-2xl"
            >
              Compléter les informations ci-dessous si vous désirez devenir
              membre de COSAMED
            </h1>
            <div className="h-0.5 bg-hover w-14 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  px-8 pt-6 pb-8 mb-4">
            <div className="lg:w-2/2">
              <h1
                className="text-gray-800 uppercase tracking-widest
             dark:text-white font-medium text-1xl"
              >
                CONDITION D’ADHESION AU SEIN DE COSAMED ASBL
              </h1>
              <div>
                <div className=" mb-8">
                  <h2 className="text-base font-medium mb-2 dark:text-white">
                    Avantages :
                  </h2>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Contribuer avec elements dansles publications mensuelles et
                    annuelles de COSAMED;
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Participation privilegiée aux formations en personne comme
                    en ligne oganisées par COSAMED;
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Etre prioritaires dans les opportunités d'implémentation des
                    programmes de COSAMED , suivant les critères de sélection
                    qui varie selon les opportunités;
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Representer COSAMED dans les evenements local, national,
                    regional ou international suivant les demandes de
                    participation adressées COSAMED;
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Bénéficier des petites subventions accordées par COSAMED
                    pour les recherches et solutions innovantes aux problèmes de
                    santé;
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Contribuer avec elements dansles publications mensuelles et
                    annuelles de COSAMED;
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Privilège de réduction des frais de partition aux événements
                    annuels de COSAMED y compris la conférence annuelle et le
                    well being event
                  </li>
                </div>
                <div>
                  <h2 className="text-base font-medium mb-2 dark:text-white">
                    Les obligations :
                  </h2>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Défendre les intétets de COSAMED asbl;
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Payer les cotisaions tels que fixé par l'ensemblé générale{" "}
                    <span className="font-bold">25$</span>
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Participer activement aux activitées de l'association;
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Payer sa carte de membre{" "}
                    <span className="font-bold">5$</span>
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Proteger le patrimoine de l'association
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    S'abstenir de toute action qui compromettrait la bonne
                    marche
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Contribuer activement à la réalisation des objectifs
                    poursuivis par l'association;
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-medium leading-5">
                    Respecter scrupuleusement les statuts et les règlements
                    d'ordre interiur;
                  </li>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="card w-full h-[700px]  rounded-md shadow-md bg-white p-5">
                <div className="flex justify-center items-center">
                  {formArray.map((v, i) => (
                    <>
                      <div
                        className={`w-[35px] my-3 text-white rounded-full
                h-[35px] ${
                  formNo - 1 === i ||
                  formNo - 1 === i + 1 ||
                  formNo === formArray.length
                    ? "bg-blue-500"
                    : "bg-slate-400"
                }
                 flex justify-center items-center`}
                      >
                        {v}
                      </div>
                      {i !== formArray.length - 1 && (
                        <div
                          className={`w-[85px] h-[2px] ${
                            formNo === i + 2 || formNo == formArray.length
                              ? "bg-principal"
                              : "bg-slate-500"
                          }`}
                        ></div>
                      )}
                    </>
                  ))}
                </div>
                {formNo === 1 && (
                  <div>
                    <div className="flex flex-col mb-2">
                      <label htmlFor="name">Name</label>
                      <input
                        className="p-2 border border-slate-400 mt-1 outline-0
               focus:border-blue-500"
                        value={state.name}
                        onChange={inputHandle}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name"
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label htmlFor="dept" id="dept">
                        Dept
                      </label>
                      <input
                        onChange={inputHandle}
                        value={state.dept}
                        className="p-2 border border-slate-400 mt-1 outline-0
               focus:border-blue-500"
                        type="text"
                        name="dept"
                        placeholder="dept name"
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label htmlFor="batch">Batch</label>
                      <input
                        onChange={inputHandle}
                        value={state.batch}
                        className="p-2 border border-slate-400 mt-1 outline-0
               focus:border-blue-500"
                        type="number"
                        name="batch"
                        placeholder="batch"
                      />
                    </div>
                    <div className=" mt-4 flex justify-center items-center">
                      <button
                        onClick={next}
                        className="px-3 py-2 text-lg rounded-md w-full text-white bg-principal"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
                {formNo === 2 && (
                  <div>
                    <div className="flex flex-col mb-2">
                      <label htmlFor="varsity">Varsity</label>
                      <input
                        onChange={inputHandle}
                        value={state.varsity}
                        className="p-2 border border-slate-400 mt-1 outline-0
               focus:border-blue-500"
                        type="text"
                        name="varsity"
                        id="varsity"
                        placeholder="varsity name"
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label htmlFor="dept" id="dept">
                        Session
                      </label>
                      <input
                        onChange={inputHandle}
                        value={state.session}
                        className="p-2 border border-slate-400 mt-1 outline-0
               focus:border-blue-500"
                        type="text"
                        name="session"
                        id="session"
                        placeholder="session"
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label htmlFor="name">Address</label>
                      <textarea
                        onChange={inputHandle}
                        value={state.address}
                        rows="10"
                        className="p-2 border border-slate-400 mt-1 outline-0
               focus:border-principal rounded-md "
                        type="text"
                        name="address"
                        id="address"
                        placeholder="address"
                      ></textarea>
                    </div>
                    <div className=" mt-4 flex justify-center items-center gap-3">
                      <button
                        onClick={pre}
                        className="px-3 py-2 text-lg rounded-md w-full text-white bg-principal"
                      >
                        Previous
                      </button>
                      <button
                        onClick={next}
                        className="px-3 py-2 text-lg rounded-md w-full text-white bg-principal"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
                {formNo === 3 && (
                  <div>
                    <div className="flex flex-col mb-2">
                      <label htmlFor="varsity">District</label>
                      <input
                        onChange={inputHandle}
                        value={state.district}
                        className="p-2 border border-slate-400 mt-1 outline-0
               focus:border-principal"
                        type="text"
                        name="district"
                        id="district"
                        placeholder="district name"
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label htmlFor="thana">Thana</label>
                      <input
                        onChange={inputHandle}
                        value={state.thana}
                        className="p-2 border border-slate-400 mt-1 outline-0
               focus:border-principal"
                        type="text"
                        name="thana"
                        id="thana"
                        placeholder="thana"
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label htmlFor="post">Post</label>
                      <input
                        onChange={inputHandle}
                        value={state.post}
                        className="p-2 border border-slate-400 mt-1 outline-0
               focus:border-principal rounded-md "
                        type="text"
                        name="post"
                        id="post"
                        placeholder="post"
                      />
                    </div>
                    <div className=" mt-4 flex justify-center items-center gap-3">
                      <button
                        onClick={pre}
                        className="px-3 py-2 text-lg rounded-md w-full text-white bg-principal"
                      >
                        Previous
                      </button>
                      <button
                        onClick={finalSubmit}
                        className="px-3 py-2 text-lg rounded-md w-full text-white bg-principal"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Rejoindre;
