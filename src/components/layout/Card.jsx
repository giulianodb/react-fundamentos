import "./Card.css"

function Card (props) {
    
    const cardStyle = {
        backgroundColor: props.color || 'red',
        borderColor: props.color || '#F00'
    }


    return(

        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
    
}

export default Card ;