import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';
import { setError, setStatus } from '../../services/reducer-service';

const SLICE_NAME = 'users';

const initialState = {
	users: [],
	status: null,
	error: null,
};