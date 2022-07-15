import UserInfo from "./UserInfo";

const props = (props) => {
    return (
    <div className="Comment">
        <UserInfo author={props.author}/>
     <div className="Comment-text">{props.text}</div>
     <div className="Comment-date">{props.date.toISOString()}</div>
     </div>
    )
}

export default props;