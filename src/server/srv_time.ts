/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */

(function () {
	onLoadModule('system/weather', (module: TcsModule) => {
		let serverHours: number = 12;
		let serverMinutes: number = 0;
		let betweenSync: number = 10 * 1000;
		module.createFunction('launchServerTime', () => {
			let nextSync: number = 0;
			TCS.threads.createThread(module, 1000, () => {
				serverMinutes = (serverMinutes + 1) % 60;
				if (serverMinutes === 0) {
					serverHours = (serverHours + 1) % 24;
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
					newHours: serverHours,
					newMinutes: serverMinutes,
				},
			};
			TCS.eventManager.sendEvent(setTimeEvent);
		}

		TCS.callbacks.RegisterServerCallback(
			'weather:getTime',
			(source: number, args: any) => {
				return { serverHours, serverMinutes };
			}
		);

		module.createFunction('setTime', (nHours: number, nMinutes: number) => {
			serverHours = nHours;
			serverMinutes = nMinutes;
			setClientsTime();
		});
	});
})();
