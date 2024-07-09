import LayoutLogin from "../component/layout/layoutLogin";
const Register = () => {
  return (
    <div className="py-6 justify-center items-center">
      <div className="flex justify-center pt-4">
        <img src="/public/image/tkp-logo.png" alt="" />
      </div>
      <div className="flex w-full justify-center sm:pt-8 relative">
        <div className=" px-10 py-4 self-center text-center hidden sm:block">
          <img src="/public/image/register-bg.png" alt="" width={400} />
          <p className=" pt-8 pb-2 font-bold text-xl">Jual Beli Mudah Hanya di Tokopedia</p>
          <p className="text-slate-500 text-sm">Gabung dan rasakan kemudahan bertransaksi di Tokopedia</p>
        </div>
        <div className="items-center flex justify-center sm:px-14 sm:py-4">
          <LayoutLogin pageType="register" />
        </div>
      </div>
    </div>
  );
};

export default Register;
