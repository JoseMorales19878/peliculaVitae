const Cabecera = () => {

return(

        <section id="menu">
      <div className="tile about-tile">
        <a href="#about" id="boton">
          <div className="front"></div>
          <div className="back">ABOUT</div>
        </a>
      </div>
      <div className="tile projects-tile">
        <a href="#projects">
          <div className="front"></div>
          <div className="back">PROJECTS</div>
        </a>
      </div>
      <div className="tile posts-tile">
        <a href="#posts">
          <div className="front"></div>
          <div className="back">POSTS</div>
        </a>
      </div>
      <div className="tile contact-tile">
        <a href="#contact">
          <div className="front"></div>
          <div className="back">CONTACT</div>
        </a>
      </div>
    </section>
	
		
      ) 
	
	
}

export default Cabecera

