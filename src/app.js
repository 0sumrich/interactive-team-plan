// import Layout from './components/layout'
import Chart from './components/chart'
import { useEffect, useState } from 'react'
import { Toolbar } from './components/toolbar'
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    loading: {
        display: 'flex',
        margin: 'auto',
        padding: theme.spacing(2)
    },
}));

function App() {
    const [data, setData] = useState(null)
    const classes = useStyles()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    'https://team-plan.glitch.me/api/main',
                );
                const json = await res.json()
                setData(json);
            } catch (e) {
                setData(null)
                console.error(e)
            }

        };
        fetchData();
    }, []);
    return (
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <Toolbar degrees={data ? 360 / (data.objectives.length * 2) : 45} />
            </Grid>
            <Grid item xs={10}>
                {data ? <Chart data={data} /> : <CircularProgress className={classes.loading} />}
            </Grid>
        </Grid>
    )
}

export default App