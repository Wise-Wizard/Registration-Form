import React from "react";

function App() {
  const [email, setEmail] = React.useState("");
  const [fullName, setFullName] = React.useState({ fname: "", lname: "" });

  function updateName(event) {
    const name = event.target.value;
    const inputName = event.target.name;
    setFullName((prevValue) => {
      if (inputName === "fName") {
        return { fname: name, lname: prevValue.lname };
      } else {
        return { fname: prevValue.fname, lname: name };
      }
    });
  }

  function updateEmail(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <p>{email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={updateName} />
        <input name="lName" placeholder="Last Name" onChange={updateName} />
        <input name="email" placeholder="Email ID" onChange={updateEmail} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
