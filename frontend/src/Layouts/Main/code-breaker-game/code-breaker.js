import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ApiService from '../../../services/apiRest';

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        background: 'aliceblue'
    }

}));


export default function BookComponent(props) {

    const [apiService] = useState(ApiService());
    const classes = useStyles();

    const [response, setResponse] = useState(null);

    useEffect(() => {
        apiService.get('/game/test')
            .then(response => {

                const { status, data } = response;
                if (status === 200) {
                    setResponse(data);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className={`${classes.mainDiv}`}>
            {JSON.stringify(response)}
        </div>
    )
}