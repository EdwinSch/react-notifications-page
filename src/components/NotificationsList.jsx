import Notification from "./Notification";

const NotificationsList = ({ data }) => {
  return (
    <section className="list-container">
      {data.map((item) => {
        return <Notification key={item.id} {...item} />;
      })}
    </section>
  );
};

export default NotificationsList;
