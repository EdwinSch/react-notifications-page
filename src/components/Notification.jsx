const Notification = ({
  newPost,
  user,
  avatar,
  activity,
  referalPost,
  referalGroup,
  privateMsg,
  privateText,
  timestamp,
}) => {
  return (
    <article>
      <img src={avatar} alt={user} />
      <p>{user}</p>
    </article>
  );
};

export default Notification;
