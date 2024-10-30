import { useState } from "react";
import "./App.css";
import EmailInp from "./components/EmailInp";
import NameInp from "./components/NameInp";
import SendBtn from "./components/SendBtn";
import TextUI from "./components/TextUI";

function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [submit, setsubmit] = useState("");

  const handleSubmit = (prev) => {
    prev.preventDefault(); 
    setsubmit({name,email});
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <NameInp setname={setname}/>
        <EmailInp setemail={setemail} />
        <SendBtn submited={submit}/>
      </form>
      {submit && <TextUI name={submit.name} email={submit.email} />}
    </div>
  );
}

export default App;
