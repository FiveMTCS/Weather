"use strict";
/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function () {
    onLoadModule('system/weather', (module) => {
        let serverHours = 12;
        let serverMinutes = 0;
        let betweenSync = 10 * 1000;
        module.createFunction('launchServerTime', () => {
            let nextSync = 0;
            TCS.threads.createThread(module, 1000, () => {
                serverMinutes = (serverMinutes + 1) % 60;
                if (serverMinutes === 0) {
                    serverHours = (serverHours + 1) % 24;
                }
                let gameTimer = GetGameTimer();
                if (gameTimer > nextSync) {
                    nextSync = gameTimer + betweenSync;
                    setClientsTime();
                }
            });
        });
        function setClientsTime() {
            return __awaiter(this, void 0, void 0, function* () {
                const setTimeEvent = {
                    target: TcsEventTarget.CLIENT,
                    targetId: -1,
                    eventType: TcsEventsList.TIME_SET,
                    data: {
                        newHours: serverHours,
                        newMinutes: serverMinutes,
                    },
                };
                TCS.eventManager.sendEvent(setTimeEvent);
            });
        }
        TCS.callbacks.RegisterServerCallback('weather:getTime', (source, args) => {
            return { serverHours, serverMinutes };
        });
        module.createFunction('setTime', (nHours, nMinutes) => {
            serverHours = nHours;
            serverMinutes = nMinutes;
            setClientsTime();
        });
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3J2X3RpbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3JjL21vZHVsZXMvc3lzdGVtL3dlYXRoZXIvc2VydmVyL3Nydl90aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOzs7Ozs7Ozs7O0FBRUgsQ0FBQztJQUNBLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQWlCLEVBQUUsRUFBRTtRQUNwRCxJQUFJLFdBQVcsR0FBVyxFQUFFLENBQUM7UUFDN0IsSUFBSSxhQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLElBQUksV0FBVyxHQUFXLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDcEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7WUFDOUMsSUFBSSxRQUFRLEdBQVcsQ0FBQyxDQUFDO1lBQ3pCLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUMzQyxhQUFhLEdBQUcsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN6QyxJQUFJLGFBQWEsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLFdBQVcsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ3JDO2dCQUVELElBQUksU0FBUyxHQUFXLFlBQVksRUFBRSxDQUFDO2dCQUN2QyxJQUFJLFNBQVMsR0FBRyxRQUFRLEVBQUU7b0JBQ3pCLFFBQVEsR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDO29CQUNuQyxjQUFjLEVBQUUsQ0FBQztpQkFDakI7WUFDRixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBZSxjQUFjOztnQkFDNUIsTUFBTSxZQUFZLEdBQW1CO29CQUNwQyxNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU07b0JBQzdCLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQ1osU0FBUyxFQUFFLGFBQWEsQ0FBQyxRQUFRO29CQUNqQyxJQUFJLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFVBQVUsRUFBRSxhQUFhO3FCQUN6QjtpQkFDRCxDQUFDO2dCQUNGLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFDLENBQUM7U0FBQTtRQUVELEdBQUcsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQ25DLGlCQUFpQixFQUNqQixDQUFDLE1BQWMsRUFBRSxJQUFTLEVBQUUsRUFBRTtZQUM3QixPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FDRCxDQUFDO1FBRUYsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1lBQ3JFLFdBQVcsR0FBRyxNQUFNLENBQUM7WUFDckIsYUFBYSxHQUFHLFFBQVEsQ0FBQztZQUN6QixjQUFjLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9