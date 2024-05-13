import React from 'react'
import './Order.css'
import { Formik } from 'formik'
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
        // region: '',
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
                    // region: '',
                    // city: '',
                }}
                onSubmit={(res) => console.log(res)}
                validationSchema={validateOrder}
            >
                {({ values, handleBlur, handleChange, handleSubmit, errors, touched }) => (
                    <form className='order-form' onSubmit={handleSubmit}>
                        <input value={values.name} onChange={handleChange} name='name' placeholder='name' />
                        {errors.name && touched.name && <p>{errors.name}</p>}
                        <input value={values.lastName} onChange={handleChange} name='lastName' placeholder='lastName' />
                        {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
                        <input value={values.phone} onChange={handleChange} name='phone' placeholder='phone' />
                        {errors.phone && touched.phone && <p>{errors.phone}</p>}
                        <input value={values.email} onChange={handleChange} name='email' placeholder='email' />
                        {errors.email && touched.email && <p>{errors.email}</p>}
                        {/* <input value={values.city} onChange={handleChange} name='city' placeholder='city' /> */}
                        <button>Գնել</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Order