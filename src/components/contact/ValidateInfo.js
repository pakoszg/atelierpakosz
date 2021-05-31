export default function validateInfo(values) {
    let errors = {}

    if (!values.name.trim()) {
        errors.name = 'Name is required'
    } else if (values.name.length < 3) {
        errors.name = 'Longer than 3 char name is required'
    }

    if (!values.email.trim()) {
        errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is required'
    }

    if (!values.message.trim()) {
        errors.message = 'Message is required'
    } else if (values.message.length < 15) {
        errors.message = 'Longer than 15 char message is required'
    }

    return errors
}
