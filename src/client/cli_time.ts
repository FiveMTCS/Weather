/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */

(function () {
	onLoadModule('system/weather', (module: TcsModule) => {
		let hours: number;
		let minutes: number;

		module.createFunction('startClientTime', () => {
			TCS.callbacks.TriggerServerCallback(
				'weather:getTime',
				(clock: Clock) => {
					hours = clock.hours;
					minutes = clock.minutes;
					setTime();
				},
				{}
			);
		});

		const eventListener = new TcsEventListener(TcsEventsList.TIME_SET, (clock: Clock) => {
			hours = clock.hours;
			minutes = clock.minutes;
			setTime();
		});
		TCS.eventManager.addEventHandler(eventListener);

		function setTime() {
			NetworkOverrideClockTime(hours, minutes, 0);
		}
	});
})();
