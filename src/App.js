import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Aside />
			<Content />
			<Footer />
		</div>
	);
};

export default App;
