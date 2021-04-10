import React from "react";
import { withRouter } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Formtitle from "../components/Formtitle";
import { Link } from "react-router-dom";

function Form(props) {

    function goToHome(e) {
        e.preventDefault();
        props.history.push("/");
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        e.preventDefault();
        props.history.push("/photobooth");
    }


    console.log(watch("example"));

    return (
        <div>
            <main className="contest-form mb-50">
                <Formtitle />
                <section className="grid-container">
                    <section className="grid-x grid-padding-x">
                        <section className="cell large-12">
                            <form className="grid-x" onSubmit={handleSubmit(onSubmit)}>
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
                                                
                                            </section>
                                            <section className="cell large-5">
                                                <label for="firstName">First Name
                                                    <input type="text" className="input-box" name="firstName" id="firstName"
                                                        placeholder="Enter your First name"
                                                        {...register("firstName", {
                                                            required: true,
                                                            pattern: /^[A-Z]+|[a-z]+$/,
                                                        })} />
                                                    {errors.firstName && <p className="errorMsg">Please enter a valid first name</p>}
                                                </label>
                                                
                                            </section>
                                            <section className="cell large-5">
                                                <label for="lastName">Last Name
                                                    <input type="text" className="input-box" name="lastName" id="lastName"
                                                        placeholder="Enter your Last name"
                                                        {...register("lastName", {
                                                            required: true,
                                                            pattern: /^[A-Z]+|[a-z]+$/,
                                                        })} />
                                                    {errors.lastName && <p className="errorMsg">Please enter a valid last name</p>}
                                                </label>
                                                
                                            </section>
                                            <section className="cell large-5">
                                                <label for="dateOfBirth">Age
                                                <input type="number" className="input-box" name="dateOfBirth" id="dateOfBirth"
                                                        placeholder="How old are you?"
                                                        {...register("dateOfBirth", {
                                                            required: true,
                                                            min: 16
                                                        })} />
                                                    {errors.dateOfBirth && <p className="errorMsg">You must be atleast 16 years old to participate</p>}
                                                </label>
                                                
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
                                                <label for="guardianSalutation">Guardian's Prefix
                                                <select name="guardianSalutation" id="guardianSalutation">
                                                        <option value="Mr">Mr</option>
                                                        <option value="Mrs">Mrs</option>
                                                        <option value="Miss">Miss</option>
                                                    </select>
                                                </label>
                                                
                                            </section>
                                            <section className="cell large-5">
                                                <label for="guardianFirstName">Guardian's First Name
                                                    <input type="text" className="input-box" name="guardianFirstName" id="guardianFirstName"
                                                        placeholder="Enter Guardian's First name"
                                                        {...register("guardianFirstName", {
                                                            required: true,
                                                            pattern: /^[A-Z]+|[a-z]+$/,
                                                        })} />
                                                    {errors.guardianFirstName && <p className="errorMsg">Please enter a valid first name</p>}
                                                </label>
                                                
                                            </section>
                                            <section className="cell large-5">
                                                <label for="guardianLastName">Guardian's Last Name
                                                    <input type="text" className="input-box" name="guardianLastName" id="guardianLastName"
                                                        placeholder="Enter Guardian's Last name"
                                                        {...register("guardianLastName", {
                                                            required: true,
                                                            pattern: /^[A-Z]+|[a-z]+$/,
                                                        })} />
                                                    {errors.guardianLastName && <p className="errorMsg">Please enter a valid last name</p>}
                                                </label>
                                                
                                            </section>

                                            <section className="cell large-6">
                                                <label for="guardianEmailId">Guardian's Email
                                                <input type="text" className="input-box" name="guardianEmailId" id="guardianEmailId"
                                                        placeholder="Enter Guardian's Email Address"
                                                        {...register("guardianEmailId", {
                                                            required: true,
                                                            pattern: /^[a-zA-Z0-9]{2,}[._-]?[a-zA-Z0-9]+[@]{1}[a-zA-Z]{2,}[-]?[a-zA-Z]+[.]{1}[a-zA-Z]{2,}$/,
                                                        })} />
                                                    {errors.guardianEmailId && <p className="errorMsg">Please enter a valid email id</p>}
                                                </label>
                                                
                                            </section>
                                            <section className="cell large-6">
                                                <label for="guardianPhoneNum">Guardian's Phone number
                                                <input type="text" className="input-box" name="guardianPhoneNum" id="guardianPhoneNum"
                                                        placeholder="Enter guardian's Phone number"
                                                        {...register("guardianPhoneNum", {
                                                            required: true,
                                                            pattern: /^[(]?[0-9]{3}[)]?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/,
                                                        })} />
                                                    {errors.guardianPhoneNum && <p className="errorMsg">Please enter a valid Phone number</p>}
                                                </label>
                                                
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
                                                        placeholder="Enter Your Email Address"
                                                        {...register("emailId", {
                                                            required: true,
                                                            pattern: /^[a-zA-Z0-9]{2,}[._-]?[a-zA-Z0-9]+[@]{1}[a-zA-Z]{2,}[-]?[a-zA-Z]+[.]{1}[a-zA-Z]{2,}$/,
                                                        })} />
                                                    {errors.emailId && <p className="errorMsg">Please enter a valid email id</p>}
                                                </label>
                                                
                                            </section>
                                            <section className="cell large-6">
                                                <label for="phoneNum">Phone number
                                                <input type="text" className="input-box" name="phoneNum" id="phoneNum"
                                                        placeholder="Enter your Phone number"
                                                        {...register("phoneNum", {
                                                            required: true,
                                                            pattern: /^[(]?[0-9]{3}[)]?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/,
                                                        })} />
                                                    {errors.phoneNum && <p className="errorMsg">Please enter a valid Phone number</p>}
                                                </label>
                                                
                                            </section>
                                            <section className="cell large-6">
                                                <label for="homeAddress1">Address Line 1
                                                <input type="text" className="input-box" name="homeAddress1" id="homeAddress1"
                                                        placeholder="Enter your Home address"
                                                        {...register("homeAddress1", {
                                                            required: true,
                                                            pattern: /^\d+\w*\s*(?:[\-\/]?\s*)?\d*\s*\d+\/?\s*\d*\s*/
                                                        })} />
                                                    {errors.homeAddress1 && <p className="errorMsg">Please enter your Home address</p>}
                                                </label>
                                                
                                            </section>
                                            <section className="cell large-6">
                                                <label for="homeAddress2">Address Line 2
                                                    <input type="text" className="input-box" name="homeAddress2" id="homeAddress2"
                                                        placeholder="Home address line 2 (optional)"
                                                        {...register("homeAddress2", {
                                                        })} />
                                                </label>
                                                
                                            </section>
                                            <section className="cell large-6">
                                                <label for="city">City
                                                <input type="text" className="input-box" name="city" id="city"
                                                        placeholder="Enter your City name"
                                                        {...register("city", {
                                                            required: true,
                                                            pattern: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
                                                        })} />
                                                    {errors.city && <p className="errorMsg">Please enter a valid city name</p>}
                                                </label>
                                                
                                            </section>
                                            <section className="cell large-6">
                                                <label for="postalCode">ZIP / Postal Code
                                                <input type="text" className="input-box" name="postalCode" id="postalCode"
                                                        placeholder="Enter your City name"
                                                        {...register("postalCode", {
                                                            required: true,
                                                            pattern: /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[ -]?[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/
                                                        })} />
                                                    {errors.postalCode && <p className="errorMsg">Please enter a valid postal code</p>}
                                                </label>
                                                
                                            </section>
                                            <section className="cell large-6">
                                                <label for="province">Province
                                                    <select className="input-box" name="province" id="province" onChange={props.handleChange}>
                                                        <option value="Alberta" selected>AB</option>
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
                                            <section className="cell large-6">
                                                <label for="country">Country
                                                    <input type="text" className="input-box" name="country" id="country" disabled="disabled" value="Canada" />
                                                </label>
                                                
                                                <p className="error-msg" id="postalCodeError">error_here</p>
                                            </section>
                                        </section>

                                        <label for="termsAndConditions">
                                            <input type="checkbox" id="termsAndConditions" name="termsAndConditions"
                                                {...register("termsAndConditions", {
                                                    required: true,
                                                })} /> I accept <Link to="/terms">terms and condition</Link> for the contest.
                                            {errors.termsAndConditions && <p className="errorMsg">Please check our terms and condition</p>}
                                        </label>
                                        

                                        <label for="newsletterSignup">
                                            <input type="checkbox" id="newsletterSignup" name="newsletterSignup" /> Sign me up to receive emails! (optional)
                                        </label>
                                        <br />
                                    </fieldset>
                                </section>
                                <section className="cell large-8">
                                    <section className="grid-x grid-padding-x">
                                        <section className="cell large-12 small-12">
                                            <input type="submit" value="Submit" className="button" id="formSubmit"></input>
                                            <input type="button" value="Cancel" className="button secondary" onClick={goToHome}></input>
                                        </section>
                                    </section>
                                </section>
                            </form>
                        </section>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default withRouter(Form);