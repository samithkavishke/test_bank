import { createContext, useState } from "react"
export const CurrentAccountContext = createContext(null)

function CurrentAccountContextProvider(props) {
//   const [user, setUser] = useState(null)
//   const [userType, setUserType] = useState("guest")
//   const [username, setUsername] = useState("guest")

    const [account, setAccount] = useState("account number")

//   const login = (user) => {
//     setUser(user.customer_NIC)
//     setUserType(user.user_type)
//     setUsername(user.username)
//   }

//   const logout = () => {
//     setUser(null)
//     setUserType("guest")
//     setUsername("guest")
//   }

    const setCustomerCurrentAccount = (account) => {
        setAccount(account)
    }


  return (
    <CurrentAccountContext.Provider value={{ account,setCustomerCurrentAccount }}>
      {props.children}
    </CurrentAccountContext.Provider>
  )
}

export default CurrentAccountContextProvider
