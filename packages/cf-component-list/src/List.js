const React = require('react');
const {PropTypes} = React;

class List extends React.Component {
  render() {
    let tagName = 'ul';
    let className = 'cf-list';

    if (this.props.ordered) {
      tagName = 'ol';
      className += ' cf-list--ordered';
    }

    if (this.props.unstyled) {
      className += ' cf-list--unstyled';
    }

    return React.createElement(tagName, { className }, this.props.children);
  }
}

List.propTypes = {
  ordered: PropTypes.bool,
  unstyled: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.node)
};

List.defaultProps = {
  ordered: false,
  unstyled: false
};

module.exports = List;
