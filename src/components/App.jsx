import React from "react";

function App() {
  const [fname, setFname] = React.useState();
  const [lname, setLname] = React.useState();

  function changeFname(event) {
    const firstName = event.target.value;
    setFname(firstName);
  }
  function changeLname(event) {
    const lastName = event.target.value;
    setLname(lastName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={changeFname} />
        <input name="lName" placeholder="Last Name" onChange={changeLname} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
