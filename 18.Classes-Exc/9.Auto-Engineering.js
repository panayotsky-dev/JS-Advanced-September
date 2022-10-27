function autoEngineeringCompany(input) {
    const cars = new Map();
  
    input.forEach(d => {
      let [brand, model, produced] = d.split(' | ');
      produced = Number(produced);
  
      if (!cars.has(brand)) {
        cars.set(brand, new Map());
      }
  
      if (!cars.get(brand).has(model)) {
        cars.get(brand).set(model, 0);
      }
  
      cars.get(brand).set(model, cars.get(brand).get(model) + produced);
    });
  
    cars
      .forEach((models, brand) => {
        console.log(brand);
        models.forEach((total, car) => console.log(`###${car} -> ${total}`));
      });
  }