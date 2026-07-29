import React, { useState } from "react";
import Profile from "./Profile";
import Contact from "./Contact";
import Review from "./Review";

function MainTab() {
  const [index, setIndex] = useState(0);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    isAgree: false,
    address: "",
    gender: "",
  });
  const { name, email, age, phone, isAgree, address, gender } = data;
  const tabConfig = [
    {
      name: "Profile",
      component: Profile,
      validation: () => {
        if (name.trim() === "" || age.trim() === "" || gender.trim() === "") {
          setError("Fill the inputs");
          return false;
        }
        if (age < 18) {
          setError("Age is below 18");
          return false;
        }
        if (gender.length < 4) {
          setError("Gender not valid");
          return false;
        }
        return true;
      },
    },
    {
      name: "Contact",
      component: Contact,
    },
    {
      name: "Review",
      component: Review,
    },
  ];

  const CurrentTab = tabConfig[index].component;
  const selectTab = (id) => {
    setIndex(id);
  };
  //    console.log(data)
  const nextTab = () => {
    const isValid = tabConfig[index].validation();
    console.log(isValid);
    if (!isValid) {
      return;
    }
    setIndex((prev) => prev + 1);
  };
  const prevTab = () => {
    setIndex((prev) => prev - 1);
  };
  return (
    <div>
      <div style={{ display: "flex", gap: "5px", padding: "4rem" }}>
        {tabConfig.map((tab, index) => (
          <div
            onClick={() => selectTab(index)}
            style={{
              border: "1px solid black",
              padding: "4px",
              cursor: "pointer",
            }}
            key={index}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div style={{ border: "1px solid red", height: "300px" }}>
        <CurrentTab data={data} setData={setData} error={error} />
      </div>
      <div>
        <button onClick={prevTab} disabled={index === 0}>
          Previous
        </button>
        <button onClick={nextTab} disabled={index === tabConfig.length - 1}>
          Next
        </button>
        {index === tabConfig.length - 1 && <button>Submit</button>}
      </div>
    </div>
  );
}

export default MainTab;
