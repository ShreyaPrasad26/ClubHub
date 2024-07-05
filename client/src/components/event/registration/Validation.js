function Validation(values) {
    let error = {}
    
    if (values.club === ""){
        error.club = "*Field should not be empty"
    }

    else {
        error.club =""
    }

    if (values.srn === ""){
        error.srn = "*Field should not be empty"
    }

    else {
        error.srn =""
    }

    if (values.name === ""){
        error.name = "*Field should not be empty"
    }
    
    else {
        error.name =""
    }

    if (values.event_name === ""){
        error.event_name = "*Field should not be empty"
    }

    else {
        error.event_name =""
    }
    
    return error;
}

export default Validation;