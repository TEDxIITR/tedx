import iit from '../assets/iit.png'

function About() {

    return (
      <>
      <div className="about__page">
       <div className='about__us'>
       <h1 style={{fontSize:'32px', color:'white' , fontWeight:'600'}}>About Us</h1>
       <p style={{fontSize:'16px' , fontWeight:'400', color:'#555555'}}>TEDx IITRoorkee is organized by a group of enthusiasts who form a part of the Entrepreneurship Cell IIT Roorkee. The spirit of TED aligns closely with the primary aspiration of the E-CELL, which is to foster the dissemination of knowledge, innovation, and inspiration. Since its inception in 2010, TEDx IITRoorkee has now become an annual event, playing host to a multitude of speakers from various walks of life. TEDxIITRoorkee boasts of an active following online, through its website and on various social media channels. This year, it is coming back on March 23rd, 2024.</p>
       </div>
       <div>
         <img src={iit} alt="iit" />
       </div>
      </div>
      </>
    )
  }
  
  export default About