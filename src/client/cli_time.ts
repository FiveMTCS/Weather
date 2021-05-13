/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */

(function () {
	onLoadModule('system/weather', (module: TcsModule) => {
		let currentHours: number;
		let currentMinutes: number;
		module.createFunction('launchClientTime', () => {
			TCS.callbacks.TriggerServerCallback(
				'weather:getTime',
				({
					serverHours,
					serverMinutes,
				}: {
					serverHours: number;
					serverMinutes: number;
				}) => {
					currentHours = serverHours;
					currentMinutes = serverMinutes;
					setTime();
				},
				{}
			);
		});

		const eventListener = new TcsEventListener(
			TcsEventsList.TIME_SET,
			({ newHours, newMinutes }: { newHours: number; newMinutes: number }) => {
				currentHours = newHours;
				currentMinutes = newMinutes;
				setTime();
			}
		);
		TCS.eventManager.addEventHandler(eventListener);

		function setTime() {
			NetworkOverrideClockTime(currentHours, currentMinutes, 0);
		}
	});
})();
