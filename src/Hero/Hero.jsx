import rename from '../assets/rename.jpg'
import 'animate.css'
import {useRef , useEffect , useState} from 'react'
import iit from '../assets/iit.png'
import wajahat from '../assets/wajahat.png'
import jaya from '../assets/jaya.png'
import { Link } from 'react-router-dom';
import colonel from '../assets/colonel.png'
import dhananjay from '../assets/dhan.png'
import aman from '../assets/aman.png'
import jai from '../assets/jai.png'
import sudhir from '../assets/sudhir.png'
import sand from '../assets/sand.png'


function Hero() {






  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const speakers = [
    {
      index:6,
      time:'10:00 AM',
      image: sand,
      name :'Manisha and Saurabh',
      bio:"Manisha and Saurabh take the stage, armed with nothing but a canvas of sand and a keen imagination. With each graceful movement of their hands, intricate images begin to materialize,before the eyes of the audience."
     },
    {
     index:0,
     time:'12:00 PM',
     image: jaya,
     name :'M.JayaKumar',
     bio:'Dr. Jayakumar M is a prominent figure at the Indian Space Research Organisation (ISRO), serving as the Mission Director for the successful launch of the XPoSat (X-ray Polarimeter Satellite) and other payloads aboard the PSLV-C58 rocket. '
    },
    {
      index:1,
      time:'2:15 PM',
      image: colonel,
      name :'Col. Rajeev Bharwan',
      bio:' Colonel Rajeev Bharwan commands elite Infantry and Strategic Specialized Airborne Regiment. He excels in counter-terrorism, counter-insurgency operations, and strategic planning, demonstrating strong leadership and management skills.'
     },
     {
      index:2,
      time:'3:15 PM',
      image: aman,
      name :'Aman Dhattarwal',
      bio:"Aman Dhattarwal is renowned for his dedication to education and innovative teaching methods. Aman's passion for teaching and commitment to personal growth inspire students worldwide."
     },
     {
      index:3,
      time:'4:20 PM',
      image: dhananjay,
      name :'Dhananjay Joshi',
      bio:'In the dimly lit theater, she emerges, a silhouette against the soft glow of the spotlight. With each graceful movement, she weaves a story without words, her body a canvas for expression. Every step is deliberate, every gesture imbued with emotion.'
     },
     {
      index:4,
      time:'5:00 PM',
      image: wajahat,
      name :'Wajahat Hasan',
      bio:" Wajahat Hasan has mesmerized audiences with soulful Sufi melodies. Trained by legends like Ustad Sabri Khan, he's become a torchbearer of Sufi music, with a versatile style spanning genres. Additionally, he's lent his voice to characters like Suneo in Doraemon."
     },
     {
      index:5,
      time:'5:45 PM',
      image: jai,
      name :'Jai Madaan',
      bio:"Jai Madaan is a renowned spiritual guide.Her expertise and compassionate guidance, she empowers individuals to navigate life's challenges and discover their true purpose. Through her teachings and motivational speeches, Jai inspires countless souls to lead a fulfilling life."
     },
     {
      index:6,
      time:'6:30 PM',
      image: sudhir,
      name :'R.Sudhir',
      bio:"In a mesmerizing fusion of traditional and contemporary music, the flute beatboxer performance captivates audiences with its unique blend of melodic flute melodies and rhythmic beatboxing. "
     },
     
     
    
]

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
  

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementTop < viewportHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
      <>
       <div style={{display:"flex", backgroundImage:`url(${rename})`}} className="hero__section">
       
         <div style={{display:'flex', flexDirection:'column' , justifyContent:'center' , alignItems:'center' }}>
         <div className='cta'>
       <p className=' animate__animated animate__fadeInUp' style={{fontSize:'32px' , color:'white'}}>Theme 2024</p>
       <p className='see animate__animated animate__fadeInUp'>Defying Defiance</p>
       </div>
         <div className="header animate__animated animate__fadeInUp">
          <div className="h1">T</div>
          <div className="h1">E</div>
          <div className="h1">D</div>
          <div className="h1">x</div>
         </div> 
        <div className="subheader animate__animated animate__fadeInUp">
          <div className="h2">I</div>
          <div className="h2">I</div>
          <div className="h2">T</div>
          <div className="h2">R</div>
          <div className="h2">O</div>
          <div className="h2">O</div>
          <div className="h2">R</div>
          <div className="h2">K</div>
          <div className="h2">E</div>
          <div className="h2">E</div>
         </div>
       <div className='cta'>
       <p className='see animate__animated animate__fadeInUp'>23rd March 2024</p>
       <p className=' animate__animated animate__fadeInUp book__seat' style={{ color:'white'}}>Book your Seats ASAP</p>
       </div>
         </div>
       </div>
       <div className='speakers__section'>
       <p className='see'>Meet our <b style={{color:'#EB0028'}}>Past Speakers</b></p>
        <div style={{marginTop:'1.5rem'}} className='speaker__parent'>
        {speakers.map((item) => (
          <div  ref= {item.index === 0 ? elementRef : null}  key={item.name} className={` speaker__div ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}>
            <div className='speaker__info'>
              <p  className='speaker__timing'>{item.time}</p>
              <p  className='speaker__name' style={{color:'#EB0028'}}>{item.name}</p>
              <p  className='speaker__bio'>{item.bio}</p>
            </div>
            <div  className='image__div'>
            <img src={item.image} alt="jaya" className='aman__image' />
            </div>
          </div>
        ))}
        </div>
       </div>
         <div className="about__page">
       <div className='about__us'>
       <h1 style={{fontSize:'32px', color:'white' , fontWeight:'600'}}>About Us</h1>
       <p style={{fontSize:'16px' , fontWeight:'400', color:'#ffffff'}}>TEDx IITRoorkee is organized by a group of enthusiasts who form a part of the Entrepreneurship Cell IIT Roorkee. The spirit of TED aligns closely with the primary aspiration of the E-CELL, which is to foster the dissemination of knowledge, innovation, and inspiration. Since its inception in 2010, TEDx IITRoorkee has now become an annual event, playing host to a multitude of speakers from various walks of life. TEDxIITRoorkee boasts of an active following online, through its website and on various social media channels. This year, it is coming back on March 23rd, 2024.</p>
       </div>
       <div>
         <img src={iit} alt="iit" />
       </div>
      </div>
      </>
    )
  }
  
  export default Hero