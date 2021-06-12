import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 style={{color:'red'}}>01.Static Data Passing</h1>
				{/*====>>Component Call [Start]*/}
					<Nayoks name="Jasim"></Nayoks>
					<Nayoks name="Sakib Khan"></Nayoks>
					<Nayoks name="BappaRaz"></Nayoks>
					<Nayoks></Nayoks>
					<Nayoks></Nayoks>
				{/*====>>Component Call [End]*/}
			</header>
		</div>
	);
}
//========>>Create Component [Start]
function Nayoks(props){
	const nayokStyle ={
		border: '2px solid purple',
		margin: '20px',
		borderRadius: '7px'
	}
	return (
		<div style={nayokStyle}>
			<h1>Ami Nayok: {props.name} </h1>
			<h3>I have done 5 movies: </h3>
		</div>
	)
}
//========>>Create Component [End]
export default App;
