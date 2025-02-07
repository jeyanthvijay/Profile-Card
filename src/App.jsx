import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="background-design">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
      </div>
      <div className="container">
        <div className="card">
          {/* Image Section */}
          <img src={user.picture.large} alt="User" className="avatar" />

          {/* Text Details Section */}
          <div className="details">
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
            <p>
              <strong>Contact:</strong> {user.phone}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
