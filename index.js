var React = require('react-native');
var View = React.View;
var Text = React.Text;

var Del = React.createClass({
  propTypes: {
    lineThickness: React.PropTypes.number,
    lineTopOffset: React.PropTypes.number,
    lineColor: React.PropTypes.string,
  },
  getDefaultProps: function(){
    return {
      lineThickness: 1,
      lineTopOffset: 8,
    }
  },
  render: function(){

    return <View>
        <Text style={this.props.style}>{this.props.children}</Text>
        <Text style={[this.props.style, {
            height: this.props.lineThickness,
            top: this.props.lineTopOffset,
            backgroundColor: this.props.lineColor,
            position: 'absolute',
            }]}>{this.props.children}</Text>
      </View>
  }
})

module.exports = Del;
