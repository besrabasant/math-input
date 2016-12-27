const React = require('react');

const {View} = require('../fake-react-native-web');
const {components} = require('../index');

const {Keypad, KeypadInput} = components;

const App = React.createClass({
    getInitialState() {
        return {
            keypadElement: null,
            value: "",
        };
    },

    render() {
        return <View>
            <div
                style={{
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 40,
                }}
            >
                <KeypadInput
                    value={this.state.value}
                    keypadElement={this.state.keypadElement}
                    onChange={(value, cb) => { 
                        this.setState({value}, cb); 
                        var mydiv = document.getElementById(this.props.containerid);
                        mydiv.setAttribute("math-input-value", {value}.value); } }
                    onFocus={() => this.state.keypadElement.activate()}
                    onBlur={() => this.state.keypadElement.dismiss()}
                />
            </div>
            <Keypad
                onElementMounted={node => {
                    if (node && !this.state.keypadElement) {
                        this.setState({keypadElement: node});
                    }
                }}
            />
        </View>;
    },
});

module.exports = App;
