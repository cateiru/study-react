import React from 'react'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import * as Format from 'ol/format'
import * as Layer from 'ol/layer'
import { fromLonLat } from 'ol/proj'
import * as Source from 'ol/source'
import {Style, Stroke, Fill} from 'ol/style'
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import './openLayers.css'

export class OpenLayers extends React.Component<{}, {}> {
    map: (Map|undefined)
    container: (HTMLElement | undefined)

    constructor(props: {}){
        super(props)
    }

    componentDidMount() {
        this.map = new Map({
            layers: [
                new Layer.VectorTile({
                    source: new Source.VectorTile({
                      format: new Format.MVT(),
                      url: 'https://earthquake-alert.github.io/maps/pbf_world/world/{z}/{x}/{y}.pbf',
                      attributions: [
                        'Copyright(c) 2020 Earthquake alert / 地図データ: Natural Earth',
                      ],
                    }),
                    style: new Style({
                      fill: new Fill({
                        color: '#262626',
                      }),
                      stroke: new Stroke({
                        color: '#a6a6a6',
                        width: 2,
                      }),
                    }),
                    maxZoom: 5,
                    minZoom: 0,
                    minResolution: 5000,
                  })
            ],
            target: this.container,
            view: new View({
              center: [0, 0],
              zoom: 2,
            }),
          })
    }

    render() {
        return (
            <div className={'map'} ref={(e) => (this.container = e as (HTMLElement | undefined))}></div>
        )
    }
}
