import { useState } from "react"

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const handleInputs = (e) => {
        const { name, value } = e.target

        setForm({...form, [name]: value})
    }

    const cleanFields = () => {
        setForm(initialState)
    }
    return {form, handleInputs, cleanFields}
}

export default useForm