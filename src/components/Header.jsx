const Header = ({ markAll }) => {
  return (
    <header>
      <section className="title">
        <h1>notifications</h1>
        <div className="display-new">3</div>
      </section>
      <button onClick={markAll} className="text-btn" type="button">
        Mark all as read
      </button>
    </header>
  );
};

export default Header;
