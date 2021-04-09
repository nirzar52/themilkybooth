import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NameForm = () => {

    // function ValidationCheck(values) {
    //     let errors = {};

    //     if (!values.firstName) {
    //         errors.firstName = "First Name required";
    //     } else if (!/^[a-zA-z]+$/.test(values.firstName)) {
    //         errors.firstName = "First Name is Invalid";
    //     }

    //     // lastName

    //     if (!values.lastName) {
    //         errors.lastName = "lastName required";
    //     } else if (!/^[a-zA-z]+$/.test(values.lastName)) {
    //         errors.lastName = "last name is invalids";
    //     }

    //     // email

    //     if (!values.email) {
    //         errors.email = " email required";
    //     } else if (
    //         !/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    //             values.email
    //         )
    //     ) {
    //         errors.email = "Email Address is Invalid";
    //     }

    //     // password

    //     if (!values.password) {
    //         errors.password = "Password required";
    //     } else if (
    //         !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,16}$/.test(values.password)
    //     ) {
    //         errors.password =
    //             "Password is invalid, it should have 1 Capital letter, 1 regular letter, 1 number and 1 special character";
    //     }

    //     // confirm password

    //     if (!values.confirmPassword) {
    //         errors.confirmPassword = "Password is not the same!";
    //     } else if (values.confirmPassword !== values.password) {
    //         errors.confirmPassword = "Password is not the same!";
    //     }

    //     // phone

    //     if (!values.phone) {
    //         errors.phone = "Phone required";
    //     } else if (
    //         !/^[\\(]{0,1}([0-9]){3}[\\)]{0,1}[ ]?([^0-1]){1}([0-9]){2}[ ]?[-]?[ ]?([0-9]){4}[ ]*((x){0,1}([0-9]){1,5}){0,1}$/.test(
    //             values.phone
    //         )
    //     ) {
    //         errors.phone = "Phone Number is Invalid";
    //     }

    //     // DateOfBirth

    //     if (!values.DateOfBirth) {
    //         errors.DateOfBirth = "Date Of Birth Required";
    //     } else if (
    //         !/^(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/.test(
    //             values.DateOfBirth
    //         )
    //     ) {
    //         errors.DateOfBirth = "Date Of Birth is Invalid";
    //     }

    //     // address

    //     if (!values.address) {
    //         errors.address = "Address Line Required";
    //     } else if (!/^\d+\s[A-z]+(\s[A-z]+$)?/.test(values.address)) {
    //         errors.address = "Address is Invalid";
    //     }

    //     // address2

    //     // if (!values.address2) {
    //     //     errors.address2 = "address line 2 required";
    //     // } else if (!/^\d+\s[A-z]+(\s[A-z]+$)?/.test(values.address2)) {
    //     //     errors.address2 = "address is invalid";
    //     // }

    //     // city

    //     if (!values.city) {
    //         errors.city = "City required";
    //     } else if (
    //         !/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/.test(
    //             values.city
    //         )
    //     ) {
    //         errors.city = "City Name is Invalid";
    //     }

    //     // province

    //     if (!values.province) {
    //         errors.province = "Province Required";
    //     } else if (
    //         !/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/.test(
    //             values.province
    //         )
    //     ) {
    //         errors.province = "Province Name is Invalid";
    //     }

    //     // postal

    //     if (!values.postalCode) {
    //         errors.postalCode = "Postal Code Required";
    //     } else if (
    //         !/^([A-Za-z]\d[A-Za-z][-\s]?\d[A-Za-z]\d)$/.test(values.postalCode)
    //     ) {
    //         errors.postalCode = "Postal Code is Invalid";
    //     }

    //     return errors;
    // }
}

export default NameForm;