/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import axios from "axios";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = { "Project-ID": "ad37089e-efee-49ea-9615-fe75127c0903", "User-Name": username, "User-Secret": password }

        try {
            await axios.get("https://api.chatengine.io/chats", {
                headers: authObject
            })
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            window.location.reload()
        } catch (error) {
            setError("Oops, incorrect credentials")
        }

    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />

                    <div align="center">
                        <button type="submit" className="button">
                            <span>start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm