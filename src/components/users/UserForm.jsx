// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
// =========================
import { emptyUser } from '../../constants';
import { createUser, updateUser } from '../../store/slices/usersSlice';
// =========================
import './UserForm.css';

// const names = ['John', 'Jane', 'Peter', 'Harry'];

function UserForm() {
	const dispatch = useDispatch();

	const users = useSelector((state) => state.usersList.users);

	const { id } = useParams();

	const navigate = useNavigate();

	// console.log(history)

	const currentUser = users.find((user) => user.id === Number(id));

	// 	const [editUser, setEditUser] = useState(
	//     currentUser ? currentUser : emptyUser
	//   );

	//   const onInputChange = (e) => {
	//     setEditUser({
	//       ...editUser, [e.target.name]: e.target.value
	//     })
	//   }

	const goHome = () => navigate(-1);

	//   const onReset = (e) => {
	//     e.preventDefault();
	//     setEditUser(emptyUser);
	//   }

	const schema = Yup.object().shape({
		address: Yup.object().shape({
			city: Yup.string().required('City is required field'),
			street: Yup.string().required('Street is required field'),
		}),
		name: Yup.string()
			.min(3, 'Too less symbols')
			.max(20, 'Too many symbols')
			.required('Name is required field'),
		email: Yup.string().email().required('Email is required field'),
	});

	const onFormSubmit = (values) => {
		!values.id
			? dispatch(createUser(values))
			: dispatch(updateUser(values));
	};

	const renderForm = ({ isValid }) => {
		return (
			<Form id='users-form' /* onSubmit={onFormSubmit} */>
				<div className='field-container'>
					<label htmlFor='name'>Name</label>
					<Field
						type='text'
						name='name'
						id='name'
						// value={editUser.name}
						// onChange={onInputChange}
					/>
				</div>
				<ErrorMessage name='name'>
					{(msg) => <div className='error'>{msg}</div>}
				</ErrorMessage>
				{/* <Field 
					as='select'
					name='name'
					// multiple
				>
					{names.map((name) => {
						return (
							<option key={name} value={name}>
								{name}
							</option>
						)
					})}
				</Field> */}
				<fieldset
					id='contact'
					form='users-form'
					className='group-container'
				>
					<legend>Contact</legend>
					<div className='field-container'>
						<label htmlFor='email'>Email</label>
						<Field
							type='email'
							name='email'
							id='email'
							// value={editUser.email}
							// onChange={onInputChange}
							placeholder='Email'
						/>
					</div>
					<ErrorMessage name='email'>
						{(msg) => <div className='error'>{msg}</div>}
					</ErrorMessage>
					<div className='field-container'>
						<label htmlFor='phone'>Phone</label>
						<Field
							type='text'
							name='phone'
							id='phone'
							// value={editUser.phone}
							// onChange={onInputChange}
							placeholder='Phone'
						/>
					</div>
				</fieldset>
				<fieldset
					id='contact'
					form='users-form'
					className='group-container'
				>
					<div className='field-container'>
						<label htmlFor='city'>City</label>
						<Field
							type='text'
							name='address.city'
							id='city'
							// value={editUser.address.city}
							// onChange={onInputChange}
							placeholder='City'
						/>
					</div>
					<div className='field-container'>
						<label htmlFor='street'>Street</label>
						<Field
							type='text'
							name='address.street'
							id='street'
							// value={editUser.address.street}
							// onChange={onInputChange}
							placeholder='Street'
						/>
					</div>
					<div className='field-container'>
						<label htmlFor='zipcode'>Zipcode</label>
						<Field
							type='text'
							name='address.zipcode'
							id='zipcode'
							// value={editUser.address.zipcode}
							// onChange={onInputChange}
							placeholder='Zipcode'
						/>
					</div>
				</fieldset>
				<div className='btn-group'>
					<button type='submit' disabled={!isValid}>
						Save
					</button>
					<button type='reset' >Reset</button>
					<button type='button' onClick={goHome}>Return</button>
				</div>
			</Form>
		);
	};

	return (
		<Formik
			initialValues={currentUser ? currentUser : emptyUser}
			onSubmit={onFormSubmit}
			validationSchema={schema}
		>
			{renderForm}
		</Formik>
	);
}

export default UserForm;
