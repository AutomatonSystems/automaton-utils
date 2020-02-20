import Maths from './Maths.js';
import Memory from './Memory.js';

async function sleep(duration, result){
	return new Promise(res=>{
		setTimeout(()=>res(result),duration);
	});
}

export default {
	Maths: Maths,
	Memory: Memory,
	sleep: sleep
}