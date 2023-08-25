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
    <article style={{ background: newPost ? "#f7fafd" : "transparant" }}>
      <img src={avatar} alt={user} className="avatar" />
      <div className="info-wrapper">
        <div className="actions-row">
          <p className="username">{user}</p>
          <p className="activity">{activity}</p>
          {referalPost != "" ? (
            <p className="referal-post">{referalPost}</p>
          ) : null}
          {referalGroup != "" ? (
            <p className="referal-group">{referalGroup}</p>
          ) : null}
        </div>
        <p className="time-stamp">{timestamp}</p>
      </div>
    </article>
  );
};

export default Notification;
