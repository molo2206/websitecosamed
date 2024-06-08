import { Link } from "react-router-dom";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import { useTranslation } from "react-i18next";
import useAsync from "../hooks/useAsync";
import ThematiquesServices from "../services/ThematiquesServices";
import CountryService from "../services/CountryServices";
import useValidation from "../hooks/useValidation";
import { showingTranslateValue } from "../utils/heleprs";
import TextArea from "../components/form/TextArea";
import { useAuthContext } from "../context";
import Members from '../hooks/Members'

const Rejoindre = () => {
  const { t } = useTranslation();
  const { lang } = useAuthContext();
  const { data } = useAsync(() => ThematiquesServices.getThematiques());
  const { data: country } = useAsync(() => CountryService.getCountry());
  const { createMember, loading: loadingForm } = Members()
  const genres = [
    {
      value: "Masculin",
      label: "Masculin",
    },
    {
      value: "Feminin",
      label: "Feminin",
    },
  ];

  const Type = [
    {
      value: "Bailleur",
      label: "Bailleur",
    },
    {
      value: "Membre actif",
      label: "Membre actif",
    },
    {
      value: "Autre",
      label: "Autre",
    },
  ];
  const { inputs, errors, handleOnChange, hanldeError } = useValidation({
    name: "",
    prename: "",
    sexe: "",
    phone: "",
    email: "",
    typemembre: "",
    thematique: "",
    image: null,
    country: "",
    ville: "",
    profession: "",
  });
  const validation = (e: any) => {
		e.preventDefault()

		let valide = true
		if (!inputs.name) {
			hanldeError('name us is required', 'name')
			valide = false
		}
		if (!inputs.prename) {
			hanldeError('prename is required', 'prename')
			valide = false
		}
		if (!inputs.sexe) {
			hanldeError('Sexe date is required', 'sexe')
			valide = false
		}

		if (!inputs.phone) {
			hanldeError('Phone is required', 'Author')
			valide = false
		}

		if (!inputs.email) {
			hanldeError('email is required', 'email')
			valide = false
		}

		if (!inputs.typemembre) {
			hanldeError('typemembre is required', 'typemembre')
			valide = false
		}
		if (!inputs.thematique) {
			hanldeError('thematique is required', 'thematique')
			valide = false
		}
		if (!inputs.country) {
			hanldeError('country is required', 'country')
			valide = false
		}
		if (!inputs.ville) {
			hanldeError('ville is required', 'ville')
			valide = false
		}
		if (!inputs.profession) {
			hanldeError('profession is required', 'profession')
			valide = false
		}

		if (valide) {
			createMember(inputs)
		}
	}
  return (
    <div className="">
      <div className="container px-4 h-[1000px] flex">
        <div className="bg-endeleya pt-8 pb-16 lg:pt-16 lg:pb-24 w-[0%] md:w-[40%] sm-[0%] lg-[40%] md:block sm:hidden hidden">
          <div className="container md:block sm:hidden hidden">
            <div className="">
              <h2 className="text-center font-montserrat  text-xl sm:text-2xl mb-4 font-bold tracking-tight text-gray-900 dark:text-white">
                {t("Condition")} DE COSAMED ASBL
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

                    <form className="mt-8 space-y-6 mb-8" onSubmit={validation}>
                      <div className="space-y-px rounded-md items-center">
                        <div className="grid grid-cols-1 gap-4">
                          <Input
                            label="Select Thematique"
                            type="select"
                            errors={errors.title}
                            value={inputs.thematique}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "thematique")
                            }
                            options={data?.map((item: any) => ({
                              label: showingTranslateValue(
                                item?.translations,
                                lang
                              )?.value,
                              value: item.id,
                            }))}
                            placeholder={"Entrez votre thematique"}
                          />
                          <Input
                            label="Select Type membre"
                            type="select"
                            errors={errors.title}
                            value={inputs.typemembre}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "typemembre")
                            }
                            options={Type?.map((item: any) => ({
                              label: item.label,
                              value: item.value,
                            }))}
                            placeholder={"Selectionner un type"}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                          <Input
                            name="name"
                            label="name"
                            placeholder=""
                            type="text"
                            errors={errors.title}
                            value={inputs.name}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "name")
                            }
                          />
                          <Input
                            name="prename"
                            label="Prename"
                            placeholder=""
                            type="text"
                            errors={errors.prename}
                            value={inputs.prename}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "prename")
                            }
                          />
                          <Input
                            name="select"
                            label="Select Sexe"
                            type="select"
                            value={inputs.sexe}
                            errors={errors.sexe}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "sexe")
                            }
                            options={genres?.map((item: any) => ({
                              label: item.label,
                              value: item.value,
                            }))}
                            placeholder={"Selectionner un genre"}
                          />
                          <Input
                            name="phone"
                            label="Téléphone"
                            type="phone"
                            errors={errors.phone}
                            value={inputs.phone}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "phone")
                            }
                          />
                          <Input
                            name="email"
                            label="Email"
                            placeholder=""
                            type="email"
                            errors={errors.email}
                            value={inputs.email}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "email")
                            }
                          />
                          <Input
                            name="select"
                            label="Select Pays"
                            type="select"
                            value={inputs.country}
                            errors={errors.country}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "country")
                            }
                            options={country?.map((item: any) => ({
                              label: item.name,
                              value: item.name,
                            }))}
                            placeholder={"Selectionner votre pays"}
                          />
                          <Input
                            name="ville"
                            label="Ville"
                            type="text"
                            errors={errors.ville}
                            value={inputs.ville}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "ville")
                            }
                          />
                          <Input
                            type={"text"}
                            name="profession"
                            label="profession"
                            placeholder=""
                            errors={errors.profession}
                            value={inputs.profession}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "profession")
                            }
                          />
                          <Input
                            name="num_ordre"
                            label="Numèro d'ordre(Facultatif)"
                            placeholder=""
                            type="text"
                            errors={errors.num_ordre}
                            value={inputs.num_ordre}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "num_ordre")
                            }
                          />
                          <Input
                            type={"text"}
                            name="corporation"
                            label="corporation(Facultatif)"
                            placeholder=""
                            errors={errors.corporation}
                            value={inputs.corporation}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "corporation")
                            }
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          <TextArea
                            name="title"
                            placeholder=""
                            type="text"
                            value={inputs.motif}
                            onChange={(e: any) =>
                              handleOnChange(e.target.value, "motif")
                            }
                            label={
                              "Quelle est la motivation derrière votre adhésion?"
                            }
                          />
                        </div>
                      </div>
                      <Button loading={loadingForm} label={"Soumettre"} />
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
