import { useState , useEffect} from "react"

function Register() {
    const [data, setData] = useState(null);
    const [visible, setVisible] = useState(false);
    const [display, setDisplay] = useState(false);
    const [school, setSchool] = useState(false);
    const [invalid , setInvalid] = useState(false)

  
    const getData = (event) => {
      let data = event.target.value;
      setData(data);
    }
    
    function checkCoupon(){
      
      if (data === "TEX4RE8") {
        setInvalid(false);
        setVisible(true);
        setDisplay(false);
        setSchool(false);
    } else if (data === "TOL2ER6") {
        setInvalid(false);
        setDisplay(true);
        setVisible(false);
        setSchool(false);
    } else if (data === 'TED24SCHOOL') {
        setInvalid(false);
        setSchool(true);
        setVisible(false);
        setDisplay(false);
    } else if (data === '') {
        setInvalid(false);
        setSchool(false);
        setVisible(false);
        setDisplay(false);
    } else {
        setInvalid(true);
        setSchool(false);
        setVisible(false);
        setDisplay(false);
    }
  }
    

    return (
      <>
      <div className="register__page">
      <div style={{display:'flex' , justifyContent:'center' , flexDirection:'column' , alignItems:'center'}}>

      <h1 className="booking__cta">Book your seat for <b style={{color:'#EB0028'}}>599</b> Only</h1>
      <a href="https://rzp.io/l/H0jMjBi7">
                          <button className="pay__button"  >Pay</button>
                        </a>
      </div>
      <div>
      <h1 style={{fontSize:'28px', color:'white' , fontWeight:'600'}}>Have a Coupon Code?</h1>
      <div className="coupon__container">
        <input type="text" style={{height:'100%' , flex:'1' , width:'70%' , color:'white' , caretColor:'white' , paddingLeft:'10px'}} placeholder="Coupon Code" className="coupon__input" onChange={getData} />
        <button className="register__button" style={{width:'30%'}} onClick={checkCoupon} >Apply</button>
      </div>
        {invalid ? <p style={{color:'#EB0028'}}>Invalid Coupon</p> : null}
        {visible ? <p style={{color:'white'}}>Yay! you got 100Rs Off</p> : null}
        {display ? <p style={{color:'white'}}>Yay! you got 200Rs Off</p> : null}
        {school ? <p style={{color:'white'}}>Yay! you got 250Rs Off</p> : null}

                      {visible  ? (
                        <a href="https://rzp.io/l/St68FMP7P">
                          <button className="pay__button" >Pay</button>
                        </a>
                      ) : display ? (
                        <a href="https://rzp.io/l/VO7158w">
                          <button className="pay__button"  >Pay</button>
                        </a>
                      ) : school ? (
                        <a href="https://rzp.io/l/nmSt0GONT">
                          <button className="pay__button" >Pay</button>
                        </a>
                      ):(
                          <button className="pay__button"  >Pay</button>
                      )}
      </div>
      <div>
      <h1 style={{fontSize:'32px', color:'white' , fontWeight:'600'}}>Guidelines</h1>
      <p style={{fontSize:'16px' , fontWeight:'400', color:'#555555'}}>TED (Technology, Entertainment, Design) is a global platform for sharing ideas and fostering meaningful dialogue on diverse topics. Since 1984, TED has featured talks by thought leaders and innovators, sparking curiosity and driving positive change worldwide. With millions of online views and thousands of events held annually, TED embodies the spirit of Ideas Worth Spreading inspiring audiences to think differently and make a difference.</p>
      </div>
      <div style={{display:'flex' , flexDirection:'column' , gap:"16px"}}>
      <h1 style={{fontSize:'32px', color:'white' , fontWeight:'600'}}>Reach out to us</h1>
      <p style={{fontSize:'16px' , fontWeight:'400', color:'#555555'}}>TEDx is an extension of the renowned TED platform, designed to bring the spirit of TED Talks to local communities around the world. Organized by independent teams, TEDx events offer a platform for individuals to share their ideas, stories, and experiences in the pursuit of sparking meaningful conversations and driving positive change. At TEDx events, attendees are treated to a diverse array of talks and performances, combining TED Talks videos with live speakers to inspire curiosity, foster understanding, and connect people from all walks of life. With a commitment to inclusivity and the exchange of ideas, TEDx empowers communities to come together, explore new perspectives, and take action to shape a brighter future.
</p>
      </div>

      </div>
      </>
    )
  }
  
  export default Register
  