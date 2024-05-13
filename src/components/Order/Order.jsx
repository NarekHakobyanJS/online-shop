import React from 'react'
import './Order.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as YUP from 'yup';


const Order = () => {
    const validateOrder = YUP.object().shape({
        name: YUP
            .string()
            .required('fild is requrieq')
            .matches(/[A-Z]{1}[a-z]/, 'anune sxale')
        ,
        lastName: YUP
            .string()
            .required('fild is requrieq')
            .matches(/[A-Z]{1}[a-z]/, 'azganune sxale'),
        phone: YUP
            .string()
            .matches(/[+][0-9]+-\d+-\d+-\d+-\d/g, 'hamare sxale')
            .required('fild is requrieq')
        ,
        email: YUP
            .string()
            .email('email is invalid')
            .required('fild is requrieq')
        ,
        region: '',
        // city: '',
    })
    return (
        <div>
            <h2>Առաքման տվյալներ</h2>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    region: '',
                    // city: '',
                }}
                onSubmit={(res) => console.log(res)}
                validationSchema={validateOrder}
            >
                {({ }) => (
                    <Form className='order-form'>
                        <Field name='name' placeholder='name' />
                        <ErrorMessage name='name' />
                        <Field name='lastName' placeholder='lastName' />
                        <ErrorMessage name='lastName' />
                        <Field name='phone' placeholder='phone' />
                        <ErrorMessage name='phone' />
                        <Field name='email' placeholder='email' />
                        <ErrorMessage name='email' />
                        <button type='submit'>Գնել</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Order