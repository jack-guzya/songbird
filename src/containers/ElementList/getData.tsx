/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
// Types
import { IElementsList } from './types';

const getData = (View: React.ComponentClass): React.ComponentClass => (
  class extends Component<IElementsList> {
    componentDidMount() {
      const {
        elementsList, data, categories, setElementsList,
      } = this.props;
      if (elementsList) { return; }

      const currentList = data.list[categories.current];
      setElementsList(currentList);
    }

    render() {
      return (
        <View {...this.props} />
      );
    }
  }
);

export default getData;
