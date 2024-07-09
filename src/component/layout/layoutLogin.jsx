import Button from "../element/button";
import Input from "../element/input";
import { NavLink } from "react-router-dom";
import Img from "../element/img";
import propTypes from "prop-types";
import { useState } from "react";

const LayoutLogin = ({ pageType }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userInput", inputValue);
    setInputValue("");
    alert("Input berhasil disimpan!");
  };

  return (
    <div
      className={`rounded-md sm:shadow bg-white px-6 pt-10 pb-6 w-full absolute${
        pageType === "login" ? "sm:my-2 sm:w-2/5" : "sm:w-[380px]"
      }`}
    >
      {pageType === "login" && (
        <div className="flex justify-between py-6">
          <p className="text-3xl font-bold ">
            <NavLink to="/">
              {pageType === "login" ? "Masuk" : "Daftar"}
            </NavLink>
          </p>
          <NavLink
            to={pageType === "login" ? "/register" : "/"}
            className="text-sm text-[#00aa5b] pt-10"
          >
            {pageType === "login" ? "Daftar" : "Masuk"}
          </NavLink>
        </div>
      )}

      {pageType === "register" && (
        <div className="block text-center pb-4">
          <p className="text-2xl text-slate-700 font-bold text-center">
            Daftar Sekarang
          </p>
          <p>
            Sudah punya akun Tokopedia?
            <NavLink to={"/"} className={"text-sm text-[#00aa5b] "}>
              {" "}
              Masuk
            </NavLink>
          </p>
        </div>
      )}
      {pageType === "register" && (
        <button className="flex justify-center w-full rounded-lg border border-slate-300hover:bg-slate-200 mt-2 bg-white" type="submit">
          <div className="bg-red-400 w-[30px] self-center">
            <Img
              src="/image/google.png"
              alt="google"
              className="w-full bg-red-400 self-center"
            />
          </div>
          <Button
            text="Masuk Dengan Goole"
            className="text-slate-500 text-center py-2.5 justify-center sm:w-2/3 -tracking-wider"
            type="submit"
          ></Button>
        </button>
      )}
      {pageType === "login" && (
        <div className="w-full">
          <Input
            className="rounded-md text-slate-500 border border-slate-300 w-full py-2 text-center"
            type="text"
            placeholder="Masukkan Nama ..."
            onSubmit={handleSubmit}
            value={inputValue}
            onChange={handleInputChange}
          ></Input>
          <p className="text-slate-600 pt-2 pl-2 text-xs">Contoh: Jhon Doe</p>
          <NavLink>
            <p className="pt-2 text-sm text-[#00aa5b] text-right">
              Butuh Bantuan?
            </p>
          </NavLink>
        </div>
      )}

      <div>
        {pageType === "login" && (
          <NavLink to="/home">
            <Button
              className=" bg-slate-200 text-slate-400 text-center py-2.5 rounded-lg my-4 w-full hover:opacity-70"
              text={pageType === "login" ? "Lanjut" : "Daftar"}
              type="submit"
            ></Button>
          </NavLink>
        )}
        <div
          className={`flex items-center ${pageType === "register" && "py-7"}`}
        >
          <div className="flex-1 border-b border-slate-300"></div>
          <div className="px-3 text-slate-400 text-xs ">atau</div>
          <div className="flex-1 border-b border-slate-300"></div>
        </div>
      </div>
      {pageType === "register" && (
        <div className="w-full">
          <Input
            className="rounded-md text-slate-500 border dborder-slate-300 w-full py-2 text-center"
            type="text"
            placeholder="Masukkan Nama ..."
          ></Input>
          <p className="text-slate-600 pt-2 pl-2 text-xs">Contoh: Jhon Doe</p>
        </div>
      )}

      {pageType === "register" && (
        <NavLink to={"/home"}>
          <Button
            className=" bg-slate-200 text-slate-400 text-center py-2.5 rounded-lg my-4 w-full hover:opacity-70"
            text={pageType === "login" ? "Lanjut" : "Daftar"}
            type="submit"
          ></Button>
        </NavLink>
      )}

      {pageType === "login" && (
        <button className="flex justify-center w-full rounded-lg border border-slate-300 mt-8 mb-2 hover:bg-slate-200"
        type="submit">
          <div className="bg-red-400 w-[30px] self-center">
            <Img
              src="/image/google.png"
              alt="google"
              className="w-full bg-red-400 self-center"
            />
          </div>
          <Button
            text="Masuk Dengan Goole"
            className="text-slate-500 text-center py-2.5 justify-center sm:w-2/3 -tracking-wider"
            type="submit"
          ></Button>
        </button>
      )}

      {pageType === "login" && (
        <button className="flex justify-center w-full rounded-lg border border-slate-300 hover:bg-slate-200">
          <div className="bg-red-400 w-[30px] self-center">
            <Img
              src="/public/image/scan.png"
              alt="google"
              className="w-full bg-red-400 self-center"
            />
          </div>
          <Button
            text="Scan Kode QR"
            className="text-slate-500 text-center py-2.5 justify-center w-2/3 -tracking-wider"
            type="submit"
          ></Button>
        </button>
      )}

      {pageType === "register" && (
        <di className="text-center">
          <p className="text-xs font-semibold">
            Dengan mendaftar, saya menyetujui
          </p>
          <p className="text-xs">
            <NavLink className="text-[#00aa5b] font-bold">
              Syarat & Ketentuan
            </NavLink>{" "}
            <span className="font-semibold">serta</span>{" "}
            <NavLink className="text-[#00aa5b] font-bold">
              Kebijakan Privasi Tokopedia.
            </NavLink>
          </p>
        </di>
      )}
    </div>
  );
};

LayoutLogin.propTypes = {
  pageType: propTypes.string,
};

export default LayoutLogin;
