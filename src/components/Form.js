import React, { Component } from 'react';

import Input from './Input';
import axios from './axios-orders';
import Button from './Button';

class Form extends Component {
	state = {
		orderForm: {
			salutation: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'Mr', displayValue: 'Mr' },
						{ value: 'Mrs', displayValue: 'Mrs' },
						{ value: 'Miss', displayValue: 'Miss' },
					]
				},
				value: 'Mr',
				validation: {},
			},
			firstName: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter your First name'
				},
				value: '',
				validation: {
					required: true,
					validationText: "Please enter a valid first name"
				},
				valid: false,
				touched: false,
			},
			lastName: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter your Last name'
				},
				value: '',
				validation: {
					required: true,
					validationText: "Please enter a valid last name"
				},
				valid: false,
				touched: false
			},
			dateOfBirth: {
				elementType: 'input',
				elementConfig: {
					type: 'date',
					placeholder: 'YYYY-MM-DD'
				},
				value: '',
				validation: {
					required: true,
					validationText: "Please enter a valid age"
				},
				valid: false,
				touched: false
			},
			emailId: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Enter email'
				},
				value: '',
				validation: {
					required: true,
					validationText: "Please enter a valid email id"
				},
				valid: false,
				touched: false
			},
			phoneNum: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter phone number'
				},
				value: '',
				validation: {
					required: true,
					validationText: "Please enter a valid phone number",
				},
				valid: false,
				touched: false
			},
			homeAddress1: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter address line 1'
				},
				value: '',
				validation: {
					required: true,
				},
				touched: false
			},
			homeAddress2: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter address line 2 (optional)'
				},
				value: ''
			},
			city: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter city name'
				},
				value: '',
				validation: {
					required: true
				},
				touched: false
			},
			postalCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter ZIP/Postal code'
				},
				value: '',
				validation: {
					required: true,
					validationText: "Please enter a valid postal code",
				},
				valid: false,
				touched: false
			},
			province: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'Alberta', displayValue: 'AB' },
						{ value: 'British Colombia', displayValue: 'BC' },
						{ value: 'Manitoba', displayValue: 'MB' },
						{ value: 'New Brunswick', displayValue: 'NB' },
						{ value: 'Newfoundland and Labrador', displayValue: 'NL' },
						{ value: 'Northwest Territories', displayValue: 'NT' },
						{ value: 'Nova Scotia', displayValue: 'NS' },
						{ value: 'Nonavut', displayValue: 'NU' },
						{ value: 'Ontario', displayValue: 'ON' },
						{ value: 'Prince Edward Island', displayValue: 'PE' },
						{ value: 'Quebec', displayValue: 'QC' },
						{ value: 'Saskatchewan', displayValue: 'SK' },
						{ value: 'Yukon', displayValue: 'YT' },
					]
				},
				value: 'Alberta',
				validation: {},
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					name: 'country',
					placeholder: 'Enter country',
					disabled: 'disabled',
				},
				value: 'Canada',
			},
			termsAndConditions: {
				elementType: 'input',
				elementConfig: {
					type: 'checkbox',
				},
				// validation: {
				// 	required: true,
				// 	validationText: "Please check our rules and regulations",
				// },
				// touched: false
			},
			newsletterSignup: {
				elementType: 'input',
				elementConfig: {
					type: 'checkbox',
				}
			},
		},
		formIsValid: false
	}


	orderHandler = (e) => {
		e.preventDefault();
		this.setState({ loading: true });
		const formData = {};
		for (let formElementIdentifier in this.state.orderForm) {
			formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
		}
		const requestData = {
			orderData: formData
		}
		axios.post('/form.json', requestData)
			.then(response => {
				this.props.history.push('/');
			})
			.catch((err) => { console.log(err); });
	}

	checkValidity(value, rules) {

		let isValid = true;
		if (!rules) {
			return true;
		}

		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid
		}

		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid
		}

		if (rules.isEmail) {
			const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			isValid = pattern.test(value) && isValid
		}

		if (rules.isNumeric) {
			const pattern = /^\d+$/;
			isValid = pattern.test(value) && isValid
		}

		// 	if (firstName && lastName) {
		// 		const pattern = /^[A-Z]+|[a-z]+$/;
		// 		isValid = pattern.test(value) && isValid
		// 	}

		// 	if (emailId) {
		// 		const pattern = /^[a-zA-Z0-9]{2,}[._-]?[a-zA-Z0-9]+[@]{1}[a-zA-Z]{2,}[-]?[a-zA-Z]+[.]{1}[a-zA-Z]{2,}$/;
		// 		isValid = pattern.test(value) && isValid;
		// 	}

		// 	if (emailId) {
		// 		const pattern = /^[a-zA-Z0-9]{2,}[._-]?[a-zA-Z0-9]+[@]{1}[a-zA-Z]{2,}[-]?[a-zA-Z]+[.]{1}[a-zA-Z]{2,}$/;
		// 		isValid = pattern.test(value) && isValid;
		// 	}

		// 	if (phoneNum) {
		// 		const pattern = /^[(]?[0-9]{3}[)]?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;
		// 		isValid = pattern.test(value) && isValid;
		// 	}

		// 	return isValid;
		// }

		return isValid;
	}

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...this.state.orderForm
		};
		const updatedFormElement = {
			...updatedOrderForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedOrderForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedOrderForm) {
			formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
	}

	render() {
		const formElementsArray = [];
		for (let key in this.state.orderForm) {
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}

		let form = (
			<form onSubmit={this.orderHandler}>
				{formElementsArray.map(formElement => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						invalid={!formElement.config.valid}
						shouldValidate={formElement.config.validation}
						touched={formElement.config.touched}
						changed={(event) => this.inputChangedHandler(event, formElement.id)} />
				))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>SUBMIT</Button>

			</form>
		);

		return (
			<div>
				<h4>Enter your Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default Form;