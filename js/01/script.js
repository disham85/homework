let fuelConsumption, fuelPrice, distance, fuelAmount, tripPrice; //declaring variables

fuelConsumption = +prompt('Введите средний расход вашего ТС'); //user enters the number of liters per 100km
fuelPrice = +prompt('Введите стоимость 1л необходимого Вам топлива'); //user enters fuel price per 1 liter
distance = +prompt('Введите расстояние запланированной поездки'); //user enters a distance
fuelAmount = fuelConsumption / 100 * distance; //calculating the required amount of fuel

alert(`Необходимое количество топлива - ${fuelAmount} литров
Стоимость поездки - ${fuelPrice * fuelAmount} грн.
`); //alert total calculation and required amount of fuel