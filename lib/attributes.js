// Generated by CoffeeScript 1.10.0
var AttrBoolean, AttrDecimal, AttrFloat, AttrInteger, AttrString, AttrTime, AttrUndefined, Attribute, Attributes, exports, u,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

u = require('underscore');

Attribute = require('./attribute');

Attributes = {
  Attribute: Attribute,
  AttrString: AttrString = (function(superClass) {
    extend(AttrString, superClass);

    function AttrString() {
      return AttrString.__super__.constructor.apply(this, arguments);
    }

    return AttrString;

  })(Attribute),
  AttrTime: AttrTime = (function(superClass) {
    extend(AttrTime, superClass);

    function AttrTime() {
      return AttrTime.__super__.constructor.apply(this, arguments);
    }

    return AttrTime;

  })(Attribute),
  AttrBoolean: AttrBoolean = (function(superClass) {
    extend(AttrBoolean, superClass);

    function AttrBoolean() {
      return AttrBoolean.__super__.constructor.apply(this, arguments);
    }

    return AttrBoolean;

  })(Attribute),
  AttrDecimal: AttrDecimal = (function(superClass) {
    extend(AttrDecimal, superClass);

    function AttrDecimal() {
      return AttrDecimal.__super__.constructor.apply(this, arguments);
    }

    return AttrDecimal;

  })(Attribute),
  AttrFloat: AttrFloat = (function(superClass) {
    extend(AttrFloat, superClass);

    function AttrFloat() {
      return AttrFloat.__super__.constructor.apply(this, arguments);
    }

    return AttrFloat;

  })(Attribute),
  AttrInteger: AttrInteger = (function(superClass) {
    extend(AttrInteger, superClass);

    function AttrInteger() {
      return AttrInteger.__super__.constructor.apply(this, arguments);
    }

    return AttrInteger;

  })(Attribute),
  AttrUndefined: AttrUndefined = (function(superClass) {
    extend(AttrUndefined, superClass);

    function AttrUndefined() {
      return AttrUndefined.__super__.constructor.apply(this, arguments);
    }

    return AttrUndefined;

  })(Attribute)
};

exports = module.exports = Attributes;
