import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <form
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="HiddenForm" value="contact v1" />
        <label htmlFor="name" name="name">
          Name
        </label>

        <input type="text" name="name" />
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
