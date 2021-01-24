import React from 'react';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com'; 

const CustomTextInput = ({ label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

const CustomTextarea = ({ label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

function Contact(){
    
    const sendEmail = function(e) {
        emailjs.sendForm('fs_gmail', 'template_xna9qag', e.target, 'user_CJwQWuHoafh44jTrmGspT')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }

    const sendDataToEmailApi = (values) => {
        sendEmail(values);
        return true; 
      };
    
      const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const emailWasSent = sendDataToEmailApi(values);
        if (emailWasSent) {
            resetForm();
            setSubmitting(false);
        }
      };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email('Invalid Email Address')
            .required('Required'),
        message: Yup.string()
            .min(7, 'More details are always helpful.')
            .required('Required')
    });

    return (
       <Formik
        initialValues={{
            name: '',
            email: '',
            message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
       >
           {props => (
               <Form>
                   <h4>Shoot me a message here.</h4>

                   <div className="field half first">
                        <CustomTextInput label="Name" name="name" type="text" placeholder="Enter Name" />
                   </div>

                   <div className="field half">
                        <CustomTextInput label="Email" name="email" type="email" placeholder="Enter Your Email" />
                   </div>

                   <div className="field">
                        <CustomTextarea label="message" name="message" rows="4" placeholder="Your Message Here" />
                   </div>

                   <ul className="actions">
                       <li>
                           <input type="submit" className="special" value={props.isSubmitting ? 'Sending...' : 'Send Message'} />
                       </li>
                   </ul>

               </Form>
           )}
       </Formik>
    );
}

export default Contact