const Header = ({ handleClick }) => {

  const navlinks = [
    {
      name: 'About',
      link: '#about'
    },
    {
      name: 'Careers',
      link: '#about' 
    }, 
    {
      name: 'Events',
      link: '#creation'
    }, 
    {
      name: 'Products',
      link: '#creation'
    }, 
    {
      name: 'Support',
      link: '#footer'
    }
  ]

  return (
    <header className="header wrapper">
      <div className="header-container">
        <img className="logo" src="images/logo.svg" />
        
        <img className="hamburger-icon" src="images/icon-hamburger.svg" alt="hambuger icon" onClick={handleClick} />

        <ul className="nav-list">
          {navlinks.map((item, index) => (
            <li key={index}><a href={item.link}>{item.name}</a></li>
          ))}
        </ul>
        
      </div>
      <div className="hero-container">
        <p className="hero-message">IMMERSIVE EXPERRIENCES THAT DELIVER</p>
      </div>
    </header>
  )
}

export default Header
