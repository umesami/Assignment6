import React from "react";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
        .then((res) => res.json())
        .then((json) => {
        setItems(json.data);
        setIsDataLoaded(true);
      });
  }, []);

  // if (!isDataLoaded) {
  //   return (
  //     <div>
  //       <h1> Please chill, data is still loading </h1>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <h1> Fetch data from an API in react </h1>
      {items.map((item) => (
        <ul key={item.uuid}>
          <li>
            User_Name: {item.displayName}
            <br /> Full_Name: {item.description}
            <br /> User_Email: {item.email}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default App;