import * as d3 from 'd3';
import { svgWidth, svgHeight } from './constants/constants';

export function getTipPos(event) {
    const svg = d3.select('#svg').node();
    const bbox = svg.getBoundingClientRect();
    const [x, y] = d3.pointer(event, svg);
    const xRatio = bbox.width / svgWidth;
    const yRatio = bbox.height / svgHeight;
    return [x * xRatio, y * yRatio];
}
