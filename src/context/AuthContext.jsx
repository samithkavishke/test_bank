import { createContext, useState } from "react"
export const AuthContext = createContext(null)

function AuthContextProvider(props) {
  const [user, setUser] = useState(null)
  const [userType, setUserType] = useState("guest")
  const [username, setUsername] = useState("guest")

  const login = (user) => {
    setUser(user.customer_NIC)
    setUserType(user.user_type)
    setUsername(user.username)
    console.log("usernames",user.username,user.user_type)

  }

  const logout = () => {
    setUser(null)
    setUserType("guest")
    setUsername("guest")
  }

  return (
    <AuthContext.Provider value={{ user,username, userType, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
