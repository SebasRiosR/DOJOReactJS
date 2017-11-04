import React, { Component } from 'react';
class Resultado extends Component {
	resultado = {};
	constructor(props){
		super(props);
		this.resultado = props.resultado;
	}

	render(){
		return
		<div className = "Item">
			<div className = "Título">{this.resultado.tittle}</div>
		</div>
	}
}
