import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
export const Secret = () => {

    const [secret, setSecret] = useState('')

    const params =  useParams()
    useEffect(() => {
        fetch(`http://localhost:4000/secrets/${params.hash}`)
            .then( data => data.json())
            .then((response)=>{
                // handle success
                // console.log(response);
                setSecret(response.message)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [params.hash])

    return (
        <Container >
            <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '55px',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            
        }}>
            <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '55px',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
            backgroundSize: '400% 400%',

        }}>

                <Typography fontSize={45} color={'whitesmoke'}>SECRET</Typography>
                <Typography color={'wheat'} fontSize={25}>{secret}</Typography>
            </Box>
            </Box>
        </Container>
    )
}
