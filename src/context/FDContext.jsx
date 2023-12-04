import { createContext, useState } from "react"
export const FDContext = createContext(null)

function FDContextProvider(props) {

    const [FD, setFD] = useState(null)
    const [saveAccount, setSaveAccount] = useState(null)
    const[amount, setAmount] = useState(null)
    const[plan_id, setPlan_id] = useState(null)

    const setCustomerFD = (FD) => {
        setFD(FD.FD_id)
        setSaveAccount(FD.saving_account_number)
        setAmount(FD.amount)
        setPlan_id(FD.plan_id)

    }


  return (
    <FDContext.Provider value={{ FD,saveAccount,amount,plan_id,setCustomerFD }}>
      {props.children}
    </FDContext.Provider>
  )
}

export default FDContextProvider
