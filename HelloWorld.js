import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


class HelloWorld extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://apps-blog-post.herokuapp.com/' }}
      />
    );
  }
}

export default HelloWorld;