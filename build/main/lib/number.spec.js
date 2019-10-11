"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-expression-statement
const ava_1 = __importDefault(require("ava"));
const number_1 = require("./number");
ava_1.default('double', t => {
    t.is(number_1.double(2), 4);
});
ava_1.default('power', t => {
    t.is(number_1.power(2, 4), 16);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL251bWJlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXlDO0FBQ3pDLDhDQUF1QjtBQUN2QixxQ0FBeUM7QUFFekMsYUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRTtJQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLGVBQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUFDIn0=