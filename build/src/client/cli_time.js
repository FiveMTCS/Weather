"use strict";
/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */
(function () {
    onLoadModule('system/weather', (module) => {
        let currentHours;
        let currentMinutes;
        module.createFunction('launchClientTime', () => {
            TCS.callbacks.TriggerServerCallback('weather:getTime', ({ serverHours, serverMinutes, }) => {
                currentHours = serverHours;
                currentMinutes = serverMinutes;
                setTime();
            }, {});
        });
        const eventListener = new TcsEventListener(TcsEventsList.TIME_SET, ({ newHours, newMinutes }) => {
            currentHours = newHours;
            currentMinutes = newMinutes;
            setTime();
        });
        TCS.eventManager.addEventHandler(eventListener);
        function setTime() {
            NetworkOverrideClockTime(currentHours, currentMinutes, 0);
        }
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpX3RpbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3JjL21vZHVsZXMvc3lzdGVtL3dlYXRoZXIvY2xpZW50L2NsaV90aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHO0FBRUgsQ0FBQztJQUNBLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQWlCLEVBQUUsRUFBRTtRQUNwRCxJQUFJLFlBQW9CLENBQUM7UUFDekIsSUFBSSxjQUFzQixDQUFDO1FBQzNCLE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO1lBQzlDLEdBQUcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQ2xDLGlCQUFpQixFQUNqQixDQUFDLEVBQ0EsV0FBVyxFQUNYLGFBQWEsR0FJYixFQUFFLEVBQUU7Z0JBQ0osWUFBWSxHQUFHLFdBQVcsQ0FBQztnQkFDM0IsY0FBYyxHQUFHLGFBQWEsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUM7WUFDWCxDQUFDLEVBQ0QsRUFBRSxDQUNGLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sYUFBYSxHQUFHLElBQUksZ0JBQWdCLENBQ3pDLGFBQWEsQ0FBQyxRQUFRLEVBQ3RCLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUE0QyxFQUFFLEVBQUU7WUFDdEUsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUN4QixjQUFjLEdBQUcsVUFBVSxDQUFDO1lBQzVCLE9BQU8sRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUNELENBQUM7UUFDRixHQUFHLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVoRCxTQUFTLE9BQU87WUFDZix3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7SUFDRixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==