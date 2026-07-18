import "./LearningCard.css";

function LearningCard({ course, progress, status }) {

  return (
    <div className="learning-card">

      <h2>{course}</h2>

      <p>
        <strong>Status:</strong> {status}
      </p>

      <div className="progress-bar">

        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>

      </div>

      <p>{progress}% Completed</p>

      <button>Continue Learning</button>

    </div>
  );
}

export default LearningCard;