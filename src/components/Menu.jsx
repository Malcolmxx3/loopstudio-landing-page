const Menu = ({ handleClick, menuOpen, setMenuOpen }) => {
  return (
    <div className={`menu wrapper ${menuOpen ? 'show' : ''}`}>
      <div className="header-container">
        <img className="logo" src="images/logo.svg" />
        <div className='navbar'>
          <img className="close-icon" src="images/icon-close.svg" alt="close icon" onClick={handleClick} />
        </div>
      </div>

      <nav>
        <ul>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>CAREERS</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>EVENTS</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>PRODUCTS</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>SUPPORT</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
