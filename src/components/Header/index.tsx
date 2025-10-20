import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#fff] h-24">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex w-[140px]">
            <img src="/img/logo.png" alt="Floraison Logo" />
            <h1 className="hidden">Floraison</h1>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex size-8">
              <img src="/img/account-female.png" alt="Account Icon" />
            </div>
            <div className="flex size-8">
              <img src="/img/setting.png" alt="Setting Icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
