import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import './registration.scss'


function Registration(data) {
	const {
		register,
		handleSubmit
	} = useForm()
	// const navigate = useNavigate()
	const registerUser = (data) => {
		axios.post('http://localhost:8080/register', { ...data })
			.then((res) => {
				// navigate('/')
			})
	}
	return (
		<Container>
			<div className='registration'>
				<form onSubmit={handleSubmit(registerUser)}>
					<h1>Lorem Lorem</h1>
					<input required {...register('email')} type='email' placeholder='email' /> <br />
					<input required {...register('login')} type='text' placeholder='login' /> <br />
					<input required {...register('tel')} type='tel' placeholder='phone number' /> <br />
					<input required {...register('password')} type='password' placeholder='password' /> <br />
					<button type='submit'>Submit</button>
				</form>
			</div>
		</Container>
	);
}

export default Registration;
