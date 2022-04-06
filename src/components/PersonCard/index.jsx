import "./styles.css"

const PersonCard = ({name, age}) => {
    return (
        <div className="UserCard">
       
                <p className="name">
                    Olá {name}
                </p>
                <p className="idade"> Sua idade é {age} anos. </p>
           
        </div>
    )
}
export default PersonCard;