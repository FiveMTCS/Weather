"use strict";
/**
 * @author Julien "Kruksi" Amos
 * @version 1.1.0
 * @since 1.1.0
 */
(function () {
    onTcsLoaded(() => {
        const weather = new TcsModule(weatherModuleInfos, (module) => {
            module.fnc('launchClientWeather')();
            module.fnc('launchClientTime')();
        });
        TCS.modules.addModuleToGame(weather);
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpX21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3JjL21vZHVsZXMvc3lzdGVtL3dlYXRoZXIvY2xpZW50L2NsaV9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHO0FBRUgsQ0FBQztJQUNBLFdBQVcsQ0FBQyxHQUFHLEVBQUU7UUFDaEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxNQUFpQixFQUFFLEVBQUU7WUFDdkUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUM7WUFDcEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==