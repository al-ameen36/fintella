import { useEffect } from "react"
import { useSignupQuery } from "../../state/user.slice"
import styles from "./signup.module.css"

export default function Signup() {
    const data = useSignupQuery({ msg: 'abc' })
    useEffect(() => {
        console.log(data)
    }, [])
    return (
        <div className={"form"}>
            <div>
                <label htmlFor="phone-number">Phone Number</label>
                <input id="phone-number" type="text" />
            </div>
            <div>
                <label htmlFor="full-name">Full Name</label>
                <input id="full-name" type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="text" />
            </div>
            <button>Sign up</button>
        </div>
    )
}
