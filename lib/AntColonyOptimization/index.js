"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._defaultAntColonyOptimizationAttributes = void 0;
const interfaceCollection_1 = require("./interfaceCollection");
exports._defaultAntColonyOptimizationAttributes = {
    antAmount: 30,
    maxIterations: 200,
    pheromoneWeight: 1,
    distanceWeight: 3,
    pheromoneWeaken: 0.1,
    initialPheromone: 1,
    eachIterationCallback: (prevState, currState) => { }
};
class AntColonyOptimization {
    constructor(attrs) {
        this.state = interfaceCollection_1.EnumAntColonyOptimizationState.new;
        this.positionsReport = [];
        this.totalDistance = 0;
        attrs = Object.assign(Object.assign({}, exports._defaultAntColonyOptimizationAttributes), attrs);
    }
    getState() {
        return this.state;
    }
    setState(newState) {
        this.state = newState;
    }
    getPositionsReport() {
        return this.positionsReport;
    }
    setPositionsReport(newPositionsReport) {
        this.positionsReport = newPositionsReport;
    }
    getTotalDistance() {
        return this.totalDistance;
    }
    setTotalDistance(newTotalDistance) {
        this.totalDistance = newTotalDistance;
    }
    cancel() {
        this.setState(interfaceCollection_1.EnumAntColonyOptimizationState.cancel);
    }
    run() {
        this.setState(interfaceCollection_1.EnumAntColonyOptimizationState.running);
    }
    asyncRun() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.run();
        });
    }
}
exports.default = AntColonyOptimization;
//# sourceMappingURL=index.js.map