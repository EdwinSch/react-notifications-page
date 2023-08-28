import notifications from "./data";

import Header from "./components/Header";
import NotificationsList from "./components/NotificationsList";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(notifications);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    countNewItems();
  }, []);

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
    countNewItems();
  };

  // Mark ALL notifications as read
  const markAll = () => {
    const newItems = data.map((item) => {
      const newItem = { ...item, newPost: false };
      return newItem;
    });
    setData(newItems);
    countNewItems();
  };

  // Count unread notifications
  const countNewItems = () => {
    const unread = data.filter((items) => {
      return items.newPost === true;
    });
    setCounter(unread.length);
  };

  // RENDER app
  return (
    <main>
      <Header markAll={markAll} counter={counter} />
      <NotificationsList data={data} markRead={markRead} />
    </main>
  );
}

export default App;
