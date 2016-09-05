// Generated by CoffeeScript 1.10.0
var FunctionNode, Node, SqlLiteral, exports, u,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

u = require('underscore');

Node = require('./node');

SqlLiteral = require('./sql-literal');

FunctionNode = (function(superClass) {
  extend(FunctionNode, superClass);

  function FunctionNode(expr, aliaz) {
    var Expressions, Predications;
    if (aliaz == null) {
      aliaz = null;
    }
    this.expressions = expr;
    this.alias = aliaz;
    this.distinct = false;
    Expressions = require('../expressions');
    Predications = require('../predications');
    u(this).extend(Expressions);
    u(this).extend(Predications);
  }

  FunctionNode.prototype.as = function(aliaz) {
    this.alias = new SqlLiteral(aliaz);
    return this;
  };

  return FunctionNode;

})(Node);

exports = module.exports = FunctionNode;