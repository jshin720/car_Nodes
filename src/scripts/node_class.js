class DataNode {
  constructor(parent, value) {
    //children,
    this.children = [];
    this.parent = parent;
    this.value = value;
  }

  appendChildren(children) {
    for (let i = 0; i < children.length; i++) {
      let child = children[i];

      this.children.push(child);
      child.parent = this;
    }
  }

}

// let supra = new DataNode(null, null, 'Supra');
// let camry = new DataNode(null, null, 'Camry');
// let prius = new DataNode(null, null, 'Prius');
// let thundra = new DataNode(null, null, 'Thundra');
// let highlander = new DataNode(null, null, 'Highlander');
// let corolla = new DataNode(null, null, 'Corolla');

// let tCars = [supra, camry, prius, thundra, highlander, corolla];
// let toyota = new DataNode(null, tCars, 'Toyota');
// toyota.appendChildren([supra, camry, prius, thundra, highlander, corolla]);

let accord = new DataNode(null, null, 'Accord');
let civic = new DataNode(null, null, 'Civic');
let crv = new DataNode(null, null, 'Crv');
let hrv = new DataNode(null, null, 'Hrv');
let passport = new DataNode(null, null, 'Passport');
let pilot = new DataNode(null, null, 'Pilot');

// let hCars = [accord, civic, crv, hrv, passport, pilot];
let honda = new DataNode(null, 'Honda');
honda.appendChildren([accord, civic, crv, hrv, passport, pilot]);
console.log(honda)

// honda = new DataNode(null, null, 'Honda');
// let acura = new DataNode(null, null, 'Acura');
// toyota = new DataNode(null, null, 'Toyota');
// let lexus = new DataNode(null, null, 'Lexus');
// let nissan = new DataNode(null, null, 'Nissan');
// let infiniti = new DataNode(null, null, 'Infiniti');

// let jBrands = [honda, acura, toyota, lexus, nissan, infiniti];
// let japan = new DataNode(null, jBrands, 'Japan');
// japan.appendChildren([honda, acura, toyota, lexus, nissan, infiniti]);
/****************************************************************************** */

// let seven = new DataNode(null, null, '718');
// let nine = new DataNode(null, null, '911');
// let taycan = new DataNode(null, null, 'Taycan');
// let panamera = new DataNode(null, null, 'Panamera');
// let macan = new DataNode(null, null, 'Macan');
// let cayenne = new DataNode(null, null, 'Cayenne');

// let pCars = [seven, nine, taycan, panamera, macan, cayenne];
// let porsche = new DataNode(null, pCars, 'Porsche');
// porsche.appendChildren([seven, nine, taycan, panamera, macan, cayenne]);

// let atlas = new DataNode(null, null, 'Atlas');
// let tiguan = new DataNode(null, null, 'Tiguan');
// let golf = new DataNode(null, null, 'Golf');
// let jetta = new DataNode(null, null, 'Jetta');
// let passat = new DataNode(null, null, 'Passat');
// let four = new DataNode(null, null, 'Four');

// let vCars = [atlas, tiguan, golf, jetta, passat, four];
// let volkswagen = new DataNode(null, vCars, 'Volkswagen');
// volkswagen.appendChildren([atlas, tiguan, golf, jetta, passat, four]);

// let bmw = new DataNode(null, null, 'BMW');
// let audi = new DataNode(null, null, 'Audi');
// let mercedes = new DataNode(null, null, 'Mercedes');
// volkswagen = new DataNode(null, null, 'Volkswagen');
// let maybach = new DataNode(null, null, 'Maybach');
// porsche = new DataNode(null, null, 'Porsche');

// let gBrands = [bmw, audi, mercedes, volkswagen, maybach, porsche];
// let germany = new DataNode(null, gBrands, 'Germany');
// germany.appendChildren([bmw, audi, mercedes, volkswagen, maybach, porsche]);

// /****************************************************************************** */

// let ford = new DataNode(null, null, 'ford');
// let tesla = new DataNode(null, null, 'tesla');
// let dodge = new DataNode(null, null, 'dodge');
// let jeep = new DataNode(null, null, 'jeep');
// let chevrolet = new DataNode(null, null, 'chevrolet');
// let cadillac = new DataNode(null, null, 'cadiallac');

