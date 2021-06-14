
function DetailCard(props) {
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'3rem',fontSize:'2rem'}}>
            <div> Name : {props.item.name}</div>
            <div> Surname : {props.item.surname}</div>
            <div> Age : {props.item.age}</div>
            <div> Email : {props.item.email}</div>
        </div>
    );
}

export default DetailCard;