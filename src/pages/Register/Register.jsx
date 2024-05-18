import React from 'react'
import './Register.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as YUP from 'yup';

let or = []
for (let i = 1; i <= 29; i++) {
    or.push(i)
}
let amis = ['hunvar', 'petrvar', 'mart', 'april', 'mayis']
let tari = [];

for (let i = 2024; i >= 1970; i--) {
    tari.push(i)
}
const Register = () => {

    const validateRegister = YUP.object().shape({
        name: YUP
            .string()
            .required('fild is requrieq')
            .matches(/[A-Z]{1}[a-z]/, 'anune sxale'),
        lastName: YUP
            .string()
            .required('fild is requrieq')
            .matches(/[A-Z]{1}[a-z]/, 'anune sxale'),
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
        gender: YUP.string().required('fild is requrieq'),
        or: YUP.string().required('fild is requrieq'),
        amis: YUP.string().required('fild is requrieq'),
        tari: YUP.string().required('fild is requrieq'),
        login: YUP.string().required('fild is requrieq'),
        pasword: YUP.string().required('field is requred'),
        confirmPassword: YUP.string().oneOf([YUP.ref("pasword")], "pasword ը չի համընկում").required('field is requred'),
    })
    return (
        <div>
            <h3>Register</h3>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    gender: '',
                    phone: '',
                    email: '',
                    or: '',
                    amis: '',
                    tari: '',
                    login: '',
                    pasword: '',
                    confirmPassword: '',
                }}
                validationSchema={validateRegister}
                onSubmit={(values) => console.log(values)}
            >
                {
                    () => (
                        <Form>
                            <Field name='name' placeholder='name'/>
                            <ErrorMessage name='name'/>
                            <Field name='lastName' placeholder='lastName' />
                            <ErrorMessage name='lastName'/>
                            <Field name='phone' placeholder='phone' />
                            <ErrorMessage name='phone'/>
                            <Field name='email' placeholder='email' />
                            <ErrorMessage name='email'/>
                            <Field name='login' placeholder='login' />
                            <ErrorMessage name='login'/>
                            <Field name='pasword' placeholder='pasword' />
                            <ErrorMessage name='pasword'/>
                            <Field name='confirmPassword' placeholder='confirmPassword' />
                            
                            <label>
                                <Field type="radio" name="gender" value="male" />
                                male
                            </label>
                            <label>
                                <Field type="radio" name="gender" value="famle" />
                                famle
                            </label>
                            <ErrorMessage name='gender'/>
                            <Field as="select" name="or">
                                {
                                    or.map((o) => <option key={o} value={o}>{o}</option>)
                                }
                            </Field>
                            <Field as="select" name="amis">
                                {
                                    amis.map((a) => <option key={a} value={a}>{a}</option>)
                                }
                            </Field>
                            <Field as="select" name="tari">
                                {
                                    tari.map((t) => <option key={t} value={t}>{t}</option>)
                                }
                            </Field>
                            <button type='submit'>register</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default Register