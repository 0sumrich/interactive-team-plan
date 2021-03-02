import * as d3 from 'd3';
import { scheme } from './constants';
let c = d3.scaleOrdinal().range(scheme);
let x = d3.scaleLinear().range([0, 1]);
let fontSize = d3.scaleLinear().range([0.2, 0.35]);
let y = d3.scaleLinear().range([5, 9]);

export { c, x, fontSize, y }

