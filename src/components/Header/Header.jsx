import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import './Header.css'
import { Formik, Form, Field } from 'formik';

const Header = ({ card, users , filterProducts }) => {


    //// useri logikan pti stugvi stex 

    const [open, setOpen] = useState(false);
    let user = "Hakob1234"

    const openCard = () => {
        setOpen(!open)
    }
    return (
        <header>
            <nav>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/products'>products</NavLink>
            </nav>
            <div>
                <Formik
                    initialValues={{
                        category: 'all'
                    }}
                    onSubmit={(v) => filterProducts(v.category)}

                >
                    {
                        ({ handleChange, values, handleSubmit }) => (
                            <Form >
                                  <Field as='select' name='category' value={values.category} onChange={handleChange}>
                                    <option value='all'>all</option>
                                    <option value="men's clothing">men's clothing</option>
                                    <option value='jewelery'>jewelery</option>
                                    <option value='electronics'>electronics</option>
                                    <option value="women's clothing">women's clothing</option>
                                </Field>
                                <button type='submit'>filter</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
            <div className='header-card'>
                <NavLink to='/cards'>
                    <FaShoppingCart />
                </NavLink>
                <NavLink to={user === "Hakob123" ? '/profile' : '/login'}>
                    <FaUserAlt />
                </NavLink>
            </div>

        </header>
    )
}

export default Header