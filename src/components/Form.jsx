import { useState } from "react";
import image from '../images/log.svg'

const Form = () => {
	const [state, setState] = useState({
		fname: "",
		lname: "",
		message: "",
		carBrand: "",
		isChecked: false,
		gender: "",
		price: "0",
	})

	const handleChange = (e) => {
		const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setState((state) => ({
			...state,
			[e.target.name]: value
		}));
	}

	const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];

	const carBrandOptions = carBrands.map((carBrand, key) => (
		<option value={carBrand} key={key}>{carBrand}</option>
	));

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(state);
	}
	return (
		<div className="container">
			<div className="form">
				<h1>Controlled Form</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="firstName">
						First Name: {" "}
						<input autoFocus type="text" name="fname" value={state.fname} onChange={handleChange} />
					</label>
					<label htmlFor="lastName">
						Last Name: {" "}
						<input autoFocus type="text" name="lname" value={state.lname} onChange={handleChange} />
					</label>
					<label htmlFor="message">
						Your Message: {" "}
						<input autoFocus type="text" name="message" value={state.message} onChange={handleChange} />
					</label>
					<label htmlFor="carBrand">
						Car Brand:
						<select name="carBrand" value={state.carBrand} onChange={handleChange} >
							<option value="" disabled>
								--Pick a car brand--
							</option>
							{carBrandOptions}
						</select>
					</label>
					<label htmlFor="checkbox">
						<input type="checkbox" name="isChecked" checked={state.isChecked} onChange={handleChange} />
						Is Checked?
					</label>
					<label htmlFor="radio">
						<input type="radio" name="gender" value="male" checked={state.gender === 'male'} onChange={handleChange} />
						Male
					</label>
					<label htmlFor="radio">
						<input type="radio" name="gender" value="female" checked={state.gender === 'female'} onChange={handleChange} />
						Female
					</label>
					<label htmlFor="price">
						Price (between 0 and 50):
						<input type="range" name="price" min="0" max="50" value={state.price} onChange={handleChange} />
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
			<div className="form-data">
				<div className="form-content">
					<h1>Name : {state.fname} {state.lname}</h1>
					<h5>Message : {state.message}</h5>
					<h5>Favorite Car Brand : {state.carBrand}</h5>
					<h5>Is it Checked : {state.isChecked ? "Yes" : "No"}</h5>
					<h5>Gender : {state.gender}</h5>
					<h5>Price : {state.price}</h5>
				</div>
				<div className="form-img">
					<img src={image} alt="#" />
				</div>
			</div>
		</div>
	)
}

export default Form