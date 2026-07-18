import LearningCard from "../components/LearningCard/LearningCard";
import { learningData } from "../data/dummyData";
import "./Learning.css";

function Learning() {
  return (
    <div className="learning-page">

      <h1>Learning Tracker</h1>

      <div className="learning-container">
        {learningData.map((item) => (
          <LearningCard
            key={item.id}
            course={item.course}
            progress={item.progress}
            status={item.status}
          />
        ))}
      </div>

    </div>
  );
}

export default Learning;