// import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
const Rejoindre = () => {
  // const formArray = [1, 2, 3];
  // const [formNo, setFormNo] = useState(formArray[0]);
  // const [state, setState] = useState({
  //   name: "",
  //   dept: "",
  //   batch: "",
  //   varsity: "",
  //   session: "",
  //   address: "",
  //   district: "",
  //   thana: "",
  //   post: "",
  // });
  // const inputHandle = (e) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const next = () => {
  //   if (formNo === 1 && state.name && state.dept && state.batch) {
  //     setFormNo(formNo + 1);
  //   } else if (
  //     formNo === 2 &&
  //     state.varsity &&
  //     state.session &&
  //     state.address
  //   ) {
  //     setFormNo(formNo + 1);
  //   } else {
  //     toast.error("Please fillup all input fields");
  //   }
  // };
  // const pre = () => {
  //   setFormNo(formNo - 1);
  // };
  // const finalSubmit = () => {
  //   if (state.district && state.post && state.thana) {
  //     console.log(state);
  //   } else {
  //     toast.error("Please fillup all input fields");
  //   }
  // };
  return (
    <div className="">
      <div className="container px-4 h-[1000px] flex">
        <div className="bg-endeleya pt-8 pb-16 lg:pt-16 lg:pb-24 w-[0%] md:w-[40%] sm-[0%] lg-[40%] md:block sm:hidden hidden">
          <div className="container md:block sm:hidden hidden">
            <div className="">
              <h2 className="text-center font-montserrat lowercase text-xl sm:text-3xl mb-4 font-bold tracking-tight text-gray-900 dark:text-white">
                CONDITION D’ADHESION AU SEIN DE COSAMED ASBL
              </h2>
              <div>
                <div className=" mb-8">
                  <h2 className="text-md font-montserrat font-bold mb-2 dark:text-white">
                    Avantages
                  </h2>
                  <li className="text-gray-900 font-montserrat mb-2 dark:text-gray-300 text-sm font-regular leading-5">
                    Contribuer avec elements dansles publications mensuelles et
                    annuelles de COSAMED;
                  </li>
                  <li className="text-gray-900 font-montserrat mb-2 dark:text-gray-300 text-sm font-regular leading-5">
                    Participation privilegiée aux formations en personne comme
                    en ligne oganisées par COSAMED;
                  </li>
                  <li className="text-gray-900 font-montserrat mb-2  dark:text-gray-300 text-sm font-regular leading-5">
                    Etre prioritaires dans les opportunités d'implémentation des
                    programmes de COSAMED , suivant les critères de sélection
                    qui varie selon les opportunités;
                  </li>
                  <li className="text-gray-900 font-montserrat mb-2  dark:text-gray-300 text-sm font-regular leading-5">
                    Representer COSAMED dans les evenements local, national,
                    regional ou international suivant les demandes de
                    participation adressées COSAMED;
                  </li>
                  <li className="text-gray-900 font-montserrat mb-2  dark:text-gray-300 text-sm font-regular leading-5">
                    Bénéficier des petites subventions accordées par COSAMED
                    pour les recherches et solutions innovantes aux problèmes de
                    santé;
                  </li>
                  <li className="text-gray-900 font-montserrat mb-2  dark:text-gray-300 text-sm font-regular leading-5">
                    Contribuer avec elements dansles publications mensuelles et
                    annuelles de COSAMED;
                  </li>
                  <li className="text-gray-900 font-montserrat mb-2  dark:text-gray-300 text-sm font-regular leading-5">
                    Privilège de réduction des frais de partition aux événements
                    annuels de COSAMED y compris la conférence annuelle et le
                    well being event
                  </li>
                </div>
                <div>
                  <h2 className="text-md font-montserrat font-bold mb-2 dark:text-white">
                    Les obligations
                  </h2>
                  <li className="text-gray-900  dark:text-gray-300 text-sm font-montserrat mb-2  font-regular leading-5">
                    Défendre les intétets de COSAMED asbl;
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-montserrat mb-2  font-regular leading-5">
                    Payer les cotisaions tels que fixé par l'ensemblé générale{" "}
                    <span className="font-bold">25$</span>
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-montserrat mb-2  font-regular leading-5">
                    Participer activement aux activitées de l'association;
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-montserrat mb-2  font-regular leading-5">
                    Payer sa carte de membre{" "}
                    <span className="font-bold">5$</span>
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-montserrat mb-2  font-regular leading-5">
                    Proteger le patrimoine de l'association
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-montserrat mb-2  font-regular leading-5">
                    S'abstenir de toute action qui compromettrait la bonne
                    marche
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-montserrat mb-2  font-regular leading-5">
                    Contribuer activement à la réalisation des objectifs
                    poursuivis par l'association;
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 text-sm font-montserrat mb-2  font-regular leading-5">
                    Respecter scrupuleusement les statuts et les règlements
                    d'ordre interiur;
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-scroll">
            <div className="block scrollbar-hide w-full flex-row gap-2 scroll-smooth col-span-3">
              <div className="pt-8 pb-16 lg:pt-16 lg:pb-24">
                <div className="mx-auto w-full max-w-xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                  <div className="m-x-auto">
                    <div>
                      <h2 className="font-montserrat mb-2 text-center text-xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Devenir membre
                      </h2>
                      <p className="text-sm font-montserrat mb-2 font-base capitalize font-light font-font1 text-center text-slate-800 dark:text-light-gray-500 mt-2 dark:text-white">
                        COMPLÉTER LES INFORMATIONS CI-DESSOUS SI VOUS DÉSIREZ
                        DEVENIR MEMBRE DE COSAMED
                      </p>
                    </div>

                    <form className="mt-8 space-y-6 mb-8">
                      <div className="space-y-px rounded-md items-center">
                        <div className="grid grid-cols-1 gap-4">
                          <Input
                            type={"select"}
                            options={Array.from(Array(10).keys()).map(
                              (i: any) => ({ value: i, label: i })
                            )}
                            label={"Nom"}
                            placeholder={"Entrez votre nom"}
                          />
                          <Input
                            type={"select"}
                            options={Array.from(Array(10).keys()).map(
                              (i: any) => ({ value: i, label: i })
                            )}
                            label={"Nom"}
                            placeholder={"Entrez votre nom"}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                          <Input
                            type={"text"}
                            label={"Nom"}
                            placeholder={"Entrez votre nom"}
                          />
                          <Input
                            type={"text"}
                            label={"Nom"}
                            placeholder={"Entrez votre nom"}
                          />
                          <Input
                            type={"text"}
                            label={"Nom"}
                            placeholder={"Entrez votre nom"}
                          />
                          <Input
                            type={"text"}
                            label={"Nom"}
                            placeholder={"Entrez votre nom"}
                          />
                          <Input
                            type={"text"}
                            label={"Nom"}
                            placeholder={"Entrez votre nom"}
                          />
                          <Input
                            type={"text"}
                            label={"Nom"}
                            placeholder={"Entrez votre nom"}
                          />
                        </div>
                      </div>
                      <Button loading={false} label={"Devenir membre"} />
                      <div className="justify-center items-center">
                        <div className="mb-2">
                          <p className="text-sm font-montserrat text-slate-700 dark:text-slate-600 text-justify">
                            En cliquant sur Continuer, vous acceptez notre{" "}
                            <Link
                              to="/privacy-policy"
                              className="text-principal font-bold"
                              target="_blank"
                            >
                              Politique de confidentialité
                            </Link>
                            . Vous recevrez peut-être des notifications par
                            texto ou par email de notre part.
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                {/* <AuthFooter className={"mt-5"} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rejoindre;