// let uBrands = [ford, tesla, dodge, jeep, chevrolet, cadillac];
// let usa = new DataNode(null, uBrands, 'USA');
// usa.appendChildren([ford, tesla, dodge, jeep, chevrolet, cadillac]);

// /****************************************************************************** */

// let genesis = new DataNode(null, null, 'Genesis');
// let hyundai = new DataNode(null, null, 'Hyundai');
// let kia = new DataNode(null, null, 'Kia');
// let ssanyong = new DataNode(null, null, 'Ssanyong');
// let daewoo = new DataNode(null, null, 'Daewoo');
// let samsung = new DataNode(null, null, 'Samsung');

// let kBrands = [genesis, hyundai, kia, ssanyong, daewoo, samsung];
// let korea = new DataNode(null, kBrands, 'Korea');
// korea.appendChildren([genesis, hyundai, kia, ssanyong, daewoo, samsung]);

// /****************************************************************************** */

// let lamborghni = new DataNode(null, null, 'Lamborghni');
// let ferrari = new DataNode(null, null, 'Ferrari');
// let maserati = new DataNode(null, null, 'Maserati');
// let fiat = new DataNode(null, null, 'Fiat');
// let alfaRomeo = new DataNode(null, null, 'Alfa Romeo');
// let pagani = new DataNode(null, null, 'Pagani');

// let iBrands = [ferrari, maserati, lamborghni, fiat, alfaRomeo, pagani];
// let italy = new DataNode(null, iBrands, 'Italy');
// italy.appendChildren([ferrari, maserati, lamborghni, fiat, alfaRomeo, pagani]);

// /****************************************************************************** */

// let astonMartin = new DataNode(null, null, 'Aston Martin');
// let jaguar = new DataNode(null, null, 'Jaguar');
// let landRover = new DataNode(null, null, 'Land Rover');
// let lotus = new DataNode(null, null, 'Lotus');
// let mclaren= new DataNode(null, null, 'Mclaren');
// let bentley = new DataNode(null, null, 'Bentley');

// let ukBrands = [astonMartin, jaguar, landRover, lotus, mclaren, bentley];
// let uk = new DataNode(null, ukBrands, 'UK');
// uk.appendChildren([astonMartin, jaguar, landRover, lotus, mclaren, bentley]);

// /****************************************************************************** */
// // function makeTree(obj) {
// //   let newArr = [];

// //   for (let name in obj) {
// //     newArr.push(new DataNode(obj.type,  ))    
// //   }
// // }

// let countries = ['USA', 'Korea', 'Japan', 'Italy', 'Germany', 'Uk'];

// let makers = {
//   'type': 'country',
//   'USA': ['Ford', 'Tesla', 'Dodge', 'Jeep', 'Chevrolet', 'Cadillac'],
//   'Korea': ['Genesis', 'Hyundai', 'Kia', 'Ssanyong', 'Daewoo', 'Samsung'],
//   'Japan': ['Honda', 'Acura', 'Toyota', 'Lexus', 'Nissan', 'Infiniti'],
//   'Italy': ['Italy', 'Ferrari', 'Maserati', 'Lamborghni', 'Fiat', 'Alfa Romeo', 'Pagani'],
//   'Germany': ['BMW', 'Audi', 'Mercedes', 'Volkswagen', 'Maybach', 'Porsche'],
//   'UK': ['Aston Martin', 'Jaguar', 'Land Rover', 'Lotus', 'Mclaren', 'Bentley']
// };

// let germanCars = {
//   'type': 'maker',
//   'Porsche': ['718', '911', 'Taycan', 'Panamera', 'Macan', 'Cayenne'],
//   'Volkswagen': ['Atlas', 'Tiguan', 'Golf', 'Jetta', 'Passat', 'id.4'],
//   'Bmw': [],
//   'Audi': [],
//   'Mercedes': [],
//   'Maybach': []
// };

// let japanCars = {
//   'type': 'maker',
//   'Honda': ['Accord', 'Civic', 'Crv', 'Hrv', 'Passport', 'Pilot'],
//   'Toyota': ['Camry', 'Supra', 'Corolla', 'Prius', 'Tundra', 'Highlander'],
//   'Acura': [],
//   'Lexus': [],
//   'Nissan': [],
//   'Infiniti': []
// };