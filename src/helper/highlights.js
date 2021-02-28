import { darker } from './darker';
import { select, selectAll } from 'd3-selection';
const d3 = { select, selectAll }

export function highlightLegend(team){
    if(team.length>0){
        const el = d3.selectAll('.legendText').filter(d => d===team)
        el.style('font-weight', 'bold')
    }
}

export function unhighlightLegend(team){
        const el = d3.selectAll('.legendText').filter(d => d===team)
        el.style('font-weight', 'normal')
}

export function highlightLegendCircle(team){
    const el = d3.selectAll('.circ').filter(d => d===team)
    el.attr('stroke-width', 1)
}

export function unhighlightLegendCircle(team){
    const el = d3.selectAll('.circ').filter(d => d===team)
    el.attr('stroke-width', 0.25)
}

export function highlightText(e) {
    const el = d3.select(e.target);
    const col = darker(el.style('fill'));
    el.attr('stroke', col.toString())
        .attr('stroke-width', 2);
}
export function unhighlightText(e) {
    const el = d3.select(d3.select(e.target).node().firstElementChild);
    el.attr('stroke', 'none');
}

export function highlight(e, d){
    highlightText(e)
    highlightLegend(d.data.team)
    highlightLegendCircle(d.data.team)
}

export function unhighlight(e, d){
    unhighlightText(e)
    unhighlightLegend(d.data.team)
    unhighlightLegendCircle(d.data.team)
}
