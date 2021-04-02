import { withRouter } from "react-router-dom";

function Form(props) {
    function goToThanks(e) {
        e.preventDefault();
        props.history.push("/thanks");
    }

    return (
        <div className="Form">

<section className="callout large contest-info">
            <section className="grid-container">
                <h1 className="text-center small-text-left">The prizes and chances of winning</h1>
                <section className="row column text-center small-text-justify">
                    <p>Every customer of our product got a chance of winning a free dairy package!</p>
                    <p><strong>Yogurt tips:</strong> winners will be determined by random draw but may have their
                        entries removed for any reason by the judges.</p>
                    <p>Users under the age of 16 are not eligible for the activity without a guardian's permission.</p>
                </section>
            </section>
        </section>
        <section className="grid-container">
            <section className="grid-x grid-padding-x">
                <section className="cell large-8 skill-test">
                    <section className="skill-title">Skill Test</section>
                    <form className="grid-y" action="#">
                        <label for="skillTest" id="skillTest">import_question_here</label>
                        <section className="grid-x">
                            <section className="cell large-3"></section>
                            <section className="cell large-6">
                                <input className="input-box" type="text" name="skillTestInput" id="skillTestInput"
                                    placeholder="Answer the question here.." />
                            </section>
                            <section className="cell large-3"></section>
                        </section>

                        <p className="error-msg" id="skillTestError">error_here</p>
                    </form>
                </section>
                <section className="cell large-12">
                    <form className="grid-x" action="#" onSubmit={goToThanks}>
                        <section className="cell large-8">
                            <fieldset>
                                <legend>Personal Information</legend>
                                <section className="grid-x grid-padding-x">
                                    <section className="cell large-6">
                                        <label for="firstName">First Name
                                            <input type="text" className="input-box" name="firstName" id="firstName" onChange={props.firstNameChange} value={this.state.fr}
                                                placeholder="Enter your First name" />
                                        </label>
                                        <p className="error-msg" id="firstNameError">error_here</p>
                                    </section>
                                    <section className="cell large-6">
                                        <label for="lastName">Last Name
                                            <input type="text" className="input-box" name="lastName" id="lastName" onChange={props.lastNameChange}
                                                placeholder="Enter your Last name" />
                                        </label>
                                        <p className="error-msg" id="lastNameError">error_here</p>
                                    </section>
                                    <section className="cell large-6">
                                        <label for="dateOfBirth">Date of Birth
                                            <input type="date" className="input-box" name="dateOfBirth" id="dateOfBirth" onChange={props.firstNameChange}
                                                placeholder="YYYY-MM-DD" />
                                        </label>
                                        <p className="error-msg" id="dateOfBirthError">error_here</p>
                                    </section>
                                </section>
                            </fieldset>
                        </section>
                        <section className="tabbedSection cell large-8" id="guardianDetailsSection">
                            <fieldset>
                                <legend>Guardian's Information</legend>
                                <p className="error-msg" id="guardianRequiredError">error_here</p>
                                <section className="grid-x grid-padding-x">
                                    <section className="cell large-6">
                                        <label for="guardianFirstName">First Name
                                            <input type="text" className="input-box" name="guardianFirstName" onChange={props.guardianFirstNameChange}
                                                id="guardianFirstName" placeholder="Enter guardian's first name" />
                                        </label>
                                        <p className="error-msg" id="guardianFirstNameError">error_here</p>
                                    </section>
                                    <section className="cell large-6">
                                        <label for="guardianLastName">Last Name
                                            <input type="text" className="input-box" name="guardianLastName" onChange={props.handleChange}
                                                id="guardianLastName" placeholder="Enter Guardian's Last name" />
                                        </label>
                                        <p className="error-msg" id="guardianLastNameError">error_here</p>
                                    </section>
                                    <section className="cell large-8">
                                        <label for="guardianEmailId">Email
                                            <input type="text" className="input-box" name="guardianEmailId" onChange={props.handleChange}
                                                id="guardianEmailId" placeholder="Enter Guardian's email" />
                                        </label>
                                        <p className="error-msg" id="guardianEmailIdError">error_here</p>
                                    </section>
                                    <section className="cell large-8">
                                        <label for="guardianPhoneNum">Phone number
                                            <input type="text" className="input-box" name="guardianPhoneNum" onChange={props.handleChange}
                                                id="guardianPhoneNum" placeholder="Enter guardian's phone number" />
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
                                    <section className="cell large-8">
                                        <label for="emailId">Email
                                            <input type="text" className="input-box" name="emailId" id="emailId" onChange={props.handleChange}
                                                placeholder="Enter email" />
                                        </label>
                                        <p className="error-msg" id="emailIdError">error_here</p>
                                    </section>
                                    <section className="cell large-8">
                                        <label for="phoneNum">Phone number
                                            <input type="text" className="input-box" name="phoneNum" id="phoneNum" onChange={props.handleChange}
                                                placeholder="Enter guardian's phone number" />
                                        </label>
                                        <p className="error-msg" id="phoneNumError">error_here</p>
                                    </section>
                                    <section className="cell large-8">
                                        <label for="homeAddress1">Address Line 1
                                            <input type="text" className="input-box" name="homeAddress1" id="homeAddress" onChange={props.handleChange}
                                                placeholder="Enter address line 1" />
                                        </label>
                                        <p className="error-msg" id="homeAddressError">error_here</p>
                                    </section>
                                    <section className="cell large-8">
                                        <label for="homeAddress2">Address Line 2
                                            <input type="text" className="input-box" name="homeAddress2" id="homeAddress2" onChange={props.handleChange}
                                                placeholder="Enter address line 2" />
                                        </label>
                                        <p className="error-msg" id="">error_here</p>
                                    </section>
                                    <section className="cell large-5">
                                        <label for="city">City
                                            <input type="text" className="input-box" name="city" id="city" onChange={props.handleChange}
                                                placeholder="Enter city name" />
                                        </label>
                                        <p className="error-msg" id="cityError">error_here</p>
                                    </section>
                                    <section className="cell large-5">
                                        <label for="postalCode">ZIP / Postal Code
                                            <input type="text" className="input-box" name="postalCode" id="postalCode" onChange={props.handleChange}
                                                placeholder="Enter city name" />
                                        </label>
                                        <p className="error-msg" id="postalCodeError">error_here</p>
                                    </section>
                                    <section className="cell large-5">
                                        <label for="province">Province
                                            <select className="input-box" name="province" id="province">
                                                <option value="Alberta">AB</option>
                                                <option value="British Colombia">BC</option>
                                                <option value="Manitoba">MB</option>
                                                <option value="New Brunswick">NB</option>
                                                <option value="Newfoundland and Labrador">NL</option>
                                                <option value="Northwest Territories">NT</option>
                                                <option value="Nova Scotia">NS</option>
                                                <option value="Nonavut">NU</option>
                                                <option value="Ontario" selected>ON</option>
                                                <option value="Prince Edward Island">PE</option>
                                                <option value="Quebec">QC</option>
                                                <option value="Saskatchewan">SK</option>
                                                <option value="Yukon">YT</option>
                                            </select>
                                        </label>
                                    </section>
                                    <section className="cell large-5">
                                        <label for="country">Country
                                            <input type="text" className="input-box" name="country" id="country" onChange={props.handleChange}
                                                disabled="disabled" value="Canada" />
                                        </label>
                                        <p className="error-msg" id="postalCodeError">error_here</p>
                                    </section>
                                </section>
                                <input type="checkbox" id="termsAndConditions" name="termsAndConditions"
                                    required /><label for="termsAndConditions"> I accept <a
                                        href="term-condition.html">rules and regulations</a></label><br/>
                                <input type="checkbox" id="newsletterSignup" name="termsAndConditions" required /><label
                                    for="termsAndConditions"> Sign me up to receive emails! (optional)</label>
                                <p className="error-msg" id="termsAndConditionsError">error_here</p>
                            </fieldset>
                        </section>
                        <section className="cell large-8">
                            <section className=" grid-x grid-padding-x">
                                <section className="cell large-2 small-12">
                                    {/* <section className="button" id="formSubmit">Submit</section> */}
                                    <input className="button" type="submit" value="Submit" />
                                </section>
                                <section className="cell large-2 small-12">
                                    <section className="button secondary" id="formCancel">Cancel</section>
                                </section>
                            </section>
                        </section>
                    </form>
                </section>
            </section>
        </section>
        </div>
    );
}

export default withRouter(Form);
