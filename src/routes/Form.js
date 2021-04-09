import React from "react";
import { withRouter } from "react-router-dom";
import Formtitle from "../components/Formtitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NameForm from "../components/NameForm";
import { Link } from "react-router-dom";

function Form(props) {
    
    function goToThanks(e) {
        e.preventDefault();
        props.history.push("/Thanks");
    }
    return (
        <div>
            <Header />
            <main className="contest-form mb-50">
                <Formtitle />
                <section className="grid-container">
                    <section className="grid-x grid-padding-x">
                        <section className="cell large-12">
                            <form className="grid-x" onSubmit={goToThanks}>
                                <section className="cell large-8">
                                    <fieldset>
                                        <legend>Personal Information</legend>
                                        <section className="grid-x grid-padding-x">
                                            <section className="cell large-2">
                                                <label for="salutation">Prefix
                                                    <select name="salutation" id="salutation" onChange={props.handleChange}>
                                                        <option value="Mr">Mr</option>
                                                        <option value="Mrs">Mrs</option>
                                                        <option value="Miss">Miss</option>
                                                    </select>
                                                </label>
                                                <p className="error-msg" id="salutationError">error_here</p>
                                            </section>
                                            <section className="cell large-5">
                                                <label for="firstName">First Name
                                                    <input type="text" className="input-box" name="firstName" id="firstName"
                                                        placeholder="Enter your First name" onChange={props.handleChange} />
                                                </label>
                                                <p className="error-msg" id="firstNameError">error_here</p>
                                            </section>
                                            <section className="cell large-5">
                                                <label for="lastName">Last Name
                                                    <input type="text" className="input-box" name="lastName" id="lastName"
                                                        placeholder="Enter your Last name" onChange={props.handleChange} />
                                                </label>
                                                <p className="error-msg" id="lastNameError">error_here</p>
                                            </section>
                                            <section className="cell large-8">
                                                <label for="dateOfBirth">Date of Birth
                                                    <input type="date" className="input-box" name="dateOfBirth" id="dateOfBirth"
                                                        placeholder="YYYY-MM-DD" onChange={props.handleChange} />
                                                </label>
                                                <p className="error-msg" id="dateOfBirthError">error_here</p>
                                            </section>
                                        </section>
                                    </fieldset>
                                </section>
                                <section className="cell large-8" id="guardianDetailsSection">
                                    <fieldset>
                                        <legend>Guardian's Information</legend>
                                        <p className="error-msg">Please fill guardian details, you are under 16.</p>
                                        <section className="grid-x grid-padding-x">
                                            <section className="cell large-2">
                                                <label for="guardianSalutation">Prefix
                                                    <select name="guardianSalutation" id="guardianSalutation" onChange={props.handleChange}>
                                                        <option value="Mr">Mr</option>
                                                        <option value="Mrs">Mrs</option>
                                                        <option value="Miss">Miss</option>
                                                    </select>
                                                </label>
                                                <p className="error-msg" id="guardianSalutationError">error_here</p>
                                            </section>
                                            <section className="cell large-5">
                                                <label for="guardianLastName">Last Name
                                                    <input type="text" className="input-box" name="guardianLastName"
                                                        id="guardianLastName" placeholder="Enter Guardian's Last name" onChange={props.handleChange} />
                                                </label>
                                                <p className="error-msg" id="guardianLastNameError">error_here</p>
                                            </section>
                                            <section className="cell large-6">
                                                <label for="guardianEmailId">Email
                                                    <input type="text" className="input-box" name="guardianEmailId"
                                                        id="guardianEmailId" placeholder="Enter Guardian's email" onChange={props.handleChange} />
                                                </label>
                                                <p className="error-msg" id="guardianEmailIdError">error_here</p>
                                            </section>
                                            <section className="cell large-6">
                                                <label for="guardianPhoneNum">Phone number
                                                    <input type="text" className="input-box" name="guardianPhoneNum"
                                                        id="guardianPhoneNum" placeholder="Enter guardian's phone number"  onChange={props.handleChange} />
                                                </label>
                                                <p className="error-msg" id="guardianPhoneNumError">error_here</p>
                                            </section>
                                        </section>
                                    </fieldset>
                                </section>
                                <section className="cell large-8">
                                    <fieldset>
                                        <legend>Contact Information</legend>
                                        <section className="grid-x grid-padding-x">
                                            <section className="cell large-6">
                                                <label for="emailId">Email
                                                    <input type="text" className="input-box" name="emailId" id="emailId"
                                                        placeholder="Enter email" onChange={props.handleChange} />
                                                </label>
                                                <p className="error-msg" id="emailIdError">error_here</p>
                                            </section>
                                            <section className="cell large-6">
                                                <label for="phoneNum">Phone number
                                                    <input type="text" className="input-box" name="phoneNum" id="phoneNum"
                                                        placeholder="Enter phone number" onChange={props.handleChange} />
                                                </label>
                                                <p className="error-msg" id="phoneNumError">error_here</p>
                                            </section>
                                            <section className="cell large-8">
                                                <label for="homeAddress1">Address Line 1
                                                    <input type="text" className="input-box" name="homeAddress1" id="homeAddress"
                                                        placeholder="Enter address line 1" onChange={props.handleChange} />
                                                </label>
                                                <p className="error-msg" id="homeAddressError">error_here</p>
                                            </section>
                                            <section className="cell large-8">
                                                <label for="homeAddress2">Address Line 2
                                                    <input type="text" className="input-box" name="homeAddress2" id="homeAddress2"
                                                        placeholder="Enter address line 2" onChange={props.handleChange} />
                                                </label>
                                                <p className="error-msg">&nbsp;</p>
                                            </section>
                                            <section className="cell large-5">
                                                <label for="city">City
                                                    <input type="text" className="input-box" name="city" id="city"
                                                        placeholder="Enter city name" onChange={props.handleChange} />
                                                </label>
                                                <p className="error-msg" id="cityError">error_here</p>
                                            </section>
                                            <section className="cell large-5">
                                                <label for="postalCode">ZIP / Postal Code
                                                    <input type="text" className="input-box" name="postalCode" id="postalCode"
                                                        placeholder="Enter city name" onChange={props.handleChange} />
                                                </label>
                                                <p className="error-msg" id="postalCodeError">error_here</p>
                                            </section>
                                            <section className="cell large-5">
                                                <label for="province">Province
                                                    <select className="input-box" name="province" id="province" onChange={props.handleChange}>
                                                        <option value="Alberta">AB</option>
                                                        <option value="British Colombia">BC</option>
                                                        <option value="Manitoba">MB</option>
                                                        <option value="New Brunswick">NB</option>
                                                        <option value="Newfoundland and Labrador">NL</option>
                                                        <option value="Northwest Territories">NT</option>
                                                        <option value="Nova Scotia">NS</option>
                                                        <option value="Nonavut">NU</option>
                                                        <option value="Ontario">ON</option>
                                                        <option value="Prince Edward Island">PE</option>
                                                        <option value="Quebec">QC</option>
                                                        <option value="Saskatchewan">SK</option>
                                                        <option value="Yukon">YT</option>
                                                    </select>
                                                </label>
                                            </section>
                                            <section className="cell large-5">
                                                <label for="country">Country
                                                    <input type="text" className="input-box" name="country" id="country" disabled="disabled" value="Canada" />
                                                </label>
                                                <p className="error-msg" id="postalCodeError">error_here</p>
                                            </section>
                                        </section>
                                        <input type="checkbox" id="termsAndConditions" name="termsAndConditions" required/><label for="termsAndConditions"> I accept <Link to="/terms">terms and condition</Link> for the contest.</label><br/>
                                        <input type="checkbox" id="newsletterSignup" name="termsAndConditions" required/><label for="termsAndConditions"> Sign me up to receive emails! (optional)</label>
                                        <p className="error-msg" id="termsAndConditionsError">error_here</p>
                                    </fieldset>
                                </section>
                                <section className="cell large-8">
                                    <section className="grid-x grid-padding-x">
                                        <section className="cell large-12 small-12">
                                            <input type="submit" value="Submit" className="button" id="formSubmit"></input>
                                            <input type="button" value="Cancel" className="button secondary" id="formCancel"></input>
                                        </section>
                                    </section>
                                </section>
                            </form>
                        </section>
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default withRouter(Form);