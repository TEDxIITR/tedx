import logo from '../assets/tedx.png'

function Footer() {

    return (
      <>
       <div className="footer__container">
         <div>
           <img src={logo} alt="logo" />
         </div>
         <div className='footer__box'>
           <div>
             <h1 style={{color:'white' , fontWeight:'600' , fontSize:'16px'}}>Events and Incentives</h1>
           </div>
           <div style={{display:'flex' , flexDirection:'column',gap:'8px'}}>
             <a>Pre-Ted Event</a>
             <a>Abhyudan</a>
             <a href='https://www.ted.com/about/programs-initiatives/tedx-program'>TEDx</a>
           </div>
         </div>
         <div className='footer__box'>
           <div>
             <h1 style={{color:'white' , fontWeight:'600' , fontSize:'16px'}}>Follow Us</h1>
           </div>
           <div style={{display:'flex' , flexDirection:'column',gap:'8px'}}>
             <a href='https://www.instagram.com/tedxiitroorkee/'>Instagram</a>
             <a href='https://www.linkedin.com/company/tedxiitroorkee/'>Linkedin</a>
           </div>
         </div>
         <div className='footer__box'>
           <div>
             <h1 style={{color:'white' , fontWeight:'600' , fontSize:'16px'}}>Community</h1>
           </div>
           <div style={{display:'flex' , flexDirection:'column',gap:'8px'}}>
             <a href='https://www.ted.com/'>TED</a>
             <a href='https://www.ted.com/tedx/events/56890'>TEDx Organisers</a>
           </div>
         </div>
         <div style={{display:"flex" , flexDirection:'column' ,}} className='footer__box'>
         <h1 style={{color:'white' , fontWeight:'600' , fontSize:'16px'}}>TEDxIITRoorkee Recorded</h1>
         <h1 style={{color:'white' , fontWeight:'500' , fontSize:'14px' , maxWidth:'240px'}}>Watch the latest <b>TEDxIITRoorkee</b> events , on your Screen</h1>
         </div>
       </div>
      </>
    )
  }
  
  export default Footer