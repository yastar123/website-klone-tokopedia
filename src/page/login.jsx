import Img from "../component/element/img";
import LayoutLogin from "../component/layout/layoutLogin";
const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-4xl img-custom h-full w-full block self-start sm:self-center">
        <div className="w-full items-center flex justify-center sm:pb-10 
        pt-14 sm:pt-0">
          <Img
            src="/image/tkp-logo.png"
            alt="tkp-logo"
            className="img-tkp w-[100%]"
          />
        </div>
        <div className="img-bg h-full w-full justify-center flex sm:p-5 relative">
          <div className=" justify-center flex w-full">
            <LayoutLogin pageType="login"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
