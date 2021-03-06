import {Input} from '../ui-components/inputs'

export default class PortNumberInput extends Input {
    readonly min: number
    readonly max: number

    constructor(props) {
        super(props)
        this.type = 'number'
        this.min = 1
        this.max = 65535
        this.props = {min: this.min, max: this.max}
    }

    normalizeValue(v): string {
        let parsed = Number.parseInt(v, 10)
        if (!parsed || parsed < this.min) {
            parsed = this.min
        } else if (parsed > this.max) {
            parsed = this.max
        }
        return String(parsed)
    }
}
