import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

//Switched to func component to use hooks example
const App = () => {
    
    const [lat, errMsg] = useLocation();

    let content;
    if(errMsg){
        content = <div>Error: {errMsg}</div>;
    }else if (lat){
        content = <SeasonDisplay lat={lat} />;
    }else{
        content = <Spinner message='Please accept location request'/>;
    }

    return <div className="border red">{content}</div>
};

// class App extends React.Component{
//     // we use constructor func when we need some initial setup when the component is first created
//     // constructor(props){
//     //     super(props); //super is a reference to the parent class React.Component constructor. super(props) is mandatory everytime we use constructor in a class based component
    
//     //     //initialize the state object.The only time we do direct assignment to this.state
//     //     this.state = {lat: null, errMsg: ''};
//     // }

//     state = {lat: null, errMsg: ''}; //Alt state init way. init state obj here w/o constructor is not going to make a difference as babel will convert this into constructor based init of state

//     componentDidMount(){
//     }

//     renderContent(){
//         if(this.state.errMsg && !this.state.lat){
//             return <div>Error: {this.state.errMsg}</div>;
//         }
        
//         if(!this.state.errMsg && this.state.lat){
//             return <SeasonDisplay lat={this.state.lat}/>;
//         }

//         return <Spinner message='Please accept location request'/>;
//     }

//     //React says we have to define render!!
//     render(){
//         return(
//             <div className="border red">
//                 {this.renderContent()}
//             </div>
//         );
//     }
// };

ReactDOM.render(<App/>,document.querySelector('#root'));