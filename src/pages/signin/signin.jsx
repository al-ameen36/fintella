// import styles from "./signin.module.css"

export default function Signin() {
    return (
        <div className={"form"}>
            <div>
                <label htmlFor="phone-number">Phone Number</label>
                <input id="phone-number" type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="text" />
            </div>
            <button>Sign In</button>
        </div>
    )
}
