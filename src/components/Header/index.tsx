import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-transparent h-24 py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img className="w-10" src="/img/logo.png" alt="Floraison Logo" />
            <h1 className="text-2xl font-semibold text-pastel-rose">Floraison</h1>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex size-8">
              <img src="/img/account.png" alt="Account" />
            </div>
            <div className="flex size-8">
              <img src="/img/setting.png" alt="Setting" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
