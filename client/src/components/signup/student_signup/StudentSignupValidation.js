function Validation(values) {
    let error = {}

    const semester_pattern = /^[1-8]$/;
    const section_pattern = /^[A-Z]$/;
    const cgpa_pattern = /^([1-9]|10)(\.\d{1,2})?$/;
    const phno_pattern = /^[6-9]\d{9}$/;
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (values.fname === ""){
        error.fname = "*Field should not be empty"
    }

    else {
        error.fname =""
    }

    if (values.lname === ""){
        error.lname = "*Field should not be empty"
    }

    else {
        error.lname =""
    }

    if (values.srn === ""){
        error.srn = "*Field should not be empty"
    }

    else {
        error.srn =""
    }

    if (values.semester === ""){
        error.semester = "*Field should not be empty"
    }

    else if (!semester_pattern.test(values.semester)){
        error.semester = "*Semester didn't match"
    }

    else {
        error.semester =""
    }

    if (values.section === ""){
        error.section = "*Field should not be empty"
    }

    else if (!section_pattern.test(values.section)){
        error.section = "*Section didn't match"
    }

    else {
        error.section =""
    }

    if (values.cgpa === ""){
        error.cgpa = "*Field should not be empty"
    }

    else if (!cgpa_pattern.test(values.cgpa)){
        error.cgpa = "*CGPA didn't match"
    }

    else {
        error.cgpa =""
    }

    if (values.phno === ""){
        error.phno = "*Field should not be empty"
    }

    else if (!phno_pattern.test(values.phno)){
        error.phno = "*Phone number didn't match"
    }

    else {
        error.phno =""
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