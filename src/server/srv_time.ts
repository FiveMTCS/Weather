/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */

(function () {
	onLoadModule('system/weather', (module: TcsModule) => {
		let hours: number = 12;
		let minutes: number = 0;
		let betweenSync: number = 10 * 1000;

		module.createFunction('startServerTime', () => {
			let nextSync: number = 0;
			TCS.threads.createThread(module, 1000, () => {
				minutes = (minutes + 1) % 60;
				if (minutes === 0) {
					hours = (hours + 1) % 24;
				}

				let gameTimer: number = GetGameTimer();
				if (gameTimer > nextSync) {
					nextSync = gameTimer + betweenSync;
					setClientsTime();
				}
			});
		});

		async function setClientsTime() {
			const setTimeEvent: TcsClientEvent = {
				target: TcsEventTarget.CLIENT,
				targetId: -1,
				eventType: TcsEventsList.TIME_SET,
				data: {
					hours,
					minutes,
				} as Clock,
			};
			TCS.eventManager.sendEvent(setTimeEvent);
		}

		TCS.callbacks.RegisterServerCallback('weather:getTime', (source: number, args: any) => {
			return { hours, minutes } as Clock;
		});

		module.createFunction('setTime', (clock: Clock) => {
			hours = clock.hours;
			minutes = clock.minutes;
			setClientsTime();
		});
	});
})();
