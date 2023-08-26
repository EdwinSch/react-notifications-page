import Notification from "./Notification";

const NotificationsList = ({ data, markRead }) => {
  return (
    <section className="list-container">
      {data.map((item) => {
        return <Notification key={item.id} {...item} markRead={markRead} />;
      })}
    </section>
  );
};

export default NotificationsList;
