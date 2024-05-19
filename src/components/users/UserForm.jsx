import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
// =========================
import {emptyUser} from '../../constants';
import { createUser, updateUser } from '../../store/slices/usersSlice'; 
// =========================
import './UserForm.css'

function UserForm() {

  const dispatch = useDispatch();

  const users = useSelector((state) => state.usersList.users)

  const {id} = useParams()

  const history = useHistory()

  // console.log(history)

  const currentUser = users.find((user) => user.id === Number(id))

	const [editUser, setEditUser] = useState(
    currentUser ? currentUser : emptyUser
  );


  const onInputChange = (e) => {
    setEditUser({
      ...editUser, [e.target.name]: e.target.value
    })
  }

  const goHome = () => history.go(-1)

  const onReset = (e) => {
    e.preventDefault();
    setEditUser(emptyUser);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    !editUser.id
      ? dispatch(createUser(editUser))
      : dispatch(updateUser(editUser))
  }

	return (
		<form id='users-form' onSubmit={onFormSubmit}>
			<div className='field-container'>
				<label>Name</label>
				<input
					type='text'
					name='name'
					value={editUser.name}
					onChange={onInputChange}
				/>
			</div>
			<fieldset
        id='contact'
        form='users-form'
        className='group-container'
      >
				<legend>Contact</legend>
				<div className='field-container'>
					<label>Email</label>
					<input
						type='email'
						name='email'
						value={editUser.email}
						onChange={onInputChange}
						placeholder='Email'
					/>
				</div>
				<div className='field-container'>
					<label>Phone</label>
					<input
						type='text'
						name='phone'
						value={editUser.phone}
						onChange={onInputChange}
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
					<label>City</label>
					<input
						type='text'
						name='city'
						value={editUser.address.city}
						onChange={onInputChange}
						placeholder='City'
					/>
				</div>
        <div className='field-container'>
					<label>Street</label>
					<input
						type='text'
						name='street'
						value={editUser.address.street}
						onChange={onInputChange}
						placeholder='Street'
					/>
				</div>
        <div className='field-container'>
					<label>Zipcode</label>
					<input
						type='text'
						name='zipcode'
						value={editUser.address.zipcode}
						onChange={onInputChange}
						placeholder='Zipcode'
					/>
				</div>
      </fieldset>
      <div className='btn-group'>
        <button type='submit'>Save</button>
        <button type='button' onClick={onReset}>Reset</button>
        <button type='button' onClick={goHome}>Return</button>
      </div>
		</form>
	);
}

export default UserForm;
