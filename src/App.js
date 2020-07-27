import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import { GlobalProvider } from './variables/GlobalState';

function App() {
	return (
		<GlobalProvider>
			<div className="App">
				<Dashboard />
			</div>
		</GlobalProvider>
	);
}

export default App;
