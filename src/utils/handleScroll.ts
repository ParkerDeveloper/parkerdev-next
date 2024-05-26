
let screenCount = 2
let activeScreen = 0

export const handleScroll = (e: WheelEvent) => {
	const direction = `${e.deltaY < 0 ? 'bottom' : 'top'}`

	if (direction === 'bottom') {
		if (activeScreen < screenCount - 1) {
			activeScreen =+ 1
		}
	} else if (direction === 'top') {
		if (activeScreen > 0) {
			activeScreen =- 1
		}
	}
}