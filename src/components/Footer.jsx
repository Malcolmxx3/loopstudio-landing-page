const Footer = () => {
  return (
    <footer className="footer wrapper" id="footer">
      <div className="footer-top">
        <img className="logo" src="images/logo.svg" />

        <ul className="footer-navs">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className='icons'>
          <img src="images/icon-facebook.svg" />
          <img src="images/icon-twitter.svg" />
          <img src="images/icon-pinterest.svg" />
          <img src="images/icon-instagram.svg" />
        </div>
        <p className="copyright"><span>&copy;</span> 2021 Loopstudios. All rights reserverd</p>
      </div>
    </footer>
  )
}

export default Footer
