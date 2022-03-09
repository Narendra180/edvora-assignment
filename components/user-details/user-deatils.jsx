import styles from "./user-details.module.scss";

function UserDetails({user}) {
  return (
    <div
      className={styles["user-details-container"]}
    >
      <h2>{user.name}</h2>

      <div className={styles["image-container"]}>
        <img src={user.url} alt="profile"/>
      </div>
    </div>
  );
}

export default UserDetails;
