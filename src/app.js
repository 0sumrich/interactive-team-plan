import Layout from './components/layout'
import Chart from './components/chart'
import { useEffect, useState } from 'react'

function App() {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'https://team-plan.glitch.me/api/main',
            );
            const json = await res.json()
            setData(json);
        };
        fetchData();
    }, []);
    return (
        <Layout>
            {data ? <Chart data={data} /> : <div></div>}
        </Layout>
    )
}

export default App