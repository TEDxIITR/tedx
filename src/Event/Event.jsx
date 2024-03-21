import ankur from '../assets/ankur.jpg'
import vivek from '../assets/vivek.jpg'
import sushruti from '../assets/sushruthi.jpg'
import arunima from '../assets/arunima.jpeg'
import joseph from '../assets/speaker.jpg'
function Event() {

    return (
      <>
       <div className="events">
          <div className="events__inside">
            <div className='events__heading'>
                <h1  className = 'tedx__past'>TEDxIITRoorkee Past Speakers</h1>
            </div>
         <div style={{display:'flex' , flexDirection:'row' , justifyContent:'space-around' , gap:'32px' , flexWrap:'wrap' , marginLeft:'16px' , marginRight:'16px'}}>
            <div className='speaker__container'>
               <img src={ankur} alt="speaker" style={{borderRadius:'8px'}}/>
               <p className='speaker__name'>Ankur Warikoo</p>
               <p className='speaker__work'>Entrepreneur and Investor</p>
            </div>
            <div className='speaker__container'>
               <img src={vivek} alt="speaker" style={{borderRadius:'8px'}}/>
               <p className='speaker__name'>Vivek Agnihotri</p>
               <p className='speaker__work'>Bollywood Director , Producer</p>
            </div>
            <div className='speaker__container'>
               <img src={joseph} alt="speaker" style={{borderRadius:'8px'}}/>
               <p className='speaker__name'>Joseph Radhik</p>
               <p className='speaker__work'>Photographer</p>
            </div>
            <div className='speaker__container'>
               <img src={sushruti} alt="speaker" style={{borderRadius:'8px' , height:'75%'}}/>
               <p className='speaker__name'>Sushruthi Krishna</p>
               <p className='speaker__work'>Miss India Runner Up</p>
            </div>
            
            
         
         </div>
          </div>
          
       </div>
      </>
    )
  }
  
  export default Event