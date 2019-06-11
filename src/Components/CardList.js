import React from 'react';
import Card from './Card';

// const cardList = props => (
//   props.cards.map((card,index) => ( <div onClick={()=> console.log('check')}><Card key={index} {...card} /></div>)
// )
// export default cardList;


const cardList = props => (
    <div style={{border: '2px solid #353b48',background: '#718093'
    }}>
    
      { props.cards.map((card, index) =>
        <Card key={index} onAdd={props.onAdd} onDelete={props.onDelete} {...card} />

    )}

    </div>
    
);

export default cardList;