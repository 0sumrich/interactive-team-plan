// import Layout from './components/layout'
import Chart from './components/chart'
import { useEffect, useState } from 'react'
import { Toolbar } from './components/toolbar'
import Grid from '@material-ui/core/Grid';

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
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <Toolbar degrees={data ? 360 / (data.objectives.length * 2) : 45}/>
            </Grid>
            <Grid item xs={10}>
                {data ? <Chart data={data} /> : <div></div>}
            </Grid>
        </Grid>
    )
}

export default App