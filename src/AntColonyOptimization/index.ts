import {
    EnumAntColonyOptimizationState,
    IAntColonyOptimizationAttributes,
    IAntColonyOptimizationIterationState,
    IAntColonyOptimizationPositionReport,
} from './interfaceCollection'


export const _defaultAntColonyOptimizationAttributes = {
    antAmount: 30,
    maxIterations: 200,
    pheromoneWeight: 1,
    distanceWeight: 3,
    pheromoneWeaken: 0.1,
    initialPheromone: 1,
    eachIterationCallback: (prevState: IAntColonyOptimizationIterationState, currState: IAntColonyOptimizationIterationState) => { }
}

export default class AntColonyOptimization {

    state: EnumAntColonyOptimizationState = EnumAntColonyOptimizationState.new
    positionsReport: IAntColonyOptimizationPositionReport[] = []
    totalDistance: number = 0

    constructor(attrs: IAntColonyOptimizationAttributes) {
        attrs = { ..._defaultAntColonyOptimizationAttributes, ...attrs }
    }


    getState(): EnumAntColonyOptimizationState {
        return this.state;
    }
    private setState(newState: EnumAntColonyOptimizationState) {
        this.state = newState;
    }

    getPositionsReport(): IAntColonyOptimizationPositionReport[] {
        return this.positionsReport;
    }
    private setPositionsReport(newPositionsReport: IAntColonyOptimizationPositionReport[]) {
        this.positionsReport = newPositionsReport;
    }

    getTotalDistance(): number {
        return this.totalDistance;
    }
    private setTotalDistance(newTotalDistance: number) {
        this.totalDistance = newTotalDistance;
    }

    cancel(): void {
        this.setState(EnumAntColonyOptimizationState.cancel);
    }

    run(): void {
        this.setState(EnumAntColonyOptimizationState.running);
    }

    async asyncRun(): Promise<void> {
        return this.run();
    }
}