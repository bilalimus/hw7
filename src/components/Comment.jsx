import { dateFormat } from "../helpers/general";
import UserInfo from "./UserInfo";

const Comment = (props) => {
    
    return (
    <div className="Comment">
        <UserInfo author={props.author}/>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{dateFormat(props.date)}</div>
     </div>
    )
}

export default Comment;