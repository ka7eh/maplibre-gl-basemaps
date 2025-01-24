# MapLibre GL Basemaps Control

> The core interactions and styling of this control is based on [Leaflet.Basemaps](https://github.com/consbio/Leaflet.Basemaps)

A Maplibre GL Control for switching between basemaps. The control only supports raster sources.

[Demo](https://ka7eh.github.io/maplibre-gl-basemaps/example)

## Installation

```bash
npm install maplibre-gl-basemaps
```

## Usage

```{js}
import BasemapsControl from 'maplibre-gl-basemaps';
import 'maplibre-gl-basemaps/lib/basemaps.css';

map.addControl(new BasemapsControl(options));
```

To run the examples locally, install the dependencies and run `npm run examples`.
Access the examples at `localhost:8080`.

## Options

#### Control options

| Attribute       | Description                                                                        | Default value |
|-----------------|------------------------------------------------------------------------------------|---------------|
| basemaps        | An array of basemap objects (see the table below for attributes of basemap object) | -             |
| initialBasemap  | Id of the basemap to set to active on initialization                               | -             |
| expandDirection | The direction that the control expand on hover                                     | right         |

#### Basemap object

| Attribute         | Description                                                                                                                              |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| id                | The string to use for both the basemap source and layer                                                                                  |
| tiles             | An array of one or more tile source URLs, as in the TileJSON spec (https://maplibre.org/maplibre-style-spec/sources/#raster)             |
| sourceExtraParams | Other parameters accepted by MapLibre GL raster source to pass to the basemap (https://maplibre.org/maplibre-style-spec/sources/#raster) |
| layerExtraParams  | Other parameters accepted by MapLibre GL raster layer to pass to the basemap (https://maplibre.org/maplibre-style-spec/sources/#raster)  |
