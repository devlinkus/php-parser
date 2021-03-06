/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "useitem";

/**
 * Defines a use statement (from namespace)
 * @constructor UseItem
 * @extends {Statement}
 * @property {String} name
 * @property {String|null} type - Possible value : function, const
 * @property {String|null} alias
 * @see {Namespace}
 * @see http://php.net/manual/en/language.namespaces.importing.php
 */
const UseItem = Statement.extends(KIND, function UseItem(
  name,
  alias,
  type,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.name = name;
  this.alias = alias;
  this.type = type;
});

/**
 * Importing a constant
 * @constant {String} TYPE_CONST
 */
UseItem.TYPE_CONST = "const";
/**
 * Importing a function
 * @constant {String} TYPE_FUNC
 */
UseItem.TYPE_FUNCTION = "function";

module.exports = UseItem;
