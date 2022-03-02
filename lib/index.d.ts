import { IControl } from "maplibre-gl";
export interface MapLibreBasemapsControlOptions {
    basemaps: Array<{
        id: string;
        tiles: string[];
        sourceExtraParams?: Partial<maplibregl.RasterSourceSpecification>;
        layerExtraParams?: Partial<maplibregl.RasterLayerSpecification>;
    }>;
    initialBasemap: string;
    expandDirection?: "top" | "down" | "left" | "right";
}
export default class BasemapsControl implements IControl {
    _options: MapLibreBasemapsControlOptions;
    _container: HTMLElement;
    constructor(options: MapLibreBasemapsControlOptions);
    onAdd(map: maplibregl.Map): HTMLElement;
    onRemove(): void;
}
