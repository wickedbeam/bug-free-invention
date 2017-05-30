import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.hideInitially();
    this.createWaypoints(offset);
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints(offset) {
  	var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item__is-visible");
        },
        offset: offset
      });
    });
  }
}

export default RevealOnScroll;