import React, { useState } from 'react';
import $ from 'jquery';

 const ContactUs = ()=> {
    const [userName ,setUserName] = useState("");
    const [email ,setEmail] = useState("");
    const [phone ,setPhone] = useState("");
    const [message ,setMessage] = useState("");
    const  [isFormSubmit , setIsFormSubmit] =useState(0);
    const  [reqStatus , setReqStatus] =useState(0);

    const submitContactFrm = (e) =>{
        e.preventDefault();
        //isFormSubmit = 1;
        console.log('setIsFormSubmit' , isFormSubmit );
        if( !userName  ){
            alert('Enter user name !')
        }
        else if( !phone  ){
            alert('Enter user phone number !');
        }
       else  if( phone.length < 10  ){
        alert('Enter correct phone number !');
        }
        else if( message.length < 10 ){
            alert('Enter message!');
        }
        else{
            alert('Form Submit!');
        }

        // const myPromise = new Promise((resolve) =>
        //     fetch("https://jsonplaceholder.typicode.com/comments")
        //     .then((response) => { console.log( response.json() ) })
        //     .then((json) => setTimeout(() => resolve(json), 3000))
        // );

      
        setTimeout(function(){setIsFormSubmit(0); setReqStatus(1) ;clearformMsg(); },5000);
        console.log("form submit.",userName , email , phone , message, )
    }

    const clearformMsg =()=>{ setTimeout(function(){ 
                setReqStatus(0) ;
                setUserName("");
                setEmail("");
                setPhone("");
                setMessage("") ;
        },2000);}
   


  return (<div>
          <section className="page-contact" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">Let's Get In Touch!</h2>
                        <hr className="divider" />
                        <p className="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">
                    <form id="contactForm" onSubmit={submitContactFrm} data-sb-form-api-token="" >
                           
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name"  value={userName} onChange={(e)=>setUserName(e.target.value)}
                                type="text" placeholder="Enter your name..." data-sb-validations="required.name" />
                                <label htmlFor="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email"   value={email}  onChange={(e)=>setEmail(e.target.value)}
                                type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label htmlFor="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone"  value={phone}  onChange={(e)=>setPhone(e.target.value)}
                                 type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label htmlFor="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" value={message} type="text"  onChange={(e)=>setMessage(e.target.value)}
                                placeholder="Enter your message here..."
                                 data-sb-validations="required"></textarea>
                                <label htmlFor="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            
                            <div className={reqStatus==1?"show":"hide"} id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            
                            <div className="d-grid">
                                <button className="btn btn-primary" type="submit" id="contactSubmit" onClick={()=>setIsFormSubmit(1)} >
                                    <div className={isFormSubmit===1?"show":"hide"} >
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span className="sr-only">Sending request...</span>
                                    </div>
                                    <div className={isFormSubmit==0?"show":"hide"} >Send Now </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
  </div>);
}

export default ContactUs;