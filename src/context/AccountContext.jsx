import { createContext, useState } from "react"
export const AccountContext = createContext(null)

function AccountContextProvider(props) {
//   const [user, setUser] = useState(null)
//   const [userType, setUserType] = useState("guest")
//   const [username, setUsername] = useState("guest")

    const [account, setAccount] = useState(null)

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

    const setCustomerAccount = (account) => {
        setAccount(account)
    }


  return (
    <AccountContext.Provider value={{ account,setCustomerAccount }}>
      {props.children}
    </AccountContext.Provider>
  )
}

export default AccountContextProvider
