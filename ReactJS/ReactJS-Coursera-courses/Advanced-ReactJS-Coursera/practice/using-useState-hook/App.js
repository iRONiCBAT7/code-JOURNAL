

import React from 'react';


function GoalsForm(props){
	const [formData, setFormData] = React.useState({goal:"", by:""});

	function changeHandler(e){
		setFormData({...formData, [e.target.name]: e.target.value});

	}

	function submitHandler(e){
		e.preventDefault();
		props.onAdd(formData);
		setFormData({goal: "", by: ""})
	}

	return(

		<> 
		<h1>My Little Lemon Goals</h1>
		<form onSubmit={submitHandler}>
		<input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}/>
		<input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler}/>
		<button>Submit Goal</button>
		</form>
		</>
		)
} 



function GoalsFormList(props){

	return(
<ul>
	{props.allGoals.map((g) => (
	<li key = {g.goal}>
	<span> My Goal is to {g.goal}, by {g.by}</span>
	</li>
	))}
</ul>
	
	)
} 


export default function App(){
	const [allGoals, updateAllGoals] = React.useState([]);

	function addGoals(goal){
		updateAllGoals([...allGoals, goal]);
	}

	return (
		<>
		<GoalsForm onAdd={addGoals} />
		<GoalsFormList allGoals={allGoals} />
		</>
		)
}



