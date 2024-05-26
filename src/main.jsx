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
			main: '#D10808',
			light: '#D6C8E1',
			dark: '#82A2B5'
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
