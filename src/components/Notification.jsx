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
          {/* Ref post */}
          {referalPost != "" && <p className="referal-post">{referalPost}</p>}
          {/* Ref group */}
          {referalGroup != "" && (
            <p className="referal-group">{referalGroup}</p>
          )}
          {/* alert dot */}
          {newPost && <div className="alert-dot"></div>}
        </div>
        {/* timestamp */}
        <p className="time-stamp">{timestamp}</p>
        {/* private message */}
        {privateMsg && <p className="private-msg-wrapper">{privateText}</p>}
      </div>
    </article>
  );
};

export default Notification;
