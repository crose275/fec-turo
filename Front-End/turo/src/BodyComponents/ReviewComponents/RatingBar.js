const RatingBar = ({ rating }) => {
    const filledWidth = rating * 20; // assuming 8px per rating point
  
    return (

            <div className="col-md-8 align-self-center" style={{height: '8px', backgroundColor: '#ddd' }}>
                <div style={{ width: `${filledWidth}%`, height: '8px', backgroundColor: '#593CFB', borderRadius: '8px' }} />
 
        </div>
        );
  };
  
  export default RatingBar;
