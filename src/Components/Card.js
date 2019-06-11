import React,{Component} from 'react';
import {connect} from 'react-redux';

class Card extends Component {


  // datahandler=()=>{
  //   console.log('hello');
  // }
  state={
    completed: true
  }
 
  render(){

  //  let button = null;
  //   if(!this.props.autoCompleted){
  //    button= <button onClick={this.props.onAdd} >LIKE</button>
  //  }else{
  //    button= <button onClick={() =>this.props.onDelete(this.props.id)}>UNLIKE</button>
  //  }

  
   
  
    return (
        <div>
                  <div 
              style={{ margin: '1em',
              padding: '1em',
              backgroundColor: '#282c34 ',
              color: ' #718093',
              border: '2px solid #353b48',
              borderRadius: '20%'}}
            
            >
              <img alt="avatar" style={{ width: '70px', borderRadius: '70px'}} src={this.props.avatar_url} />
                    <div>
                          <div style={{ fontWeight: 'bold' }}>Username: {this.props.login}</div>
                          <div>Followers:{this.props.followers} Following:{this.props.following} Repos:{this.props.public_repos}</div> 
                          <div>URL: {this.props.html_url}</div> 
                     {/* {button} */}
                     { !this.props.autoComplete ? <button onClick={this.props.onAdd} >LIKE</button> : <button onClick={() =>this.props.onDelete(this.props.id)}>UNLIKE</button>}
                    </div>
              
                    </div>
        </div>
    );
    }

};
const mapStateToProps = state =>{
  return{
      autoComplete: state.addCardReducer.autoComplete
  }
};



export default connect(mapStateToProps)(Card);
