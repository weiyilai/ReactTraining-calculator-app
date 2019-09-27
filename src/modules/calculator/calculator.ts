import { number } from "prop-types";

export const Calculator = {
    add(...params: number[]): number {

        if (params.find(q => isNaN(q)) != null) {
            return NaN
        }
        
        if (params.find(q => Number(q) === q && q % 1 !== 0) != null) {
            return Number(params.reduce((a, b) => a + b, 0).toFixed(5))
        }

        return params.reduce((a, b) => a + b, 0)
    }
}