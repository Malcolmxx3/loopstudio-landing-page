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
          <div className="icon">
            <img src="images/icon-facebook.svg" />
          </div>

          <div className="icon">
            <img src="images/icon-twitter.svg" />
          </div>

          <div className="icon">
            <img src="images/icon-pinterest.svg" />
          </div>

          <div className="icon">
            <img src="images/icon-instagram.svg" />
          </div>


        </div>
        <p className="copyright"><span>&copy;</span> 2021 Loopstudios. All rights reserverd</p>
      </div>
    </footer>
  )
}

export default Footer
