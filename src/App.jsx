import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
	return (
		<Layout>
			<Outlet />
			<SpeedInsights />
		</Layout>
	);
}

export default App;
