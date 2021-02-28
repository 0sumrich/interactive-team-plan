import { useEffect, useState } from 'react'
import draw from '../helper/draw'
import * as d3 from 'd3';
import ChartTip from './chartTip'
import { makeStyles } from '@material-ui/core/styles';
import { getTipPos } from '../helper/getTipPos';
import { TipContent } from './TipContent';
import { highlight, unhighlight } from '../helper/highlights';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'block',
        margin: 'auto'
    },
    chartWrapper: {
        position: "relative"
    }
}))

function Chart({ data }) {
    const classes = useStyles()
    const [hoverData, setHoverData] = useState({ objective: 'Test', task: 'test', team: 'test' })
    const [tipPos, setTipPos] = useState([0, 0])
    const [tipVisibility, setTipVisibility] = useState(false)
    useEffect(() => draw(data), [data])
    useEffect(() => {
        d3.selectAll('g[class^="arc"]')
            .style("cursor", "pointer")
            .on("mouseover", (e, d) => {
                const { objective, task, team } = d.data;
                setHoverData({ objective, task, team });
                setTipPos(getTipPos(e));
                highlight(e,d);
                if ((objective.length > 0 && task.length > 0) || team.length === 0) {
                    setTipVisibility(true);
                }
            })
            .on('mouseleave', (e, d) => {
                unhighlight(e, d)
                setTipVisibility(false);
            })
    }, [])
    return (
        <div className={classes.chartWrapper}>
            <svg id="svg" className={classes.root} />
            <ChartTip left={tipPos[0]} top={tipPos[1]} visible={tipVisibility}>
                <TipContent hoverData={hoverData} />
            </ChartTip>
        </div>
    )
}

export default Chart