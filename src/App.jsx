import notifications from "./data";

import Header from "./components/Header";
import NotificationsList from "./components/NotificationsList";
import { useState } from "react";

function App() {
  const [data, setData] = useState(notifications);

  return (
    <main>
      <Header data={data} />
      <NotificationsList data={data} />
    </main>
  );
}

export default App;
