import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import Grid from '@material-ui/core/Grid';
import { select } from 'd3-selection'

const d3 = { select }

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1)
    },
}))

const RotateBtn = ({ direction, click, degrees }) => {
    return (
        <Grid item sm={12} md={6}>
            <Button
                variant="outlined"
                onClick={() => click(degrees)}
                startIcon={direction === 'left' ? <RotateLeftIcon /> : <RotateRightIcon />}
            >
                {direction}
            </Button>
        </Grid>
    )
}

const handleClick = degrees => {
    const chart = d3.select('.mainChart')
    const currentDegrees = Number(chart.attr('transform').slice('rotate('.length, -1))
    chart
        .transition()
        .duration(1000)
        .attr("transform", `rotate(${currentDegrees + degrees})`)
}

export function Toolbar({ degrees }) {
    const classes = useStyles()
    return (
        <Grid container spacing={2} className={classes.root}>
            <RotateBtn direction={'left'} click={handleClick} degrees={degrees / -1} />
            <RotateBtn direction={'right'} click={handleClick} degrees={degrees} />
        </Grid>
    )
}