import React,{Component} from 'react';


import * as action from '../Store/index';
import {connect} from 'react-redux';
import SearchBar from '../Components/searchBar';
import CardList from '../Components/CardList';
import Card from '../Components/Card';
import Spinner  from '../Components/Spinner/Spinner';

import axios from 'axios';

class Home extends Component {
    
    state={
        search:'',
        loading: true,
        data:[],
        // autoComplete: false
       
    }

    onFormChange = event => {
      
        this.setState({search: event.target.value});
        console.log(this.state.search);
        
    }

    deleteHandler = (id) =>{
        console.log(id);
        // const dataDisplay = [...this.props.dataDisplay];
        // dataDisplay.splice(id,1);
        // //this.setState({dataDisplay: dataDisplay});
        this.props.userCardRemove(id);
       
    }
    addHandler=()=>{
        this.props.userCardAdd(this.state.data);
       
        this.setState({autoComplete: !this.state.autoComplete});
       // console.log(this.state.autoComplete);
    }

    handleSubmit=event=>{
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.search}`)
        .then(response =>{
            console.log(response.data);
             this.setState({data: response.data, loading: false})
            //this.props.userCardAdd(response.data)

        });
    }

    render(){

       
    //     const data = this.props.dataDisplay.map(item=>{
    //         return<Card 
    //         key={item.id}
    //         avatar_url={item.avatar_url}
    //         login={item.login}
    //         html_url={item.html_url}
    //     /> 
    //    });
    //    let spinner = null;
    // if(this.state.loading){
    //      spinner = <Spinner/>;
    // }

    return (
        <div>
            <h1>Git-Search</h1>
            <SearchBar 
                value={this.state.search}
                onChange={this.onFormChange}
                onSubmit={this.handleSubmit} 
            />

            {this.state.loading ? <Spinner/> :<Card
                                                // key={item.id}
                                                avatar_url={this.state.data.avatar_url}
                                                followers={this.state.data.followers}
                                                following={this.state.data.following}
                                                public_repos={this.state.data.public_repos}
                                                login={this.state.data.login}
                                                html_url={this.state.data.html_url}
                                                onAdd={this.addHandler}
                                                isautoComplete={this.state.autoComplete}
                                                
            /> }

               
            <CardList 
                cards={this.props.dataDisplay}
                onDelete={this.deleteHandler}
                // isautoComplete={this.state.autoComplete}
                
            />
        </div>
    )

   

    //       {spinner}
    //         <CardList
    //             cards={this.props.dataDisplay}
    //             onDelete={() => console.log('check')}
    //         />
    //                 {/* {this.props.dataDisplay.length && 
    //                     <Card showCard
    //                         // key={item.id}
    //                         avatar_url={this.props.dataDisplay[0].avatar_url}
    //                         login={this.props.dataDisplay[0].login}
    //                         html_url={this.props.dataDisplay[0].html_url}
    //                     /> 
    //                 }     */}
    //     </div>
    
    // );
    }
};

const mapStateToProps = state =>{
    return{
        dataDisplay: state.addCardReducer.dataDisplay || []
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        userCardAdd: (dataDisplay) => dispatch(action.addUserCard(dataDisplay)),
        userCardRemove: (id) => dispatch(action.removeUserCard(id))
    }
};



export default connect(mapStateToProps,mapDispatchToProps)(Home);

