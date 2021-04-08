import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

export const Form = (children, ...props) => {
	const { register, handleSubmit } = useForm();
	const history = useHistory();

	const onSubmit = (data) => { 
		console.log(data)
		history.push("/thanks");
	};

	const [startDate, setStartDate] = useState();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="firstName">First Name
				<input type="text" name="firstName" className="input-box" id="firstName" placeholder="Enter your First name"
					{...register("firstName", { required: true, pattern: /^[A-Z]+|[a-z]+$/, })}
				/>
			</label>

			<label htmlFor="lastName">Last Name
				<input type="text" name="lastName" className="input-box" id="lastName" placeholder="Enter your Last name"
					{...register("lastName", { required: true, pattern: /^[A-Z]+|[a-z]+$/, })}
				/>
			</label>

			<label htmlFor="dateOfBirth">Date of Birth</label>
				<DatePicker name="dateOfBirth"
					selected={startDate}
					onChange={date => setStartDate(date)}
					maxDate={addDays(new Date(), -5844)}
					dateFormat="yyyy/MM/dd"
					placeholderText="YYYY/MM/DD"
					isClearable
					showYearDropdown
					showMonthDropdown
					scrollableMonthYearDropdown
					dropdownMode="select"
				/>



			<input type="submit" />
		</form>
	);
}

export default Form;