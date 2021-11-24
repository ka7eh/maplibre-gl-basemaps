import maplibre from "maplibre-gl";
interface Options {
    basemaps: Array<{
        id: string;
        tiles: string[];
        sourceExtraParams?: Partial<maplibre.RasterSource>;
        layerExtraParams?: Partial<maplibre.RasterLayer>;
    }>;
    initialBasemap: string;
    expandDirection?: "top" | "down" | "left" | "right";
}
export default class BasemapsControl {
    _options: Options;
    _container: HTMLElement;
    constructor(options: Options);
    onAdd(map: maplibre.Map): HTMLElement;
    onRemove(): void;
}
export {};
