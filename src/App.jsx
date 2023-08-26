import notifications from "./data";

import Header from "./components/Header";
import NotificationsList from "./components/NotificationsList";
import { useState } from "react";

function App() {
  const [data, setData] = useState(notifications);

  // Mark single notification as read
  const markRead = (id) => {
    const newItems = data.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, newPost: false };
        return newItem;
      }
      return item;
    });
    setData(newItems);
  };

  // Mark aLL notifications as read
  const markAll = () => {
    const newItems = data.map((item) => {
      const newItem = { ...item, newPost: false };
      return newItem;
    });
    setData(newItems);
  };

  // RENDER app
  return (
    <main>
      <Header data={data} markAll={markAll} />
      <NotificationsList data={data} markRead={markRead} />
    </main>
  );
}

export default App;
