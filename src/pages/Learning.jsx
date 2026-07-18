import { useState } from "react";
import "./Learning.css";
import LearningCard from "../components/LearningCard/LearningCard";
import { learningData } from "../data/dummyData";

function Learning() {
  const [search, setSearch] = useState("");

  const filteredCourses = learningData.filter((course) =>
    course.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="learning-page">

      <h1>Learning Dashboard</h1>

      <input
        type="text"
        placeholder="Search Course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="learning-search"
      />

      <div className="learning-grid">

        {filteredCourses.length > 0 ? (
          filteredCourses.map((item) => (
            <LearningCard
              key={item.id}
              course={item.course}
              progress={item.progress}
              status={item.status}
            />
          ))
        ) : (
          <h2>No Course Found</h2>
        )}

      </div>

    </div>
  );
}

export default Learning;