import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import {createTheme} from '@mui/material';
// =============================
import App from './App.jsx';
import store from './store';
// =============================
import './index.css';

const theme = createTheme({
	palette: {
		primary: {
			main: '#20B2AA',
			light: '#40E0D0',
			dark: '#008080'
		}
	},
	typography: {
		fontSize: 30
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
