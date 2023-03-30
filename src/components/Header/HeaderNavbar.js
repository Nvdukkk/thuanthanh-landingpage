import { HEADER_NAV } from "./constant";

function HeaderNavbar() {
  const renderChildren = (item) => {
    return item.map(({ id, title }) => (
      <li className="list-unstyled px-3 py-2" key={id}>
        {title}
      </li>
    ));
  };
  return (
    <nav className="navbar navbar-expand-lg text-primary">
      {HEADER_NAV.map(({ id, name, classname, url, children }) => (
        <div className={classname} key={id}>
          <a href={url} className="ps-30px">
            {name}
          </a>
          <ul className="sub-navbar">{renderChildren(children)}</ul>
        </div>
      ))}
      <button className="ms-22px">
        <img src="/image/vn-flag.png" alt="vn" className="ps-2 pb-3px" />
      </button>
      <button>
        <img src="/image/american-flag.png" alt="vn" className="ps-2 pb-3px" />
      </button>
    </nav>
  );
}
export default HeaderNavbar;
