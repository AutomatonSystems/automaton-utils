// extends Math object with some functions I need often

const Maths = Object.create(Math);

Maths.clamp = (v, min, max)=>Math.max(Math.min(v,max), min);
Maths.TAU = Math.PI*2;

export default Maths;