const Menu = ({ handleClick, menuOpen, setMenuOpen }) => {

  const menulinks = [
    {
      name: 'ABOUT',
      link: '#about'
    },
    {
      name: 'CAREERS',
      link: '#about' 
    }, 
    {
      name: 'EVENTS',
      link: '#creation'
    }, 
    {
      name: 'PRODUCTS',
      link: '#creation'
    }, 
    {
      name: 'SUPPORT',
      link: '#footer'
    }
  ]

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
          {menulinks.map((item, index) => (
            <li key={index}><a href={item.link} onClick={() => setMenuOpen(false)}>{item.name}</a></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
