function Validation(values) {
    let error = {}
    
    if (values.userid === ""){
        error.userid = "*Field should not be empty"
    }

    else {
        error.userid =""
    }

    if (values.password ===""){
        error.password = "*Field should not be empty"
    }

    else {
        error.password =""
    }

    if (values.repassword === ""){
        error.repassword = "*Field should not be empty"
    }

    else {
        error.repassword =""
    }

    return error;
}

export default Validation;