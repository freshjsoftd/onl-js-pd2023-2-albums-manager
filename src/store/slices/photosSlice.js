import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';
import { setError, setStatus } from '../../services/reducer-service';

const SLICE_NAME = 'photos';

const initialState = {
	photos: [],
	status: null,
	error: null,
};

export const getAlbumPhotos = createAsyncThunk(
	`${SLICE_NAME}/getAlbumPhotos`,
	async function (id, { rejectWithValue }) {
		try {
			const { status, data } = await api.get(
				`/${SLICE_NAME}?albumId=${id}`
			);
			if (status >= 400) {
				throw new Error(`Error is ${status}`);
			}
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const photosSlice = createSlice({
	name: SLICE_NAME,
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getAlbumPhotos.fulfilled, (state, { payload }) => {
			state.photos = payload;
			state.status = 'fulfilled';
			state.error = null;
		});
		builder.addCase(getAlbumPhotos.rejected, setError);
		builder.addCase(getAlbumPhotos.pending, setStatus);
	},
});


export default photosSlice.reducer;