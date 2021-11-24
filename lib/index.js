(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f():typeof define==='function'&&define.amd?define(f):(g=typeof globalThis!=='undefined'?globalThis:g||self,g.MaplibreGLBasemapsControl=f());})(this,(function(){'use strict';class BasemapsControl {
    constructor(options) {
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
    onAdd(map) {
        map.on("load", () => {
            this._options.basemaps.forEach(({ id, tiles, sourceExtraParams = {}, layerExtraParams = {} }) => {
                map.addSource(id, Object.assign(Object.assign({}, sourceExtraParams), { type: "raster", tiles }));
                map.addLayer(Object.assign(Object.assign({}, layerExtraParams), { id, source: id, type: "raster" }));
                const basemapContainer = document.createElement("img");
                basemapContainer.src = tiles[0]
                    .replace("{x}", "0")
                    .replace("{y}", "0")
                    .replace("{z}", (sourceExtraParams.minzoom || 0).toString());
                basemapContainer.classList.add("basemap");
                basemapContainer.dataset.id = id;
                basemapContainer.addEventListener("click", () => {
                    const activeElement = this._container.querySelector(".active");
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
                }
                else {
                    map.setLayoutProperty(id, "visibility", "none");
                }
            });
        });
        return this._container;
    }
    onRemove() {
        var _a;
        (_a = this._container.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this._container);
    }
}return BasemapsControl;}));//# sourceMappingURL=index.js.map
