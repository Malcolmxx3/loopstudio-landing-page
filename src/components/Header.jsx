const Header = ({ handleClick }) => {

  return (
    <header className="header wrapper">
      <div className="header-container">
        <img className="logo" src="images/logo.svg" />
        
        <img className="hamburger-icon" src="images/icon-hamburger.svg" alt="hambuger icon" onClick={handleClick} />

        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#about">Careers</a></li>
          <li><a href="#creation">Events</a></li>
          <li><a href="#creation">Products</a></li>
          <li><a href="#footer">Support</a></li>
        </ul>
        
      </div>
      <div className="hero-container">
        <p className="hero-message">IMMERSIVE EXPERRIENCES THAT DELIVER</p>
      </div>
    </header>
  )
}

export default Header
