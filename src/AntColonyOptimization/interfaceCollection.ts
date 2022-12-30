export enum EnumAntColonyOptimizationState {
    new = "new",
    running = "running",
    done = "done",
    cancel = "cancel"
}

export interface IAntColonyOptimizationIterationState {
    state: EnumAntColonyOptimizationState,
    totalDistance: number,
    positionsReport: IAntColonyOptimizationPositionReport[]
}

export interface IAntColonyOptimizationPosition {
    id: string,
    x: number,
    y: number,
}

export interface IAntColonyOptimizationPositionReport extends IAntColonyOptimizationPosition {
    nextDistance: number,
    prevDistance: number,
}

export interface IAntColonyOptimizationAttributes {
    positions: IAntColonyOptimizationPosition[]
    antAmount?: number,
    maxIterations?: number,
    pheromoneWeight?: number,
    distanceWeight?: number,
    pheromoneWeaken?: number,
    initialPheromone?: number,
    eachIterationCallback?: (prevState: IAntColonyOptimizationIterationState, currState: IAntColonyOptimizationIterationState) => void,
}
