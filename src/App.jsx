import notifications from "./data";

import Header from "./components/Header";
import NotificationsList from "./components/NotificationsList";
import { useState } from "react";

function App() {
  const [data, setData] = useState(notifications);

  // Mark unread as read
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

  // RENDER app
  return (
    <main>
      <Header data={data} />
      <NotificationsList data={data} markRead={markRead} />
    </main>
  );
}

export default App;
