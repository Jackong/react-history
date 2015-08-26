# react-history
history mixin for react

## Features
* auto restore your mounted state when re-render

## Examples

```js
import mixin from 'es6-react-mixins'
import History from 'react-history'

class App extends mixin(History) {
    componentWillMount() {
        super.componentWillMount()
        //it won't be called when re-render
        Actions1.gets()
    }
    componentDidMount() {
        super.componentDidMount()
        //it won't be called when re-render
        Actions2.gets()
    }
    onClick() {
        Actions3.gets()
    }
    render() {
        return (
            <div>
                {this.state.data_from_action1}
                {this.state.data_from_action2}
                {this.state.data_from_action3}
                <button onClick={this.onClick.bind(this)}></button>
            </div>
        )
    }
}
```
