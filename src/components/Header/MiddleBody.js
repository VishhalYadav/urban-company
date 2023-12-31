import React from "react";
import { Link } from "react-router-dom";
import styles from "./MiddleBody.module.css";
const MiddleBody = () => {
  return (
    <div className={styles["custom-component"]}>
      <p className={styles.center}>Home/Delhi-NCR</p>
      <h1
        className={styles.center}
        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
      >
        Home services, on demand.
      </h1>
      <div className={styles["search-box"]}>
        <select>
          <option value="">Select a location</option>
          <option value="location1">Delhi-NCR</option>
          <option value="location2">Lucknow</option>
          <option value="location2">Kanpur</option>
          <option value="location2">Kota</option>
        </select>
        <input type="text" placeholder="Search for a services..." />
      </div>

      <p className={styles.threeLinks}>
        <Link>Spa for womens,</Link>
        <Link>Salon for me,</Link>
        <Link>Massage for men,etc.</Link>
      </p>
    </div>
  );
};

export default MiddleBody;
