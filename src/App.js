import logo from './logo.svg';
import './App.css';
import CounterView from './Features/Counter/CounterView';
import PostsViewer from './Features/Posts/PostsViewer';


function App() {
  return (
    <div className="App">
     <h2>hello world!</h2>
     <CounterView/>
     <PostsViewer/>
    </div>
  );
}

export default App;
