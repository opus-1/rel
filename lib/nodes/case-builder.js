// Generated by CoffeeScript 1.10.0
var Case, CaseBuilder, Node, exports, u,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

u = require('underscore');

Node = require('./node');

CaseBuilder = (function() {
  function CaseBuilder(_base) {
    this._base = _base;
    this._cases = [];
    this._else = void 0;
  }

  CaseBuilder.prototype.when = function(cond, res) {
    this._cases.push([cond, res]);
    return this;
  };

  CaseBuilder.prototype["else"] = function(res) {
    this._else = res;
    return this;
  };

  CaseBuilder.prototype.end = function() {
    return new Case(this._base, this._cases, this._else);
  };

  return CaseBuilder;

})();

Case = (function(superClass) {
  extend(Case, superClass);

  function Case(_base, _cases, _else) {
    this._base = _base;
    this._cases = _cases;
    this._else = _else;
    u(this).extend(require('../expressions'));
    u(this).extend(require('../predications'));
  }

  return Case;

})(Node);

exports = module.exports = CaseBuilder;
