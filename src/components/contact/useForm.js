import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'

const useForm = (validate, callback) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        if (e) e.preventDefault()

        setErrors(validate(values))
        setIsSubmitting(true)
        // sendEmail()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        // e.persist()
        setValues((values) => ({
            ...values,
            [name]: value,
        }))
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    }, [callback, errors, isSubmitting])

    //useEffect dependecy for various data types

    const sendEmail = () => {
        emailjs
            .sendForm('service_44dk88d', 'template_sl9now4', '#contact-form')
            .then(
                function (response) {
                    console.log('SUCCESS!', response.status, response.text)
                },
                function (error) {
                    console.log('FAILED...', error)
                }
            )
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
}

export default useForm
