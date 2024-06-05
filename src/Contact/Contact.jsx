import { useState } from "react";


function Contact() {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6bb614ab-2c0c-4f2e-8aa3-2346da20dd64");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
      <>
      <div className="flex flex-col contact__section justify-center items-center " >
        <h1 className="text-white reach__text">Reach out to Us</h1>
        <form className="flex flex-col gap-4 form__div" onSubmit={onSubmit}>
        
        <input type="text" placeholder="Name" name = "Name" className="contact__input"/>
        <input type="email" placeholder="Email" name = "Email" className="contact__input"/>
        <textarea type="text" placeholder="Message" className="contact__textarea" rows={5} cols={36} name = "Message"/>
        <button  className="contact__button" type="submit">
         SUBMIT
       </button>
        </form>
        <span className="text-white" style={{paddingTop:"16px"}}>{result}</span>
      </div>
      </>
    )
  }
  
  export default Contact