import HeaderNavbar from "./HeaderNavbar";


function Header() {
  return (
    <header>
      <a href="/">
        <img
          src="/image/ThuanThanh-logo.png"
          alt="thuanthanh-logo"
          style={{maxHeight:"57px"}}
        />
      </a>
      <HeaderNavbar />
    </header>
    
  );
}

export default Header;
