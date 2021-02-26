import { useEffect, useState } from 'react'
import draw from '../helper/draw'
import darker from '../helper/darker'
import getNewId from '../helper/getNewId'
import * as d3 from 'd3';

function Chart({ data }) {
    const [hoverData, setHoverData] = useState(undefined)
    useEffect(() => {
        draw(data)
    }, [data])
    useEffect(() => {
        d3.selectAll('g[class^="arc"]')
            .style("cursor", "pointer")
            .on("mouseover", function (e, d) {
                console.log(e.target)
                console.log(d)
                // const e = d3.select(event.target)
                // const color = d3.rgb(e.style("fill"));
                // e.style(
                //     "fill",
                //     d3
                //         .color(color)
                //         .darker([1])
                //         .rgb()
                // );
            })
    })
    return <svg id="svg" />
}

export default Chart