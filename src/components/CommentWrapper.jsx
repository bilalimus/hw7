import { dateFormat } from "../helpers/general";
import './CommentWrapper.css'

const CommentWrapper = (props) => {
  return (
    <div className="comment-wrapper">
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{dateFormat(props.date)}</div>
    </div>
  );
};

export default CommentWrapper;
