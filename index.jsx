let snapshots = {};

export default base => class History extends base {
    constructor(props) {
        super(props)
        this.state = this.state ? this.state : {}

        this.hash = location.hash
        if (!snapshots.hasOwnProperty(this.hash)) {
            return
        }

        let states = snapshots[this.hash]
        for (let key in states) {
            if (!states.hasOwnProperty(key)) {
                continue
            }
            this.state[key] = states[key]
        }
        this.componentWillMount = () => {
            super.componentWillMount()
        }
        this.componentDidMount = () => {
            super.componentDidMount()
        }
    }
    componentWillUnmount() {
        snapshots[this.hash] = this.state
        super.componentWillUnmount()
    }
}
