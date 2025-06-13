import { useState, useEffect } from 'react';

function Ue2() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000)
    }, []);
    return (
        <h1>
            Time using Localtimestring - {date.toLocaleTimeString()}<br/>
            Hour-{date.getHours()}:Min-{date.getMinutes()}:Sec-{date.getSeconds()}
        </h1>
    );
};

export default Ue2;