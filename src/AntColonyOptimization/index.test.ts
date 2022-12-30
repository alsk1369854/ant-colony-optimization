import ACO, { _defaultAntColonyOptimizationAttributes } from './index'
import {
    EnumAntColonyOptimizationState,
    IAntColonyOptimizationAttributes,
    IAntColonyOptimizationIterationState,
    IAntColonyOptimizationPositionReport,
} from './interfaceCollection'

test('', () => {
    let data = [['1'], ['2']]
    let dataCopy = data.map((pos) => pos.map((val) => + val))
    dataCopy[0][0] = 3

    expect(data[0][0]).toBe('1')
    expect(dataCopy[0][0]).toBe(3)
    expect(dataCopy[1][0]).toBe(2)

})

test('getState', () => {
    const attrs: IAntColonyOptimizationAttributes = {
        ..._defaultAntColonyOptimizationAttributes,
        positions: []
    }
    const aco1 = new ACO(attrs);
    expect(aco1.getState()).toBe(EnumAntColonyOptimizationState.new);
    aco1.run()
    expect(aco1.getState()).toBe(EnumAntColonyOptimizationState.running);
    aco1.cancel()
    expect(aco1.getState()).toBe(EnumAntColonyOptimizationState.cancel);

    const aco2 = new ACO(attrs);
    aco2.asyncRun().then(()=>{
        expect(aco2.getState()).toBe(EnumAntColonyOptimizationState.running);
    })

});