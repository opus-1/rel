// Generated by CoffeeScript 1.10.0
var Default, ToSql, exports,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ToSql = require('./to-sql');

Default = (function(superClass) {
  extend(Default, superClass);

  function Default() {
    return Default.__super__.constructor.apply(this, arguments);
  }

  return Default;

})(ToSql);

exports = module.exports = Default;