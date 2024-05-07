import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const HorizontalLinearStepper = () => {
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
    <div className="w-full h-[700px] bg-slate-white flex justify-center items-center ">
      <ToastContainer />
      <div className="card w-[490px]  rounded-md shadow-md bg-white p-5">
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
                      ? "bg-blue-500"
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
               focus:border-blue-500 rounded-md "
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
               focus:border-blue-500"
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
               focus:border-blue-500"
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
               focus:border-blue-500 rounded-md "
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
  );
};

export default HorizontalLinearStepper;
