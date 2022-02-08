import "./App.css";
import { useState } from "react";
import RegistrationForm from "./comp/RegistrationForm";
import TableData from "./comp/TableData";
function App() {
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  return (
    <div className="App">
      <RegistrationForm
        data={data}
        setData={setData}
        errors={errors}
        setErrors={setErrors}
      />
      <TableData />
    </div>
  );
}

export default App;
