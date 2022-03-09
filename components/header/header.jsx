import UserDetails from "../user-details/user-deatils";
import styles from "./header.module.scss";

function Header({user,rides}) {
	// console.log("user log from header",user,rides);
	return (
		<>
			<header> 
				<div className={styles["content-container"]}>
					<h1>Edvora</h1>
					<UserDetails user={user}/>
				</div>
			</header>
		</>        
	);
}

export default Header;