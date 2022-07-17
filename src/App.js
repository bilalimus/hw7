import Comment from './components/Comment';
import './App.css';
import { comment } from './data/data';
import { genID } from './helpers/general';


function App() {
  return (
    <div className='App'>
      {comment.map((element) => {
      return (<Comment 
      key={genID()}
      author={element.author}
      text={element.text}
      date={element.date}/>
      )
    })}
    </div>
  );
}
export default App;
