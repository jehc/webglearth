/*
 * Copyright (C) 2011 Klokan Technologies GmbH (info@klokantech.com)
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU GPL for more details.
 *
 * USE OF THIS CODE OR ANY PART OF IT IN A NONFREE SOFTWARE IS NOT ALLOWED
 * WITHOUT PRIOR WRITTEN PERMISSION FROM KLOKAN TECHNOLOGIES GMBH.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 */

/**
 * @fileoverview Tile provider for MapQuest OSM tiles.
 *
 * @author petr.sloup@klokantech.com (Petr Sloup)
 *
 */

goog.provide('we.texturing.MapQuestTileProvider');

goog.require('goog.math');
goog.require('goog.string.StringBuffer');

goog.require('we.texturing.OSMTileProvider');



/**
 * Tile provider for MapQuest OSM tiles.
 * @constructor
 * @extends {we.texturing.OSMTileProvider}
 * @inheritDoc
 */
we.texturing.MapQuestTileProvider = function() {
  goog.base(this, 'MapQuest OSM');
};
goog.inherits(we.texturing.MapQuestTileProvider, we.texturing.OSMTileProvider);


/** @inheritDoc */
we.texturing.MapQuestTileProvider.prototype.getTileURL = function(zoom, x, y) {
  return new goog.string.StringBuffer('http://otile',
      1 + goog.math.randomInt(3),
      '.mqcdn.com/tiles/1.0.0/osm/', zoom, '/', x, '/', y, '.png').toString();
};


/** @inheritDoc */
we.texturing.MapQuestTileProvider.prototype.appendCopyrightContent =
    function(element) {
  goog.dom.append(element, 'Map data © ',
      goog.dom.createDom('a',
      {href: 'http://www.openstreetmap.org/'},
      'OpenStreetMap'),
      ' contributors, CC-BY-SA',
      goog.dom.createDom('br'));
  goog.dom.append(element, 'Tiles Courtesy of ',
      goog.dom.createDom('a',
      {href: 'http://open.mapquest.co.uk/'},
      'MapQuest'),
      ' ',
      goog.dom.createDom('img',
      {src: 'http://developer.mapquest.com/content/osm/mq_logo.png',
        border: 0}));
};
