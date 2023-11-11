import { createContext, useState } from "react";
import { getDifferenceYear, calculateBrand, calculatePlan, formatMoney } from "../helpers";

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChangeData = e => {
        setData({
            ...data,
        [e.target.name] : e.target.value
        })
    }

    const quoteInsurance = () => {
        // Una base
        let result = 2000

        // Obtener diferencia de años
        const difference = getDifferenceYear(data.year)

        // Hay que restar el 3% por cada año
        result -= ((difference * 3) * result) / 100
        
        //Americano 15%
        //Europeo 30%
        //Asiatico 5%
        result *= calculateBrand(data.brand)
        
        //Basico 20%
        //Completo 50%
        result *= calculatePlan(data.plan)
        
        //Formatear Dinero
        result = formatMoney(result)
        
        setLoading(true)

        setTimeout(() => {
            setResult(result)
            setLoading(false)
        }, 3000);
        
    }

    return(
        <QuoterContext.Provider value={{data, handleChangeData, error, setError, quoteInsurance, result, loading}}>
            {children}
        </QuoterContext.Provider>
    )
}

export {
    QuoterProvider
}
export default QuoterContext