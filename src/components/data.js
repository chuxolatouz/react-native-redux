import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { SearchBar, List, ListItem } from "react-native-elements";
import { getProducts } from "../actions";

class Data extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <View>
        <SearchBar />
        <ScrollView>
          <List>
            {this.props.data.map((l, i) => (
              <ListItem
                key={i}
                title={l.reference.name}
                avatar={{
                  uri: l.reference.image ? l.reference.image.thumb : null
                }}
              />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}
const mS = state => ({
  data: state.dataReducer.data
});

const mD = {
  getProducts
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default connect(mS, mD)(Data);
