const Creation = () => {
  return (
    <section className="creation-section wrapper" id="creation">
      <div className="creation-header">
        <h1 className="section-title">OUR CREATIONS</h1>
        <button className="btn desktop-btn">SEE ALL</button>
      </div>
      <div className="creation-image-container">
        <div className="image-wrapper">
          <img className="mobile-image" src="images/mobile/image-deep-earth.jpg" />
          <img className="desktop-image" src="images/desktop/image-deep-earth.jpg" />

          <div className="image-text">DEEP EARTH</div>
        </div>        
        <div className="image-wrapper">
          <img className="mobile-image" src="images/mobile/image-night-arcade.jpg" />
          <img className="desktop-image" src="images/desktop/image-night-arcade.jpg" />

          <div className="image-text">NIGHT ARCADE</div>
        </div>
        <div className="image-wrapper">
          <img className="mobile-image" src="images/mobile/image-soccer-team.jpg" />
          <img className="desktop-image" src="images/desktop/image-soccer-team.jpg" />

          <div className="image-text">SOCCER TEAM VR</div>
        </div>
        <div className="image-wrapper">
          <img className="mobile-image" src="images/mobile/image-grid.jpg" />
          <img className="desktop-image" src="images/desktop/image-grid.jpg" />

          <div className="image-text">THE GRID</div>
        </div>
        <div className="image-wrapper">
          <img className="mobile-image" src="images/mobile/image-from-above.jpg" />
          <img className="desktop-image" src="images/desktop/image-from-above.jpg" />

          <div className="image-text">FROM UP ABOVE VR</div>
        </div>
        <div className="image-wrapper">
          <img className="mobile-image" src="images/mobile/image-pocket-borealis.jpg" />
          <img className="desktop-image" src="images/desktop/image-pocket-borealis.jpg" />

          <div className="image-text">POCKET BOREALIS</div>
        </div>
        <div className="image-wrapper">
          <img className="mobile-image" src="images/mobile/image-curiosity.jpg" />
          <img className="desktop-image" src="images/desktop/image-curiosity.jpg" />

          <div className="image-text">THE CURIOSITY</div>
        </div>
        <div className="image-wrapper">
          <img className="mobile-image" src="images/mobile/image-fisheye.jpg" />
          <img className="desktop-image" src="images/desktop/image-fisheye.jpg" />

          <div className="image-text">MAKE IT FISHEYE</div>
        </div>
      </div>
      <button className="btn mobile-btn">SEE ALL</button>
    </section>
  )
}

export default Creation
