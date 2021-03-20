// import React from 'react';
// // import * as Yup from 'yup';
// import emailjs from 'emailjs-com'; 


// function Contact(){
//     function sendEmail(e){
//         e.preventDefaults();

//         emailjs.sendForm('fs_gmail', 'template_xna9qag', e.target, 'user_CJwQWuHoafh44jTrmGspT')
//         .then((result) => {
//           console.log(result.text);
//         }, (error) => {
//           console.log(error.text);
//         });
//     }

//     // const validationSchema = Yup.object({
//     //     name: Yup.string()
//     //         .required('Required'),
//     //     email: Yup.string()
//     //         .email('Invalid Email Address')
//     //         .required('Required'),
//     //     message: Yup.string()
//     //         .min(7, 'More details are always helpful.')
//     //         .required('Required')
//     // });

//     return (
//                <form onSubmit={sendEmail}>
//                    <h4>Shoot me a message here.</h4>

//                    {/* <div className="field half first">
//                         <label>Name</label>
//                         <input
//                             label="Name"
//                             name="name" 
//                             type="text" 
//                             placeholder="Enter Name" 
//                         />
//                    </div>

//                    <div className="field half">
//                         <label>Email</label>
//                         <input
//                             label="Email"
//                             name="email"
//                             type="email" 
//                             placeholder="Enter Your Email"
//                         />
//                    </div>

//                    <div className="field">
//                         <label>Message</label>
//                         <textarea
//                             label="Message"
//                             name="message" 
//                             rows="4" 
//                             placeholder="Your Message Here"
//                         />
//                    </div> */}

//                    <ul className="actions">
//                        <li>
//                            <input 
//                                 type="submit" 
//                                 className="special" 
//                                 value='Send Message'
//                             />
//                        </li>
//                    </ul>

//                </form>
//            )
// }

// export default Contact