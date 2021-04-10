export default function ValidationCheck(values) {

        let errors = {};

        if (!values.firstName) {
            errors.firstName = "First Name required";
        } else if (!/^[a-zA-z]+$/.test(values.firstName)) {
            errors.firstName = "Please enter a valid first name";
        }

        // lastName

        if (!values.lastName) {
            errors.lastName = "Please enter a valid last name";
        } else if (!/^[a-zA-z]+$/.test(values.lastName)) {
            errors.lastName = "last name is invalids";
        }

        // email

        if (!values.email) {
            errors.email = " email required";
        } else if (
            !/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                values.email
            )
        ) {
            errors.email = "Please enter a valid email address";
        }

        // phone

        if (!values.phone) {
            errors.phone = "Phone required";
        } else if (
            !/^[\\(]{0,1}([0-9]){3}[\\)]{0,1}[ ]?([^0-1]){1}([0-9]){2}[ ]?[-]?[ ]?([0-9]){4}[ ]*((x){0,1}([0-9]){1,5}){0,1}$/.test(
                values.phone
            )
        ) {
            errors.phone = "Please enter a valid phone number";
        }

        // DateOfBirth

        if (!values.DateOfBirth) {
            errors.DateOfBirth = "Date Of Birth Required";
        } else if (
            !/^(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/.test(
                values.DateOfBirth
            )
        ) {
            errors.DateOfBirth = "Please enter a valid age";
        }

        // address

        if (!values.address) {
            errors.address = "Address Line Required";
        } else if (!/^\d+\s[A-z]+(\s[A-z]+$)?/.test(values.address)) {
            errors.address = "Please enter a valid address";
        }

        // city

        if (!values.city) {
            errors.city = "City required";
        } else if (
            !/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/.test(
                values.city
            )
        ) {
            errors.city = "Please enter a valid city";
        }

        // postal

        if (!values.postalCode) {
            errors.postalCode = "Postal Code Required";
        } else if (
            !/^([A-Za-z]\d[A-Za-z][-\s]?\d[A-Za-z]\d)$/.test(values.postalCode)
        ) {
            errors.postalCode = "Please enter a valid postal code";
        }

        return errors;
    
}