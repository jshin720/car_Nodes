import genCars from "./kBrands/genCars";
import hyunCars from "./kBrands/hyunCars";
import kiaCars from "./kBrands/kiaCars";


const korea = {
  name: "South Korea",
  children: [
    genCars,
    hyunCars,
    kiaCars
  ]
}

export default korea;