import v8 from 'v8';

/**
 * @returns {Number} Size of heap in bytes
 */
export function getHeapSize(){
	return v8.getHeapStatistics().total_available_size;
}
