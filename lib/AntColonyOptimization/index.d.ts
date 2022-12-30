import { EnumAntColonyOptimizationState, IAntColonyOptimizationAttributes, IAntColonyOptimizationIterationState, IAntColonyOptimizationPositionReport } from './interfaceCollection';
export declare const _defaultAntColonyOptimizationAttributes: {
    antAmount: number;
    maxIterations: number;
    pheromoneWeight: number;
    distanceWeight: number;
    pheromoneWeaken: number;
    initialPheromone: number;
    eachIterationCallback: (prevState: IAntColonyOptimizationIterationState, currState: IAntColonyOptimizationIterationState) => void;
};
export default class AntColonyOptimization {
    state: EnumAntColonyOptimizationState;
    positionsReport: IAntColonyOptimizationPositionReport[];
    totalDistance: number;
    constructor(attrs: IAntColonyOptimizationAttributes);
    getState(): EnumAntColonyOptimizationState;
    private setState;
    getPositionsReport(): IAntColonyOptimizationPositionReport[];
    private setPositionsReport;
    getTotalDistance(): number;
    private setTotalDistance;
    cancel(): void;
    run(): void;
    asyncRun(): Promise<void>;
}
