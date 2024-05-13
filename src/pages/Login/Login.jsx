import React, { useState } from 'react'
import './Login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as YUP from 'yup';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = ({users}) => {
  const [auth, setAuth] = useState(false)
  const [ok, setOk] = useState('');
  const [a, setA] = useState('');
  const validate = YUP.object().shape({
    login : YUP.string().required('field is requred'),
    pasword : YUP.string().required('field is requred'),
    confirmPassword : YUP.string().oneOf([YUP.ref("pasword")], "pasword ը չի համընկում").required('field is requred'),
  })
  

  const Autorization = (values) => {

    let authUser = users.find((user) => user.name === values.login && user.password === values.pasword);
    
    if(!authUser) {
      setAuth(true)
    }else {
     setOk('ok')
     setA(authUser)
    }
  }


  if(ok === 'ok') {
    return <Navigate to='/profile' state={a}/>
  }
  return (
    <div>
      {
        auth && <h2>nman user chka</h2>
      }
      <Formik
        initialValues={{
          login : '',
          pasword : '',
          confirmPassword : ''
        }}
        validationSchema={validate}
        onSubmit={(values) => Autorization(values)}
      >
        {
          () => (
            <Form>
            <Field name='login' placeholder='name' />
            <ErrorMessage name='login' />
            <Field name='pasword' placeholder='pasword' />
            <ErrorMessage name='pasword' />
            <Field name='confirmPassword' placeholder='confirmPassword' />
            <ErrorMessage name='confirmPassword' />
            <button type='submit'>login</button>
          </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default Login