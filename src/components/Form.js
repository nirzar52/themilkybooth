import React, { Component } from 'react';

import Input from './Input';

class Form extends Component {
	state = {
		orderForm: {
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
			phoneNum: {
				elementType: 'input',
				elementConfig: {
					type: 'date',
					placeholder: 'YYYY-MM-DD'
				},
				value: ''
			},
			
			country: 'Germany',
			email: 'test@test.com',
			deliveryMethod: 'fastest'
		}
	}

	orderHandler = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
		}
	}

	render() {
		let form = (
			<form>
				<section class="cell large-2">
					<label for="salutation">Prefix
                    <select name="salutation" id="salutation">
							<option value="Mr">Mr</option>
							<option value="Mrs">Mrs</option>
							<option value="Miss">Miss</option>
						</select>
					</label>
				</section>t
				<Input inputtype="input" type="text" name="firstName" placeholder="Ener your First name" />
				<Input inputtype="input" type="text" name="lastName" placeholder="Enter your Last name" />
				<Input inputtype="input" type="date" name="dateOfBirth" placeholder="YYYY-MM-DD" />
				<Input inputtype="input" type="email" name="email" placeholder="Your Mail" />
				<Input inputtype="input" type="text" name="street" placeholder="Street" />
				<Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
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