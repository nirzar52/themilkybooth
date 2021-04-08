import React, { Component } from 'react';

import Input from './Input';

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
				value: ''
			},
			firstName: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter your First name'
				},
				value: ''
			},
			lastName: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter your Last name'
				},
				value: ''
			},
			dateOfBirth: {
				elementType: 'input',
				elementConfig: {
					type: 'date',
					placeholder: 'YYYY-MM-DD'
				},
				value: ''
			},
			emailId: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Enter email'
				},
				value: ''
			},
			phoneNum: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter phone number'
				},
				value: ''
			},
			homeAddress1: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter address line 1'
				},
				value: ''
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
				value: ''
			},
			postalCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter ZIP/Postal code'
				},
				value: ''
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
			},
			newsletterSignup: {
				elementType: 'input',
				elementConfig: {
					type: 'checkbox',
				},
			},


			country: 'Germany',
			email: 'test@test.com',
			deliveryMethod: 'fastest'
		}
	}

	orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
    }

	render() {
		const formElementsArray = [];
		for (let key in this.state.orderForm) {
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
			})
		}

		let form = (
			<form>
				{formElementsArray.map(formElement => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
					/>
				))}
				<button className="button" id="formSubmit" clicked={this.orderHandler}>ORDER</button>
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