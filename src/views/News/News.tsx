import React, { useEffect, useState } from 'react';
import axios from 'axios';

import config from 'config';

const Home: React.FC = () => {
    const [popNewsIds, setPopNewsIds] = useState<null | object>(null);
    const fetchPopNewsIds = (): void => {
        axios.get(`${config.API_BASE}/topstories.json`).then((res) => {
            setPopNewsIds(res);
        });
    };

    useEffect(() => {
        fetchPopNewsIds();
    }, []);

    return <div>{JSON.stringify(popNewsIds)}</div>;
};

export default Home;
