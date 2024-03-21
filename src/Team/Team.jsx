import akshat from '../assets/akshat.jpg'
import anukriti from '../assets/anukriti.jpg'
import yashahsvi from '../assets/yashashvi.jpg'
import vidish from '../assets/vidish.jpg'
import laxmi from '../assets/laxmi.png'
import yash from '../assets/yash.jpg'
import rishika from '../assets/rishika.jpg'
import saumya from '../assets/saumya.jpg'
import saksham from '../assets/saksham.jpg'
import abhay from '../assets/abhay.jpg'
import pratham from '../assets/pratham.jpg'
import aman from '../assets/aman.jpeg'
import aniket from '../assets/aniket.jpg'
import ashutosh from '../assets/ashutosh.jpg'
import karan from '../assets/karan.jpg'
import shyam from '../assets/shyam.jpg'
import naveen from '../assets/naveen.jpg'
import chirayu from '../assets/chirayu.jpg'


function Team() {

    const team = [
      {
        image: chirayu,
        name: 'Chirayu Mor',
        work:'Advisory'
      },
      {
        image: anukriti,
        name: 'Anukriti Sethi',
        work:'Curator'
      },
      {
        image: shyam,
        name: 'Shyam Ashish',
        work:'Co-Curator'
      },
      {
        image: akshat,
        name: 'Akshat Jain',
        work:'Organizing Committee'
      },
      {
        image: yashahsvi,
        name: 'Yashashvi Choudhary',
        work:'Organizing Committee'
        
      },
      {
        image: laxmi,
        name: 'Laxmi Mishra',
        work:'Organizing Committee'
      },
      {
        image: yash,
        name: 'Yash Nehra',
        work:'Organizing Committee'
      },
      {
        image: rishika,
        name: 'Rishika',
        work:'Organizing Committee'
      },
      {
        image: naveen,
        name: 'Naveen Kacchwa',
        work:'Organizing Committee'
      },
      {
        image: saumya,
        name: 'Saumya Singh',
        work:' Senior Manager'
      },
      {
        image: karan,
        name: 'Karan Kuthe',
        work:' Senior Manager'
        
      },
      {
        image: vidish,
        name: 'Vidish Mishra',
        work:' Senior Manager'
      },
      {
        image: abhay,
        name: 'Abhay Kumar',
        work:' Senior Manager'
      },
      {
        image: aman,
        name: 'Aman Kumar',
        work:' Senior Manager'
      },
      
      {
        image: saksham,
        name: 'Saksham Jain',
        work:' Senior Manager'
      },
      {
        image: pratham,
        name: 'Pratham Garg',
        work:'Manager'
      },
      {
        image: aniket,
        name: 'Aniket Agrawal',
          work:'Manager'
        },
        {
          image: ashutosh,
          name: 'Ashutosh Singh',
          work:'Manager'
        },
        

    ]



    return (
      <>
       <div className="team__container">
       <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , marginBottom:'32px'}}>
       <h1 className='tedx__members'>TEDxIITRoorkee Members</h1>
       </div>
       <div>
       <div className='members__container'>
       {team.map((item) => (
        <div className="member__card" key={item.index}>
           <img src={item.image} alt="team" className='member__photo'/>
           <div style={{marginTop:'16px' , display:'flex', flexDirection:'column' , gap:'4px' , justifyContent:'center' ,alignItems:'center'}}>
            <p style={{color:'white' , fontWeight:'600' , fontSize:'16px'}}>{item.name}</p>
            <p style={{fontSize:'14px' , fontWeight:'600' ,color:'#545454'}}>{item.work}</p>
           </div>
        </div>
        )
       )}
       </div>
       </div>
       </div>
      </>
    )
  }
  
  export default Team