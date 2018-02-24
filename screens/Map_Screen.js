import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Button,
  Dimensions
} from "react-native";
import { RkText, RkCard, RkStyleSheet, RkTheme } from "react-native-ui-kitten";
import { Header } from "react-navigation";
import NavigatorService from "./../utils/navigator";
import { MapView, Circle, Constants, Location, Permissions } from "expo";

class Map_Screen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    region: {
      latitude: 44.363518,
      longitude: -76.360238,
      latitudeDelta: 13,
      longitudeDelta: 15
    },
    markers: [
      {
        title: "Windsor",
        coordinates: {
          latitude: 42.324966,
          longitude: -83.007179
        }
      },
      {
        title: "London",
        coordinates: {
          latitude: 42.981506,
          longitude: -81.247084
        }
      },
      {
        title: "Kitchener-Waterloo",
        coordinates: {
          latitude: 43.455635,
          longitude: -80.493136
        }
      },
      {
        title: "Pearson Airport",
        coordinates: {
          latitude: 43.678123,
          longitude: -79.624995
        }
      },
      {
        title: "Toronto Union",
        coordinates: {
          latitude: 43.645268,
          longitude: -79.380537
        }
      },
      {
        title: "Toronto East Harbour Transit Hub",
        coordinates: {
          latitude: 43.656494,
          longitude: -79.345338
        }
      },
      {
        title: "Kingston",
        coordinates: {
          latitude: 44.257619,
          longitude: -76.536476
        }
      },
      {
        title: "Ottawa",
        coordinates: {
          latitude: 45.416327,
          longitude: -75.651603
        }
      },
      {
        title: "Montreal",
        coordinates: {
          latitude: 45.499983,
          longitude: -73.566643
        }
      },
      {
        title: "Quebec",
        coordinates: {
          latitude: 46.817582,
          longitude: -71.214163
        }
      }
    ]
  };

  render() {
    return (
      <MapView style={styles.map} initialRegion={this.state.region}>
        {this.state.markers.map((marker, index) => (
          <MapView.Marker
            key={index}
            coordinate={marker.coordinates}
            title={marker.title}
          />
        ))}
        <MapView.Marker
          coordinate={{
            latitude: 43.645268,
            longitude: -79.380537
          }}
          title="You"
          pinColor="#0000FF"
        />
      </MapView>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute"
  }
}));

export default Map_Screen;
