# MapLibre GL Basemaps Control

> The core interactions and stying of this control is based on [Leaflet.Basemaps](https://github.com/consbio/Leaflet.Basemaps)

A Maplibre GL Control for switching between basemaps.

> This should work with Mapbox GL too. See `examples/index.mapboxgl.html`. You need to add a Mapbox access token to run this example.

## Usage

```{js}
import BasemapsControl from 'maplibre-gl-basemaps';

map.addControl(new BasemapsControl(options));
```

To run the examples locally, install the dependencies and run `npm run examples`.

Go to `localhost:8080` for Maplibre GL example and `localhost:8080/index.mapbox.html` for Mapbox GL example.

## Options

#### Control options

| Attribute       | Description                                                                        | Default value |
|-----------------|------------------------------------------------------------------------------------|---------------|
| basemaps        | An array of basemap objects (see the table below for attributes of basemap object) | -             |
| initialBasemap  | Id of the basemap to set to active on initialization                               | -             |
| expandDirection | The direction that the control expand on hover                                     | right         |

#### Basemap object

| Attribute         | Description                                                                                                                                         |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| id                | The string to use for both the basemap source and layer                                                                                             |
| tiles             | An array of one or more tile source URLs, as in the TileJSON spec (https://maplibre.org/maplibre-gl-js-docs/style-spec/sources/#raster-tiles)       |
| sourceExtraParams | Other parameters accepted by MapLibre GL raster source to pass to the basemap (https://maplibre.org/maplibre-gl-js-docs/style-spec/sources/#raster) |
| layerExtraParams  | Other parameters accepted by MapLibre GL raster layer to pass to the basemap (https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#raster)   |
