/* eslint-disable react/prop-types */

import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from "./components/ChatFeed"
import LoginForm from './components/LoginForm'
function App() {
  if (!localStorage.getItem("username")) {
    return <LoginForm />
  }
  return (
    <ChatEngine
      height="100vh"
      projectID="ad37089e-efee-49ea-9615-fe75127c0903"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
