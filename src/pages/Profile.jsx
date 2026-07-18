import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-card">

        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="profile-image"
        />

        <h2>Kajal Kumari</h2>

        <p className="role">Frontend React Developer</p>

        <div className="profile-info">

          <div className="info">
            <h3>Email</h3>
            <p>kajal@example.com</p>
          </div>

          <div className="info">
            <h3>Skills</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="info">
            <h3>Saved Jobs</h3>
            <p>12 Jobs</p>
          </div>

          <div className="info">
            <h3>Completed Courses</h3>
            <p>8 Courses</p>
          </div>

        </div>

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;