const Header = ({ markAll, counter }) => {
  return (
    <header>
      <section className="title">
        <h1>notifications</h1>
        <div className="display-new">{counter}</div>
      </section>
      <button onClick={markAll} className="text-btn" type="button">
        Mark all as read
      </button>
    </header>
  );
};

export default Header;
