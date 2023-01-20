import React from "react";

function App() {
  const [details, setDetails] = React.useState({
    fname: "",
    lname: "",
    email: "",
  });

  function updateDetails(event) {
    const detail = event.target.value;
    const inputName = event.target.name;
    setDetails((prevValue) => {
      if (inputName === "fName") {
        return {
          fname: detail,
          lname: prevValue.lname,
          email: prevValue.email,
        };
      } else if (inputName === "lName") {
        return {
          fname: prevValue.fname,
          lname: detail,
          email: prevValue.email,
        };
      } else {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: detail,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {details.fname} {details.lname}
      </h1>
      <p>{details.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={updateDetails} />
        <input name="lName" placeholder="Last Name" onChange={updateDetails} />
        <input name="email" placeholder="Email ID" onChange={updateDetails} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
