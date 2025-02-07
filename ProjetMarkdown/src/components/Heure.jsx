import React,{Component} from 'react';

class Heur extends Component {
    state = {
        date: new  Date()
    };

    callMe(){
        setInterval(()=>{
            this.setState({ date: new Date() });
        },1000);
    }
    render(){
        return(
         <div className="App">
            <h1>Heure Actuelle</h1>
            <h2>Il est  {this.state.date.toLocaleTimeString()}</h2>
            {this.callMe()}
         </div>
        );
    }
}

export default Heur;