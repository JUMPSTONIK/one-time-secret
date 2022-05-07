import {useState} from 'react'
import axios from 'axios'
export const useSecret = () => {

    const [secret, setSecret] = useState('');
    const [count, setCount] = useState(1)
    const [message, setMessage] = useState('');


    const handleSecretChange = (event) =>{
        setSecret(event.target.value)
    }

    
    const handleCountChange = (event) =>{
        if(event.target.value >=1){
            setCount(event.target.value)
        }
    }

    const createSecret = async() =>{
        const response = await axios.post('http://localhost:4000/secrets',
        {
            secret,
            maxOfViews: count
        });
        console.log(response.data)
        setMessage(response.data.url)
    }

    return {
        secret,
        message,
        handleCountChange,
        handleSecretChange,
        createSecret,
    }
}
