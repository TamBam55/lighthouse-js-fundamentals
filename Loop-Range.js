function range(start, stop, step) {
  var my_array = []
  for (var i = start; i <= stop; i += step) {
    if (start > stop && step <= O) {
      if (start === undefined ||  stop === undefined || step === undefiend) {
      }
    } else {
    my_array.push(i)
    }
  }
return my_array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

/*const carPassing = (cars, speed) => {
  cars.push ({
    time: Date.now(),
    speed,
  });
  return cars;
}*/