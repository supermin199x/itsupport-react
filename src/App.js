import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { Error404 } from './pages/Error404';
import { ListCctv } from './pages/ListCctv';
import { ListComputer } from './pages/ListComputer';
import { ListJob } from './pages/ListJob';
import { ListManual } from './pages/ListManual';
import { ListNetwork } from './pages/ListNetwork';
import { ListPrinter } from './pages/ListPrinter';
import { ListSpare } from './pages/ListSpare';
import { ListUps } from './pages/ListUps';
import { ReportJob } from './pages/ReportJob';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LoginForm />} />
					<Route index path='/itsupport-react' element={<LoginForm />} />
					<Route path='*' element={<Error404 />} />
					<Route path='listcctv' element={<ListCctv />} />
					<Route path='listComputer' element={<ListComputer />} />
					<Route path='listJob' element={<ListJob />} />
					<Route path='listManual' element={<ListManual />} />
					<Route path='listNetwork' element={<ListNetwork />} />
					<Route path='listPrinter' element={<ListPrinter />} />
					<Route path='listSpare' element={<ListSpare />} />
					<Route path='listUps' element={<ListUps />} />
					<Route path='reportJob' element={<ReportJob />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;