import useForm from './useForm'
import validate from './ValidateInfo'
import './Form.css'

const ContactForm = ({ submitForm }) => {
    const { values, handleChange, handleSubmit, errors } = useForm(
        validate,
        submitForm
    )

    return (
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                    name="name"
                    type="text"
                    className="form-control form-data"
                    rows="2"
                    onChange={handleChange}
                    value={values.name}
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
                {/* if its true then we will return */}
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address *</label>
                <input
                    name="email"
                    type="email"
                    className="form-control form-data"
                    aria-describedby="emailHelp"
                    rows="2"
                    onChange={handleChange}
                    value={values.email}
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
                {/* if its true then we will return */}
            </div>
            <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    onChange={handleChange}
                    value={values.message}
                ></textarea>
                {errors.message && (
                    <p className="form-error">{errors.message}</p>
                )}
                {/* if its true then we will return */}
            </div>
            <div className="form-group-button">
                <button type="submit" className="btn btn-primary">
                    Send
                </button>
            </div>
        </form>
    )
}

export default ContactForm
