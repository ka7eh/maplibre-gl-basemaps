import maplibre from "maplibre-gl";

interface Options {
    basemaps: Array<{
        id: string;
        tiles: string[];
        sourceExtraParams?: Partial<maplibre.RasterSource>;
        layerExtraParams?: Partial<maplibre.RasterLayer>;
    }>;
    initialBasemap: string; // id of the initial basemap
    expandDirection?: "top" | "down" | "left" | "right";
}

export default class BasemapsControl {
    _options: Options;

    _container: HTMLElement;

    constructor(options: Options) {
        this._options = options;

        this._container = document.createElement("div");
        this._container.classList.add("maplibregl-ctrl");
        this._container.classList.add("maplibregl-ctrl-basemaps");
        this._container.classList.add("closed");
        switch (this._options.expandDirection || "right") {
            case "top":
                this._container.classList.add("reverse");
            case "down":
                this._container.classList.add("column");
                break;
            case "left":
                this._container.classList.add("reverse");
            case "right":
                this._container.classList.add("row");
        }

        this._container.addEventListener("mouseenter", () => {
            this._container.classList.remove("closed");
        });
        this._container.addEventListener("mouseleave", () => {
            this._container.classList.add("closed");
        });
    }

    onAdd(map: maplibre.Map): HTMLElement {
        map.on("load", () => {
            this._options.basemaps.forEach(({ id, tiles, sourceExtraParams = {}, layerExtraParams = {} }) => {
                map.addSource(id, {
                    ...sourceExtraParams,
                    type: "raster",
                    tiles
                });
                map.addLayer({ ...layerExtraParams, id, source: id, type: "raster" });

                const basemapContainer = document.createElement("img");
                basemapContainer.src = tiles[0]
                    .replace("{x}", "0")
                    .replace("{y}", "0")
                    .replace("{z}", (sourceExtraParams.minzoom || 0).toString());
                basemapContainer.classList.add("basemap");
                basemapContainer.dataset.id = id;
                basemapContainer.addEventListener("click", () => {
                    const activeElement: HTMLElement = this._container.querySelector(".active");
                    activeElement.classList.remove("active");
                    basemapContainer.classList.add("active");
                    map.setLayoutProperty(activeElement.dataset.id, "visibility", "none");
                    map.setLayoutProperty(id, "visibility", "visible");
                });
                basemapContainer.classList.add("hidden");
                this._container.appendChild(basemapContainer);

                if (this._options.initialBasemap === id) {
                    map.setLayoutProperty(id, "visibility", "visible");
                    basemapContainer.classList.add("active");
                } else {
                    map.setLayoutProperty(id, "visibility", "none");
                }
            });
        });
        return this._container;
    }

    onRemove(): void {
        this._container.parentNode?.removeChild(this._container);
    }
}
