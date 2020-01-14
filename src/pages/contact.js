import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

// * Components 
import Layout from '../components/layout'
import Banner from '../components/banner/banner'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Head from '../components/head'

//* Styles 
import '../styles/contact.sass'

const Contact = () => {
    const data = useStaticQuery(graphql`
    query {
        imageSharp(fixed:{ originalName: {eq: "contact-mini-bg.jpg"}}) {
            fluid { ...GatsbyImageSharpFluid }
        } }`)

    return (
        <Layout>
            <Head title='Contact Me' />
            <div className="contact">
                <Banner imgSrc={data.imageSharp.fluid} imgAlt="Black Phone"
                    title="Contact Me" subTitle="How can I help you?" />

                <div className="center bb">
                    <div className="contact-form">
                        <h4 className='form-title'>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</h4>
                        <FormikForm />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const ContactForm = ({ errors, touched }) => {
    return (
        <Form className='formik-form'>
            <Field type="text" name="name" placeholder="Name" required className='field' />
            {touched.name && errors.name && <p className='error'>{errors.name}</p>}

            <Field type="email" name="email" placeholder="Email" required className='field' />
            {touched.name && errors.email && <p className='error'>{errors.email}</p>}

            <Field type="phone" name="phone" placeholder="Phone" className='field' />
            {touched.phone && errors.phone && <p className='error'>{errors.phone}</p>}

            <Field component='textarea' name="message" id="message" placeholder="Message" className='field' />
            {touched.message && errors.message && <p className='error'>{errors.message}</p>}
            <button type="submit" className='more-btn'>Send</button>
        </Form>
    )
}

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

// * HOC for form validation 
const FormikForm = withFormik({
    mapPropsToValues() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('A name is required'),
        email: Yup.string().email('Please use a valid email').required(),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        message: Yup.string().min(25, 'Message must be more than 25 characters long, be descriptive :)').required('A message is required')
    }),
    handleSubmit(values, { resetForm }) {
        // axios({
        //     method: 'post',
        //     url: '',
        //     data: {
        //         name: values.name,
        //         email: values.email,
        //         phone: values.phone
        //         message: values.message,
        //     }
        // })
        //     .then(res => resetForm())
        //     .catch(e => console.log(e))
    }
})(ContactForm)

export default Contact