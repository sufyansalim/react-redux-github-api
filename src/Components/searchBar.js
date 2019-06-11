import React from 'react';

const searchBar = props => (
    <div>
      <form onSubmit={props.onSubmit}>
        <input 
                id="username"
                type ="username"
                placeholder="Enter The Username"
                value={props.search}
                onChange={props.onChange} />
                
        <input type="submit" value="Submit"  style={{fontWeight: 'bold', color: '#353b48', backgroundColor:'white'}}/>
      </form>
    </div>
  );

  export default searchBar;