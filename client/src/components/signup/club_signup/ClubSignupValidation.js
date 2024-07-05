function Validation(values) {
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (values.club === ""){
        error.club = "*Field should not be empty"
    }

    else {
        error.club =""
    }

    if (values.domain === ""){
        error.domain = "*Field should not be empty"
    }

    else {
        error.domain =""
    }

    if (values.bio === ""){
        error.bio = "*Field should not be empty"
    }

    else {
        error.bio =""
    }

    if (values.email === ""){
        error.email = "*Field should not be empty"
    }

    else if (!email_pattern.test(values.email)){
        error.email = "*Email didn't match"
    }

    else {
        error.email =""
    }

    if (values.password === ""){
        error.password = "*Field should not be empty"
    }

    else {
        error.password =""
    }
    
    return error;
}

export default Validation;