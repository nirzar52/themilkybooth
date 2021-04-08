import { React, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

export default function App() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

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

			<label htmlFor="dateOfBirth">Date of Birth
				<DatePicker
					selected={startDate}
					onChange={date => setStartDate(date)}
					minDate={new Date("04-01-2021")}
					maxDate={new Date("04-29-2021")}
					dateFormat="MM/dd/yyyy"
					placeholderText="MM/DD/YYYY"
				/>
			</label>

			<input type="number" {...register("age", { min: 18, max: 99 })} />
			<input type="submit" />
		</form>
	);
}