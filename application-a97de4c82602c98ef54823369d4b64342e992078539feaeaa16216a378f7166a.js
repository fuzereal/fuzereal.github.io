/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */;

(function() {
  var context = this;

  (function() {
    (function() {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };

    }).call(this);
  }).call(context);

  var Rails = context.Rails;

  (function() {
    (function() {
      var nonce;

      nonce = null;

      Rails.loadCSPNonce = function() {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function() {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };

    }).call(this);
    (function() {
      var expando, m;

      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function(element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function(element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function(element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }
        return element[expando][key] = value;
      };

      Rails.$ = function(selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };

    }).call(this);
    (function() {
      var $, csrfParam, csrfToken;

      $ = Rails.$;

      csrfToken = Rails.csrfToken = function() {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function() {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function(xhr) {
        var token;
        token = csrfToken();
        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function() {
        var param, token;
        token = csrfToken();
        param = csrfParam();
        if ((token != null) && (param != null)) {
          return $('form input[name="' + param + '"]').forEach(function(input) {
            return input.value = token;
          });
        }
      };

    }).call(this);
    (function() {
      var CustomEvent, fire, matches, preventDefault;

      matches = Rails.matches;

      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };
        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;
        CustomEvent.prototype.preventDefault = function() {
          var result;
          result = preventDefault.call(this);
          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function() {
                return true;
              }
            });
          }
          return result;
        };
      }

      fire = Rails.fire = function(obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function(e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function(element, selector, eventType, handler) {
        return element.addEventListener(eventType, function(e) {
          var target;
          target = e.target;
          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }
          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };

    }).call(this);
    (function() {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;

      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;

      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function(options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function() {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));
          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }
          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });
        if ((options.beforeSend != null) && !options.beforeSend(xhr, options)) {
          return false;
        }
        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();
        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }
        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }
        options.accept = AcceptHeaders[options.dataType];
        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }
        return options;
      };

      createXHR = function(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);
        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }
        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }
        xhr.withCredentials = !!options.withCredentials;
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };
        return xhr;
      };

      processResponse = function(response, type) {
        var parser, script;
        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');
            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }
        return response;
      };

      Rails.href = function(element) {
        return element.href;
      };

      Rails.isCrossDomain = function(url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');
        try {
          urlAnchor.href = url;
          return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) || (originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host));
        } catch (error) {
          e = error;
          return true;
        }
      };

    }).call(this);
    (function() {
      var matches, toArray;

      matches = Rails.matches;

      toArray = function(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function(element, additionalParam) {
        var inputs, params;
        inputs = [element];
        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }
        params = [];
        inputs.forEach(function(input) {
          if (!input.name || input.disabled) {
            return;
          }
          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }
          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function(option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });
        if (additionalParam) {
          params.push(additionalParam);
        }
        return params.map(function(param) {
          if (param.name != null) {
            return (encodeURIComponent(param.name)) + "=" + (encodeURIComponent(param.value));
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function(form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function(el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };

    }).call(this);
    (function() {
      var allowAction, fire, stopEverything;

      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function(e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function(message, element) {
        return confirm(message);
      };

      allowAction = function(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');
        if (!message) {
          return true;
        }
        answer = false;
        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}
          callback = fire(element, 'confirm:complete', [answer]);
        }
        return answer && callback;
      };

    }).call(this);
    (function() {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;

      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function(e) {
        var element;
        element = this;
        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function(e) {
        var element;
        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }
          element = e.target;
        } else {
          element = e;
        }
        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function(e) {
        var element;
        element = e instanceof Event ? e.target : e;
        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function(element) {
        var replacement;
        if (getData(element, 'ujs:disabled')) {
          return;
        }
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }
        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }
        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function(element) {
        var replacement;
        if (getData(element, 'ujs:disabled')) {
          return;
        }
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }
        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }
          setData(element, 'ujs:enable-with', null);
        }
        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };

    }).call(this);
    (function() {
      var stopEverything;

      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function(e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');
        if (!method) {
          return;
        }
        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";
        if ((csrfParam != null) && (csrfToken != null) && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }
        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };

    }).call(this);
    (function() {
      var ajax, fire, getData, isCrossDomain, isRemote, matches, serializeElement, setData, stopEverything,
        slice = [].slice;

      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function(element) {
        var value;
        value = element.getAttribute('data-remote');
        return (value != null) && value !== 'false';
      };

      Rails.handleRemote = function(e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;
        if (!isRemote(element)) {
          return true;
        }
        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }
        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';
        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;
          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }
          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);
            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }
          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }
        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: (withCredentials != null) && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function(e) {
        var button, form;
        button = this;
        form = button.form;
        if (!form) {
          return;
        }
        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }
        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function(e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = (e.button != null) && e.button !== 0;
        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };

    }).call(this);
    (function() {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;

      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if ((typeof jQuery !== "undefined" && jQuery !== null) && (jQuery.ajax != null)) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }
        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function(options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function() {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }
        window.addEventListener('pageshow', function() {
          $(Rails.formEnableSelector).forEach(function(el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function(el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function(e) {
          return setTimeout((function() {
            return disableElement(e);
          }), 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }

    }).call(this);
  }).call(this);

  if (typeof module === "object" && module.exports) {
    module.exports = Rails;
  } else if (typeof define === "function" && define.amd) {
    define(Rails);
  }
}).call(this);
/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function(){var t=this;(function(){(function(){this.Turbolinks={supported:function(){return null!=window.history.pushState&&null!=window.requestAnimationFrame&&null!=window.addEventListener}(),visit:function(t,r){return e.controller.visit(t,r)},clearCache:function(){return e.controller.clearCache()},setProgressBarDelay:function(t){return e.controller.setProgressBarDelay(t)}}}).call(this)}).call(t);var e=t.Turbolinks;(function(){(function(){var t,r,n,o=[].slice;e.copyObject=function(t){var e,r,n;r={};for(e in t)n=t[e],r[e]=n;return r},e.closest=function(e,r){return t.call(e,r)},t=function(){var t,e;return t=document.documentElement,null!=(e=t.closest)?e:function(t){var e;for(e=this;e;){if(e.nodeType===Node.ELEMENT_NODE&&r.call(e,t))return e;e=e.parentNode}}}(),e.defer=function(t){return setTimeout(t,1)},e.throttle=function(t){var e;return e=null,function(){var r;return r=1<=arguments.length?o.call(arguments,0):[],null!=e?e:e=requestAnimationFrame(function(n){return function(){return e=null,t.apply(n,r)}}(this))}},e.dispatch=function(t,e){var r,o,i,s,a,u;return a=null!=e?e:{},u=a.target,r=a.cancelable,o=a.data,i=document.createEvent("Events"),i.initEvent(t,!0,r===!0),i.data=null!=o?o:{},i.cancelable&&!n&&(s=i.preventDefault,i.preventDefault=function(){return this.defaultPrevented||Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),s.call(this)}),(null!=u?u:document).dispatchEvent(i),i},n=function(){var t;return t=document.createEvent("Events"),t.initEvent("test",!0,!0),t.preventDefault(),t.defaultPrevented}(),e.match=function(t,e){return r.call(t,e)},r=function(){var t,e,r,n;return t=document.documentElement,null!=(e=null!=(r=null!=(n=t.matchesSelector)?n:t.webkitMatchesSelector)?r:t.msMatchesSelector)?e:t.mozMatchesSelector}(),e.uuid=function(){var t,e,r;for(r="",t=e=1;36>=e;t=++e)r+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return r}}).call(this),function(){e.Location=function(){function t(t){var e,r;null==t&&(t=""),r=document.createElement("a"),r.href=t.toString(),this.absoluteURL=r.href,e=r.hash.length,2>e?this.requestURL=this.absoluteURL:(this.requestURL=this.absoluteURL.slice(0,-e),this.anchor=r.hash.slice(1))}var e,r,n,o;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=r(t),this.isEqualTo(t)||o(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},r=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return n(t,"/")?t:t+"/"},o=function(t,e){return t.slice(0,e.length)===e},n=function(t,e){return t.slice(-e.length)===e},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.HttpRequest=function(){function r(r,n,o){this.delegate=r,this.requestCanceled=t(this.requestCanceled,this),this.requestTimedOut=t(this.requestTimedOut,this),this.requestFailed=t(this.requestFailed,this),this.requestLoaded=t(this.requestLoaded,this),this.requestProgressed=t(this.requestProgressed,this),this.url=e.Location.wrap(n).requestURL,this.referrer=e.Location.wrap(o).absoluteURL,this.createXHR()}return r.NETWORK_FAILURE=0,r.TIMEOUT_FAILURE=-1,r.timeout=60,r.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},r.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},r.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},r.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},r.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},r.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},r.prototype.requestCanceled=function(){return this.endRequest()},r.prototype.notifyApplicationBeforeRequestStart=function(){return e.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},r.prototype.notifyApplicationAfterRequestEnd=function(){return e.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},r.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},r.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},r.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},r.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ProgressBar=function(){function e(){this.trickle=t(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement()}var r;return r=300,e.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width "+r+"ms ease-out, opacity "+r/2+"ms "+r/2+"ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",e.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},e.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},e.prototype.setValue=function(t){return this.value=t,this.refresh()},e.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},e.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},e.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,1.5*r)},e.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},e.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,r)},e.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},e.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},e.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},e.prototype.createStylesheetElement=function(){var t;return t=document.createElement("style"),t.type="text/css",t.textContent=this.constructor.defaultCSS,t},e.prototype.createProgressElement=function(){var t;return t=document.createElement("div"),t.className="turbolinks-progress-bar",t},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.BrowserAdapter=function(){function r(r){this.controller=r,this.showProgressBar=t(this.showProgressBar,this),this.progressBar=new e.ProgressBar}var n,o,i;return i=e.HttpRequest,n=i.NETWORK_FAILURE,o=i.TIMEOUT_FAILURE,r.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},r.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.loadCachedSnapshot()},r.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},r.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},r.prototype.visitRequestCompleted=function(t){return t.loadResponse()},r.prototype.visitRequestFailedWithStatusCode=function(t,e){switch(e){case n:case o:return this.reload();default:return t.loadResponse()}},r.prototype.visitRequestFinished=function(t){return this.hideProgressBar()},r.prototype.visitCompleted=function(t){return t.followRedirect()},r.prototype.pageInvalidated=function(){return this.reload()},r.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,this.controller.progressBarDelay)},r.prototype.showProgressBar=function(){return this.progressBar.show()},r.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},r.prototype.reload=function(){return window.location.reload()},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.History=function(){function r(e){this.delegate=e,this.onPageLoad=t(this.onPageLoad,this),this.onPopState=t(this.onPopState,this)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1):void 0},r.prototype.push=function(t,r){return t=e.Location.wrap(t),this.update("push",t,r)},r.prototype.replace=function(t,r){return t=e.Location.wrap(t),this.update("replace",t,r)},r.prototype.onPopState=function(t){var r,n,o,i;return this.shouldHandlePopState()&&(i=null!=(n=t.state)?n.turbolinks:void 0)?(r=e.Location.wrap(window.location),o=i.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(r,o)):void 0},r.prototype.onPageLoad=function(t){return e.defer(function(t){return function(){return t.pageLoaded=!0}}(this))},r.prototype.shouldHandlePopState=function(){return this.pageIsLoaded()},r.prototype.pageIsLoaded=function(){return this.pageLoaded||"complete"===document.readyState},r.prototype.update=function(t,e,r){var n;return n={turbolinks:{restorationIdentifier:r}},history[t+"State"](n,null,e)},r}()}.call(this),function(){e.HeadDetails=function(){function t(t){var e,r,n,s,a,u;for(this.elements={},n=0,a=t.length;a>n;n++)u=t[n],u.nodeType===Node.ELEMENT_NODE&&(s=u.outerHTML,r=null!=(e=this.elements)[s]?e[s]:e[s]={type:i(u),tracked:o(u),elements:[]},r.elements.push(u))}var e,r,n,o,i;return t.fromHeadElement=function(t){var e;return new this(null!=(e=null!=t?t.childNodes:void 0)?e:[])},t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t,e;return function(){var r,n;r=this.elements,n=[];for(t in r)e=r[t].tracked,e&&n.push(t);return n}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var r,n,o,i,s,a;o=this.elements,s=[];for(n in o)i=o[n],a=i.type,r=i.elements,a!==t||e.hasElementWithKey(n)||s.push(r[0]);return s},t.prototype.getProvisionalElements=function(){var t,e,r,n,o,i,s;r=[],n=this.elements;for(e in n)o=n[e],s=o.type,i=o.tracked,t=o.elements,null!=s||i?t.length>1&&r.push.apply(r,t.slice(1)):r.push.apply(r,t);return r},t.prototype.getMetaValue=function(t){var e;return null!=(e=this.findMetaElementByName(t))?e.getAttribute("content"):void 0},t.prototype.findMetaElementByName=function(t){var r,n,o,i;r=void 0,i=this.elements;for(o in i)n=i[o].elements,e(n[0],t)&&(r=n[0]);return r},i=function(t){return r(t)?"script":n(t)?"stylesheet":void 0},o=function(t){return"reload"===t.getAttribute("data-turbolinks-track")},r=function(t){var e;return e=t.tagName.toLowerCase(),"script"===e},n=function(t){var e;return e=t.tagName.toLowerCase(),"style"===e||"link"===e&&"stylesheet"===t.getAttribute("rel")},e=function(t,e){var r;return r=t.tagName.toLowerCase(),"meta"===r&&t.getAttribute("name")===e},t}()}.call(this),function(){e.Snapshot=function(){function t(t,e){this.headDetails=t,this.bodyElement=e}return t.wrap=function(t){return t instanceof this?t:"string"==typeof t?this.fromHTMLString(t):this.fromHTMLElement(t)},t.fromHTMLString=function(t){var e;return e=document.createElement("html"),e.innerHTML=t,this.fromHTMLElement(e)},t.fromHTMLElement=function(t){var r,n,o,i;return o=t.querySelector("head"),r=null!=(i=t.querySelector("body"))?i:document.createElement("body"),n=e.HeadDetails.fromHeadElement(o),new this(n,r)},t.prototype.clone=function(){return new this.constructor(this.headDetails,this.bodyElement.cloneNode(!0))},t.prototype.getRootLocation=function(){var t,r;return r=null!=(t=this.getSetting("root"))?t:"/",new e.Location(r)},t.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},t.prototype.getElementForAnchor=function(t){try{return this.bodyElement.querySelector("[id='"+t+"'], a[name='"+t+"']")}catch(e){}},t.prototype.getPermanentElements=function(){return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")},t.prototype.getPermanentElementById=function(t){return this.bodyElement.querySelector("#"+t+"[data-turbolinks-permanent]")},t.prototype.getPermanentElementsPresentInSnapshot=function(t){var e,r,n,o,i;for(o=this.getPermanentElements(),i=[],r=0,n=o.length;n>r;r++)e=o[r],t.getPermanentElementById(e.id)&&i.push(e);return i},t.prototype.findFirstAutofocusableElement=function(){return this.bodyElement.querySelector("[autofocus]")},t.prototype.hasAnchor=function(t){return null!=this.getElementForAnchor(t)},t.prototype.isPreviewable=function(){return"no-preview"!==this.getCacheControlValue()},t.prototype.isCacheable=function(){return"no-cache"!==this.getCacheControlValue()},t.prototype.isVisitable=function(){return"reload"!==this.getSetting("visit-control")},t.prototype.getSetting=function(t){return this.headDetails.getMetaValue("turbolinks-"+t)},t}()}.call(this),function(){var t=[].slice;e.Renderer=function(){function e(){}var r;return e.render=function(){var e,r,n,o;return n=arguments[0],r=arguments[1],e=3<=arguments.length?t.call(arguments,2):[],o=function(t,e,r){r.prototype=t.prototype;var n=new r,o=t.apply(n,e);return Object(o)===o?o:n}(this,e,function(){}),o.delegate=n,o.render(r),o},e.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},e.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},e.prototype.createScriptElement=function(t){var e;return"false"===t.getAttribute("data-turbolinks-eval")?t:(e=document.createElement("script"),e.textContent=t.textContent,e.async=!1,r(e,t),e)},r=function(t,e){var r,n,o,i,s,a,u;for(i=e.attributes,a=[],r=0,n=i.length;n>r;r++)s=i[r],o=s.name,u=s.value,a.push(t.setAttribute(o,u));return a},e}()}.call(this),function(){var t,r,n=function(t,e){function r(){this.constructor=t}for(var n in e)o.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;e.SnapshotRenderer=function(e){function o(t,e,r){this.currentSnapshot=t,this.newSnapshot=e,this.isPreview=r,this.currentHeadDetails=this.currentSnapshot.headDetails,this.newHeadDetails=this.newSnapshot.headDetails,this.currentBody=this.currentSnapshot.bodyElement,this.newBody=this.newSnapshot.bodyElement}return n(o,e),o.prototype.render=function(t){return this.shouldRender()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.isPreview||e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},o.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},o.prototype.replaceBody=function(){var t;return t=this.relocateCurrentBodyPermanentElements(),this.activateNewBodyScriptElements(),this.assignNewBody(),this.replacePlaceholderElementsWithClonedPermanentElements(t)},o.prototype.shouldRender=function(){return this.newSnapshot.isVisitable()&&this.trackedElementsAreIdentical()},o.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},o.prototype.copyNewHeadStylesheetElements=function(){var t,e,r,n,o;for(n=this.getNewHeadStylesheetElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},o.prototype.copyNewHeadScriptElements=function(){var t,e,r,n,o;for(n=this.getNewHeadScriptElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(this.createScriptElement(t)));return o},o.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getCurrentHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.removeChild(t));return o},o.prototype.copyNewHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getNewHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},o.prototype.relocateCurrentBodyPermanentElements=function(){var e,n,o,i,s,a,u;for(a=this.getCurrentBodyPermanentElements(),u=[],e=0,n=a.length;n>e;e++)i=a[e],s=t(i),o=this.newSnapshot.getPermanentElementById(i.id),r(i,s.element),r(o,i),u.push(s);return u},o.prototype.replacePlaceholderElementsWithClonedPermanentElements=function(t){var e,n,o,i,s,a,u;for(u=[],o=0,i=t.length;i>o;o++)a=t[o],n=a.element,s=a.permanentElement,e=s.cloneNode(!0),u.push(r(n,e));return u},o.prototype.activateNewBodyScriptElements=function(){var t,e,n,o,i,s;for(i=this.getNewBodyScriptElements(),s=[],e=0,o=i.length;o>e;e++)n=i[e],t=this.createScriptElement(n),s.push(r(n,t));return s},o.prototype.assignNewBody=function(){return document.body=this.newBody},o.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.newSnapshot.findFirstAutofocusableElement())?t.focus():void 0},o.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},o.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},o.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},o.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},o.prototype.getCurrentBodyPermanentElements=function(){return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)},o.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},o}(e.Renderer),t=function(t){var e;return e=document.createElement("meta"),e.setAttribute("name","turbolinks-permanent-placeholder"),e.setAttribute("content",t.id),{element:e,permanentElement:t}},r=function(t,e){var r;return(r=t.parentNode)?r.replaceChild(e,t):void 0}}.call(this),function(){var t=function(t,e){function n(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;e.ErrorRenderer=function(e){function r(t){var e;e=document.createElement("html"),e.innerHTML=t,this.newHead=e.querySelector("head"),this.newBody=e.querySelector("body")}return t(r,e),r.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceHeadAndBody(),e.activateBodyScriptElements(),t()}}(this))},r.prototype.replaceHeadAndBody=function(){var t,e;return e=document.head,t=document.body,e.parentNode.replaceChild(this.newHead,e),t.parentNode.replaceChild(this.newBody,t)},r.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},r.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},r}(e.Renderer)}.call(this),function(){e.View=function(){function t(t){this.delegate=t,this.htmlElement=document.documentElement}return t.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},t.prototype.getElementForAnchor=function(t){return this.getSnapshot().getElementForAnchor(t)},t.prototype.getSnapshot=function(){return e.Snapshot.fromHTMLElement(this.htmlElement)},t.prototype.render=function(t,e){var r,n,o;return o=t.snapshot,r=t.error,n=t.isPreview,this.markAsPreview(n),null!=o?this.renderSnapshot(o,n,e):this.renderError(r,e)},t.prototype.markAsPreview=function(t){return t?this.htmlElement.setAttribute("data-turbolinks-preview",""):this.htmlElement.removeAttribute("data-turbolinks-preview")},t.prototype.renderSnapshot=function(t,r,n){return e.SnapshotRenderer.render(this.delegate,n,this.getSnapshot(),e.Snapshot.wrap(t),r)},t.prototype.renderError=function(t,r){return e.ErrorRenderer.render(this.delegate,r,t)},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ScrollManager=function(){function r(r){this.delegate=r,this.onScroll=t(this.onScroll,this),this.onScroll=e.throttle(this.onScroll)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},r.prototype.scrollToElement=function(t){return t.scrollIntoView()},r.prototype.scrollToPosition=function(t){var e,r;return e=t.x,r=t.y,window.scrollTo(e,r)},r.prototype.onScroll=function(t){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},r.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},r}()}.call(this),function(){e.SnapshotCache=function(){function t(t){this.size=t,this.keys=[],this.snapshots={}}var r;return t.prototype.has=function(t){var e;return e=r(t),e in this.snapshots},t.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},t.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},t.prototype.read=function(t){var e;return e=r(t),this.snapshots[e]},t.prototype.write=function(t,e){var n;return n=r(t),this.snapshots[n]=e},t.prototype.touch=function(t){var e,n;return n=r(t),e=this.keys.indexOf(n),e>-1&&this.keys.splice(e,1),this.keys.unshift(n),this.trim()},t.prototype.trim=function(){var t,e,r,n,o;for(n=this.keys.splice(this.size),o=[],t=0,r=n.length;r>t;t++)e=n[t],o.push(delete this.snapshots[e]);return o},r=function(t){return e.Location.wrap(t).toCacheKey()},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Visit=function(){function r(r,n,o){this.controller=r,this.action=o,this.performScroll=t(this.performScroll,this),this.identifier=e.uuid(),this.location=e.Location.wrap(n),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={}}var n;return r.prototype.start=function(){return"initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},r.prototype.cancel=function(){var t;return"started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},r.prototype.complete=function(){var t;return"started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},r.prototype.fail=function(){var t;return"started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},r.prototype.changeHistory=function(){var t,e;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,e=n(t),this.controller[e](this.location,this.restorationIdentifier),this.historyChanged=!0)},r.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new e.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},r.prototype.getCachedSnapshot=function(){var t;return!(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},r.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},r.prototype.loadCachedSnapshot=function(){var t,e;return(e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render(function(){var r;return this.cacheSnapshot(),this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(r=this.adapter).visitRendered&&r.visitRendered(this),t?void 0:this.complete()})):void 0},r.prototype.loadResponse=function(){return null!=this.response?this.render(function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())}):void 0},r.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},r.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},r.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},r.prototype.requestCompletedWithResponse=function(t,r){return this.response=t,null!=r&&(this.redirectedToLocation=e.Location.wrap(r)),this.adapter.visitRequestCompleted(this)},r.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},r.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},r.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},r.prototype.scrollToRestoredPosition=function(){var t,e;return t=null!=(e=this.restorationData)?e.scrollPosition:void 0,null!=t?(this.controller.scrollToPosition(t),!0):void 0},r.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},r.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},r.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},r.prototype.getTimingMetrics=function(){return e.copyObject(this.timingMetrics)},n=function(t){switch(t){case"replace":return"replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return"pushHistoryWithLocationAndRestorationIdentifier"}},r.prototype.shouldIssueRequest=function(){return"restore"===this.action?!this.hasCachedSnapshot():!0},r.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},r.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},r.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Controller=function(){function r(){this.clickBubbled=t(this.clickBubbled,this),this.clickCaptured=t(this.clickCaptured,this),this.pageLoaded=t(this.pageLoaded,this),this.history=new e.History(this),this.view=new e.View(this),this.scrollManager=new e.ScrollManager(this),this.restorationData={},this.clearCache(),this.setProgressBarDelay(500)}return r.prototype.start=function(){return e.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},r.prototype.disable=function(){return this.enabled=!1},r.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},r.prototype.clearCache=function(){return this.cache=new e.SnapshotCache(10)},r.prototype.visit=function(t,r){var n,o;return null==r&&(r={}),t=e.Location.wrap(t),this.applicationAllowsVisitingLocation(t)?this.locationIsVisitable(t)?(n=null!=(o=r.action)?o:"advance",this.adapter.visitProposedToLocationWithAction(t,n)):window.location=t:void 0},r.prototype.startVisitToLocationWithAction=function(t,r,n){var o;return e.supported?(o=this.getRestorationDataForIdentifier(n),this.startVisit(t,r,{restorationData:o})):window.location=t},r.prototype.setProgressBarDelay=function(t){return this.progressBarDelay=t},r.prototype.startHistory=function(){return this.location=e.Location.wrap(window.location),this.restorationIdentifier=e.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.stopHistory=function(){return this.history.stop()},r.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.push(this.location,this.restorationIdentifier)},r.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.historyPoppedToLocationWithRestorationIdentifier=function(t,r){var n;return this.restorationIdentifier=r,this.enabled?(n=this.getRestorationDataForIdentifier(this.restorationIdentifier),this.startVisit(t,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:n,historyChanged:!0}),this.location=e.Location.wrap(t)):this.adapter.pageInvalidated()},r.prototype.getCachedSnapshotForLocation=function(t){var e;return null!=(e=this.cache.get(t))?e.clone():void 0},r.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable();
},r.prototype.cacheSnapshot=function(){var t,r;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),r=this.view.getSnapshot(),t=this.lastRenderedLocation,e.defer(function(e){return function(){return e.cache.put(t,r.clone())}}(this))):void 0},r.prototype.scrollToAnchor=function(t){var e;return(e=this.view.getElementForAnchor(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},r.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},r.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},r.prototype.scrollPositionChanged=function(t){var e;return e=this.getCurrentRestorationData(),e.scrollPosition=t},r.prototype.render=function(t,e){return this.view.render(t,e)},r.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},r.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},r.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},r.prototype.pageLoaded=function(){return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},r.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},r.prototype.clickBubbled=function(t){var e,r,n;return this.enabled&&this.clickEventIsSignificant(t)&&(r=this.getVisitableLinkForNode(t.target))&&(n=this.getVisitableLocationForLink(r))&&this.applicationAllowsFollowingLinkToLocation(r,n)?(t.preventDefault(),e=this.getActionForLink(r),this.visit(n,{action:e})):void 0},r.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){var r;return r=this.notifyApplicationAfterClickingLinkToLocation(t,e),!r.defaultPrevented},r.prototype.applicationAllowsVisitingLocation=function(t){var e;return e=this.notifyApplicationBeforeVisitingLocation(t),!e.defaultPrevented},r.prototype.notifyApplicationAfterClickingLinkToLocation=function(t,r){return e.dispatch("turbolinks:click",{target:t,data:{url:r.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationBeforeVisitingLocation=function(t){return e.dispatch("turbolinks:before-visit",{data:{url:t.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationAfterVisitingLocation=function(t){return e.dispatch("turbolinks:visit",{data:{url:t.absoluteURL}})},r.prototype.notifyApplicationBeforeCachingSnapshot=function(){return e.dispatch("turbolinks:before-cache")},r.prototype.notifyApplicationBeforeRender=function(t){return e.dispatch("turbolinks:before-render",{data:{newBody:t}})},r.prototype.notifyApplicationAfterRender=function(){return e.dispatch("turbolinks:render")},r.prototype.notifyApplicationAfterPageLoad=function(t){return null==t&&(t={}),e.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:t}})},r.prototype.startVisit=function(t,e,r){var n;return null!=(n=this.currentVisit)&&n.cancel(),this.currentVisit=this.createVisit(t,e,r),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},r.prototype.createVisit=function(t,r,n){var o,i,s,a,u;return i=null!=n?n:{},a=i.restorationIdentifier,s=i.restorationData,o=i.historyChanged,u=new e.Visit(this,t,r),u.restorationIdentifier=null!=a?a:e.uuid(),u.restorationData=e.copyObject(s),u.historyChanged=o,u.referrer=this.location,u},r.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},r.prototype.clickEventIsSignificant=function(t){return!(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},r.prototype.getVisitableLinkForNode=function(t){return this.nodeIsVisitable(t)?e.closest(t,"a[href]:not([target]):not([download])"):void 0},r.prototype.getVisitableLocationForLink=function(t){var r;return r=new e.Location(t.getAttribute("href")),this.locationIsVisitable(r)?r:void 0},r.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},r.prototype.nodeIsVisitable=function(t){var r;return(r=e.closest(t,"[data-turbolinks]"))?"false"!==r.getAttribute("data-turbolinks"):!0},r.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},r.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},r.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},r}()}.call(this),function(){!function(){var t,e;if((t=e=document.currentScript)&&!e.hasAttribute("data-turbolinks-suppress-warning"))for(;t=t.parentNode;)if(t===document.body)return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s",e.outerHTML)}()}.call(this),function(){var t,r,n;e.start=function(){return r()?(null==e.controller&&(e.controller=t()),e.controller.start()):void 0},r=function(){return null==window.Turbolinks&&(window.Turbolinks=e),n()},t=function(){var t;return t=new e.Controller,t.adapter=new e.BrowserAdapter(t),t},n=function(){return window.Turbolinks===e},n()&&e.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd&&define(e)}).call(this);
const persistScrollDataAttribute = 'turbolinks-persist-scroll';
let scrollPosition = null;

const turbolinksPersistScroll = () => {
  if (scrollPosition) {
    console.log('restoring scroll position')
    window.scrollTo(0, scrollPosition);
    scrollPosition = null;
  }


  const elements = document.querySelectorAll(`[data-${persistScrollDataAttribute}]`)
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', () => {
      document.addEventListener("turbolinks:before-render", () => {
        scrollPosition = window.scrollY;
        console.log("saving scrollposition", {scrollPosition})
      }, {once: true})
    })
  }
}

document.addEventListener('turbolinks:load', turbolinksPersistScroll);
document.addEventListener('turbolinks:render', turbolinksPersistScroll);
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function spaced_apply() {
  $(".spaced").each(function() {
      $(this).html(numberWithSpaces($(this).html()))
  })

  $(".num").each(function() {
  	var el = this;
    $(el).addClass("text-right")
  	
  	if($(this).find("a").length) {
  		el = $(this).find("a");
  	}
  	
    $(el).html(numberWithSpaces($(el).html()))
  })

}

$(document).on("turbolinks:load",spaced_apply)


;
$(document).on('turbolinks:load',function() {

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/swiper/modules/thumbs/thumbs.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs/thumbs.min.css ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/thumbs/thumbs.min.css?");

/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/swiper.min.css?");

/***/ }),

/***/ "./src/js/vendors/cgAccordion/scss/style.scss":
/*!****************************************************!*\
  !*** ./src/js/vendors/cgAccordion/scss/style.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gulp-nunjucks/./src/js/vendors/cgAccordion/scss/style.scss?");

/***/ }),

/***/ "./src/js/components/_accordions.js":
/*!******************************************!*\
  !*** ./src/js/components/_accordions.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendors_cgAccordion_js_cgAccordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendors/cgAccordion/js/cgAccordion.js */ \"./src/js/vendors/cgAccordion/js/cgAccordion.js\");\n/* harmony import */ var _vendors_cgAccordion_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendors/cgAccordion/scss/style.scss */ \"./src/js/vendors/cgAccordion/scss/style.scss\");\n// * ====================================================================================================\n// * CgAccordion\n// * ====================================================================================================\n\n/*\n * Сниппет (+accordion)\n */\n// Подключение скрипта\n // Подлкючение стилей плагина\n\n // Основные стили\n// Создание экземпляра класса для аккордеонов\n\nvar accordion = new _vendors_cgAccordion_js_cgAccordion_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-accordion]\", {// activeClass: \"active\", // Класс активности для элементов\n  // topSelector: \"[data-accordion-top]\", // Селектор верхней части аккордеона (data-атрибудт должен всегда присутствовать для правильной работы)\n  // bodySelector: \"[data-accordion-body]\", // Селектор оснвной части (data-стрибут должен всегда присутствовать для правильной работы)\n  // syncGroup: true, // Синхронизация элементов из однной группы (При значении true - если один эелемент открывается, то другие закрываются)\n  // speed: 300, // Скорость анимации\n}); // Структура HTML для правильной работы аккордеонов (Классы могут меняться, но структура вложенности и data-атрибуты должны остаться)\n// <div class=\"accordion\" data-accordion=\"edit me\">\n//   <div class=\"accordion__top\" data-accordion-top>\n//     Edit me\n//   </div>\n//   <div class=\"accordion__body\" data-accordion-body>\n//     <div class=\"accordion__body-content\">\n//       Edit me\n//     </div>\n//   </div>\n// </div>\n// Глобально для бразуера\n// window.accordion = accordion;\n\n//# sourceURL=webpack://gulp-nunjucks/./src/js/components/_accordions.js?");

/***/ }),

/***/ "./src/js/components/_selects.js":
/*!***************************************!*\
  !*** ./src/js/components/_selects.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// * ====================================================================================================\n// * CgSelect\n// * ====================================================================================================\n\n/*\n * Сниппет (+select)\n */\n// Подключение скриптов\n// import CgSelect from \"../vendors/cgSelect/js/cgSelect.js\";\n// // Подлкючение стилей плагина\n// import \"../vendors/cgSelect/scss/style.scss\"; // Основные стили\n// const selects = new CgSelect(\".select\", {\n//   activeClass: \"active\",\n//   topSelector: \"[data-select-top]\",\n//   bodySelector: \"[data-select-body]\",\n// });\nvar selects = document.querySelectorAll(\".select\");\n\nif (selects.length > 0) {\n  selects.forEach(function (item) {\n    item.addEventListener(\"click\", function (e) {\n      e.stopPropagation();\n    });\n    var itemTop = item.querySelector(\".select__top\");\n    itemTop.addEventListener(\"click\", function (e) {\n      item.classList.toggle(\"active\");\n    });\n    var itemPoints = item.querySelectorAll(\".select__item\");\n\n    if (itemPoints.length > 0) {\n      itemPoints.forEach(function (point) {\n        point.addEventListener(\"click\", function (e) {\n          itemTop.querySelector(\".select__top-text\").textContent = e.currentTarget.textContent.split(\" - \")[0];\n          item.classList.remove(\"active\");\n        });\n      });\n    }\n\n    var itemBodySelect = item.querySelectorAll(\".select-item\");\n    itemBodySelect.forEach(function (select) {\n      select.querySelector(\".select-item__top\").addEventListener(\"click\", function (e) {\n        if (select.classList.contains(\"active\")) {\n          select.classList.remove(\"active\");\n        } else {\n          var active_item = item.querySelector(\".select-item.active\");\n\n          if (active_item) {\n            active_item.classList.remove(\"active\");\n          }\n\n          select.classList.add(\"active\");\n        }\n      });\n      select.querySelectorAll(\".select-item__body a\").forEach(function (link) {\n        link.addEventListener(\"click\", function (e) {\n          console.log(e.currentTarget);\n          var el;\n          (el = document.querySelector(\".header__nav li.current\")) && el.classList.remove(\"current\");\n          e.currentTarget.parentNode.classList.add(\"current\"); //item.classList.remove(\"active\");\n        });\n      });\n    });\n  });\n  document.body.addEventListener(\"click\", function () {\n    if (document.querySelector(\".select.active\")) {\n      document.querySelector(\".select.active\").classList.remove(\"active\");\n    }\n  });\n  var current = document.querySelector(\".select-item__body .current\");\n\n  if (current) {\n    current.closest(\".select-item\").classList.add(\"active\");\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./src/js/components/_selects.js?");

/***/ }),

/***/ "./src/js/components/_sliders.js":
/*!***************************************!*\
  !*** ./src/js/components/_sliders.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/thumbs */ \"./node_modules/swiper/modules/thumbs/thumbs.min.css\");\n// * ====================================================================================================\n// * SwiperJS\n// * ====================================================================================================\n\n/*\n * Документация: https://swiperjs.com/swiper-api\n * Установка: npm install swiper\n * Сниппет (+swiper)\n */\n// Подключение сразу всей библиотеки\n// import Swiper from \"swiper/bundle\";\n// Подключение по модулям\n // Подключение стилей\n\n\n\nvar breakpoint = window.matchMedia(\"(max-width:768px)\");\nvar breakpoint2 = window.matchMedia(\"(max-width:992px)\");\nvar productSliderNav;\nvar productSlider;\nvar productNavSlider;\nvar categorySlider = [];\n\nvar breakpointChecker = function breakpointChecker() {\n  if (breakpoint.matches === true) {\n    return enableSliders();\n  } else if (breakpoint.matches === false) {\n    if (productSliderNav !== undefined) productSliderNav.destroy();\n    if (productSlider !== undefined) productSlider.destroy();\n    if (productNavSlider !== undefined) productNavSlider.destroy();\n    return;\n  }\n};\n\nvar breakpointChecker2 = function breakpointChecker2() {\n  if (breakpoint2.matches === true) {\n    return enableSliders2();\n  } else {\n    if (categorySlider !== undefined) {\n      if (categorySlider.length > 1) {\n        for (var i = 0; i < categorySlider.length; i++) {\n          categorySlider[i].destroy();\n        }\n      }\n    }\n\n    return;\n  }\n};\n\nwindow.enableSliders = function () {\n  if (document.querySelector(\".product-nav\")) {\n    // productNavSlider = new Swiper(\".product-nav .swiper\", {\n    //   slidesPerView: \"auto\",\n    //   spaceBetween: 5,\n    //   // centeredSlides: true,\n    //   freeMode: true,\n    //   watchSlidesProgress: true,\n    //   modules: [Thumbs, FreeMode],\n    //   //   navigation: {\n    //   //     nextEl: \".swiper-button-next\",\n    //   //     prevEl: \".swiper-button-prev\",\n    //   //   },\n    //   //   scrollbar: {\n    //   //     el: \".swiper-scrollbar\",\n    //   //   },\n    // });\n    productSliderNav = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".product-slider--nav .swiper\", {\n      slidesPerView: 1,\n      spaceBetween: 30,\n      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],\n      thumbs: {\n        swiper: productNavSlider\n      },\n      pagination: {\n        el: \".product-slider .swiper-pagination\"\n      } //   navigation: {\n      //     nextEl: \".swiper-button-next\",\n      //     prevEl: \".swiper-button-prev\",\n      //   },\n      //   scrollbar: {\n      //     el: \".swiper-scrollbar\",\n      //   },\n\n    });\n  }\n\n  if (document.querySelector(\".product-slider--no-nav\")) {\n    productSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".product-slider--no-nav .swiper\", {\n      slidesPerView: 1,\n      spaceBetween: 30,\n      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],\n      pagination: {\n        el: \".product-slider .swiper-pagination\"\n      }\n    });\n  }\n};\n\nvar enableSliders2 = function enableSliders2() {\n  if (document.querySelector(\".category-section__slider--full\")) {\n    document.querySelectorAll(\".category-section__slider--full\").forEach(function (item) {\n      categorySlider.push(new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item.querySelector(\".swiper\"), {\n        slidesPerView: \"auto\",\n        spaceBetween: 16,\n        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],\n        // freeMode: true,\n        pagination: {\n          el: item.querySelector(\".swiper-pagination\"),\n          type: \"fraction\"\n        }\n      }));\n    });\n  } //каталог - главная\n\n\n  if (document.querySelector(\".category-section__slider--new\")) {\n    document.querySelectorAll(\".category-section__slider--new\").forEach(function (item) {\n      var swiper = item.querySelector(\".swiper\"); //восстановление активного элемента (после восстановления страницы из кэша (turbolinks))\n\n      var initial = swiper.getAttribute('data-active-slide') || 0;\n      categorySlider.push(new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](swiper, {\n        initialSlide: initial,\n        slidesPerView: 1,\n        spaceBetween: 0,\n        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],\n        centeredSlides: true,\n        // freeMode: true,\n        pagination: {\n          el: item.querySelector(\".swiper-pagination\"),\n          type: \"fraction\"\n        },\n        breakpoints: {\n          576: {\n            slidesPerView: \"auto\",\n            spaceBetween: 16,\n            centeredSlides: false\n          }\n        }\n      }));\n    });\n  }\n};\n\nbreakpoint.addListener(breakpointChecker);\nbreakpoint2.addListener(breakpointChecker2);\nbreakpointChecker();\nbreakpointChecker2();\n/*\nconst productNavItemLink = document.querySelectorAll(\".product-nav__item a\");\n\nif (productNavItemLink.length > 0) {\n  productNavItemLink.forEach((link) => {\n    link.addEventListener(\"click\", (e) => {\n      if (window.innerWidth < 768) {\n        e.preventDefault();\n      }\n    });\n  });\n}*/\n// * ====================================================================================================\n// * GlideJS\n// * ====================================================================================================\n\n/*\n * Документация: https://glidejs.com/docs/\n * Установка: npm install @glidejs/glide\n */\n// Подключение сразу всей библиотеки\n// import Glide from \"@glidejs/glide\";\n// Подлкючение по модулям\n// import Glide, { Controls, Breakpoints } from \"@glidejs/glide/dist/glide.modular.esm\";\n// Подлкючение стилей\n// import \"@glidejs/glide/dist/css/glide.core.min.css\";\n// new Glide(\".glide\").mount();\n\n//# sourceURL=webpack://gulp-nunjucks/./src/js/components/_sliders.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_sliders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_sliders.js */ \"./src/js/components/_sliders.js\");\n/* harmony import */ var _components_accordions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_accordions.js */ \"./src/js/components/_accordions.js\");\n/* harmony import */ var _components_selects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_selects.js */ \"./src/js/components/_selects.js\");\n/**\n * * jQuery\n * Установка: npm instal jquery\n */\n// import jQuery from \"jquery\";\n// window.$ = window.jQuery = jQuery;\n\n/**\n * * Слайдеры\n */\n\n/**\n * * Модальные окна\n */\n// import \"./components/_modals.js\";\n\n/**\n * * Тултипы\n */\n// import \"./components/_tooltips.js\";\n\n/**\n * * Табы\n */\n// import \"./components/_tabs.js\";\n\n/**\n * * Аккордеоны\n */\n\n\n/**\n * * Меню бургер\n */\n// import \"./components/_burger.js\";\n\n/**\n * ! Селекты\n */\n\n\n/**\n * * Галереи\n */\n// import \"./components/_galleries.js\";\n\n/**\n * * Кастомный скролл\n */\n// import \"./components/_scroll.js\";\n\n/**\n * ! Формы\n */\n// import \"./components/_forms.js\";\n\n/**\n * ! AJAX отправка форм\n */\n// import \"./components/_ajax.js\";\n\n/**\n * ! Range Slider\n */\n// import \"./components/_range-sliders.js\"\n\n/**\n * ! Каунтер\n */\n// import \"./components/_counter.js\";\n\n/**\n * ! Календарь\n */\n// import \"./components/_calendar.js\";\n\n/**\n * * Animations\n */\n// import \"./components/_animations.js\";\n\n/**\n * * Визуализация данных (графики, диаграммы и т.д.)\n */\n// import \"./components/_visualization.js\";\n\nvar burger = document.querySelector(\".header-burger\");\n\nif (burger) {\n  burger.addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n    burger.classList.toggle(\"active\");\n    document.querySelector(\".nav\").classList.toggle(\"active\");\n    document.querySelector(\".page__wrapper\").classList.toggle(\"page__wrapper--overlay\");\n    document.body.style.overflow = \"hidden\";\n    document.querySelector(\".header__select\").classList.add(\"active\");\n  });\n  document.querySelector(\".nav\").addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n  });\n  document.body.addEventListener(\"click\", function () {\n    if (burger.classList.contains(\"active\")) {\n      burger.classList.remove(\"active\");\n      document.querySelector(\".nav\").classList.remove(\"active\");\n      document.querySelector(\".page__wrapper\").classList.remove(\"page__wrapper--overlay\");\n      document.body.style.overflow = \"\";\n      document.querySelector(\".header__select\").classList.remove(\"active\");\n    }\n  });\n} // import { Counter } from \"counter/counter.js\";\n// const cartCounters = document.querySelectorAll(\".cart-counter\");\n// if (cartCounters.length > 0) {\n//   cartCounters.forEach((item) => {\n//     let counter = new Counter(\"\");\n//   });\n// }\n\n\nvar formSelect = document.querySelector(\".form-select\");\n\nif (formSelect) {\n  formSelect.addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n  });\n  formSelect.querySelector(\".form-select__top\").addEventListener(\"click\", function () {\n    formSelect.classList.toggle(\"active\");\n  });\n  formSelect.querySelectorAll(\".form-select__radio\").forEach(function (item) {\n    item.addEventListener(\"click\", function () {\n      formSelect.querySelector(\".form-select__top\").textContent = item.querySelector(\"span\").textContent;\n      formSelect.querySelector(\".form-select__top\").classList.add(\"active\");\n      formSelect.classList.remove(\"active\");\n    });\n  });\n  document.body.addEventListener(\"click\", function () {\n    formSelect.classList.remove(\"active\");\n  });\n}\n\nvar cartCounters = document.querySelectorAll(\".cart-product__counter\");\n\nfunction validate(el) {\n  el.value = el.value.replace(/[^0-9]/g, \"\");\n}\n\nif (cartCounters.length > 0) {\n  cartCounters.forEach(function (item) {\n    item.querySelector(\".cart-product__counter-minus\").addEventListener(\"click\", function () {\n      if (parseInt(item.querySelector(\"input\").value) != 0) {\n        item.querySelector(\"input\").value = parseInt(item.querySelector(\"input\").value) - 1;\n      }\n    });\n    item.querySelector(\".cart-product__counter-plus\").addEventListener(\"click\", function () {\n      if (parseInt(item.querySelector(\"input\").value) != 100) {\n        item.querySelector(\"input\").value = parseInt(item.querySelector(\"input\").value) + 1;\n      }\n    });\n    item.querySelector(\"input\").addEventListener(\"input\", function (e) {\n      validate(e.currentTarget);\n    });\n  });\n}\n\nvar cartBtn = document.querySelector(\".cart__btn\");\n\nif (cartBtn) {\n  cartBtn.addEventListener(\"click\", function (e) {\n    if (window.innerWidth < 768) {\n      e.preventDefault();\n      document.querySelector(\".order--cart\").classList.add(\"active\");\n      setTimeout(function () {\n        document.querySelector(\".header__back span\").textContent = \"Оформление заказа\";\n      }, 100);\n    }\n  });\n  document.querySelector(\".header__back\").addEventListener(\"click\", function (e) {\n    if (document.querySelector(\".order--cart\").classList.contains(\"active\")) {\n      e.preventDefault();\n      document.querySelector(\".order--cart\").classList.remove(\"active\");\n      setTimeout(function () {\n        document.querySelector(\".header__back span\").textContent = \"Корзина\";\n      }, 100);\n    }\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./src/js/main.js?");

/***/ }),

/***/ "./src/js/vendors/cgAccordion/js/cgAccordion.js":
/*!******************************************************!*\
  !*** ./src/js/vendors/cgAccordion/js/cgAccordion.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CgAccordion; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar CgAccordion = /*#__PURE__*/function () {\n  function CgAccordion(selector, options) {\n    _classCallCheck(this, CgAccordion);\n\n    var defaultOptions = {\n      activeClass: \"active\",\n      // Класс активности для элементов\n      topSelector: \"[data-accordion-top]\",\n      bodySelector: \"[data-accordion-body]\",\n      syncGroup: true,\n      speed: 300\n    };\n    this.dataAttribute = \"accordion\";\n    this.$elements = document.querySelectorAll(selector);\n    this.options = Object.assign(defaultOptions, options);\n    this.init();\n  }\n\n  _createClass(CgAccordion, [{\n    key: \"init\",\n    value: function init() {\n      if (this.$elements) {\n        this.clickHandler();\n      }\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler() {\n      var _this = this;\n\n      this.$elements.forEach(function ($element) {\n        $element.querySelector(\"\".concat(_this.options.topSelector)).addEventListener(\"click\", function () {\n          if (_this.isOpen($element)) {\n            _this.close($element);\n          } else {\n            _this.open($element);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"isOpen\",\n    value: function isOpen($element) {\n      return $element.classList.contains(\"\".concat(this.options.activeClass)) ? true : false;\n    }\n  }, {\n    key: \"open\",\n    value: function open($element) {\n      if (this.options.syncGroup) {\n        if (document.querySelector(\".\".concat(this.options.activeClass, \"[data-\").concat(this.dataAttribute, \"=\").concat($element.dataset.accordion, \"]\"))) {\n          this.close(document.querySelector(\".\".concat(this.options.activeClass, \"[data-\").concat(this.dataAttribute, \"=\").concat($element.dataset.accordion, \"]\")));\n        }\n      }\n\n      var $elementBody = $element.querySelector(\"\".concat(this.options.bodySelector));\n      $elementBody.style.setProperty(\"--speed\", \"\".concat(this.options.speed / 1000, \"s\"));\n      $elementBody.style.maxHeight = $elementBody.scrollHeight + \"px\";\n      $element.classList.add(\"\".concat(this.options.activeClass));\n    }\n  }, {\n    key: \"close\",\n    value: function close($element) {\n      var $elementBody = $element.querySelector(\"\".concat(this.options.bodySelector));\n      $element.classList.remove(\"\".concat(this.options.activeClass));\n      $elementBody.style.maxHeight = null;\n    }\n  }]);\n\n  return CgAccordion;\n}();\n\n\n\n//# sourceURL=webpack://gulp-nunjucks/./src/js/vendors/cgAccordion/js/cgAccordion.js?");

/***/ }),

/***/ "./node_modules/dom7/dom7.esm.js":
/*!***************************************!*\
  !*** ./node_modules/dom7/dom7.esm.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": function() { return /* binding */ $; },\n/* harmony export */   \"add\": function() { return /* binding */ add; },\n/* harmony export */   \"addClass\": function() { return /* binding */ addClass; },\n/* harmony export */   \"animate\": function() { return /* binding */ animate; },\n/* harmony export */   \"animationEnd\": function() { return /* binding */ animationEnd; },\n/* harmony export */   \"append\": function() { return /* binding */ append; },\n/* harmony export */   \"appendTo\": function() { return /* binding */ appendTo; },\n/* harmony export */   \"attr\": function() { return /* binding */ attr; },\n/* harmony export */   \"blur\": function() { return /* binding */ blur; },\n/* harmony export */   \"change\": function() { return /* binding */ change; },\n/* harmony export */   \"children\": function() { return /* binding */ children; },\n/* harmony export */   \"click\": function() { return /* binding */ click; },\n/* harmony export */   \"closest\": function() { return /* binding */ closest; },\n/* harmony export */   \"css\": function() { return /* binding */ css; },\n/* harmony export */   \"data\": function() { return /* binding */ data; },\n/* harmony export */   \"dataset\": function() { return /* binding */ dataset; },\n/* harmony export */   \"detach\": function() { return /* binding */ detach; },\n/* harmony export */   \"each\": function() { return /* binding */ each; },\n/* harmony export */   \"empty\": function() { return /* binding */ empty; },\n/* harmony export */   \"eq\": function() { return /* binding */ eq; },\n/* harmony export */   \"filter\": function() { return /* binding */ filter; },\n/* harmony export */   \"find\": function() { return /* binding */ find; },\n/* harmony export */   \"focus\": function() { return /* binding */ focus; },\n/* harmony export */   \"focusin\": function() { return /* binding */ focusin; },\n/* harmony export */   \"focusout\": function() { return /* binding */ focusout; },\n/* harmony export */   \"hasClass\": function() { return /* binding */ hasClass; },\n/* harmony export */   \"height\": function() { return /* binding */ height; },\n/* harmony export */   \"hide\": function() { return /* binding */ hide; },\n/* harmony export */   \"html\": function() { return /* binding */ html; },\n/* harmony export */   \"index\": function() { return /* binding */ index; },\n/* harmony export */   \"insertAfter\": function() { return /* binding */ insertAfter; },\n/* harmony export */   \"insertBefore\": function() { return /* binding */ insertBefore; },\n/* harmony export */   \"is\": function() { return /* binding */ is; },\n/* harmony export */   \"keydown\": function() { return /* binding */ keydown; },\n/* harmony export */   \"keypress\": function() { return /* binding */ keypress; },\n/* harmony export */   \"keyup\": function() { return /* binding */ keyup; },\n/* harmony export */   \"mousedown\": function() { return /* binding */ mousedown; },\n/* harmony export */   \"mouseenter\": function() { return /* binding */ mouseenter; },\n/* harmony export */   \"mouseleave\": function() { return /* binding */ mouseleave; },\n/* harmony export */   \"mousemove\": function() { return /* binding */ mousemove; },\n/* harmony export */   \"mouseout\": function() { return /* binding */ mouseout; },\n/* harmony export */   \"mouseover\": function() { return /* binding */ mouseover; },\n/* harmony export */   \"mouseup\": function() { return /* binding */ mouseup; },\n/* harmony export */   \"next\": function() { return /* binding */ next; },\n/* harmony export */   \"nextAll\": function() { return /* binding */ nextAll; },\n/* harmony export */   \"off\": function() { return /* binding */ off; },\n/* harmony export */   \"offset\": function() { return /* binding */ offset; },\n/* harmony export */   \"on\": function() { return /* binding */ on; },\n/* harmony export */   \"once\": function() { return /* binding */ once; },\n/* harmony export */   \"outerHeight\": function() { return /* binding */ outerHeight; },\n/* harmony export */   \"outerWidth\": function() { return /* binding */ outerWidth; },\n/* harmony export */   \"parent\": function() { return /* binding */ parent; },\n/* harmony export */   \"parents\": function() { return /* binding */ parents; },\n/* harmony export */   \"prepend\": function() { return /* binding */ prepend; },\n/* harmony export */   \"prependTo\": function() { return /* binding */ prependTo; },\n/* harmony export */   \"prev\": function() { return /* binding */ prev; },\n/* harmony export */   \"prevAll\": function() { return /* binding */ prevAll; },\n/* harmony export */   \"prop\": function() { return /* binding */ prop; },\n/* harmony export */   \"remove\": function() { return /* binding */ remove; },\n/* harmony export */   \"removeAttr\": function() { return /* binding */ removeAttr; },\n/* harmony export */   \"removeClass\": function() { return /* binding */ removeClass; },\n/* harmony export */   \"removeData\": function() { return /* binding */ removeData; },\n/* harmony export */   \"resize\": function() { return /* binding */ resize; },\n/* harmony export */   \"scroll\": function() { return /* binding */ scroll; },\n/* harmony export */   \"scrollLeft\": function() { return /* binding */ scrollLeft; },\n/* harmony export */   \"scrollTo\": function() { return /* binding */ scrollTo; },\n/* harmony export */   \"scrollTop\": function() { return /* binding */ scrollTop; },\n/* harmony export */   \"show\": function() { return /* binding */ show; },\n/* harmony export */   \"siblings\": function() { return /* binding */ siblings; },\n/* harmony export */   \"stop\": function() { return /* binding */ stop; },\n/* harmony export */   \"styles\": function() { return /* binding */ styles; },\n/* harmony export */   \"submit\": function() { return /* binding */ submit; },\n/* harmony export */   \"text\": function() { return /* binding */ text; },\n/* harmony export */   \"toggleClass\": function() { return /* binding */ toggleClass; },\n/* harmony export */   \"touchend\": function() { return /* binding */ touchend; },\n/* harmony export */   \"touchmove\": function() { return /* binding */ touchmove; },\n/* harmony export */   \"touchstart\": function() { return /* binding */ touchstart; },\n/* harmony export */   \"transform\": function() { return /* binding */ transform; },\n/* harmony export */   \"transition\": function() { return /* binding */ transition; },\n/* harmony export */   \"transitionEnd\": function() { return /* binding */ transitionEnd; },\n/* harmony export */   \"trigger\": function() { return /* binding */ trigger; },\n/* harmony export */   \"val\": function() { return /* binding */ val; },\n/* harmony export */   \"value\": function() { return /* binding */ value; },\n/* harmony export */   \"width\": function() { return /* binding */ width; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/**\n * Dom7 4.0.4\n * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API\n * https://framework7.io/docs/dom7.html\n *\n * Copyright 2022, Vladimir Kharlampidi\n *\n * Licensed under MIT\n *\n * Released on: January 11, 2022\n */\n\n\n/* eslint-disable no-proto */\nfunction makeReactive(obj) {\n  const proto = obj.__proto__;\n  Object.defineProperty(obj, '__proto__', {\n    get() {\n      return proto;\n    },\n\n    set(value) {\n      proto.__proto__ = value;\n    }\n\n  });\n}\n\nclass Dom7 extends Array {\n  constructor(items) {\n    if (typeof items === 'number') {\n      super(items);\n    } else {\n      super(...(items || []));\n      makeReactive(this);\n    }\n  }\n\n}\n\nfunction arrayFlat(arr = []) {\n  const res = [];\n  arr.forEach(el => {\n    if (Array.isArray(el)) {\n      res.push(...arrayFlat(el));\n    } else {\n      res.push(el);\n    }\n  });\n  return res;\n}\nfunction arrayFilter(arr, callback) {\n  return Array.prototype.filter.call(arr, callback);\n}\nfunction arrayUnique(arr) {\n  const uniqueArray = [];\n\n  for (let i = 0; i < arr.length; i += 1) {\n    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);\n  }\n\n  return uniqueArray;\n}\nfunction toCamelCase(string) {\n  return string.toLowerCase().replace(/-(.)/g, (match, group) => group.toUpperCase());\n}\n\n// eslint-disable-next-line\n\nfunction qsa(selector, context) {\n  if (typeof selector !== 'string') {\n    return [selector];\n  }\n\n  const a = [];\n  const res = context.querySelectorAll(selector);\n\n  for (let i = 0; i < res.length; i += 1) {\n    a.push(res[i]);\n  }\n\n  return a;\n}\n\nfunction $(selector, context) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  let arr = [];\n\n  if (!context && selector instanceof Dom7) {\n    return selector;\n  }\n\n  if (!selector) {\n    return new Dom7(arr);\n  }\n\n  if (typeof selector === 'string') {\n    const html = selector.trim();\n\n    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {\n      let toCreate = 'div';\n      if (html.indexOf('<li') === 0) toCreate = 'ul';\n      if (html.indexOf('<tr') === 0) toCreate = 'tbody';\n      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';\n      if (html.indexOf('<tbody') === 0) toCreate = 'table';\n      if (html.indexOf('<option') === 0) toCreate = 'select';\n      const tempParent = document.createElement(toCreate);\n      tempParent.innerHTML = html;\n\n      for (let i = 0; i < tempParent.childNodes.length; i += 1) {\n        arr.push(tempParent.childNodes[i]);\n      }\n    } else {\n      arr = qsa(selector.trim(), context || document);\n    } // arr = qsa(selector, document);\n\n  } else if (selector.nodeType || selector === window || selector === document) {\n    arr.push(selector);\n  } else if (Array.isArray(selector)) {\n    if (selector instanceof Dom7) return selector;\n    arr = selector;\n  }\n\n  return new Dom7(arrayUnique(arr));\n}\n\n$.fn = Dom7.prototype;\n\n// eslint-disable-next-line\n\nfunction addClass(...classes) {\n  const classNames = arrayFlat(classes.map(c => c.split(' ')));\n  this.forEach(el => {\n    el.classList.add(...classNames);\n  });\n  return this;\n}\n\nfunction removeClass(...classes) {\n  const classNames = arrayFlat(classes.map(c => c.split(' ')));\n  this.forEach(el => {\n    el.classList.remove(...classNames);\n  });\n  return this;\n}\n\nfunction toggleClass(...classes) {\n  const classNames = arrayFlat(classes.map(c => c.split(' ')));\n  this.forEach(el => {\n    classNames.forEach(className => {\n      el.classList.toggle(className);\n    });\n  });\n}\n\nfunction hasClass(...classes) {\n  const classNames = arrayFlat(classes.map(c => c.split(' ')));\n  return arrayFilter(this, el => {\n    return classNames.filter(className => el.classList.contains(className)).length > 0;\n  }).length > 0;\n}\n\nfunction attr(attrs, value) {\n  if (arguments.length === 1 && typeof attrs === 'string') {\n    // Get attr\n    if (this[0]) return this[0].getAttribute(attrs);\n    return undefined;\n  } // Set attrs\n\n\n  for (let i = 0; i < this.length; i += 1) {\n    if (arguments.length === 2) {\n      // String\n      this[i].setAttribute(attrs, value);\n    } else {\n      // Object\n      for (const attrName in attrs) {\n        this[i][attrName] = attrs[attrName];\n        this[i].setAttribute(attrName, attrs[attrName]);\n      }\n    }\n  }\n\n  return this;\n}\n\nfunction removeAttr(attr) {\n  for (let i = 0; i < this.length; i += 1) {\n    this[i].removeAttribute(attr);\n  }\n\n  return this;\n}\n\nfunction prop(props, value) {\n  if (arguments.length === 1 && typeof props === 'string') {\n    // Get prop\n    if (this[0]) return this[0][props];\n  } else {\n    // Set props\n    for (let i = 0; i < this.length; i += 1) {\n      if (arguments.length === 2) {\n        // String\n        this[i][props] = value;\n      } else {\n        // Object\n        for (const propName in props) {\n          this[i][propName] = props[propName];\n        }\n      }\n    }\n\n    return this;\n  }\n\n  return this;\n}\n\nfunction data(key, value) {\n  let el;\n\n  if (typeof value === 'undefined') {\n    el = this[0];\n    if (!el) return undefined; // Get value\n\n    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {\n      return el.dom7ElementDataStorage[key];\n    }\n\n    const dataKey = el.getAttribute(`data-${key}`);\n\n    if (dataKey) {\n      return dataKey;\n    }\n\n    return undefined;\n  } // Set value\n\n\n  for (let i = 0; i < this.length; i += 1) {\n    el = this[i];\n    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};\n    el.dom7ElementDataStorage[key] = value;\n  }\n\n  return this;\n}\n\nfunction removeData(key) {\n  for (let i = 0; i < this.length; i += 1) {\n    const el = this[i];\n\n    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {\n      el.dom7ElementDataStorage[key] = null;\n      delete el.dom7ElementDataStorage[key];\n    }\n  }\n}\n\nfunction dataset() {\n  const el = this[0];\n  if (!el) return undefined;\n  const dataset = {}; // eslint-disable-line\n\n  if (el.dataset) {\n    for (const dataKey in el.dataset) {\n      dataset[dataKey] = el.dataset[dataKey];\n    }\n  } else {\n    for (let i = 0; i < el.attributes.length; i += 1) {\n      const attr = el.attributes[i];\n\n      if (attr.name.indexOf('data-') >= 0) {\n        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;\n      }\n    }\n  }\n\n  for (const key in dataset) {\n    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;\n  }\n\n  return dataset;\n}\n\nfunction val(value) {\n  if (typeof value === 'undefined') {\n    // get value\n    const el = this[0];\n    if (!el) return undefined;\n\n    if (el.multiple && el.nodeName.toLowerCase() === 'select') {\n      const values = [];\n\n      for (let i = 0; i < el.selectedOptions.length; i += 1) {\n        values.push(el.selectedOptions[i].value);\n      }\n\n      return values;\n    }\n\n    return el.value;\n  } // set value\n\n\n  for (let i = 0; i < this.length; i += 1) {\n    const el = this[i];\n\n    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {\n      for (let j = 0; j < el.options.length; j += 1) {\n        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;\n      }\n    } else {\n      el.value = value;\n    }\n  }\n\n  return this;\n}\n\nfunction value(value) {\n  return this.val(value);\n}\n\nfunction transform(transform) {\n  for (let i = 0; i < this.length; i += 1) {\n    this[i].style.transform = transform;\n  }\n\n  return this;\n}\n\nfunction transition(duration) {\n  for (let i = 0; i < this.length; i += 1) {\n    this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;\n  }\n\n  return this;\n}\n\nfunction on(...args) {\n  let [eventType, targetSelector, listener, capture] = args;\n\n  if (typeof args[1] === 'function') {\n    [eventType, listener, capture] = args;\n    targetSelector = undefined;\n  }\n\n  if (!capture) capture = false;\n\n  function handleLiveEvent(e) {\n    const target = e.target;\n    if (!target) return;\n    const eventData = e.target.dom7EventData || [];\n\n    if (eventData.indexOf(e) < 0) {\n      eventData.unshift(e);\n    }\n\n    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {\n      const parents = $(target).parents(); // eslint-disable-line\n\n      for (let k = 0; k < parents.length; k += 1) {\n        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);\n      }\n    }\n  }\n\n  function handleEvent(e) {\n    const eventData = e && e.target ? e.target.dom7EventData || [] : [];\n\n    if (eventData.indexOf(e) < 0) {\n      eventData.unshift(e);\n    }\n\n    listener.apply(this, eventData);\n  }\n\n  const events = eventType.split(' ');\n  let j;\n\n  for (let i = 0; i < this.length; i += 1) {\n    const el = this[i];\n\n    if (!targetSelector) {\n      for (j = 0; j < events.length; j += 1) {\n        const event = events[j];\n        if (!el.dom7Listeners) el.dom7Listeners = {};\n        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];\n        el.dom7Listeners[event].push({\n          listener,\n          proxyListener: handleEvent\n        });\n        el.addEventListener(event, handleEvent, capture);\n      }\n    } else {\n      // Live events\n      for (j = 0; j < events.length; j += 1) {\n        const event = events[j];\n        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};\n        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];\n        el.dom7LiveListeners[event].push({\n          listener,\n          proxyListener: handleLiveEvent\n        });\n        el.addEventListener(event, handleLiveEvent, capture);\n      }\n    }\n  }\n\n  return this;\n}\n\nfunction off(...args) {\n  let [eventType, targetSelector, listener, capture] = args;\n\n  if (typeof args[1] === 'function') {\n    [eventType, listener, capture] = args;\n    targetSelector = undefined;\n  }\n\n  if (!capture) capture = false;\n  const events = eventType.split(' ');\n\n  for (let i = 0; i < events.length; i += 1) {\n    const event = events[i];\n\n    for (let j = 0; j < this.length; j += 1) {\n      const el = this[j];\n      let handlers;\n\n      if (!targetSelector && el.dom7Listeners) {\n        handlers = el.dom7Listeners[event];\n      } else if (targetSelector && el.dom7LiveListeners) {\n        handlers = el.dom7LiveListeners[event];\n      }\n\n      if (handlers && handlers.length) {\n        for (let k = handlers.length - 1; k >= 0; k -= 1) {\n          const handler = handlers[k];\n\n          if (listener && handler.listener === listener) {\n            el.removeEventListener(event, handler.proxyListener, capture);\n            handlers.splice(k, 1);\n          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {\n            el.removeEventListener(event, handler.proxyListener, capture);\n            handlers.splice(k, 1);\n          } else if (!listener) {\n            el.removeEventListener(event, handler.proxyListener, capture);\n            handlers.splice(k, 1);\n          }\n        }\n      }\n    }\n  }\n\n  return this;\n}\n\nfunction once(...args) {\n  const dom = this;\n  let [eventName, targetSelector, listener, capture] = args;\n\n  if (typeof args[1] === 'function') {\n    [eventName, listener, capture] = args;\n    targetSelector = undefined;\n  }\n\n  function onceHandler(...eventArgs) {\n    listener.apply(this, eventArgs);\n    dom.off(eventName, targetSelector, onceHandler, capture);\n\n    if (onceHandler.dom7proxy) {\n      delete onceHandler.dom7proxy;\n    }\n  }\n\n  onceHandler.dom7proxy = listener;\n  return dom.on(eventName, targetSelector, onceHandler, capture);\n}\n\nfunction trigger(...args) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const events = args[0].split(' ');\n  const eventData = args[1];\n\n  for (let i = 0; i < events.length; i += 1) {\n    const event = events[i];\n\n    for (let j = 0; j < this.length; j += 1) {\n      const el = this[j];\n\n      if (window.CustomEvent) {\n        const evt = new window.CustomEvent(event, {\n          detail: eventData,\n          bubbles: true,\n          cancelable: true\n        });\n        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);\n        el.dispatchEvent(evt);\n        el.dom7EventData = [];\n        delete el.dom7EventData;\n      }\n    }\n  }\n\n  return this;\n}\n\nfunction transitionEnd(callback) {\n  const dom = this;\n\n  function fireCallBack(e) {\n    if (e.target !== this) return;\n    callback.call(this, e);\n    dom.off('transitionend', fireCallBack);\n  }\n\n  if (callback) {\n    dom.on('transitionend', fireCallBack);\n  }\n\n  return this;\n}\n\nfunction animationEnd(callback) {\n  const dom = this;\n\n  function fireCallBack(e) {\n    if (e.target !== this) return;\n    callback.call(this, e);\n    dom.off('animationend', fireCallBack);\n  }\n\n  if (callback) {\n    dom.on('animationend', fireCallBack);\n  }\n\n  return this;\n}\n\nfunction width() {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n\n  if (this[0] === window) {\n    return window.innerWidth;\n  }\n\n  if (this.length > 0) {\n    return parseFloat(this.css('width'));\n  }\n\n  return null;\n}\n\nfunction outerWidth(includeMargins) {\n  if (this.length > 0) {\n    if (includeMargins) {\n      const styles = this.styles();\n      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));\n    }\n\n    return this[0].offsetWidth;\n  }\n\n  return null;\n}\n\nfunction height() {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n\n  if (this[0] === window) {\n    return window.innerHeight;\n  }\n\n  if (this.length > 0) {\n    return parseFloat(this.css('height'));\n  }\n\n  return null;\n}\n\nfunction outerHeight(includeMargins) {\n  if (this.length > 0) {\n    if (includeMargins) {\n      const styles = this.styles();\n      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));\n    }\n\n    return this[0].offsetHeight;\n  }\n\n  return null;\n}\n\nfunction offset() {\n  if (this.length > 0) {\n    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n    const el = this[0];\n    const box = el.getBoundingClientRect();\n    const body = document.body;\n    const clientTop = el.clientTop || body.clientTop || 0;\n    const clientLeft = el.clientLeft || body.clientLeft || 0;\n    const scrollTop = el === window ? window.scrollY : el.scrollTop;\n    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;\n    return {\n      top: box.top + scrollTop - clientTop,\n      left: box.left + scrollLeft - clientLeft\n    };\n  }\n\n  return null;\n}\n\nfunction hide() {\n  for (let i = 0; i < this.length; i += 1) {\n    this[i].style.display = 'none';\n  }\n\n  return this;\n}\n\nfunction show() {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n\n  for (let i = 0; i < this.length; i += 1) {\n    const el = this[i];\n\n    if (el.style.display === 'none') {\n      el.style.display = '';\n    }\n\n    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {\n      // Still not visible\n      el.style.display = 'block';\n    }\n  }\n\n  return this;\n}\n\nfunction styles() {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  if (this[0]) return window.getComputedStyle(this[0], null);\n  return {};\n}\n\nfunction css(props, value) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  let i;\n\n  if (arguments.length === 1) {\n    if (typeof props === 'string') {\n      // .css('width')\n      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);\n    } else {\n      // .css({ width: '100px' })\n      for (i = 0; i < this.length; i += 1) {\n        for (const prop in props) {\n          this[i].style[prop] = props[prop];\n        }\n      }\n\n      return this;\n    }\n  }\n\n  if (arguments.length === 2 && typeof props === 'string') {\n    // .css('width', '100px')\n    for (i = 0; i < this.length; i += 1) {\n      this[i].style[props] = value;\n    }\n\n    return this;\n  }\n\n  return this;\n}\n\nfunction each(callback) {\n  if (!callback) return this;\n  this.forEach((el, index) => {\n    callback.apply(el, [el, index]);\n  });\n  return this;\n}\n\nfunction filter(callback) {\n  const result = arrayFilter(this, callback);\n  return $(result);\n}\n\nfunction html(html) {\n  if (typeof html === 'undefined') {\n    return this[0] ? this[0].innerHTML : null;\n  }\n\n  for (let i = 0; i < this.length; i += 1) {\n    this[i].innerHTML = html;\n  }\n\n  return this;\n}\n\nfunction text(text) {\n  if (typeof text === 'undefined') {\n    return this[0] ? this[0].textContent.trim() : null;\n  }\n\n  for (let i = 0; i < this.length; i += 1) {\n    this[i].textContent = text;\n  }\n\n  return this;\n}\n\nfunction is(selector) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const el = this[0];\n  let compareWith;\n  let i;\n  if (!el || typeof selector === 'undefined') return false;\n\n  if (typeof selector === 'string') {\n    if (el.matches) return el.matches(selector);\n    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);\n    if (el.msMatchesSelector) return el.msMatchesSelector(selector);\n    compareWith = $(selector);\n\n    for (i = 0; i < compareWith.length; i += 1) {\n      if (compareWith[i] === el) return true;\n    }\n\n    return false;\n  }\n\n  if (selector === document) {\n    return el === document;\n  }\n\n  if (selector === window) {\n    return el === window;\n  }\n\n  if (selector.nodeType || selector instanceof Dom7) {\n    compareWith = selector.nodeType ? [selector] : selector;\n\n    for (i = 0; i < compareWith.length; i += 1) {\n      if (compareWith[i] === el) return true;\n    }\n\n    return false;\n  }\n\n  return false;\n}\n\nfunction index() {\n  let child = this[0];\n  let i;\n\n  if (child) {\n    i = 0; // eslint-disable-next-line\n\n    while ((child = child.previousSibling) !== null) {\n      if (child.nodeType === 1) i += 1;\n    }\n\n    return i;\n  }\n\n  return undefined;\n}\n\nfunction eq(index) {\n  if (typeof index === 'undefined') return this;\n  const length = this.length;\n\n  if (index > length - 1) {\n    return $([]);\n  }\n\n  if (index < 0) {\n    const returnIndex = length + index;\n    if (returnIndex < 0) return $([]);\n    return $([this[returnIndex]]);\n  }\n\n  return $([this[index]]);\n}\n\nfunction append(...els) {\n  let newChild;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n\n  for (let k = 0; k < els.length; k += 1) {\n    newChild = els[k];\n\n    for (let i = 0; i < this.length; i += 1) {\n      if (typeof newChild === 'string') {\n        const tempDiv = document.createElement('div');\n        tempDiv.innerHTML = newChild;\n\n        while (tempDiv.firstChild) {\n          this[i].appendChild(tempDiv.firstChild);\n        }\n      } else if (newChild instanceof Dom7) {\n        for (let j = 0; j < newChild.length; j += 1) {\n          this[i].appendChild(newChild[j]);\n        }\n      } else {\n        this[i].appendChild(newChild);\n      }\n    }\n  }\n\n  return this;\n}\n\nfunction appendTo(parent) {\n  $(parent).append(this);\n  return this;\n}\n\nfunction prepend(newChild) {\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  let i;\n  let j;\n\n  for (i = 0; i < this.length; i += 1) {\n    if (typeof newChild === 'string') {\n      const tempDiv = document.createElement('div');\n      tempDiv.innerHTML = newChild;\n\n      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {\n        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);\n      }\n    } else if (newChild instanceof Dom7) {\n      for (j = 0; j < newChild.length; j += 1) {\n        this[i].insertBefore(newChild[j], this[i].childNodes[0]);\n      }\n    } else {\n      this[i].insertBefore(newChild, this[i].childNodes[0]);\n    }\n  }\n\n  return this;\n}\n\nfunction prependTo(parent) {\n  $(parent).prepend(this);\n  return this;\n}\n\nfunction insertBefore(selector) {\n  const before = $(selector);\n\n  for (let i = 0; i < this.length; i += 1) {\n    if (before.length === 1) {\n      before[0].parentNode.insertBefore(this[i], before[0]);\n    } else if (before.length > 1) {\n      for (let j = 0; j < before.length; j += 1) {\n        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);\n      }\n    }\n  }\n}\n\nfunction insertAfter(selector) {\n  const after = $(selector);\n\n  for (let i = 0; i < this.length; i += 1) {\n    if (after.length === 1) {\n      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);\n    } else if (after.length > 1) {\n      for (let j = 0; j < after.length; j += 1) {\n        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);\n      }\n    }\n  }\n}\n\nfunction next(selector) {\n  if (this.length > 0) {\n    if (selector) {\n      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {\n        return $([this[0].nextElementSibling]);\n      }\n\n      return $([]);\n    }\n\n    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);\n    return $([]);\n  }\n\n  return $([]);\n}\n\nfunction nextAll(selector) {\n  const nextEls = [];\n  let el = this[0];\n  if (!el) return $([]);\n\n  while (el.nextElementSibling) {\n    const next = el.nextElementSibling; // eslint-disable-line\n\n    if (selector) {\n      if ($(next).is(selector)) nextEls.push(next);\n    } else nextEls.push(next);\n\n    el = next;\n  }\n\n  return $(nextEls);\n}\n\nfunction prev(selector) {\n  if (this.length > 0) {\n    const el = this[0];\n\n    if (selector) {\n      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {\n        return $([el.previousElementSibling]);\n      }\n\n      return $([]);\n    }\n\n    if (el.previousElementSibling) return $([el.previousElementSibling]);\n    return $([]);\n  }\n\n  return $([]);\n}\n\nfunction prevAll(selector) {\n  const prevEls = [];\n  let el = this[0];\n  if (!el) return $([]);\n\n  while (el.previousElementSibling) {\n    const prev = el.previousElementSibling; // eslint-disable-line\n\n    if (selector) {\n      if ($(prev).is(selector)) prevEls.push(prev);\n    } else prevEls.push(prev);\n\n    el = prev;\n  }\n\n  return $(prevEls);\n}\n\nfunction siblings(selector) {\n  return this.nextAll(selector).add(this.prevAll(selector));\n}\n\nfunction parent(selector) {\n  const parents = []; // eslint-disable-line\n\n  for (let i = 0; i < this.length; i += 1) {\n    if (this[i].parentNode !== null) {\n      if (selector) {\n        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);\n      } else {\n        parents.push(this[i].parentNode);\n      }\n    }\n  }\n\n  return $(parents);\n}\n\nfunction parents(selector) {\n  const parents = []; // eslint-disable-line\n\n  for (let i = 0; i < this.length; i += 1) {\n    let parent = this[i].parentNode; // eslint-disable-line\n\n    while (parent) {\n      if (selector) {\n        if ($(parent).is(selector)) parents.push(parent);\n      } else {\n        parents.push(parent);\n      }\n\n      parent = parent.parentNode;\n    }\n  }\n\n  return $(parents);\n}\n\nfunction closest(selector) {\n  let closest = this; // eslint-disable-line\n\n  if (typeof selector === 'undefined') {\n    return $([]);\n  }\n\n  if (!closest.is(selector)) {\n    closest = closest.parents(selector).eq(0);\n  }\n\n  return closest;\n}\n\nfunction find(selector) {\n  const foundElements = [];\n\n  for (let i = 0; i < this.length; i += 1) {\n    const found = this[i].querySelectorAll(selector);\n\n    for (let j = 0; j < found.length; j += 1) {\n      foundElements.push(found[j]);\n    }\n  }\n\n  return $(foundElements);\n}\n\nfunction children(selector) {\n  const children = []; // eslint-disable-line\n\n  for (let i = 0; i < this.length; i += 1) {\n    const childNodes = this[i].children;\n\n    for (let j = 0; j < childNodes.length; j += 1) {\n      if (!selector || $(childNodes[j]).is(selector)) {\n        children.push(childNodes[j]);\n      }\n    }\n  }\n\n  return $(children);\n}\n\nfunction remove() {\n  for (let i = 0; i < this.length; i += 1) {\n    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);\n  }\n\n  return this;\n}\n\nfunction detach() {\n  return this.remove();\n}\n\nfunction add(...els) {\n  const dom = this;\n  let i;\n  let j;\n\n  for (i = 0; i < els.length; i += 1) {\n    const toAdd = $(els[i]);\n\n    for (j = 0; j < toAdd.length; j += 1) {\n      dom.push(toAdd[j]);\n    }\n  }\n\n  return dom;\n}\n\nfunction empty() {\n  for (let i = 0; i < this.length; i += 1) {\n    const el = this[i];\n\n    if (el.nodeType === 1) {\n      for (let j = 0; j < el.childNodes.length; j += 1) {\n        if (el.childNodes[j].parentNode) {\n          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);\n        }\n      }\n\n      el.textContent = '';\n    }\n  }\n\n  return this;\n}\n\n// eslint-disable-next-line\n\nfunction scrollTo(...args) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  let [left, top, duration, easing, callback] = args;\n\n  if (args.length === 4 && typeof easing === 'function') {\n    callback = easing;\n    [left, top, duration, callback, easing] = args;\n  }\n\n  if (typeof easing === 'undefined') easing = 'swing';\n  return this.each(function animate() {\n    const el = this;\n    let currentTop;\n    let currentLeft;\n    let maxTop;\n    let maxLeft;\n    let newTop;\n    let newLeft;\n    let scrollTop; // eslint-disable-line\n\n    let scrollLeft; // eslint-disable-line\n\n    let animateTop = top > 0 || top === 0;\n    let animateLeft = left > 0 || left === 0;\n\n    if (typeof easing === 'undefined') {\n      easing = 'swing';\n    }\n\n    if (animateTop) {\n      currentTop = el.scrollTop;\n\n      if (!duration) {\n        el.scrollTop = top;\n      }\n    }\n\n    if (animateLeft) {\n      currentLeft = el.scrollLeft;\n\n      if (!duration) {\n        el.scrollLeft = left;\n      }\n    }\n\n    if (!duration) return;\n\n    if (animateTop) {\n      maxTop = el.scrollHeight - el.offsetHeight;\n      newTop = Math.max(Math.min(top, maxTop), 0);\n    }\n\n    if (animateLeft) {\n      maxLeft = el.scrollWidth - el.offsetWidth;\n      newLeft = Math.max(Math.min(left, maxLeft), 0);\n    }\n\n    let startTime = null;\n    if (animateTop && newTop === currentTop) animateTop = false;\n    if (animateLeft && newLeft === currentLeft) animateLeft = false;\n\n    function render(time = new Date().getTime()) {\n      if (startTime === null) {\n        startTime = time;\n      }\n\n      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);\n      const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;\n      let done;\n      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);\n      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);\n\n      if (animateTop && newTop > currentTop && scrollTop >= newTop) {\n        el.scrollTop = newTop;\n        done = true;\n      }\n\n      if (animateTop && newTop < currentTop && scrollTop <= newTop) {\n        el.scrollTop = newTop;\n        done = true;\n      }\n\n      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {\n        el.scrollLeft = newLeft;\n        done = true;\n      }\n\n      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {\n        el.scrollLeft = newLeft;\n        done = true;\n      }\n\n      if (done) {\n        if (callback) callback();\n        return;\n      }\n\n      if (animateTop) el.scrollTop = scrollTop;\n      if (animateLeft) el.scrollLeft = scrollLeft;\n      window.requestAnimationFrame(render);\n    }\n\n    window.requestAnimationFrame(render);\n  });\n} // scrollTop(top, duration, easing, callback) {\n\n\nfunction scrollTop(...args) {\n  let [top, duration, easing, callback] = args;\n\n  if (args.length === 3 && typeof easing === 'function') {\n    [top, duration, callback, easing] = args;\n  }\n\n  const dom = this;\n\n  if (typeof top === 'undefined') {\n    if (dom.length > 0) return dom[0].scrollTop;\n    return null;\n  }\n\n  return dom.scrollTo(undefined, top, duration, easing, callback);\n}\n\nfunction scrollLeft(...args) {\n  let [left, duration, easing, callback] = args;\n\n  if (args.length === 3 && typeof easing === 'function') {\n    [left, duration, callback, easing] = args;\n  }\n\n  const dom = this;\n\n  if (typeof left === 'undefined') {\n    if (dom.length > 0) return dom[0].scrollLeft;\n    return null;\n  }\n\n  return dom.scrollTo(left, undefined, duration, easing, callback);\n}\n\n// eslint-disable-next-line\n\nfunction animate(initialProps, initialParams) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const els = this;\n  const a = {\n    props: Object.assign({}, initialProps),\n    params: Object.assign({\n      duration: 300,\n      easing: 'swing' // or 'linear'\n\n      /* Callbacks\n      begin(elements)\n      complete(elements)\n      progress(elements, complete, remaining, start, tweenValue)\n      */\n\n    }, initialParams),\n    elements: els,\n    animating: false,\n    que: [],\n\n    easingProgress(easing, progress) {\n      if (easing === 'swing') {\n        return 0.5 - Math.cos(progress * Math.PI) / 2;\n      }\n\n      if (typeof easing === 'function') {\n        return easing(progress);\n      }\n\n      return progress;\n    },\n\n    stop() {\n      if (a.frameId) {\n        window.cancelAnimationFrame(a.frameId);\n      }\n\n      a.animating = false;\n      a.elements.each(el => {\n        const element = el;\n        delete element.dom7AnimateInstance;\n      });\n      a.que = [];\n    },\n\n    done(complete) {\n      a.animating = false;\n      a.elements.each(el => {\n        const element = el;\n        delete element.dom7AnimateInstance;\n      });\n      if (complete) complete(els);\n\n      if (a.que.length > 0) {\n        const que = a.que.shift();\n        a.animate(que[0], que[1]);\n      }\n    },\n\n    animate(props, params) {\n      if (a.animating) {\n        a.que.push([props, params]);\n        return a;\n      }\n\n      const elements = []; // Define & Cache Initials & Units\n\n      a.elements.each((el, index) => {\n        let initialFullValue;\n        let initialValue;\n        let unit;\n        let finalValue;\n        let finalFullValue;\n        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;\n        elements[index] = {\n          container: el\n        };\n        Object.keys(props).forEach(prop => {\n          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');\n          initialValue = parseFloat(initialFullValue);\n          unit = initialFullValue.replace(initialValue, '');\n          finalValue = parseFloat(props[prop]);\n          finalFullValue = props[prop] + unit;\n          elements[index][prop] = {\n            initialFullValue,\n            initialValue,\n            unit,\n            finalValue,\n            finalFullValue,\n            currentValue: initialValue\n          };\n        });\n      });\n      let startTime = null;\n      let time;\n      let elementsDone = 0;\n      let propsDone = 0;\n      let done;\n      let began = false;\n      a.animating = true;\n\n      function render() {\n        time = new Date().getTime();\n        let progress;\n        let easeProgress; // let el;\n\n        if (!began) {\n          began = true;\n          if (params.begin) params.begin(els);\n        }\n\n        if (startTime === null) {\n          startTime = time;\n        }\n\n        if (params.progress) {\n          // eslint-disable-next-line\n          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);\n        }\n\n        elements.forEach(element => {\n          const el = element;\n          if (done || el.done) return;\n          Object.keys(props).forEach(prop => {\n            if (done || el.done) return;\n            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);\n            easeProgress = a.easingProgress(params.easing, progress);\n            const {\n              initialValue,\n              finalValue,\n              unit\n            } = el[prop];\n            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);\n            const currentValue = el[prop].currentValue;\n\n            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {\n              el.container.style[prop] = finalValue + unit;\n              propsDone += 1;\n\n              if (propsDone === Object.keys(props).length) {\n                el.done = true;\n                elementsDone += 1;\n              }\n\n              if (elementsDone === elements.length) {\n                done = true;\n              }\n            }\n\n            if (done) {\n              a.done(params.complete);\n              return;\n            }\n\n            el.container.style[prop] = currentValue + unit;\n          });\n        });\n        if (done) return; // Then call\n\n        a.frameId = window.requestAnimationFrame(render);\n      }\n\n      a.frameId = window.requestAnimationFrame(render);\n      return a;\n    }\n\n  };\n\n  if (a.elements.length === 0) {\n    return els;\n  }\n\n  let animateInstance;\n\n  for (let i = 0; i < a.elements.length; i += 1) {\n    if (a.elements[i].dom7AnimateInstance) {\n      animateInstance = a.elements[i].dom7AnimateInstance;\n    } else a.elements[i].dom7AnimateInstance = a;\n  }\n\n  if (!animateInstance) {\n    animateInstance = a;\n  }\n\n  if (initialProps === 'stop') {\n    animateInstance.stop();\n  } else {\n    animateInstance.animate(a.props, a.params);\n  }\n\n  return els;\n}\n\nfunction stop() {\n  const els = this;\n\n  for (let i = 0; i < els.length; i += 1) {\n    if (els[i].dom7AnimateInstance) {\n      els[i].dom7AnimateInstance.stop();\n    }\n  }\n}\n\nconst noTrigger = 'resize scroll'.split(' ');\n\nfunction shortcut(name) {\n  function eventHandler(...args) {\n    if (typeof args[0] === 'undefined') {\n      for (let i = 0; i < this.length; i += 1) {\n        if (noTrigger.indexOf(name) < 0) {\n          if (name in this[i]) this[i][name]();else {\n            $(this[i]).trigger(name);\n          }\n        }\n      }\n\n      return this;\n    }\n\n    return this.on(name, ...args);\n  }\n\n  return eventHandler;\n}\n\nconst click = shortcut('click');\nconst blur = shortcut('blur');\nconst focus = shortcut('focus');\nconst focusin = shortcut('focusin');\nconst focusout = shortcut('focusout');\nconst keyup = shortcut('keyup');\nconst keydown = shortcut('keydown');\nconst keypress = shortcut('keypress');\nconst submit = shortcut('submit');\nconst change = shortcut('change');\nconst mousedown = shortcut('mousedown');\nconst mousemove = shortcut('mousemove');\nconst mouseup = shortcut('mouseup');\nconst mouseenter = shortcut('mouseenter');\nconst mouseleave = shortcut('mouseleave');\nconst mouseout = shortcut('mouseout');\nconst mouseover = shortcut('mouseover');\nconst touchstart = shortcut('touchstart');\nconst touchend = shortcut('touchend');\nconst touchmove = shortcut('touchmove');\nconst resize = shortcut('resize');\nconst scroll = shortcut('scroll');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ($);\n\n\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/dom7/dom7.esm.js?");

/***/ }),

/***/ "./node_modules/ssr-window/ssr-window.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"extend\": function() { return /* binding */ extend; },\n/* harmony export */   \"getDocument\": function() { return /* binding */ getDocument; },\n/* harmony export */   \"getWindow\": function() { return /* binding */ getWindow; },\n/* harmony export */   \"ssrDocument\": function() { return /* binding */ ssrDocument; },\n/* harmony export */   \"ssrWindow\": function() { return /* binding */ ssrWindow; }\n/* harmony export */ });\n/**\n * SSR Window 4.0.2\n * Better handling for window object in SSR environment\n * https://github.com/nolimits4web/ssr-window\n *\n * Copyright 2021, Vladimir Kharlampidi\n *\n * Licensed under MIT\n *\n * Released on: December 13, 2021\n */\n/* eslint-disable no-param-reassign */\nfunction isObject(obj) {\n    return (obj !== null &&\n        typeof obj === 'object' &&\n        'constructor' in obj &&\n        obj.constructor === Object);\n}\nfunction extend(target = {}, src = {}) {\n    Object.keys(src).forEach((key) => {\n        if (typeof target[key] === 'undefined')\n            target[key] = src[key];\n        else if (isObject(src[key]) &&\n            isObject(target[key]) &&\n            Object.keys(src[key]).length > 0) {\n            extend(target[key], src[key]);\n        }\n    });\n}\n\nconst ssrDocument = {\n    body: {},\n    addEventListener() { },\n    removeEventListener() { },\n    activeElement: {\n        blur() { },\n        nodeName: '',\n    },\n    querySelector() {\n        return null;\n    },\n    querySelectorAll() {\n        return [];\n    },\n    getElementById() {\n        return null;\n    },\n    createEvent() {\n        return {\n            initEvent() { },\n        };\n    },\n    createElement() {\n        return {\n            children: [],\n            childNodes: [],\n            style: {},\n            setAttribute() { },\n            getElementsByTagName() {\n                return [];\n            },\n        };\n    },\n    createElementNS() {\n        return {};\n    },\n    importNode() {\n        return null;\n    },\n    location: {\n        hash: '',\n        host: '',\n        hostname: '',\n        href: '',\n        origin: '',\n        pathname: '',\n        protocol: '',\n        search: '',\n    },\n};\nfunction getDocument() {\n    const doc = typeof document !== 'undefined' ? document : {};\n    extend(doc, ssrDocument);\n    return doc;\n}\n\nconst ssrWindow = {\n    document: ssrDocument,\n    navigator: {\n        userAgent: '',\n    },\n    location: {\n        hash: '',\n        host: '',\n        hostname: '',\n        href: '',\n        origin: '',\n        pathname: '',\n        protocol: '',\n        search: '',\n    },\n    history: {\n        replaceState() { },\n        pushState() { },\n        go() { },\n        back() { },\n    },\n    CustomEvent: function CustomEvent() {\n        return this;\n    },\n    addEventListener() { },\n    removeEventListener() { },\n    getComputedStyle() {\n        return {\n            getPropertyValue() {\n                return '';\n            },\n        };\n    },\n    Image() { },\n    Date() { },\n    screen: {},\n    setTimeout() { },\n    clearTimeout() { },\n    matchMedia() {\n        return {};\n    },\n    requestAnimationFrame(callback) {\n        if (typeof setTimeout === 'undefined') {\n            callback();\n            return null;\n        }\n        return setTimeout(callback, 0);\n    },\n    cancelAnimationFrame(id) {\n        if (typeof setTimeout === 'undefined') {\n            return;\n        }\n        clearTimeout(id);\n    },\n};\nfunction getWindow() {\n    const win = typeof window !== 'undefined' ? window : {};\n    extend(win, ssrWindow);\n    return win;\n}\n\n\n\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/ssr-window/ssr-window.esm.js?");

/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/getBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/getBreakpoint.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getBreakpoint; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nfunction getBreakpoint(breakpoints, base, containerEl) {\n  if (base === void 0) {\n    base = 'window';\n  }\n\n  if (!breakpoints || base === 'container' && !containerEl) return undefined;\n  let breakpoint = false;\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;\n  const points = Object.keys(breakpoints).map(point => {\n    if (typeof point === 'string' && point.indexOf('@') === 0) {\n      const minRatio = parseFloat(point.substr(1));\n      const value = currentHeight * minRatio;\n      return {\n        value,\n        point\n      };\n    }\n\n    return {\n      value: point,\n      point\n    };\n  });\n  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));\n\n  for (let i = 0; i < points.length; i += 1) {\n    const {\n      point,\n      value\n    } = points[i];\n\n    if (base === 'window') {\n      if (window.matchMedia(`(min-width: ${value}px)`).matches) {\n        breakpoint = point;\n      }\n    } else if (value <= containerEl.clientWidth) {\n      breakpoint = point;\n    }\n  }\n\n  return breakpoint || 'max';\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/breakpoints/getBreakpoint.js?");

/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint.js */ \"./node_modules/swiper/core/breakpoints/setBreakpoint.js\");\n/* harmony import */ var _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint.js */ \"./node_modules/swiper/core/breakpoints/getBreakpoint.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  setBreakpoint: _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  getBreakpoint: _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/breakpoints/index.js?");

/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/setBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/setBreakpoint.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ setBreakpoint; }\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\n\nconst isGridEnabled = (swiper, params) => {\n  return swiper.grid && params.grid && params.grid.rows > 1;\n};\n\nfunction setBreakpoint() {\n  const swiper = this;\n  const {\n    activeIndex,\n    initialized,\n    loopedSlides = 0,\n    params,\n    $el\n  } = swiper;\n  const breakpoints = params.breakpoints;\n  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters\n\n  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);\n  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;\n  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;\n  const breakpointParams = breakpointOnlyParams || swiper.originalParams;\n  const wasMultiRow = isGridEnabled(swiper, params);\n  const isMultiRow = isGridEnabled(swiper, breakpointParams);\n  const wasEnabled = params.enabled;\n\n  if (wasMultiRow && !isMultiRow) {\n    $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);\n    swiper.emitContainerClasses();\n  } else if (!wasMultiRow && isMultiRow) {\n    $el.addClass(`${params.containerModifierClass}grid`);\n\n    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {\n      $el.addClass(`${params.containerModifierClass}grid-column`);\n    }\n\n    swiper.emitContainerClasses();\n  }\n\n  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;\n  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);\n\n  if (directionChanged && initialized) {\n    swiper.changeDirection();\n  }\n\n  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, breakpointParams);\n  const isEnabled = swiper.params.enabled;\n  Object.assign(swiper, {\n    allowTouchMove: swiper.params.allowTouchMove,\n    allowSlideNext: swiper.params.allowSlideNext,\n    allowSlidePrev: swiper.params.allowSlidePrev\n  });\n\n  if (wasEnabled && !isEnabled) {\n    swiper.disable();\n  } else if (!wasEnabled && isEnabled) {\n    swiper.enable();\n  }\n\n  swiper.currentBreakpoint = breakpoint;\n  swiper.emit('_beforeBreakpoint', breakpointParams);\n\n  if (needsReLoop && initialized) {\n    swiper.loopDestroy();\n    swiper.loopCreate();\n    swiper.updateSlides();\n    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);\n  }\n\n  swiper.emit('breakpoint', breakpointParams);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/breakpoints/setBreakpoint.js?");

/***/ }),

/***/ "./node_modules/swiper/core/check-overflow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/check-overflow/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction checkOverflow() {\n  const swiper = this;\n  const {\n    isLocked: wasLocked,\n    params\n  } = swiper;\n  const {\n    slidesOffsetBefore\n  } = params;\n\n  if (slidesOffsetBefore) {\n    const lastSlideIndex = swiper.slides.length - 1;\n    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;\n    swiper.isLocked = swiper.size > lastSlideRightEdge;\n  } else {\n    swiper.isLocked = swiper.snapGrid.length === 1;\n  }\n\n  if (params.allowSlideNext === true) {\n    swiper.allowSlideNext = !swiper.isLocked;\n  }\n\n  if (params.allowSlidePrev === true) {\n    swiper.allowSlidePrev = !swiper.isLocked;\n  }\n\n  if (wasLocked && wasLocked !== swiper.isLocked) {\n    swiper.isEnd = false;\n  }\n\n  if (wasLocked !== swiper.isLocked) {\n    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  checkOverflow\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/check-overflow/index.js?");

/***/ }),

/***/ "./node_modules/swiper/core/classes/addClasses.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/classes/addClasses.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addClasses; }\n/* harmony export */ });\nfunction prepareClasses(entries, prefix) {\n  const resultClasses = [];\n  entries.forEach(item => {\n    if (typeof item === 'object') {\n      Object.keys(item).forEach(classNames => {\n        if (item[classNames]) {\n          resultClasses.push(prefix + classNames);\n        }\n      });\n    } else if (typeof item === 'string') {\n      resultClasses.push(prefix + item);\n    }\n  });\n  return resultClasses;\n}\n\nfunction addClasses() {\n  const swiper = this;\n  const {\n    classNames,\n    params,\n    rtl,\n    $el,\n    device,\n    support\n  } = swiper; // prettier-ignore\n\n  const suffixes = prepareClasses(['initialized', params.direction, {\n    'pointer-events': !support.touch\n  }, {\n    'free-mode': swiper.params.freeMode && params.freeMode.enabled\n  }, {\n    'autoheight': params.autoHeight\n  }, {\n    'rtl': rtl\n  }, {\n    'grid': params.grid && params.grid.rows > 1\n  }, {\n    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'\n  }, {\n    'android': device.android\n  }, {\n    'ios': device.ios\n  }, {\n    'css-mode': params.cssMode\n  }, {\n    'centered': params.cssMode && params.centeredSlides\n  }], params.containerModifierClass);\n  classNames.push(...suffixes);\n  $el.addClass([...classNames].join(' '));\n  swiper.emitContainerClasses();\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/classes/addClasses.js?");

/***/ }),

/***/ "./node_modules/swiper/core/classes/index.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/classes/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses.js */ \"./node_modules/swiper/core/classes/addClasses.js\");\n/* harmony import */ var _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses.js */ \"./node_modules/swiper/core/classes/removeClasses.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  addClasses: _addClasses_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  removeClasses: _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/classes/index.js?");

/***/ }),

/***/ "./node_modules/swiper/core/classes/removeClasses.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/classes/removeClasses.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ removeClasses; }\n/* harmony export */ });\nfunction removeClasses() {\n  const swiper = this;\n  const {\n    $el,\n    classNames\n  } = swiper;\n  $el.removeClass(classNames.join(' '));\n  swiper.emitContainerClasses();\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/classes/removeClasses.js?");

/***/ }),

/***/ "./node_modules/swiper/core/core.js":
/*!******************************************!*\
  !*** ./node_modules/swiper/core/core.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n/* harmony import */ var _shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/get-support.js */ \"./node_modules/swiper/shared/get-support.js\");\n/* harmony import */ var _shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/get-device.js */ \"./node_modules/swiper/shared/get-device.js\");\n/* harmony import */ var _shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/get-browser.js */ \"./node_modules/swiper/shared/get-browser.js\");\n/* harmony import */ var _modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/resize/resize.js */ \"./node_modules/swiper/core/modules/resize/resize.js\");\n/* harmony import */ var _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/observer/observer.js */ \"./node_modules/swiper/core/modules/observer/observer.js\");\n/* harmony import */ var _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events-emitter.js */ \"./node_modules/swiper/core/events-emitter.js\");\n/* harmony import */ var _update_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/index.js */ \"./node_modules/swiper/core/update/index.js\");\n/* harmony import */ var _translate_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./translate/index.js */ \"./node_modules/swiper/core/translate/index.js\");\n/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transition/index.js */ \"./node_modules/swiper/core/transition/index.js\");\n/* harmony import */ var _slide_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slide/index.js */ \"./node_modules/swiper/core/slide/index.js\");\n/* harmony import */ var _loop_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loop/index.js */ \"./node_modules/swiper/core/loop/index.js\");\n/* harmony import */ var _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grab-cursor/index.js */ \"./node_modules/swiper/core/grab-cursor/index.js\");\n/* harmony import */ var _events_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events/index.js */ \"./node_modules/swiper/core/events/index.js\");\n/* harmony import */ var _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./breakpoints/index.js */ \"./node_modules/swiper/core/breakpoints/index.js\");\n/* harmony import */ var _classes_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./classes/index.js */ \"./node_modules/swiper/core/classes/index.js\");\n/* harmony import */ var _images_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/index.js */ \"./node_modules/swiper/core/images/index.js\");\n/* harmony import */ var _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./check-overflow/index.js */ \"./node_modules/swiper/core/check-overflow/index.js\");\n/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./defaults.js */ \"./node_modules/swiper/core/defaults.js\");\n/* harmony import */ var _moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./moduleExtendParams.js */ \"./node_modules/swiper/core/moduleExtendParams.js\");\n/* eslint no-param-reassign: \"off\" */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst prototypes = {\n  eventsEmitter: _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  update: _update_index_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  translate: _translate_index_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  transition: _transition_index_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  slide: _slide_index_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  loop: _loop_index_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  grabCursor: _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  events: _events_index_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  breakpoints: _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  checkOverflow: _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  classes: _classes_index_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  images: _images_index_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"]\n};\nconst extendedDefaults = {};\n\nclass Swiper {\n  constructor() {\n    let el;\n    let params;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {\n      params = args[0];\n    } else {\n      [el, params] = args;\n    }\n\n    if (!params) params = {};\n    params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params);\n    if (el && !params.el) params.el = el;\n\n    if (params.el && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.el).length > 1) {\n      const swipers = [];\n      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.el).each(containerEl => {\n        const newParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params, {\n          el: containerEl\n        });\n        swipers.push(new Swiper(newParams));\n      });\n      return swipers;\n    } // Swiper Instance\n\n\n    const swiper = this;\n    swiper.__swiper__ = true;\n    swiper.support = (0,_shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__.getSupport)();\n    swiper.device = (0,_shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__.getDevice)({\n      userAgent: params.userAgent\n    });\n    swiper.browser = (0,_shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__.getBrowser)();\n    swiper.eventsListeners = {};\n    swiper.eventsAnyListeners = [];\n    swiper.modules = [...swiper.__modules__];\n\n    if (params.modules && Array.isArray(params.modules)) {\n      swiper.modules.push(...params.modules);\n    }\n\n    const allModulesParams = {};\n    swiper.modules.forEach(mod => {\n      mod({\n        swiper,\n        extendParams: (0,_moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__[\"default\"])(params, allModulesParams),\n        on: swiper.on.bind(swiper),\n        once: swiper.once.bind(swiper),\n        off: swiper.off.bind(swiper),\n        emit: swiper.emit.bind(swiper)\n      });\n    }); // Extend defaults with modules params\n\n    const swiperParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, _defaults_js__WEBPACK_IMPORTED_MODULE_20__[\"default\"], allModulesParams); // Extend defaults with passed params\n\n    swiper.params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, swiperParams, extendedDefaults, params);\n    swiper.originalParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, swiper.params);\n    swiper.passedParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params); // add event listeners\n\n    if (swiper.params && swiper.params.on) {\n      Object.keys(swiper.params.on).forEach(eventName => {\n        swiper.on(eventName, swiper.params.on[eventName]);\n      });\n    }\n\n    if (swiper.params && swiper.params.onAny) {\n      swiper.onAny(swiper.params.onAny);\n    } // Save Dom lib\n\n\n    swiper.$ = _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; // Extend Swiper\n\n    Object.assign(swiper, {\n      enabled: swiper.params.enabled,\n      el,\n      // Classes\n      classNames: [],\n      // Slides\n      slides: (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n      slidesGrid: [],\n      snapGrid: [],\n      slidesSizesGrid: [],\n\n      // isDirection\n      isHorizontal() {\n        return swiper.params.direction === 'horizontal';\n      },\n\n      isVertical() {\n        return swiper.params.direction === 'vertical';\n      },\n\n      // Indexes\n      activeIndex: 0,\n      realIndex: 0,\n      //\n      isBeginning: true,\n      isEnd: false,\n      // Props\n      translate: 0,\n      previousTranslate: 0,\n      progress: 0,\n      velocity: 0,\n      animating: false,\n      // Locks\n      allowSlideNext: swiper.params.allowSlideNext,\n      allowSlidePrev: swiper.params.allowSlidePrev,\n      // Touch Events\n      touchEvents: function touchEvents() {\n        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];\n        const desktop = ['pointerdown', 'pointermove', 'pointerup'];\n        swiper.touchEventsTouch = {\n          start: touch[0],\n          move: touch[1],\n          end: touch[2],\n          cancel: touch[3]\n        };\n        swiper.touchEventsDesktop = {\n          start: desktop[0],\n          move: desktop[1],\n          end: desktop[2]\n        };\n        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;\n      }(),\n      touchEventsData: {\n        isTouched: undefined,\n        isMoved: undefined,\n        allowTouchCallbacks: undefined,\n        touchStartTime: undefined,\n        isScrolling: undefined,\n        currentTranslate: undefined,\n        startTranslate: undefined,\n        allowThresholdMove: undefined,\n        // Form elements to match\n        focusableElements: swiper.params.focusableElements,\n        // Last click time\n        lastClickTime: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),\n        clickTimeout: undefined,\n        // Velocities\n        velocities: [],\n        allowMomentumBounce: undefined,\n        isTouchEvent: undefined,\n        startMoving: undefined\n      },\n      // Clicks\n      allowClick: true,\n      // Touches\n      allowTouchMove: swiper.params.allowTouchMove,\n      touches: {\n        startX: 0,\n        startY: 0,\n        currentX: 0,\n        currentY: 0,\n        diff: 0\n      },\n      // Images\n      imagesToLoad: [],\n      imagesLoaded: 0\n    });\n    swiper.emit('_swiper'); // Init\n\n    if (swiper.params.init) {\n      swiper.init();\n    } // Return app instance\n\n\n    return swiper;\n  }\n\n  enable() {\n    const swiper = this;\n    if (swiper.enabled) return;\n    swiper.enabled = true;\n\n    if (swiper.params.grabCursor) {\n      swiper.setGrabCursor();\n    }\n\n    swiper.emit('enable');\n  }\n\n  disable() {\n    const swiper = this;\n    if (!swiper.enabled) return;\n    swiper.enabled = false;\n\n    if (swiper.params.grabCursor) {\n      swiper.unsetGrabCursor();\n    }\n\n    swiper.emit('disable');\n  }\n\n  setProgress(progress, speed) {\n    const swiper = this;\n    progress = Math.min(Math.max(progress, 0), 1);\n    const min = swiper.minTranslate();\n    const max = swiper.maxTranslate();\n    const current = (max - min) * progress + min;\n    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);\n    swiper.updateActiveIndex();\n    swiper.updateSlidesClasses();\n  }\n\n  emitContainerClasses() {\n    const swiper = this;\n    if (!swiper.params._emitClasses || !swiper.el) return;\n    const cls = swiper.el.className.split(' ').filter(className => {\n      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;\n    });\n    swiper.emit('_containerClasses', cls.join(' '));\n  }\n\n  getSlideClasses(slideEl) {\n    const swiper = this;\n    return slideEl.className.split(' ').filter(className => {\n      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;\n    }).join(' ');\n  }\n\n  emitSlidesClasses() {\n    const swiper = this;\n    if (!swiper.params._emitClasses || !swiper.el) return;\n    const updates = [];\n    swiper.slides.each(slideEl => {\n      const classNames = swiper.getSlideClasses(slideEl);\n      updates.push({\n        slideEl,\n        classNames\n      });\n      swiper.emit('_slideClass', slideEl, classNames);\n    });\n    swiper.emit('_slideClasses', updates);\n  }\n\n  slidesPerViewDynamic(view, exact) {\n    if (view === void 0) {\n      view = 'current';\n    }\n\n    if (exact === void 0) {\n      exact = false;\n    }\n\n    const swiper = this;\n    const {\n      params,\n      slides,\n      slidesGrid,\n      slidesSizesGrid,\n      size: swiperSize,\n      activeIndex\n    } = swiper;\n    let spv = 1;\n\n    if (params.centeredSlides) {\n      let slideSize = slides[activeIndex].swiperSlideSize;\n      let breakLoop;\n\n      for (let i = activeIndex + 1; i < slides.length; i += 1) {\n        if (slides[i] && !breakLoop) {\n          slideSize += slides[i].swiperSlideSize;\n          spv += 1;\n          if (slideSize > swiperSize) breakLoop = true;\n        }\n      }\n\n      for (let i = activeIndex - 1; i >= 0; i -= 1) {\n        if (slides[i] && !breakLoop) {\n          slideSize += slides[i].swiperSlideSize;\n          spv += 1;\n          if (slideSize > swiperSize) breakLoop = true;\n        }\n      }\n    } else {\n      // eslint-disable-next-line\n      if (view === 'current') {\n        for (let i = activeIndex + 1; i < slides.length; i += 1) {\n          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;\n\n          if (slideInView) {\n            spv += 1;\n          }\n        }\n      } else {\n        // previous\n        for (let i = activeIndex - 1; i >= 0; i -= 1) {\n          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;\n\n          if (slideInView) {\n            spv += 1;\n          }\n        }\n      }\n    }\n\n    return spv;\n  }\n\n  update() {\n    const swiper = this;\n    if (!swiper || swiper.destroyed) return;\n    const {\n      snapGrid,\n      params\n    } = swiper; // Breakpoints\n\n    if (params.breakpoints) {\n      swiper.setBreakpoint();\n    }\n\n    swiper.updateSize();\n    swiper.updateSlides();\n    swiper.updateProgress();\n    swiper.updateSlidesClasses();\n\n    function setTranslate() {\n      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;\n      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());\n      swiper.setTranslate(newTranslate);\n      swiper.updateActiveIndex();\n      swiper.updateSlidesClasses();\n    }\n\n    let translated;\n\n    if (swiper.params.freeMode && swiper.params.freeMode.enabled) {\n      setTranslate();\n\n      if (swiper.params.autoHeight) {\n        swiper.updateAutoHeight();\n      }\n    } else {\n      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {\n        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);\n      } else {\n        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);\n      }\n\n      if (!translated) {\n        setTranslate();\n      }\n    }\n\n    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {\n      swiper.checkOverflow();\n    }\n\n    swiper.emit('update');\n  }\n\n  changeDirection(newDirection, needUpdate) {\n    if (needUpdate === void 0) {\n      needUpdate = true;\n    }\n\n    const swiper = this;\n    const currentDirection = swiper.params.direction;\n\n    if (!newDirection) {\n      // eslint-disable-next-line\n      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';\n    }\n\n    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {\n      return swiper;\n    }\n\n    swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);\n    swiper.emitContainerClasses();\n    swiper.params.direction = newDirection;\n    swiper.slides.each(slideEl => {\n      if (newDirection === 'vertical') {\n        slideEl.style.width = '';\n      } else {\n        slideEl.style.height = '';\n      }\n    });\n    swiper.emit('changeDirection');\n    if (needUpdate) swiper.update();\n    return swiper;\n  }\n\n  mount(el) {\n    const swiper = this;\n    if (swiper.mounted) return true; // Find el\n\n    const $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el || swiper.params.el);\n    el = $el[0];\n\n    if (!el) {\n      return false;\n    }\n\n    el.swiper = swiper;\n\n    const getWrapperSelector = () => {\n      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;\n    };\n\n    const getWrapper = () => {\n      if (el && el.shadowRoot && el.shadowRoot.querySelector) {\n        const res = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items\n\n        res.children = options => $el.children(options);\n\n        return res;\n      }\n\n      return $el.children(getWrapperSelector());\n    }; // Find Wrapper\n\n\n    let $wrapperEl = getWrapper();\n\n    if ($wrapperEl.length === 0 && swiper.params.createElements) {\n      const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n      const wrapper = document.createElement('div');\n      $wrapperEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(wrapper);\n      wrapper.className = swiper.params.wrapperClass;\n      $el.append(wrapper);\n      $el.children(`.${swiper.params.slideClass}`).each(slideEl => {\n        $wrapperEl.append(slideEl);\n      });\n    }\n\n    Object.assign(swiper, {\n      $el,\n      el,\n      $wrapperEl,\n      wrapperEl: $wrapperEl[0],\n      mounted: true,\n      // RTL\n      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',\n      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),\n      wrongRTL: $wrapperEl.css('display') === '-webkit-box'\n    });\n    return true;\n  }\n\n  init(el) {\n    const swiper = this;\n    if (swiper.initialized) return swiper;\n    const mounted = swiper.mount(el);\n    if (mounted === false) return swiper;\n    swiper.emit('beforeInit'); // Set breakpoint\n\n    if (swiper.params.breakpoints) {\n      swiper.setBreakpoint();\n    } // Add Classes\n\n\n    swiper.addClasses(); // Create loop\n\n    if (swiper.params.loop) {\n      swiper.loopCreate();\n    } // Update size\n\n\n    swiper.updateSize(); // Update slides\n\n    swiper.updateSlides();\n\n    if (swiper.params.watchOverflow) {\n      swiper.checkOverflow();\n    } // Set Grab Cursor\n\n\n    if (swiper.params.grabCursor && swiper.enabled) {\n      swiper.setGrabCursor();\n    }\n\n    if (swiper.params.preloadImages) {\n      swiper.preloadImages();\n    } // Slide To Initial Slide\n\n\n    if (swiper.params.loop) {\n      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);\n    } else {\n      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);\n    } // Attach events\n\n\n    swiper.attachEvents(); // Init Flag\n\n    swiper.initialized = true; // Emit\n\n    swiper.emit('init');\n    swiper.emit('afterInit');\n    return swiper;\n  }\n\n  destroy(deleteInstance, cleanStyles) {\n    if (deleteInstance === void 0) {\n      deleteInstance = true;\n    }\n\n    if (cleanStyles === void 0) {\n      cleanStyles = true;\n    }\n\n    const swiper = this;\n    const {\n      params,\n      $el,\n      $wrapperEl,\n      slides\n    } = swiper;\n\n    if (typeof swiper.params === 'undefined' || swiper.destroyed) {\n      return null;\n    }\n\n    swiper.emit('beforeDestroy'); // Init Flag\n\n    swiper.initialized = false; // Detach events\n\n    swiper.detachEvents(); // Destroy loop\n\n    if (params.loop) {\n      swiper.loopDestroy();\n    } // Cleanup styles\n\n\n    if (cleanStyles) {\n      swiper.removeClasses();\n      $el.removeAttr('style');\n      $wrapperEl.removeAttr('style');\n\n      if (slides && slides.length) {\n        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');\n      }\n    }\n\n    swiper.emit('destroy'); // Detach emitter events\n\n    Object.keys(swiper.eventsListeners).forEach(eventName => {\n      swiper.off(eventName);\n    });\n\n    if (deleteInstance !== false) {\n      swiper.$el[0].swiper = null;\n      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.deleteProps)(swiper);\n    }\n\n    swiper.destroyed = true;\n    return null;\n  }\n\n  static extendDefaults(newDefaults) {\n    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)(extendedDefaults, newDefaults);\n  }\n\n  static get extendedDefaults() {\n    return extendedDefaults;\n  }\n\n  static get defaults() {\n    return _defaults_js__WEBPACK_IMPORTED_MODULE_20__[\"default\"];\n  }\n\n  static installModule(mod) {\n    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];\n    const modules = Swiper.prototype.__modules__;\n\n    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {\n      modules.push(mod);\n    }\n  }\n\n  static use(module) {\n    if (Array.isArray(module)) {\n      module.forEach(m => Swiper.installModule(m));\n      return Swiper;\n    }\n\n    Swiper.installModule(module);\n    return Swiper;\n  }\n\n}\n\nObject.keys(prototypes).forEach(prototypeGroup => {\n  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {\n    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];\n  });\n});\nSwiper.use([_modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Swiper);\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/core.js?");

/***/ }),

/***/ "./node_modules/swiper/core/defaults.js":
/*!**********************************************!*\
  !*** ./node_modules/swiper/core/defaults.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: true,\n  direction: 'horizontal',\n  touchEventsTarget: 'wrapper',\n  initialSlide: 0,\n  speed: 300,\n  cssMode: false,\n  updateOnWindowResize: true,\n  resizeObserver: true,\n  nested: false,\n  createElements: false,\n  enabled: true,\n  focusableElements: 'input, select, option, textarea, button, video, label',\n  // Overrides\n  width: null,\n  height: null,\n  //\n  preventInteractionOnTransition: false,\n  // ssr\n  userAgent: null,\n  url: null,\n  // To support iOS's swipe-to-go-back gesture (when being used in-app).\n  edgeSwipeDetection: false,\n  edgeSwipeThreshold: 20,\n  // Autoheight\n  autoHeight: false,\n  // Set wrapper width\n  setWrapperSize: false,\n  // Virtual Translate\n  virtualTranslate: false,\n  // Effects\n  effect: 'slide',\n  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'\n  // Breakpoints\n  breakpoints: undefined,\n  breakpointsBase: 'window',\n  // Slides grid\n  spaceBetween: 0,\n  slidesPerView: 1,\n  slidesPerGroup: 1,\n  slidesPerGroupSkip: 0,\n  slidesPerGroupAuto: false,\n  centeredSlides: false,\n  centeredSlidesBounds: false,\n  slidesOffsetBefore: 0,\n  // in px\n  slidesOffsetAfter: 0,\n  // in px\n  normalizeSlideIndex: true,\n  centerInsufficientSlides: false,\n  // Disable swiper and hide navigation when container not overflow\n  watchOverflow: true,\n  // Round length\n  roundLengths: false,\n  // Touches\n  touchRatio: 1,\n  touchAngle: 45,\n  simulateTouch: true,\n  shortSwipes: true,\n  longSwipes: true,\n  longSwipesRatio: 0.5,\n  longSwipesMs: 300,\n  followFinger: true,\n  allowTouchMove: true,\n  threshold: 0,\n  touchMoveStopPropagation: false,\n  touchStartPreventDefault: true,\n  touchStartForcePreventDefault: false,\n  touchReleaseOnEdges: false,\n  // Unique Navigation Elements\n  uniqueNavElements: true,\n  // Resistance\n  resistance: true,\n  resistanceRatio: 0.85,\n  // Progress\n  watchSlidesProgress: false,\n  // Cursor\n  grabCursor: false,\n  // Clicks\n  preventClicks: true,\n  preventClicksPropagation: true,\n  slideToClickedSlide: false,\n  // Images\n  preloadImages: true,\n  updateOnImagesReady: true,\n  // loop\n  loop: false,\n  loopAdditionalSlides: 0,\n  loopedSlides: null,\n  loopFillGroupWithBlank: false,\n  loopPreventsSlide: true,\n  // rewind\n  rewind: false,\n  // Swiping/no swiping\n  allowSlidePrev: true,\n  allowSlideNext: true,\n  swipeHandler: null,\n  // '.swipe-handler',\n  noSwiping: true,\n  noSwipingClass: 'swiper-no-swiping',\n  noSwipingSelector: null,\n  // Passive Listeners\n  passiveListeners: true,\n  maxBackfaceHiddenSlides: 10,\n  // NS\n  containerModifierClass: 'swiper-',\n  // NEW\n  slideClass: 'swiper-slide',\n  slideBlankClass: 'swiper-slide-invisible-blank',\n  slideActiveClass: 'swiper-slide-active',\n  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',\n  slideVisibleClass: 'swiper-slide-visible',\n  slideDuplicateClass: 'swiper-slide-duplicate',\n  slideNextClass: 'swiper-slide-next',\n  slideDuplicateNextClass: 'swiper-slide-duplicate-next',\n  slidePrevClass: 'swiper-slide-prev',\n  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',\n  wrapperClass: 'swiper-wrapper',\n  // Callbacks\n  runCallbacksOnInit: true,\n  // Internals\n  _emitClasses: false\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/defaults.js?");

/***/ }),

/***/ "./node_modules/swiper/core/events-emitter.js":
/*!****************************************************!*\
  !*** ./node_modules/swiper/core/events-emitter.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable no-underscore-dangle */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  on(events, handler, priority) {\n    const self = this;\n    if (typeof handler !== 'function') return self;\n    const method = priority ? 'unshift' : 'push';\n    events.split(' ').forEach(event => {\n      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];\n      self.eventsListeners[event][method](handler);\n    });\n    return self;\n  },\n\n  once(events, handler, priority) {\n    const self = this;\n    if (typeof handler !== 'function') return self;\n\n    function onceHandler() {\n      self.off(events, onceHandler);\n\n      if (onceHandler.__emitterProxy) {\n        delete onceHandler.__emitterProxy;\n      }\n\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      handler.apply(self, args);\n    }\n\n    onceHandler.__emitterProxy = handler;\n    return self.on(events, onceHandler, priority);\n  },\n\n  onAny(handler, priority) {\n    const self = this;\n    if (typeof handler !== 'function') return self;\n    const method = priority ? 'unshift' : 'push';\n\n    if (self.eventsAnyListeners.indexOf(handler) < 0) {\n      self.eventsAnyListeners[method](handler);\n    }\n\n    return self;\n  },\n\n  offAny(handler) {\n    const self = this;\n    if (!self.eventsAnyListeners) return self;\n    const index = self.eventsAnyListeners.indexOf(handler);\n\n    if (index >= 0) {\n      self.eventsAnyListeners.splice(index, 1);\n    }\n\n    return self;\n  },\n\n  off(events, handler) {\n    const self = this;\n    if (!self.eventsListeners) return self;\n    events.split(' ').forEach(event => {\n      if (typeof handler === 'undefined') {\n        self.eventsListeners[event] = [];\n      } else if (self.eventsListeners[event]) {\n        self.eventsListeners[event].forEach((eventHandler, index) => {\n          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {\n            self.eventsListeners[event].splice(index, 1);\n          }\n        });\n      }\n    });\n    return self;\n  },\n\n  emit() {\n    const self = this;\n    if (!self.eventsListeners) return self;\n    let events;\n    let data;\n    let context;\n\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    if (typeof args[0] === 'string' || Array.isArray(args[0])) {\n      events = args[0];\n      data = args.slice(1, args.length);\n      context = self;\n    } else {\n      events = args[0].events;\n      data = args[0].data;\n      context = args[0].context || self;\n    }\n\n    data.unshift(context);\n    const eventsArray = Array.isArray(events) ? events : events.split(' ');\n    eventsArray.forEach(event => {\n      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {\n        self.eventsAnyListeners.forEach(eventHandler => {\n          eventHandler.apply(context, [event, ...data]);\n        });\n      }\n\n      if (self.eventsListeners && self.eventsListeners[event]) {\n        self.eventsListeners[event].forEach(eventHandler => {\n          eventHandler.apply(context, data);\n        });\n      }\n    });\n    return self;\n  }\n\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/events-emitter.js?");

/***/ }),

/***/ "./node_modules/swiper/core/events/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/events/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart.js */ \"./node_modules/swiper/core/events/onTouchStart.js\");\n/* harmony import */ var _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove.js */ \"./node_modules/swiper/core/events/onTouchMove.js\");\n/* harmony import */ var _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd.js */ \"./node_modules/swiper/core/events/onTouchEnd.js\");\n/* harmony import */ var _onResize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onResize.js */ \"./node_modules/swiper/core/events/onResize.js\");\n/* harmony import */ var _onClick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick.js */ \"./node_modules/swiper/core/events/onClick.js\");\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onScroll.js */ \"./node_modules/swiper/core/events/onScroll.js\");\n\n\n\n\n\n\n\nlet dummyEventAttached = false;\n\nfunction dummyEventListener() {}\n\nconst events = (swiper, method) => {\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const {\n    params,\n    touchEvents,\n    el,\n    wrapperEl,\n    device,\n    support\n  } = swiper;\n  const capture = !!params.nested;\n  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';\n  const swiperMethod = method; // Touch Events\n\n  if (!support.touch) {\n    el[domMethod](touchEvents.start, swiper.onTouchStart, false);\n    document[domMethod](touchEvents.move, swiper.onTouchMove, capture);\n    document[domMethod](touchEvents.end, swiper.onTouchEnd, false);\n  } else {\n    const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {\n      passive: true,\n      capture: false\n    } : false;\n    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);\n    el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {\n      passive: false,\n      capture\n    } : capture);\n    el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);\n\n    if (touchEvents.cancel) {\n      el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);\n    }\n  } // Prevent Links Clicks\n\n\n  if (params.preventClicks || params.preventClicksPropagation) {\n    el[domMethod]('click', swiper.onClick, true);\n  }\n\n  if (params.cssMode) {\n    wrapperEl[domMethod]('scroll', swiper.onScroll);\n  } // Resize handler\n\n\n  if (params.updateOnWindowResize) {\n    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], true);\n  } else {\n    swiper[swiperMethod]('observerUpdate', _onResize_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], true);\n  }\n};\n\nfunction attachEvents() {\n  const swiper = this;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const {\n    params,\n    support\n  } = swiper;\n  swiper.onTouchStart = _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(swiper);\n  swiper.onTouchMove = _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(swiper);\n  swiper.onTouchEnd = _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bind(swiper);\n\n  if (params.cssMode) {\n    swiper.onScroll = _onScroll_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].bind(swiper);\n  }\n\n  swiper.onClick = _onClick_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].bind(swiper);\n\n  if (support.touch && !dummyEventAttached) {\n    document.addEventListener('touchstart', dummyEventListener);\n    dummyEventAttached = true;\n  }\n\n  events(swiper, 'on');\n}\n\nfunction detachEvents() {\n  const swiper = this;\n  events(swiper, 'off');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  attachEvents,\n  detachEvents\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/events/index.js?");

/***/ }),

/***/ "./node_modules/swiper/core/events/onClick.js":
/*!****************************************************!*\
  !*** ./node_modules/swiper/core/events/onClick.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ onClick; }\n/* harmony export */ });\nfunction onClick(e) {\n  const swiper = this;\n  if (!swiper.enabled) return;\n\n  if (!swiper.allowClick) {\n    if (swiper.params.preventClicks) e.preventDefault();\n\n    if (swiper.params.preventClicksPropagation && swiper.animating) {\n      e.stopPropagation();\n      e.stopImmediatePropagation();\n    }\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/events/onClick.js?");

/***/ }),

/***/ "./node_modules/swiper/core/events/onResize.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onResize.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ onResize; }\n/* harmony export */ });\nfunction onResize() {\n  const swiper = this;\n  const {\n    params,\n    el\n  } = swiper;\n  if (el && el.offsetWidth === 0) return; // Breakpoints\n\n  if (params.breakpoints) {\n    swiper.setBreakpoint();\n  } // Save locks\n\n\n  const {\n    allowSlideNext,\n    allowSlidePrev,\n    snapGrid\n  } = swiper; // Disable locks on resize\n\n  swiper.allowSlideNext = true;\n  swiper.allowSlidePrev = true;\n  swiper.updateSize();\n  swiper.updateSlides();\n  swiper.updateSlidesClasses();\n\n  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {\n    swiper.slideTo(swiper.slides.length - 1, 0, false, true);\n  } else {\n    swiper.slideTo(swiper.activeIndex, 0, false, true);\n  }\n\n  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {\n    swiper.autoplay.run();\n  } // Return locks after resize\n\n\n  swiper.allowSlidePrev = allowSlidePrev;\n  swiper.allowSlideNext = allowSlideNext;\n\n  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {\n    swiper.checkOverflow();\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/events/onResize.js?");

/***/ }),

/***/ "./node_modules/swiper/core/events/onScroll.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onScroll.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ onScroll; }\n/* harmony export */ });\nfunction onScroll() {\n  const swiper = this;\n  const {\n    wrapperEl,\n    rtlTranslate,\n    enabled\n  } = swiper;\n  if (!enabled) return;\n  swiper.previousTranslate = swiper.translate;\n\n  if (swiper.isHorizontal()) {\n    swiper.translate = -wrapperEl.scrollLeft;\n  } else {\n    swiper.translate = -wrapperEl.scrollTop;\n  } // eslint-disable-next-line\n\n\n  if (swiper.translate === -0) swiper.translate = 0;\n  swiper.updateActiveIndex();\n  swiper.updateSlidesClasses();\n  let newProgress;\n  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();\n\n  if (translatesDiff === 0) {\n    newProgress = 0;\n  } else {\n    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;\n  }\n\n  if (newProgress !== swiper.progress) {\n    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);\n  }\n\n  swiper.emit('setTranslate', swiper.translate, false);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/events/onScroll.js?");

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchEnd.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchEnd.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ onTouchEnd; }\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction onTouchEnd(event) {\n  const swiper = this;\n  const data = swiper.touchEventsData;\n  const {\n    params,\n    touches,\n    rtlTranslate: rtl,\n    slidesGrid,\n    enabled\n  } = swiper;\n  if (!enabled) return;\n  let e = event;\n  if (e.originalEvent) e = e.originalEvent;\n\n  if (data.allowTouchCallbacks) {\n    swiper.emit('touchEnd', e);\n  }\n\n  data.allowTouchCallbacks = false;\n\n  if (!data.isTouched) {\n    if (data.isMoved && params.grabCursor) {\n      swiper.setGrabCursor(false);\n    }\n\n    data.isMoved = false;\n    data.startMoving = false;\n    return;\n  } // Return Grab Cursor\n\n\n  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {\n    swiper.setGrabCursor(false);\n  } // Time diff\n\n\n  const touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();\n  const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click\n\n  if (swiper.allowClick) {\n    const pathTree = e.path || e.composedPath && e.composedPath();\n    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);\n    swiper.emit('tap click', e);\n\n    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {\n      swiper.emit('doubleTap doubleClick', e);\n    }\n  }\n\n  data.lastClickTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();\n  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {\n    if (!swiper.destroyed) swiper.allowClick = true;\n  });\n\n  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {\n    data.isTouched = false;\n    data.isMoved = false;\n    data.startMoving = false;\n    return;\n  }\n\n  data.isTouched = false;\n  data.isMoved = false;\n  data.startMoving = false;\n  let currentPos;\n\n  if (params.followFinger) {\n    currentPos = rtl ? swiper.translate : -swiper.translate;\n  } else {\n    currentPos = -data.currentTranslate;\n  }\n\n  if (params.cssMode) {\n    return;\n  }\n\n  if (swiper.params.freeMode && params.freeMode.enabled) {\n    swiper.freeMode.onTouchEnd({\n      currentPos\n    });\n    return;\n  } // Find current slide\n\n\n  let stopIndex = 0;\n  let groupSize = swiper.slidesSizesGrid[0];\n\n  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {\n    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;\n\n    if (typeof slidesGrid[i + increment] !== 'undefined') {\n      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {\n        stopIndex = i;\n        groupSize = slidesGrid[i + increment] - slidesGrid[i];\n      }\n    } else if (currentPos >= slidesGrid[i]) {\n      stopIndex = i;\n      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];\n    }\n  }\n\n  let rewindFirstIndex = null;\n  let rewindLastIndex = null;\n\n  if (params.rewind) {\n    if (swiper.isBeginning) {\n      rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;\n    } else if (swiper.isEnd) {\n      rewindFirstIndex = 0;\n    }\n  } // Find current slide size\n\n\n  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;\n  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;\n\n  if (timeDiff > params.longSwipesMs) {\n    // Long touches\n    if (!params.longSwipes) {\n      swiper.slideTo(swiper.activeIndex);\n      return;\n    }\n\n    if (swiper.swipeDirection === 'next') {\n      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);\n    }\n\n    if (swiper.swipeDirection === 'prev') {\n      if (ratio > 1 - params.longSwipesRatio) {\n        swiper.slideTo(stopIndex + increment);\n      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {\n        swiper.slideTo(rewindLastIndex);\n      } else {\n        swiper.slideTo(stopIndex);\n      }\n    }\n  } else {\n    // Short swipes\n    if (!params.shortSwipes) {\n      swiper.slideTo(swiper.activeIndex);\n      return;\n    }\n\n    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);\n\n    if (!isNavButtonTarget) {\n      if (swiper.swipeDirection === 'next') {\n        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);\n      }\n\n      if (swiper.swipeDirection === 'prev') {\n        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);\n      }\n    } else if (e.target === swiper.navigation.nextEl) {\n      swiper.slideTo(stopIndex + increment);\n    } else {\n      swiper.slideTo(stopIndex);\n    }\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/events/onTouchEnd.js?");

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchMove.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchMove.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ onTouchMove; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\n\n\nfunction onTouchMove(event) {\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const swiper = this;\n  const data = swiper.touchEventsData;\n  const {\n    params,\n    touches,\n    rtlTranslate: rtl,\n    enabled\n  } = swiper;\n  if (!enabled) return;\n  let e = event;\n  if (e.originalEvent) e = e.originalEvent;\n\n  if (!data.isTouched) {\n    if (data.startMoving && data.isScrolling) {\n      swiper.emit('touchMoveOpposite', e);\n    }\n\n    return;\n  }\n\n  if (data.isTouchEvent && e.type !== 'touchmove') return;\n  const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);\n  const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;\n  const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;\n\n  if (e.preventedByNestedSwiper) {\n    touches.startX = pageX;\n    touches.startY = pageY;\n    return;\n  }\n\n  if (!swiper.allowTouchMove) {\n    if (!(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target).is(data.focusableElements)) {\n      swiper.allowClick = false;\n    }\n\n    if (data.isTouched) {\n      Object.assign(touches, {\n        startX: pageX,\n        startY: pageY,\n        currentX: pageX,\n        currentY: pageY\n      });\n      data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();\n    }\n\n    return;\n  }\n\n  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {\n    if (swiper.isVertical()) {\n      // Vertical\n      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {\n        data.isTouched = false;\n        data.isMoved = false;\n        return;\n      }\n    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {\n      return;\n    }\n  }\n\n  if (data.isTouchEvent && document.activeElement) {\n    if (e.target === document.activeElement && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target).is(data.focusableElements)) {\n      data.isMoved = true;\n      swiper.allowClick = false;\n      return;\n    }\n  }\n\n  if (data.allowTouchCallbacks) {\n    swiper.emit('touchMove', e);\n  }\n\n  if (e.targetTouches && e.targetTouches.length > 1) return;\n  touches.currentX = pageX;\n  touches.currentY = pageY;\n  const diffX = touches.currentX - touches.startX;\n  const diffY = touches.currentY - touches.startY;\n  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;\n\n  if (typeof data.isScrolling === 'undefined') {\n    let touchAngle;\n\n    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {\n      data.isScrolling = false;\n    } else {\n      // eslint-disable-next-line\n      if (diffX * diffX + diffY * diffY >= 25) {\n        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;\n        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;\n      }\n    }\n  }\n\n  if (data.isScrolling) {\n    swiper.emit('touchMoveOpposite', e);\n  }\n\n  if (typeof data.startMoving === 'undefined') {\n    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {\n      data.startMoving = true;\n    }\n  }\n\n  if (data.isScrolling) {\n    data.isTouched = false;\n    return;\n  }\n\n  if (!data.startMoving) {\n    return;\n  }\n\n  swiper.allowClick = false;\n\n  if (!params.cssMode && e.cancelable) {\n    e.preventDefault();\n  }\n\n  if (params.touchMoveStopPropagation && !params.nested) {\n    e.stopPropagation();\n  }\n\n  if (!data.isMoved) {\n    if (params.loop && !params.cssMode) {\n      swiper.loopFix();\n    }\n\n    data.startTranslate = swiper.getTranslate();\n    swiper.setTransition(0);\n\n    if (swiper.animating) {\n      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');\n    }\n\n    data.allowMomentumBounce = false; // Grab Cursor\n\n    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {\n      swiper.setGrabCursor(true);\n    }\n\n    swiper.emit('sliderFirstMove', e);\n  }\n\n  swiper.emit('sliderMove', e);\n  data.isMoved = true;\n  let diff = swiper.isHorizontal() ? diffX : diffY;\n  touches.diff = diff;\n  diff *= params.touchRatio;\n  if (rtl) diff = -diff;\n  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';\n  data.currentTranslate = diff + data.startTranslate;\n  let disableParentSwiper = true;\n  let resistanceRatio = params.resistanceRatio;\n\n  if (params.touchReleaseOnEdges) {\n    resistanceRatio = 0;\n  }\n\n  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {\n    disableParentSwiper = false;\n    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;\n  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {\n    disableParentSwiper = false;\n    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;\n  }\n\n  if (disableParentSwiper) {\n    e.preventedByNestedSwiper = true;\n  } // Directions locks\n\n\n  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {\n    data.currentTranslate = data.startTranslate;\n  }\n\n  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {\n    data.currentTranslate = data.startTranslate;\n  }\n\n  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {\n    data.currentTranslate = data.startTranslate;\n  } // Threshold\n\n\n  if (params.threshold > 0) {\n    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {\n      if (!data.allowThresholdMove) {\n        data.allowThresholdMove = true;\n        touches.startX = touches.currentX;\n        touches.startY = touches.currentY;\n        data.currentTranslate = data.startTranslate;\n        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;\n        return;\n      }\n    } else {\n      data.currentTranslate = data.startTranslate;\n      return;\n    }\n  }\n\n  if (!params.followFinger || params.cssMode) return; // Update active index in free mode\n\n  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {\n    swiper.updateActiveIndex();\n    swiper.updateSlidesClasses();\n  }\n\n  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {\n    swiper.freeMode.onTouchMove();\n  } // Update progress\n\n\n  swiper.updateProgress(data.currentTranslate); // Update translate\n\n  swiper.setTranslate(data.currentTranslate);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/events/onTouchMove.js?");

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchStart.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchStart.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ onTouchStart; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\n\n // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd\n\nfunction closestElement(selector, base) {\n  if (base === void 0) {\n    base = this;\n  }\n\n  function __closestFrom(el) {\n    if (!el || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)() || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) return null;\n    if (el.assignedSlot) el = el.assignedSlot;\n    const found = el.closest(selector);\n    return found || __closestFrom(el.getRootNode().host);\n  }\n\n  return __closestFrom(base);\n}\n\nfunction onTouchStart(event) {\n  const swiper = this;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const data = swiper.touchEventsData;\n  const {\n    params,\n    touches,\n    enabled\n  } = swiper;\n  if (!enabled) return;\n\n  if (swiper.animating && params.preventInteractionOnTransition) {\n    return;\n  }\n\n  if (!swiper.animating && params.cssMode && params.loop) {\n    swiper.loopFix();\n  }\n\n  let e = event;\n  if (e.originalEvent) e = e.originalEvent;\n  let $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target);\n\n  if (params.touchEventsTarget === 'wrapper') {\n    if (!$targetEl.closest(swiper.wrapperEl).length) return;\n  }\n\n  data.isTouchEvent = e.type === 'touchstart';\n  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;\n  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;\n  if (data.isTouched && data.isMoved) return; // change target el for shadow root component\n\n  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';\n\n  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {\n    $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event.path[0]);\n  }\n\n  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;\n  const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element\n\n  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {\n    swiper.allowClick = true;\n    return;\n  }\n\n  if (params.swipeHandler) {\n    if (!$targetEl.closest(params.swipeHandler)[0]) return;\n  }\n\n  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;\n  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;\n  const startX = touches.currentX;\n  const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore\n\n  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;\n  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;\n\n  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {\n    if (edgeSwipeDetection === 'prevent') {\n      event.preventDefault();\n    } else {\n      return;\n    }\n  }\n\n  Object.assign(data, {\n    isTouched: true,\n    isMoved: false,\n    allowTouchCallbacks: true,\n    isScrolling: undefined,\n    startMoving: undefined\n  });\n  touches.startX = startX;\n  touches.startY = startY;\n  data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();\n  swiper.allowClick = true;\n  swiper.updateSize();\n  swiper.swipeDirection = undefined;\n  if (params.threshold > 0) data.allowThresholdMove = false;\n\n  if (e.type !== 'touchstart') {\n    let preventDefault = true;\n\n    if ($targetEl.is(data.focusableElements)) {\n      preventDefault = false;\n\n      if ($targetEl[0].nodeName === 'SELECT') {\n        data.isTouched = false;\n      }\n    }\n\n    if (document.activeElement && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {\n      document.activeElement.blur();\n    }\n\n    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;\n\n    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {\n      e.preventDefault();\n    }\n  }\n\n  if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {\n    swiper.freeMode.onTouchStart();\n  }\n\n  swiper.emit('touchStart', e);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/events/onTouchStart.js?");

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor.js */ \"./node_modules/swiper/core/grab-cursor/setGrabCursor.js\");\n/* harmony import */ var _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor.js */ \"./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  setGrabCursor: _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  unsetGrabCursor: _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/grab-cursor/index.js?");

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/setGrabCursor.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/setGrabCursor.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ setGrabCursor; }\n/* harmony export */ });\nfunction setGrabCursor(moving) {\n  const swiper = this;\n  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;\n  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;\n  el.style.cursor = 'move';\n  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';\n  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';\n  el.style.cursor = moving ? 'grabbing' : 'grab';\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/grab-cursor/setGrabCursor.js?");

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ unsetGrabCursor; }\n/* harmony export */ });\nfunction unsetGrabCursor() {\n  const swiper = this;\n\n  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {\n    return;\n  }\n\n  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js?");

/***/ }),

/***/ "./node_modules/swiper/core/images/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/images/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage.js */ \"./node_modules/swiper/core/images/loadImage.js\");\n/* harmony import */ var _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages.js */ \"./node_modules/swiper/core/images/preloadImages.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loadImage: _loadImage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  preloadImages: _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/images/index.js?");

/***/ }),

/***/ "./node_modules/swiper/core/images/loadImage.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/images/loadImage.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ loadImage; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\n\nfunction loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  let image;\n\n  function onReady() {\n    if (callback) callback();\n  }\n\n  const isPicture = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(imageEl).parent('picture')[0];\n\n  if (!isPicture && (!imageEl.complete || !checkForComplete)) {\n    if (src) {\n      image = new window.Image();\n      image.onload = onReady;\n      image.onerror = onReady;\n\n      if (sizes) {\n        image.sizes = sizes;\n      }\n\n      if (srcset) {\n        image.srcset = srcset;\n      }\n\n      if (src) {\n        image.src = src;\n      }\n    } else {\n      onReady();\n    }\n  } else {\n    // image already loaded...\n    onReady();\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/images/loadImage.js?");

/***/ }),

/***/ "./node_modules/swiper/core/images/preloadImages.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/images/preloadImages.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ preloadImages; }\n/* harmony export */ });\nfunction preloadImages() {\n  const swiper = this;\n  swiper.imagesToLoad = swiper.$el.find('img');\n\n  function onReady() {\n    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;\n    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;\n\n    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {\n      if (swiper.params.updateOnImagesReady) swiper.update();\n      swiper.emit('imagesReady');\n    }\n  }\n\n  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {\n    const imageEl = swiper.imagesToLoad[i];\n    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/images/preloadImages.js?");

/***/ }),

/***/ "./node_modules/swiper/core/loop/index.js":
/*!************************************************!*\
  !*** ./node_modules/swiper/core/loop/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate.js */ \"./node_modules/swiper/core/loop/loopCreate.js\");\n/* harmony import */ var _loopFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix.js */ \"./node_modules/swiper/core/loop/loopFix.js\");\n/* harmony import */ var _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy.js */ \"./node_modules/swiper/core/loop/loopDestroy.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loopCreate: _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  loopFix: _loopFix_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  loopDestroy: _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/loop/index.js?");

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopCreate.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopCreate.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ loopCreate; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\n\nfunction loopCreate() {\n  const swiper = this;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const {\n    params,\n    $wrapperEl\n  } = swiper; // Remove duplicated slides\n\n  const $selector = $wrapperEl.children().length > 0 ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($wrapperEl.children()[0].parentNode) : $wrapperEl;\n  $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();\n  let slides = $selector.children(`.${params.slideClass}`);\n\n  if (params.loopFillGroupWithBlank) {\n    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;\n\n    if (blankSlidesNum !== params.slidesPerGroup) {\n      for (let i = 0; i < blankSlidesNum; i += 1) {\n        const blankNode = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);\n        $selector.append(blankNode);\n      }\n\n      slides = $selector.children(`.${params.slideClass}`);\n    }\n  }\n\n  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;\n  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));\n  swiper.loopedSlides += params.loopAdditionalSlides;\n\n  if (swiper.loopedSlides > slides.length) {\n    swiper.loopedSlides = slides.length;\n  }\n\n  const prependSlides = [];\n  const appendSlides = [];\n  slides.each((el, index) => {\n    const slide = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el);\n\n    if (index < swiper.loopedSlides) {\n      appendSlides.push(el);\n    }\n\n    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {\n      prependSlides.push(el);\n    }\n\n    slide.attr('data-swiper-slide-index', index);\n  });\n\n  for (let i = 0; i < appendSlides.length; i += 1) {\n    $selector.append((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));\n  }\n\n  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {\n    $selector.prepend((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/loop/loopCreate.js?");

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopDestroy.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopDestroy.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ loopDestroy; }\n/* harmony export */ });\nfunction loopDestroy() {\n  const swiper = this;\n  const {\n    $wrapperEl,\n    params,\n    slides\n  } = swiper;\n  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();\n  slides.removeAttr('data-swiper-slide-index');\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/loop/loopDestroy.js?");

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopFix.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopFix.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ loopFix; }\n/* harmony export */ });\nfunction loopFix() {\n  const swiper = this;\n  swiper.emit('beforeLoopFix');\n  const {\n    activeIndex,\n    slides,\n    loopedSlides,\n    allowSlidePrev,\n    allowSlideNext,\n    snapGrid,\n    rtlTranslate: rtl\n  } = swiper;\n  let newIndex;\n  swiper.allowSlidePrev = true;\n  swiper.allowSlideNext = true;\n  const snapTranslate = -snapGrid[activeIndex];\n  const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding\n\n  if (activeIndex < loopedSlides) {\n    newIndex = slides.length - loopedSlides * 3 + activeIndex;\n    newIndex += loopedSlides;\n    const slideChanged = swiper.slideTo(newIndex, 0, false, true);\n\n    if (slideChanged && diff !== 0) {\n      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);\n    }\n  } else if (activeIndex >= slides.length - loopedSlides) {\n    // Fix For Positive Oversliding\n    newIndex = -slides.length + activeIndex + loopedSlides;\n    newIndex += loopedSlides;\n    const slideChanged = swiper.slideTo(newIndex, 0, false, true);\n\n    if (slideChanged && diff !== 0) {\n      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);\n    }\n  }\n\n  swiper.allowSlidePrev = allowSlidePrev;\n  swiper.allowSlideNext = allowSlideNext;\n  swiper.emit('loopFix');\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/loop/loopFix.js?");

/***/ }),

/***/ "./node_modules/swiper/core/moduleExtendParams.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/moduleExtendParams.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ moduleExtendParams; }\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction moduleExtendParams(params, allModulesParams) {\n  return function extendParams(obj) {\n    if (obj === void 0) {\n      obj = {};\n    }\n\n    const moduleParamName = Object.keys(obj)[0];\n    const moduleParams = obj[moduleParamName];\n\n    if (typeof moduleParams !== 'object' || moduleParams === null) {\n      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);\n      return;\n    }\n\n    if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {\n      params[moduleParamName] = {\n        auto: true\n      };\n    }\n\n    if (!(moduleParamName in params && 'enabled' in moduleParams)) {\n      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);\n      return;\n    }\n\n    if (params[moduleParamName] === true) {\n      params[moduleParamName] = {\n        enabled: true\n      };\n    }\n\n    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {\n      params[moduleParamName].enabled = true;\n    }\n\n    if (!params[moduleParamName]) params[moduleParamName] = {\n      enabled: false\n    };\n    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);\n  };\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/moduleExtendParams.js?");

/***/ }),

/***/ "./node_modules/swiper/core/modules/observer/observer.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/modules/observer/observer.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Observer; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nfunction Observer(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  const observers = [];\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n\n  const attach = function (target, options) {\n    if (options === void 0) {\n      options = {};\n    }\n\n    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;\n    const observer = new ObserverFunc(mutations => {\n      // The observerUpdate event should only be triggered\n      // once despite the number of mutations.  Additional\n      // triggers are redundant and are very costly\n      if (mutations.length === 1) {\n        emit('observerUpdate', mutations[0]);\n        return;\n      }\n\n      const observerUpdate = function observerUpdate() {\n        emit('observerUpdate', mutations[0]);\n      };\n\n      if (window.requestAnimationFrame) {\n        window.requestAnimationFrame(observerUpdate);\n      } else {\n        window.setTimeout(observerUpdate, 0);\n      }\n    });\n    observer.observe(target, {\n      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,\n      childList: typeof options.childList === 'undefined' ? true : options.childList,\n      characterData: typeof options.characterData === 'undefined' ? true : options.characterData\n    });\n    observers.push(observer);\n  };\n\n  const init = () => {\n    if (!swiper.params.observer) return;\n\n    if (swiper.params.observeParents) {\n      const containerParents = swiper.$el.parents();\n\n      for (let i = 0; i < containerParents.length; i += 1) {\n        attach(containerParents[i]);\n      }\n    } // Observe container\n\n\n    attach(swiper.$el[0], {\n      childList: swiper.params.observeSlideChildren\n    }); // Observe wrapper\n\n    attach(swiper.$wrapperEl[0], {\n      attributes: false\n    });\n  };\n\n  const destroy = () => {\n    observers.forEach(observer => {\n      observer.disconnect();\n    });\n    observers.splice(0, observers.length);\n  };\n\n  extendParams({\n    observer: false,\n    observeParents: false,\n    observeSlideChildren: false\n  });\n  on('init', init);\n  on('destroy', destroy);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/modules/observer/observer.js?");

/***/ }),

/***/ "./node_modules/swiper/core/modules/resize/resize.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/modules/resize/resize.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Resize; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nfunction Resize(_ref) {\n  let {\n    swiper,\n    on,\n    emit\n  } = _ref;\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  let observer = null;\n  let animationFrame = null;\n\n  const resizeHandler = () => {\n    if (!swiper || swiper.destroyed || !swiper.initialized) return;\n    emit('beforeResize');\n    emit('resize');\n  };\n\n  const createObserver = () => {\n    if (!swiper || swiper.destroyed || !swiper.initialized) return;\n    observer = new ResizeObserver(entries => {\n      animationFrame = window.requestAnimationFrame(() => {\n        const {\n          width,\n          height\n        } = swiper;\n        let newWidth = width;\n        let newHeight = height;\n        entries.forEach(_ref2 => {\n          let {\n            contentBoxSize,\n            contentRect,\n            target\n          } = _ref2;\n          if (target && target !== swiper.el) return;\n          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;\n          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;\n        });\n\n        if (newWidth !== width || newHeight !== height) {\n          resizeHandler();\n        }\n      });\n    });\n    observer.observe(swiper.el);\n  };\n\n  const removeObserver = () => {\n    if (animationFrame) {\n      window.cancelAnimationFrame(animationFrame);\n    }\n\n    if (observer && observer.unobserve && swiper.el) {\n      observer.unobserve(swiper.el);\n      observer = null;\n    }\n  };\n\n  const orientationChangeHandler = () => {\n    if (!swiper || swiper.destroyed || !swiper.initialized) return;\n    emit('orientationchange');\n  };\n\n  on('init', () => {\n    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {\n      createObserver();\n      return;\n    }\n\n    window.addEventListener('resize', resizeHandler);\n    window.addEventListener('orientationchange', orientationChangeHandler);\n  });\n  on('destroy', () => {\n    removeObserver();\n    window.removeEventListener('resize', resizeHandler);\n    window.removeEventListener('orientationchange', orientationChangeHandler);\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/modules/resize/resize.js?");

/***/ }),

/***/ "./node_modules/swiper/core/slide/index.js":
/*!*************************************************!*\
  !*** ./node_modules/swiper/core/slide/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slideTo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo.js */ \"./node_modules/swiper/core/slide/slideTo.js\");\n/* harmony import */ var _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop.js */ \"./node_modules/swiper/core/slide/slideToLoop.js\");\n/* harmony import */ var _slideNext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext.js */ \"./node_modules/swiper/core/slide/slideNext.js\");\n/* harmony import */ var _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev.js */ \"./node_modules/swiper/core/slide/slidePrev.js\");\n/* harmony import */ var _slideReset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset.js */ \"./node_modules/swiper/core/slide/slideReset.js\");\n/* harmony import */ var _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest.js */ \"./node_modules/swiper/core/slide/slideToClosest.js\");\n/* harmony import */ var _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide.js */ \"./node_modules/swiper/core/slide/slideToClickedSlide.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  slideTo: _slideTo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  slideToLoop: _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  slideNext: _slideNext_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  slidePrev: _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  slideReset: _slideReset_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  slideToClosest: _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  slideToClickedSlide: _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/slide/index.js?");

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideNext.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideNext.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ slideNext; }\n/* harmony export */ });\n/* eslint no-unused-vars: \"off\" */\nfunction slideNext(speed, runCallbacks, internal) {\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n\n  const swiper = this;\n  const {\n    animating,\n    enabled,\n    params\n  } = swiper;\n  if (!enabled) return swiper;\n  let perGroup = params.slidesPerGroup;\n\n  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {\n    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);\n  }\n\n  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;\n\n  if (params.loop) {\n    if (animating && params.loopPreventsSlide) return false;\n    swiper.loopFix(); // eslint-disable-next-line\n\n    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;\n  }\n\n  if (params.rewind && swiper.isEnd) {\n    return swiper.slideTo(0, speed, runCallbacks, internal);\n  }\n\n  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/slide/slideNext.js?");

/***/ }),

/***/ "./node_modules/swiper/core/slide/slidePrev.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slidePrev.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ slidePrev; }\n/* harmony export */ });\n/* eslint no-unused-vars: \"off\" */\nfunction slidePrev(speed, runCallbacks, internal) {\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n\n  const swiper = this;\n  const {\n    params,\n    animating,\n    snapGrid,\n    slidesGrid,\n    rtlTranslate,\n    enabled\n  } = swiper;\n  if (!enabled) return swiper;\n\n  if (params.loop) {\n    if (animating && params.loopPreventsSlide) return false;\n    swiper.loopFix(); // eslint-disable-next-line\n\n    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;\n  }\n\n  const translate = rtlTranslate ? swiper.translate : -swiper.translate;\n\n  function normalize(val) {\n    if (val < 0) return -Math.floor(Math.abs(val));\n    return Math.floor(val);\n  }\n\n  const normalizedTranslate = normalize(translate);\n  const normalizedSnapGrid = snapGrid.map(val => normalize(val));\n  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];\n\n  if (typeof prevSnap === 'undefined' && params.cssMode) {\n    let prevSnapIndex;\n    snapGrid.forEach((snap, snapIndex) => {\n      if (normalizedTranslate >= snap) {\n        // prevSnap = snap;\n        prevSnapIndex = snapIndex;\n      }\n    });\n\n    if (typeof prevSnapIndex !== 'undefined') {\n      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];\n    }\n  }\n\n  let prevIndex = 0;\n\n  if (typeof prevSnap !== 'undefined') {\n    prevIndex = slidesGrid.indexOf(prevSnap);\n    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;\n\n    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {\n      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;\n      prevIndex = Math.max(prevIndex, 0);\n    }\n  }\n\n  if (params.rewind && swiper.isBeginning) {\n    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;\n    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);\n  }\n\n  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/slide/slidePrev.js?");

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideReset.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideReset.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ slideReset; }\n/* harmony export */ });\n/* eslint no-unused-vars: \"off\" */\nfunction slideReset(speed, runCallbacks, internal) {\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n\n  const swiper = this;\n  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/slide/slideReset.js?");

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideTo.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideTo.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ slideTo; }\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction slideTo(index, speed, runCallbacks, internal, initial) {\n  if (index === void 0) {\n    index = 0;\n  }\n\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n\n  if (typeof index !== 'number' && typeof index !== 'string') {\n    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);\n  }\n\n  if (typeof index === 'string') {\n    /**\n     * The `index` argument converted from `string` to `number`.\n     * @type {number}\n     */\n    const indexAsNumber = parseInt(index, 10);\n    /**\n     * Determines whether the `index` argument is a valid `number`\n     * after being converted from the `string` type.\n     * @type {boolean}\n     */\n\n    const isValidNumber = isFinite(indexAsNumber);\n\n    if (!isValidNumber) {\n      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);\n    } // Knowing that the converted `index` is a valid number,\n    // we can update the original argument's value.\n\n\n    index = indexAsNumber;\n  }\n\n  const swiper = this;\n  let slideIndex = index;\n  if (slideIndex < 0) slideIndex = 0;\n  const {\n    params,\n    snapGrid,\n    slidesGrid,\n    previousIndex,\n    activeIndex,\n    rtlTranslate: rtl,\n    wrapperEl,\n    enabled\n  } = swiper;\n\n  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {\n    return false;\n  }\n\n  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);\n  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);\n  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;\n\n  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {\n    swiper.emit('beforeSlideChangeStart');\n  }\n\n  const translate = -snapGrid[snapIndex]; // Update progress\n\n  swiper.updateProgress(translate); // Normalize slideIndex\n\n  if (params.normalizeSlideIndex) {\n    for (let i = 0; i < slidesGrid.length; i += 1) {\n      const normalizedTranslate = -Math.floor(translate * 100);\n      const normalizedGrid = Math.floor(slidesGrid[i] * 100);\n      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);\n\n      if (typeof slidesGrid[i + 1] !== 'undefined') {\n        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {\n          slideIndex = i;\n        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {\n          slideIndex = i + 1;\n        }\n      } else if (normalizedTranslate >= normalizedGrid) {\n        slideIndex = i;\n      }\n    }\n  } // Directions locks\n\n\n  if (swiper.initialized && slideIndex !== activeIndex) {\n    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {\n      return false;\n    }\n\n    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {\n      if ((activeIndex || 0) !== slideIndex) return false;\n    }\n  }\n\n  let direction;\n  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index\n\n  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {\n    swiper.updateActiveIndex(slideIndex); // Update Height\n\n    if (params.autoHeight) {\n      swiper.updateAutoHeight();\n    }\n\n    swiper.updateSlidesClasses();\n\n    if (params.effect !== 'slide') {\n      swiper.setTranslate(translate);\n    }\n\n    if (direction !== 'reset') {\n      swiper.transitionStart(runCallbacks, direction);\n      swiper.transitionEnd(runCallbacks, direction);\n    }\n\n    return false;\n  }\n\n  if (params.cssMode) {\n    const isH = swiper.isHorizontal();\n    const t = rtl ? translate : -translate;\n\n    if (speed === 0) {\n      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;\n\n      if (isVirtual) {\n        swiper.wrapperEl.style.scrollSnapType = 'none';\n        swiper._immediateVirtual = true;\n      }\n\n      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;\n\n      if (isVirtual) {\n        requestAnimationFrame(() => {\n          swiper.wrapperEl.style.scrollSnapType = '';\n          swiper._swiperImmediateVirtual = false;\n        });\n      }\n    } else {\n      if (!swiper.support.smoothScroll) {\n        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({\n          swiper,\n          targetPosition: t,\n          side: isH ? 'left' : 'top'\n        });\n        return true;\n      }\n\n      wrapperEl.scrollTo({\n        [isH ? 'left' : 'top']: t,\n        behavior: 'smooth'\n      });\n    }\n\n    return true;\n  }\n\n  swiper.setTransition(speed);\n  swiper.setTranslate(translate);\n  swiper.updateActiveIndex(slideIndex);\n  swiper.updateSlidesClasses();\n  swiper.emit('beforeTransitionStart', speed, internal);\n  swiper.transitionStart(runCallbacks, direction);\n\n  if (speed === 0) {\n    swiper.transitionEnd(runCallbacks, direction);\n  } else if (!swiper.animating) {\n    swiper.animating = true;\n\n    if (!swiper.onSlideToWrapperTransitionEnd) {\n      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {\n        if (!swiper || swiper.destroyed) return;\n        if (e.target !== this) return;\n        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);\n        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);\n        swiper.onSlideToWrapperTransitionEnd = null;\n        delete swiper.onSlideToWrapperTransitionEnd;\n        swiper.transitionEnd(runCallbacks, direction);\n      };\n    }\n\n    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);\n    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);\n  }\n\n  return true;\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/slide/slideTo.js?");

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToClickedSlide.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClickedSlide.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ slideToClickedSlide; }\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\n\nfunction slideToClickedSlide() {\n  const swiper = this;\n  const {\n    params,\n    $wrapperEl\n  } = swiper;\n  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;\n  let slideToIndex = swiper.clickedIndex;\n  let realIndex;\n\n  if (params.loop) {\n    if (swiper.animating) return;\n    realIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);\n\n    if (params.centeredSlides) {\n      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {\n        swiper.loopFix();\n        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index=\"${realIndex}\"]:not(.${params.slideDuplicateClass})`).eq(0).index();\n        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {\n          swiper.slideTo(slideToIndex);\n        });\n      } else {\n        swiper.slideTo(slideToIndex);\n      }\n    } else if (slideToIndex > swiper.slides.length - slidesPerView) {\n      swiper.loopFix();\n      slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index=\"${realIndex}\"]:not(.${params.slideDuplicateClass})`).eq(0).index();\n      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {\n        swiper.slideTo(slideToIndex);\n      });\n    } else {\n      swiper.slideTo(slideToIndex);\n    }\n  } else {\n    swiper.slideTo(slideToIndex);\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/slide/slideToClickedSlide.js?");

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToClosest.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClosest.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ slideToClosest; }\n/* harmony export */ });\n/* eslint no-unused-vars: \"off\" */\nfunction slideToClosest(speed, runCallbacks, internal, threshold) {\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n\n  if (threshold === void 0) {\n    threshold = 0.5;\n  }\n\n  const swiper = this;\n  let index = swiper.activeIndex;\n  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);\n  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);\n  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;\n\n  if (translate >= swiper.snapGrid[snapIndex]) {\n    // The current translate is on or after the current snap index, so the choice\n    // is between the current index and the one after it.\n    const currentSnap = swiper.snapGrid[snapIndex];\n    const nextSnap = swiper.snapGrid[snapIndex + 1];\n\n    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {\n      index += swiper.params.slidesPerGroup;\n    }\n  } else {\n    // The current translate is before the current snap index, so the choice\n    // is between the current index and the one before it.\n    const prevSnap = swiper.snapGrid[snapIndex - 1];\n    const currentSnap = swiper.snapGrid[snapIndex];\n\n    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {\n      index -= swiper.params.slidesPerGroup;\n    }\n  }\n\n  index = Math.max(index, 0);\n  index = Math.min(index, swiper.slidesGrid.length - 1);\n  return swiper.slideTo(index, speed, runCallbacks, internal);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/slide/slideToClosest.js?");

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToLoop.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToLoop.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ slideToLoop; }\n/* harmony export */ });\nfunction slideToLoop(index, speed, runCallbacks, internal) {\n  if (index === void 0) {\n    index = 0;\n  }\n\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n\n  const swiper = this;\n  let newIndex = index;\n\n  if (swiper.params.loop) {\n    newIndex += swiper.loopedSlides;\n  }\n\n  return swiper.slideTo(newIndex, speed, runCallbacks, internal);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/slide/slideToLoop.js?");

/***/ }),

/***/ "./node_modules/swiper/core/transition/index.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/transition/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition.js */ \"./node_modules/swiper/core/transition/setTransition.js\");\n/* harmony import */ var _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart.js */ \"./node_modules/swiper/core/transition/transitionStart.js\");\n/* harmony import */ var _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd.js */ \"./node_modules/swiper/core/transition/transitionEnd.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  setTransition: _setTransition_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  transitionStart: _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  transitionEnd: _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/transition/index.js?");

/***/ }),

/***/ "./node_modules/swiper/core/transition/setTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/setTransition.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ setTransition; }\n/* harmony export */ });\nfunction setTransition(duration, byController) {\n  const swiper = this;\n\n  if (!swiper.params.cssMode) {\n    swiper.$wrapperEl.transition(duration);\n  }\n\n  swiper.emit('setTransition', duration, byController);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/transition/setTransition.js?");

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionEmit.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEmit.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ transitionEmit; }\n/* harmony export */ });\nfunction transitionEmit(_ref) {\n  let {\n    swiper,\n    runCallbacks,\n    direction,\n    step\n  } = _ref;\n  const {\n    activeIndex,\n    previousIndex\n  } = swiper;\n  let dir = direction;\n\n  if (!dir) {\n    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';\n  }\n\n  swiper.emit(`transition${step}`);\n\n  if (runCallbacks && activeIndex !== previousIndex) {\n    if (dir === 'reset') {\n      swiper.emit(`slideResetTransition${step}`);\n      return;\n    }\n\n    swiper.emit(`slideChangeTransition${step}`);\n\n    if (dir === 'next') {\n      swiper.emit(`slideNextTransition${step}`);\n    } else {\n      swiper.emit(`slidePrevTransition${step}`);\n    }\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/transition/transitionEmit.js?");

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionEnd.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEnd.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ transitionEnd; }\n/* harmony export */ });\n/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ \"./node_modules/swiper/core/transition/transitionEmit.js\");\n\nfunction transitionEnd(runCallbacks, direction) {\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n\n  const swiper = this;\n  const {\n    params\n  } = swiper;\n  swiper.animating = false;\n  if (params.cssMode) return;\n  swiper.setTransition(0);\n  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    swiper,\n    runCallbacks,\n    direction,\n    step: 'End'\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/transition/transitionEnd.js?");

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionStart.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionStart.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ transitionStart; }\n/* harmony export */ });\n/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ \"./node_modules/swiper/core/transition/transitionEmit.js\");\n\nfunction transitionStart(runCallbacks, direction) {\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n\n  const swiper = this;\n  const {\n    params\n  } = swiper;\n  if (params.cssMode) return;\n\n  if (params.autoHeight) {\n    swiper.updateAutoHeight();\n  }\n\n  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    swiper,\n    runCallbacks,\n    direction,\n    step: 'Start'\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/transition/transitionStart.js?");

/***/ }),

/***/ "./node_modules/swiper/core/translate/getTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/getTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getSwiperTranslate; }\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction getSwiperTranslate(axis) {\n  if (axis === void 0) {\n    axis = this.isHorizontal() ? 'x' : 'y';\n  }\n\n  const swiper = this;\n  const {\n    params,\n    rtlTranslate: rtl,\n    translate,\n    $wrapperEl\n  } = swiper;\n\n  if (params.virtualTranslate) {\n    return rtl ? -translate : translate;\n  }\n\n  if (params.cssMode) {\n    return translate;\n  }\n\n  let currentTranslate = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.getTranslate)($wrapperEl[0], axis);\n  if (rtl) currentTranslate = -currentTranslate;\n  return currentTranslate || 0;\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/translate/getTranslate.js?");

/***/ }),

/***/ "./node_modules/swiper/core/translate/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/translate/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate.js */ \"./node_modules/swiper/core/translate/getTranslate.js\");\n/* harmony import */ var _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate.js */ \"./node_modules/swiper/core/translate/setTranslate.js\");\n/* harmony import */ var _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate.js */ \"./node_modules/swiper/core/translate/minTranslate.js\");\n/* harmony import */ var _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate.js */ \"./node_modules/swiper/core/translate/maxTranslate.js\");\n/* harmony import */ var _translateTo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo.js */ \"./node_modules/swiper/core/translate/translateTo.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getTranslate: _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  setTranslate: _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  minTranslate: _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  maxTranslate: _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  translateTo: _translateTo_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/translate/index.js?");

/***/ }),

/***/ "./node_modules/swiper/core/translate/maxTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/maxTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ maxTranslate; }\n/* harmony export */ });\nfunction maxTranslate() {\n  return -this.snapGrid[this.snapGrid.length - 1];\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/translate/maxTranslate.js?");

/***/ }),

/***/ "./node_modules/swiper/core/translate/minTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/minTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ minTranslate; }\n/* harmony export */ });\nfunction minTranslate() {\n  return -this.snapGrid[0];\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/translate/minTranslate.js?");

/***/ }),

/***/ "./node_modules/swiper/core/translate/setTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/setTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ setTranslate; }\n/* harmony export */ });\nfunction setTranslate(translate, byController) {\n  const swiper = this;\n  const {\n    rtlTranslate: rtl,\n    params,\n    $wrapperEl,\n    wrapperEl,\n    progress\n  } = swiper;\n  let x = 0;\n  let y = 0;\n  const z = 0;\n\n  if (swiper.isHorizontal()) {\n    x = rtl ? -translate : translate;\n  } else {\n    y = translate;\n  }\n\n  if (params.roundLengths) {\n    x = Math.floor(x);\n    y = Math.floor(y);\n  }\n\n  if (params.cssMode) {\n    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;\n  } else if (!params.virtualTranslate) {\n    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);\n  }\n\n  swiper.previousTranslate = swiper.translate;\n  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress\n\n  let newProgress;\n  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();\n\n  if (translatesDiff === 0) {\n    newProgress = 0;\n  } else {\n    newProgress = (translate - swiper.minTranslate()) / translatesDiff;\n  }\n\n  if (newProgress !== progress) {\n    swiper.updateProgress(translate);\n  }\n\n  swiper.emit('setTranslate', swiper.translate, byController);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/translate/setTranslate.js?");

/***/ }),

/***/ "./node_modules/swiper/core/translate/translateTo.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/translate/translateTo.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ translateTo; }\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction translateTo(translate, speed, runCallbacks, translateBounds, internal) {\n  if (translate === void 0) {\n    translate = 0;\n  }\n\n  if (speed === void 0) {\n    speed = this.params.speed;\n  }\n\n  if (runCallbacks === void 0) {\n    runCallbacks = true;\n  }\n\n  if (translateBounds === void 0) {\n    translateBounds = true;\n  }\n\n  const swiper = this;\n  const {\n    params,\n    wrapperEl\n  } = swiper;\n\n  if (swiper.animating && params.preventInteractionOnTransition) {\n    return false;\n  }\n\n  const minTranslate = swiper.minTranslate();\n  const maxTranslate = swiper.maxTranslate();\n  let newTranslate;\n  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress\n\n  swiper.updateProgress(newTranslate);\n\n  if (params.cssMode) {\n    const isH = swiper.isHorizontal();\n\n    if (speed === 0) {\n      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;\n    } else {\n      if (!swiper.support.smoothScroll) {\n        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({\n          swiper,\n          targetPosition: -newTranslate,\n          side: isH ? 'left' : 'top'\n        });\n        return true;\n      }\n\n      wrapperEl.scrollTo({\n        [isH ? 'left' : 'top']: -newTranslate,\n        behavior: 'smooth'\n      });\n    }\n\n    return true;\n  }\n\n  if (speed === 0) {\n    swiper.setTransition(0);\n    swiper.setTranslate(newTranslate);\n\n    if (runCallbacks) {\n      swiper.emit('beforeTransitionStart', speed, internal);\n      swiper.emit('transitionEnd');\n    }\n  } else {\n    swiper.setTransition(speed);\n    swiper.setTranslate(newTranslate);\n\n    if (runCallbacks) {\n      swiper.emit('beforeTransitionStart', speed, internal);\n      swiper.emit('transitionStart');\n    }\n\n    if (!swiper.animating) {\n      swiper.animating = true;\n\n      if (!swiper.onTranslateToWrapperTransitionEnd) {\n        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {\n          if (!swiper || swiper.destroyed) return;\n          if (e.target !== this) return;\n          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);\n          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);\n          swiper.onTranslateToWrapperTransitionEnd = null;\n          delete swiper.onTranslateToWrapperTransitionEnd;\n\n          if (runCallbacks) {\n            swiper.emit('transitionEnd');\n          }\n        };\n      }\n\n      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);\n      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);\n    }\n  }\n\n  return true;\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/translate/translateTo.js?");

/***/ }),

/***/ "./node_modules/swiper/core/update/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/update/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _updateSize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize.js */ \"./node_modules/swiper/core/update/updateSize.js\");\n/* harmony import */ var _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides.js */ \"./node_modules/swiper/core/update/updateSlides.js\");\n/* harmony import */ var _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight.js */ \"./node_modules/swiper/core/update/updateAutoHeight.js\");\n/* harmony import */ var _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset.js */ \"./node_modules/swiper/core/update/updateSlidesOffset.js\");\n/* harmony import */ var _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress.js */ \"./node_modules/swiper/core/update/updateSlidesProgress.js\");\n/* harmony import */ var _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress.js */ \"./node_modules/swiper/core/update/updateProgress.js\");\n/* harmony import */ var _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses.js */ \"./node_modules/swiper/core/update/updateSlidesClasses.js\");\n/* harmony import */ var _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex.js */ \"./node_modules/swiper/core/update/updateActiveIndex.js\");\n/* harmony import */ var _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide.js */ \"./node_modules/swiper/core/update/updateClickedSlide.js\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  updateSize: _updateSize_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  updateSlides: _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  updateAutoHeight: _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  updateSlidesOffset: _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  updateSlidesProgress: _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  updateProgress: _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  updateSlidesClasses: _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  updateActiveIndex: _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  updateClickedSlide: _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n});\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/update/index.js?");

/***/ }),

/***/ "./node_modules/swiper/core/update/updateActiveIndex.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateActiveIndex.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ updateActiveIndex; }\n/* harmony export */ });\nfunction updateActiveIndex(newActiveIndex) {\n  const swiper = this;\n  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;\n  const {\n    slidesGrid,\n    snapGrid,\n    params,\n    activeIndex: previousIndex,\n    realIndex: previousRealIndex,\n    snapIndex: previousSnapIndex\n  } = swiper;\n  let activeIndex = newActiveIndex;\n  let snapIndex;\n\n  if (typeof activeIndex === 'undefined') {\n    for (let i = 0; i < slidesGrid.length; i += 1) {\n      if (typeof slidesGrid[i + 1] !== 'undefined') {\n        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {\n          activeIndex = i;\n        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {\n          activeIndex = i + 1;\n        }\n      } else if (translate >= slidesGrid[i]) {\n        activeIndex = i;\n      }\n    } // Normalize slideIndex\n\n\n    if (params.normalizeSlideIndex) {\n      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;\n    }\n  }\n\n  if (snapGrid.indexOf(translate) >= 0) {\n    snapIndex = snapGrid.indexOf(translate);\n  } else {\n    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);\n    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);\n  }\n\n  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;\n\n  if (activeIndex === previousIndex) {\n    if (snapIndex !== previousSnapIndex) {\n      swiper.snapIndex = snapIndex;\n      swiper.emit('snapIndexChange');\n    }\n\n    return;\n  } // Get real index\n\n\n  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);\n  Object.assign(swiper, {\n    snapIndex,\n    realIndex,\n    previousIndex,\n    activeIndex\n  });\n  swiper.emit('activeIndexChange');\n  swiper.emit('snapIndexChange');\n\n  if (previousRealIndex !== realIndex) {\n    swiper.emit('realIndexChange');\n  }\n\n  if (swiper.initialized || swiper.params.runCallbacksOnInit) {\n    swiper.emit('slideChange');\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/update/updateActiveIndex.js?");

/***/ }),

/***/ "./node_modules/swiper/core/update/updateAutoHeight.js":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateAutoHeight.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ updateAutoHeight; }\n/* harmony export */ });\nfunction updateAutoHeight(speed) {\n  const swiper = this;\n  const activeSlides = [];\n  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;\n  let newHeight = 0;\n  let i;\n\n  if (typeof speed === 'number') {\n    swiper.setTransition(speed);\n  } else if (speed === true) {\n    swiper.setTransition(swiper.params.speed);\n  }\n\n  const getSlideByIndex = index => {\n    if (isVirtual) {\n      return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];\n    }\n\n    return swiper.slides.eq(index)[0];\n  }; // Find slides currently in view\n\n\n  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {\n    if (swiper.params.centeredSlides) {\n      swiper.visibleSlides.each(slide => {\n        activeSlides.push(slide);\n      });\n    } else {\n      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {\n        const index = swiper.activeIndex + i;\n        if (index > swiper.slides.length && !isVirtual) break;\n        activeSlides.push(getSlideByIndex(index));\n      }\n    }\n  } else {\n    activeSlides.push(getSlideByIndex(swiper.activeIndex));\n  } // Find new height from highest slide in view\n\n\n  for (i = 0; i < activeSlides.length; i += 1) {\n    if (typeof activeSlides[i] !== 'undefined') {\n      const height = activeSlides[i].offsetHeight;\n      newHeight = height > newHeight ? height : newHeight;\n    }\n  } // Update Height\n\n\n  if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/update/updateAutoHeight.js?");

/***/ }),

/***/ "./node_modules/swiper/core/update/updateClickedSlide.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateClickedSlide.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ updateClickedSlide; }\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\nfunction updateClickedSlide(e) {\n  const swiper = this;\n  const params = swiper.params;\n  const slide = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e).closest(`.${params.slideClass}`)[0];\n  let slideFound = false;\n  let slideIndex;\n\n  if (slide) {\n    for (let i = 0; i < swiper.slides.length; i += 1) {\n      if (swiper.slides[i] === slide) {\n        slideFound = true;\n        slideIndex = i;\n        break;\n      }\n    }\n  }\n\n  if (slide && slideFound) {\n    swiper.clickedSlide = slide;\n\n    if (swiper.virtual && swiper.params.virtual.enabled) {\n      swiper.clickedIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(slide).attr('data-swiper-slide-index'), 10);\n    } else {\n      swiper.clickedIndex = slideIndex;\n    }\n  } else {\n    swiper.clickedSlide = undefined;\n    swiper.clickedIndex = undefined;\n    return;\n  }\n\n  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {\n    swiper.slideToClickedSlide();\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/update/updateClickedSlide.js?");

/***/ }),

/***/ "./node_modules/swiper/core/update/updateProgress.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateProgress.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ updateProgress; }\n/* harmony export */ });\nfunction updateProgress(translate) {\n  const swiper = this;\n\n  if (typeof translate === 'undefined') {\n    const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line\n\n    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;\n  }\n\n  const params = swiper.params;\n  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();\n  let {\n    progress,\n    isBeginning,\n    isEnd\n  } = swiper;\n  const wasBeginning = isBeginning;\n  const wasEnd = isEnd;\n\n  if (translatesDiff === 0) {\n    progress = 0;\n    isBeginning = true;\n    isEnd = true;\n  } else {\n    progress = (translate - swiper.minTranslate()) / translatesDiff;\n    isBeginning = progress <= 0;\n    isEnd = progress >= 1;\n  }\n\n  Object.assign(swiper, {\n    progress,\n    isBeginning,\n    isEnd\n  });\n  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);\n\n  if (isBeginning && !wasBeginning) {\n    swiper.emit('reachBeginning toEdge');\n  }\n\n  if (isEnd && !wasEnd) {\n    swiper.emit('reachEnd toEdge');\n  }\n\n  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {\n    swiper.emit('fromEdge');\n  }\n\n  swiper.emit('progress', progress);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/update/updateProgress.js?");

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSize.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSize.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ updateSize; }\n/* harmony export */ });\nfunction updateSize() {\n  const swiper = this;\n  let width;\n  let height;\n  const $el = swiper.$el;\n\n  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {\n    width = swiper.params.width;\n  } else {\n    width = $el[0].clientWidth;\n  }\n\n  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {\n    height = swiper.params.height;\n  } else {\n    height = $el[0].clientHeight;\n  }\n\n  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {\n    return;\n  } // Subtract paddings\n\n\n  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);\n  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);\n  if (Number.isNaN(width)) width = 0;\n  if (Number.isNaN(height)) height = 0;\n  Object.assign(swiper, {\n    width,\n    height,\n    size: swiper.isHorizontal() ? width : height\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/update/updateSize.js?");

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlides.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlides.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ updateSlides; }\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction updateSlides() {\n  const swiper = this;\n\n  function getDirectionLabel(property) {\n    if (swiper.isHorizontal()) {\n      return property;\n    } // prettier-ignore\n\n\n    return {\n      'width': 'height',\n      'margin-top': 'margin-left',\n      'margin-bottom ': 'margin-right',\n      'margin-left': 'margin-top',\n      'margin-right': 'margin-bottom',\n      'padding-left': 'padding-top',\n      'padding-right': 'padding-bottom',\n      'marginRight': 'marginBottom'\n    }[property];\n  }\n\n  function getDirectionPropertyValue(node, label) {\n    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);\n  }\n\n  const params = swiper.params;\n  const {\n    $wrapperEl,\n    size: swiperSize,\n    rtlTranslate: rtl,\n    wrongRTL\n  } = swiper;\n  const isVirtual = swiper.virtual && params.virtual.enabled;\n  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;\n  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);\n  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;\n  let snapGrid = [];\n  const slidesGrid = [];\n  const slidesSizesGrid = [];\n  let offsetBefore = params.slidesOffsetBefore;\n\n  if (typeof offsetBefore === 'function') {\n    offsetBefore = params.slidesOffsetBefore.call(swiper);\n  }\n\n  let offsetAfter = params.slidesOffsetAfter;\n\n  if (typeof offsetAfter === 'function') {\n    offsetAfter = params.slidesOffsetAfter.call(swiper);\n  }\n\n  const previousSnapGridLength = swiper.snapGrid.length;\n  const previousSlidesGridLength = swiper.slidesGrid.length;\n  let spaceBetween = params.spaceBetween;\n  let slidePosition = -offsetBefore;\n  let prevSlideSize = 0;\n  let index = 0;\n\n  if (typeof swiperSize === 'undefined') {\n    return;\n  }\n\n  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {\n    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;\n  }\n\n  swiper.virtualSize = -spaceBetween; // reset margins\n\n  if (rtl) slides.css({\n    marginLeft: '',\n    marginBottom: '',\n    marginTop: ''\n  });else slides.css({\n    marginRight: '',\n    marginBottom: '',\n    marginTop: ''\n  }); // reset cssMode offsets\n\n  if (params.centeredSlides && params.cssMode) {\n    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', '');\n    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', '');\n  }\n\n  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;\n\n  if (gridEnabled) {\n    swiper.grid.initSlides(slidesLength);\n  } // Calc slides\n\n\n  let slideSize;\n  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {\n    return typeof params.breakpoints[key].slidesPerView !== 'undefined';\n  }).length > 0;\n\n  for (let i = 0; i < slidesLength; i += 1) {\n    slideSize = 0;\n    const slide = slides.eq(i);\n\n    if (gridEnabled) {\n      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);\n    }\n\n    if (slide.css('display') === 'none') continue; // eslint-disable-line\n\n    if (params.slidesPerView === 'auto') {\n      if (shouldResetSlideSize) {\n        slides[i].style[getDirectionLabel('width')] = ``;\n      }\n\n      const slideStyles = getComputedStyle(slide[0]);\n      const currentTransform = slide[0].style.transform;\n      const currentWebKitTransform = slide[0].style.webkitTransform;\n\n      if (currentTransform) {\n        slide[0].style.transform = 'none';\n      }\n\n      if (currentWebKitTransform) {\n        slide[0].style.webkitTransform = 'none';\n      }\n\n      if (params.roundLengths) {\n        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);\n      } else {\n        // eslint-disable-next-line\n        const width = getDirectionPropertyValue(slideStyles, 'width');\n        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');\n        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');\n        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');\n        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');\n        const boxSizing = slideStyles.getPropertyValue('box-sizing');\n\n        if (boxSizing && boxSizing === 'border-box') {\n          slideSize = width + marginLeft + marginRight;\n        } else {\n          const {\n            clientWidth,\n            offsetWidth\n          } = slide[0];\n          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);\n        }\n      }\n\n      if (currentTransform) {\n        slide[0].style.transform = currentTransform;\n      }\n\n      if (currentWebKitTransform) {\n        slide[0].style.webkitTransform = currentWebKitTransform;\n      }\n\n      if (params.roundLengths) slideSize = Math.floor(slideSize);\n    } else {\n      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;\n      if (params.roundLengths) slideSize = Math.floor(slideSize);\n\n      if (slides[i]) {\n        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;\n      }\n    }\n\n    if (slides[i]) {\n      slides[i].swiperSlideSize = slideSize;\n    }\n\n    slidesSizesGrid.push(slideSize);\n\n    if (params.centeredSlides) {\n      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;\n      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;\n      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;\n      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;\n      if (params.roundLengths) slidePosition = Math.floor(slidePosition);\n      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);\n      slidesGrid.push(slidePosition);\n    } else {\n      if (params.roundLengths) slidePosition = Math.floor(slidePosition);\n      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);\n      slidesGrid.push(slidePosition);\n      slidePosition = slidePosition + slideSize + spaceBetween;\n    }\n\n    swiper.virtualSize += slideSize + spaceBetween;\n    prevSlideSize = slideSize;\n    index += 1;\n  }\n\n  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;\n\n  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {\n    $wrapperEl.css({\n      width: `${swiper.virtualSize + params.spaceBetween}px`\n    });\n  }\n\n  if (params.setWrapperSize) {\n    $wrapperEl.css({\n      [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`\n    });\n  }\n\n  if (gridEnabled) {\n    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);\n  } // Remove last grid elements depending on width\n\n\n  if (!params.centeredSlides) {\n    const newSlidesGrid = [];\n\n    for (let i = 0; i < snapGrid.length; i += 1) {\n      let slidesGridItem = snapGrid[i];\n      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);\n\n      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {\n        newSlidesGrid.push(slidesGridItem);\n      }\n    }\n\n    snapGrid = newSlidesGrid;\n\n    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {\n      snapGrid.push(swiper.virtualSize - swiperSize);\n    }\n  }\n\n  if (snapGrid.length === 0) snapGrid = [0];\n\n  if (params.spaceBetween !== 0) {\n    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');\n    slides.filter((_, slideIndex) => {\n      if (!params.cssMode) return true;\n\n      if (slideIndex === slides.length - 1) {\n        return false;\n      }\n\n      return true;\n    }).css({\n      [key]: `${spaceBetween}px`\n    });\n  }\n\n  if (params.centeredSlides && params.centeredSlidesBounds) {\n    let allSlidesSize = 0;\n    slidesSizesGrid.forEach(slideSizeValue => {\n      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);\n    });\n    allSlidesSize -= params.spaceBetween;\n    const maxSnap = allSlidesSize - swiperSize;\n    snapGrid = snapGrid.map(snap => {\n      if (snap < 0) return -offsetBefore;\n      if (snap > maxSnap) return maxSnap + offsetAfter;\n      return snap;\n    });\n  }\n\n  if (params.centerInsufficientSlides) {\n    let allSlidesSize = 0;\n    slidesSizesGrid.forEach(slideSizeValue => {\n      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);\n    });\n    allSlidesSize -= params.spaceBetween;\n\n    if (allSlidesSize < swiperSize) {\n      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;\n      snapGrid.forEach((snap, snapIndex) => {\n        snapGrid[snapIndex] = snap - allSlidesOffset;\n      });\n      slidesGrid.forEach((snap, snapIndex) => {\n        slidesGrid[snapIndex] = snap + allSlidesOffset;\n      });\n    }\n  }\n\n  Object.assign(swiper, {\n    slides,\n    snapGrid,\n    slidesGrid,\n    slidesSizesGrid\n  });\n\n  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {\n    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);\n    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);\n    const addToSnapGrid = -swiper.snapGrid[0];\n    const addToSlidesGrid = -swiper.slidesGrid[0];\n    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);\n    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);\n  }\n\n  if (slidesLength !== previousSlidesLength) {\n    swiper.emit('slidesLengthChange');\n  }\n\n  if (snapGrid.length !== previousSnapGridLength) {\n    if (swiper.params.watchOverflow) swiper.checkOverflow();\n    swiper.emit('snapGridLengthChange');\n  }\n\n  if (slidesGrid.length !== previousSlidesGridLength) {\n    swiper.emit('slidesGridLengthChange');\n  }\n\n  if (params.watchSlidesProgress) {\n    swiper.updateSlidesOffset();\n  }\n\n  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {\n    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;\n    const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);\n\n    if (slidesLength <= params.maxBackfaceHiddenSlides) {\n      if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);\n    } else if (hasClassBackfaceClassAdded) {\n      swiper.$el.removeClass(backFaceHiddenClass);\n    }\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/update/updateSlides.js?");

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesClasses.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesClasses.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ updateSlidesClasses; }\n/* harmony export */ });\nfunction updateSlidesClasses() {\n  const swiper = this;\n  const {\n    slides,\n    params,\n    $wrapperEl,\n    activeIndex,\n    realIndex\n  } = swiper;\n  const isVirtual = swiper.virtual && params.virtual.enabled;\n  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);\n  let activeSlide;\n\n  if (isVirtual) {\n    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index=\"${activeIndex}\"]`);\n  } else {\n    activeSlide = slides.eq(activeIndex);\n  } // Active classes\n\n\n  activeSlide.addClass(params.slideActiveClass);\n\n  if (params.loop) {\n    // Duplicate to all looped slides\n    if (activeSlide.hasClass(params.slideDuplicateClass)) {\n      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index=\"${realIndex}\"]`).addClass(params.slideDuplicateActiveClass);\n    } else {\n      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index=\"${realIndex}\"]`).addClass(params.slideDuplicateActiveClass);\n    }\n  } // Next Slide\n\n\n  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);\n\n  if (params.loop && nextSlide.length === 0) {\n    nextSlide = slides.eq(0);\n    nextSlide.addClass(params.slideNextClass);\n  } // Prev Slide\n\n\n  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);\n\n  if (params.loop && prevSlide.length === 0) {\n    prevSlide = slides.eq(-1);\n    prevSlide.addClass(params.slidePrevClass);\n  }\n\n  if (params.loop) {\n    // Duplicate to all looped slides\n    if (nextSlide.hasClass(params.slideDuplicateClass)) {\n      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index=\"${nextSlide.attr('data-swiper-slide-index')}\"]`).addClass(params.slideDuplicateNextClass);\n    } else {\n      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index=\"${nextSlide.attr('data-swiper-slide-index')}\"]`).addClass(params.slideDuplicateNextClass);\n    }\n\n    if (prevSlide.hasClass(params.slideDuplicateClass)) {\n      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index=\"${prevSlide.attr('data-swiper-slide-index')}\"]`).addClass(params.slideDuplicatePrevClass);\n    } else {\n      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index=\"${prevSlide.attr('data-swiper-slide-index')}\"]`).addClass(params.slideDuplicatePrevClass);\n    }\n  }\n\n  swiper.emitSlidesClasses();\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/update/updateSlidesClasses.js?");

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesOffset.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesOffset.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ updateSlidesOffset; }\n/* harmony export */ });\nfunction updateSlidesOffset() {\n  const swiper = this;\n  const slides = swiper.slides;\n\n  for (let i = 0; i < slides.length; i += 1) {\n    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/update/updateSlidesOffset.js?");

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesProgress.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesProgress.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ updateSlidesProgress; }\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\nfunction updateSlidesProgress(translate) {\n  if (translate === void 0) {\n    translate = this && this.translate || 0;\n  }\n\n  const swiper = this;\n  const params = swiper.params;\n  const {\n    slides,\n    rtlTranslate: rtl,\n    snapGrid\n  } = swiper;\n  if (slides.length === 0) return;\n  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();\n  let offsetCenter = -translate;\n  if (rtl) offsetCenter = translate; // Visible Slides\n\n  slides.removeClass(params.slideVisibleClass);\n  swiper.visibleSlidesIndexes = [];\n  swiper.visibleSlides = [];\n\n  for (let i = 0; i < slides.length; i += 1) {\n    const slide = slides[i];\n    let slideOffset = slide.swiperSlideOffset;\n\n    if (params.cssMode && params.centeredSlides) {\n      slideOffset -= slides[0].swiperSlideOffset;\n    }\n\n    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);\n    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);\n    const slideBefore = -(offsetCenter - slideOffset);\n    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];\n    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;\n\n    if (isVisible) {\n      swiper.visibleSlides.push(slide);\n      swiper.visibleSlidesIndexes.push(i);\n      slides.eq(i).addClass(params.slideVisibleClass);\n    }\n\n    slide.progress = rtl ? -slideProgress : slideProgress;\n    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;\n  }\n\n  swiper.visibleSlides = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(swiper.visibleSlides);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/core/update/updateSlidesProgress.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/a11y/a11y.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/a11y/a11y.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ A11y; }\n/* harmony export */ });\n/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ \"./node_modules/swiper/shared/classes-to-selector.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\n\nfunction A11y(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    a11y: {\n      enabled: true,\n      notificationClass: 'swiper-notification',\n      prevSlideMessage: 'Previous slide',\n      nextSlideMessage: 'Next slide',\n      firstSlideMessage: 'This is the first slide',\n      lastSlideMessage: 'This is the last slide',\n      paginationBulletMessage: 'Go to slide {{index}}',\n      slideLabelMessage: '{{index}} / {{slidesLength}}',\n      containerMessage: null,\n      containerRoleDescriptionMessage: null,\n      itemRoleDescriptionMessage: null,\n      slideRole: 'group'\n    }\n  });\n  let liveRegion = null;\n\n  function notify(message) {\n    const notification = liveRegion;\n    if (notification.length === 0) return;\n    notification.html('');\n    notification.html(message);\n  }\n\n  function getRandomNumber(size) {\n    if (size === void 0) {\n      size = 16;\n    }\n\n    const randomChar = () => Math.round(16 * Math.random()).toString(16);\n\n    return 'x'.repeat(size).replace(/x/g, randomChar);\n  }\n\n  function makeElFocusable($el) {\n    $el.attr('tabIndex', '0');\n  }\n\n  function makeElNotFocusable($el) {\n    $el.attr('tabIndex', '-1');\n  }\n\n  function addElRole($el, role) {\n    $el.attr('role', role);\n  }\n\n  function addElRoleDescription($el, description) {\n    $el.attr('aria-roledescription', description);\n  }\n\n  function addElControls($el, controls) {\n    $el.attr('aria-controls', controls);\n  }\n\n  function addElLabel($el, label) {\n    $el.attr('aria-label', label);\n  }\n\n  function addElId($el, id) {\n    $el.attr('id', id);\n  }\n\n  function addElLive($el, live) {\n    $el.attr('aria-live', live);\n  }\n\n  function disableEl($el) {\n    $el.attr('aria-disabled', true);\n  }\n\n  function enableEl($el) {\n    $el.attr('aria-disabled', false);\n  }\n\n  function onEnterOrSpaceKey(e) {\n    if (e.keyCode !== 13 && e.keyCode !== 32) return;\n    const params = swiper.params.a11y;\n    const $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target);\n\n    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {\n      if (!(swiper.isEnd && !swiper.params.loop)) {\n        swiper.slideNext();\n      }\n\n      if (swiper.isEnd) {\n        notify(params.lastSlideMessage);\n      } else {\n        notify(params.nextSlideMessage);\n      }\n    }\n\n    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {\n      if (!(swiper.isBeginning && !swiper.params.loop)) {\n        swiper.slidePrev();\n      }\n\n      if (swiper.isBeginning) {\n        notify(params.firstSlideMessage);\n      } else {\n        notify(params.prevSlideMessage);\n      }\n    }\n\n    if (swiper.pagination && $targetEl.is((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(swiper.params.pagination.bulletClass))) {\n      $targetEl[0].click();\n    }\n  }\n\n  function updateNavigation() {\n    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;\n    const {\n      $nextEl,\n      $prevEl\n    } = swiper.navigation;\n\n    if ($prevEl && $prevEl.length > 0) {\n      if (swiper.isBeginning) {\n        disableEl($prevEl);\n        makeElNotFocusable($prevEl);\n      } else {\n        enableEl($prevEl);\n        makeElFocusable($prevEl);\n      }\n    }\n\n    if ($nextEl && $nextEl.length > 0) {\n      if (swiper.isEnd) {\n        disableEl($nextEl);\n        makeElNotFocusable($nextEl);\n      } else {\n        enableEl($nextEl);\n        makeElFocusable($nextEl);\n      }\n    }\n  }\n\n  function hasPagination() {\n    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;\n  }\n\n  function hasClickablePagination() {\n    return hasPagination() && swiper.params.pagination.clickable;\n  }\n\n  function updatePagination() {\n    const params = swiper.params.a11y;\n    if (!hasPagination()) return;\n    swiper.pagination.bullets.each(bulletEl => {\n      const $bulletEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(bulletEl);\n\n      if (swiper.params.pagination.clickable) {\n        makeElFocusable($bulletEl);\n\n        if (!swiper.params.pagination.renderBullet) {\n          addElRole($bulletEl, 'button');\n          addElLabel($bulletEl, params.paginationBulletMessage.replace(/\\{\\{index\\}\\}/, $bulletEl.index() + 1));\n        }\n      }\n\n      if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) {\n        $bulletEl.attr('aria-current', 'true');\n      } else {\n        $bulletEl.removeAttr('aria-current');\n      }\n    });\n  }\n\n  const initNavEl = ($el, wrapperId, message) => {\n    makeElFocusable($el);\n\n    if ($el[0].tagName !== 'BUTTON') {\n      addElRole($el, 'button');\n      $el.on('keydown', onEnterOrSpaceKey);\n    }\n\n    addElLabel($el, message);\n    addElControls($el, wrapperId);\n  };\n\n  const handleFocus = e => {\n    const slideEl = e.target.closest(`.${swiper.params.slideClass}`);\n    if (!slideEl || !swiper.slides.includes(slideEl)) return;\n    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;\n    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);\n    if (isActive || isVisible) return;\n    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);\n  };\n\n  function init() {\n    const params = swiper.params.a11y;\n    swiper.$el.append(liveRegion); // Container\n\n    const $containerEl = swiper.$el;\n\n    if (params.containerRoleDescriptionMessage) {\n      addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);\n    }\n\n    if (params.containerMessage) {\n      addElLabel($containerEl, params.containerMessage);\n    } // Wrapper\n\n\n    const $wrapperEl = swiper.$wrapperEl;\n    const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;\n    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';\n    addElId($wrapperEl, wrapperId);\n    addElLive($wrapperEl, live); // Slide\n\n    if (params.itemRoleDescriptionMessage) {\n      addElRoleDescription((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(swiper.slides), params.itemRoleDescriptionMessage);\n    }\n\n    addElRole((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(swiper.slides), params.slideRole);\n    const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;\n    swiper.slides.each((slideEl, index) => {\n      const $slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(slideEl);\n      const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;\n      const ariaLabelMessage = params.slideLabelMessage.replace(/\\{\\{index\\}\\}/, slideIndex + 1).replace(/\\{\\{slidesLength\\}\\}/, slidesLength);\n      addElLabel($slideEl, ariaLabelMessage);\n    }); // Navigation\n\n    let $nextEl;\n    let $prevEl;\n\n    if (swiper.navigation && swiper.navigation.$nextEl) {\n      $nextEl = swiper.navigation.$nextEl;\n    }\n\n    if (swiper.navigation && swiper.navigation.$prevEl) {\n      $prevEl = swiper.navigation.$prevEl;\n    }\n\n    if ($nextEl && $nextEl.length) {\n      initNavEl($nextEl, wrapperId, params.nextSlideMessage);\n    }\n\n    if ($prevEl && $prevEl.length) {\n      initNavEl($prevEl, wrapperId, params.prevSlideMessage);\n    } // Pagination\n\n\n    if (hasClickablePagination()) {\n      swiper.pagination.$el.on('keydown', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);\n    } // Tab focus\n\n\n    swiper.$el.on('focus', handleFocus, true);\n  }\n\n  function destroy() {\n    if (liveRegion && liveRegion.length > 0) liveRegion.remove();\n    let $nextEl;\n    let $prevEl;\n\n    if (swiper.navigation && swiper.navigation.$nextEl) {\n      $nextEl = swiper.navigation.$nextEl;\n    }\n\n    if (swiper.navigation && swiper.navigation.$prevEl) {\n      $prevEl = swiper.navigation.$prevEl;\n    }\n\n    if ($nextEl) {\n      $nextEl.off('keydown', onEnterOrSpaceKey);\n    }\n\n    if ($prevEl) {\n      $prevEl.off('keydown', onEnterOrSpaceKey);\n    } // Pagination\n\n\n    if (hasClickablePagination()) {\n      swiper.pagination.$el.off('keydown', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);\n    } // Tab focus\n\n\n    swiper.$el.off('focus', handleFocus, true);\n  }\n\n  on('beforeInit', () => {\n    liveRegion = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`<span class=\"${swiper.params.a11y.notificationClass}\" aria-live=\"assertive\" aria-atomic=\"true\"></span>`);\n  });\n  on('afterInit', () => {\n    if (!swiper.params.a11y.enabled) return;\n    init();\n  });\n  on('fromEdge toEdge afterInit lock unlock', () => {\n    if (!swiper.params.a11y.enabled) return;\n    updateNavigation();\n  });\n  on('paginationUpdate', () => {\n    if (!swiper.params.a11y.enabled) return;\n    updatePagination();\n  });\n  on('destroy', () => {\n    if (!swiper.params.a11y.enabled) return;\n    destroy();\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/a11y/a11y.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/autoplay/autoplay.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay/autoplay.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Autoplay; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n/* eslint no-underscore-dangle: \"off\" */\n\n/* eslint no-use-before-define: \"off\" */\n\n\nfunction Autoplay(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  let timeout;\n  swiper.autoplay = {\n    running: false,\n    paused: false\n  };\n  extendParams({\n    autoplay: {\n      enabled: false,\n      delay: 3000,\n      waitForTransition: true,\n      disableOnInteraction: true,\n      stopOnLastSlide: false,\n      reverseDirection: false,\n      pauseOnMouseEnter: false\n    }\n  });\n\n  function run() {\n    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);\n    let delay = swiper.params.autoplay.delay;\n\n    if ($activeSlideEl.attr('data-swiper-autoplay')) {\n      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;\n    }\n\n    clearTimeout(timeout);\n    timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {\n      let autoplayResult;\n\n      if (swiper.params.autoplay.reverseDirection) {\n        if (swiper.params.loop) {\n          swiper.loopFix();\n          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);\n          emit('autoplay');\n        } else if (!swiper.isBeginning) {\n          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);\n          emit('autoplay');\n        } else if (!swiper.params.autoplay.stopOnLastSlide) {\n          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);\n          emit('autoplay');\n        } else {\n          stop();\n        }\n      } else if (swiper.params.loop) {\n        swiper.loopFix();\n        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);\n        emit('autoplay');\n      } else if (!swiper.isEnd) {\n        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);\n        emit('autoplay');\n      } else if (!swiper.params.autoplay.stopOnLastSlide) {\n        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);\n        emit('autoplay');\n      } else {\n        stop();\n      }\n\n      if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {\n        run();\n      }\n    }, delay);\n  }\n\n  function start() {\n    if (typeof timeout !== 'undefined') return false;\n    if (swiper.autoplay.running) return false;\n    swiper.autoplay.running = true;\n    emit('autoplayStart');\n    run();\n    return true;\n  }\n\n  function stop() {\n    if (!swiper.autoplay.running) return false;\n    if (typeof timeout === 'undefined') return false;\n\n    if (timeout) {\n      clearTimeout(timeout);\n      timeout = undefined;\n    }\n\n    swiper.autoplay.running = false;\n    emit('autoplayStop');\n    return true;\n  }\n\n  function pause(speed) {\n    if (!swiper.autoplay.running) return;\n    if (swiper.autoplay.paused) return;\n    if (timeout) clearTimeout(timeout);\n    swiper.autoplay.paused = true;\n\n    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {\n      swiper.autoplay.paused = false;\n      run();\n    } else {\n      ['transitionend', 'webkitTransitionEnd'].forEach(event => {\n        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);\n      });\n    }\n  }\n\n  function onVisibilityChange() {\n    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n\n    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {\n      pause();\n    }\n\n    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {\n      run();\n      swiper.autoplay.paused = false;\n    }\n  }\n\n  function onTransitionEnd(e) {\n    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;\n    if (e.target !== swiper.$wrapperEl[0]) return;\n    ['transitionend', 'webkitTransitionEnd'].forEach(event => {\n      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);\n    });\n    swiper.autoplay.paused = false;\n\n    if (!swiper.autoplay.running) {\n      stop();\n    } else {\n      run();\n    }\n  }\n\n  function onMouseEnter() {\n    if (swiper.params.autoplay.disableOnInteraction) {\n      stop();\n    } else {\n      emit('autoplayPause');\n      pause();\n    }\n\n    ['transitionend', 'webkitTransitionEnd'].forEach(event => {\n      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);\n    });\n  }\n\n  function onMouseLeave() {\n    if (swiper.params.autoplay.disableOnInteraction) {\n      return;\n    }\n\n    swiper.autoplay.paused = false;\n    emit('autoplayResume');\n    run();\n  }\n\n  function attachMouseEvents() {\n    if (swiper.params.autoplay.pauseOnMouseEnter) {\n      swiper.$el.on('mouseenter', onMouseEnter);\n      swiper.$el.on('mouseleave', onMouseLeave);\n    }\n  }\n\n  function detachMouseEvents() {\n    swiper.$el.off('mouseenter', onMouseEnter);\n    swiper.$el.off('mouseleave', onMouseLeave);\n  }\n\n  on('init', () => {\n    if (swiper.params.autoplay.enabled) {\n      start();\n      const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n      document.addEventListener('visibilitychange', onVisibilityChange);\n      attachMouseEvents();\n    }\n  });\n  on('beforeTransitionStart', (_s, speed, internal) => {\n    if (swiper.autoplay.running) {\n      if (internal || !swiper.params.autoplay.disableOnInteraction) {\n        swiper.autoplay.pause(speed);\n      } else {\n        stop();\n      }\n    }\n  });\n  on('sliderFirstMove', () => {\n    if (swiper.autoplay.running) {\n      if (swiper.params.autoplay.disableOnInteraction) {\n        stop();\n      } else {\n        pause();\n      }\n    }\n  });\n  on('touchEnd', () => {\n    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {\n      run();\n    }\n  });\n  on('destroy', () => {\n    detachMouseEvents();\n\n    if (swiper.autoplay.running) {\n      stop();\n    }\n\n    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n    document.removeEventListener('visibilitychange', onVisibilityChange);\n  });\n  Object.assign(swiper.autoplay, {\n    pause,\n    run,\n    start,\n    stop\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/autoplay/autoplay.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/controller/controller.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/controller/controller.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Controller; }\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n/* eslint no-bitwise: [\"error\", { \"allow\": [\">>\"] }] */\n\nfunction Controller(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    controller: {\n      control: undefined,\n      inverse: false,\n      by: 'slide' // or 'container'\n\n    }\n  });\n  swiper.controller = {\n    control: undefined\n  };\n\n  function LinearSpline(x, y) {\n    const binarySearch = function search() {\n      let maxIndex;\n      let minIndex;\n      let guess;\n      return (array, val) => {\n        minIndex = -1;\n        maxIndex = array.length;\n\n        while (maxIndex - minIndex > 1) {\n          guess = maxIndex + minIndex >> 1;\n\n          if (array[guess] <= val) {\n            minIndex = guess;\n          } else {\n            maxIndex = guess;\n          }\n        }\n\n        return maxIndex;\n      };\n    }();\n\n    this.x = x;\n    this.y = y;\n    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:\n    // (x1,y1) is the known point before given value,\n    // (x3,y3) is the known point after given value.\n\n    let i1;\n    let i3;\n\n    this.interpolate = function interpolate(x2) {\n      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):\n\n      i3 = binarySearch(this.x, x2);\n      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:\n      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1\n\n      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];\n    };\n\n    return this;\n  } // xxx: for now i will just save one spline function to to\n\n\n  function getInterpolateFunction(c) {\n    if (!swiper.controller.spline) {\n      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);\n    }\n  }\n\n  function setTranslate(_t, byController) {\n    const controlled = swiper.controller.control;\n    let multiplier;\n    let controlledTranslate;\n    const Swiper = swiper.constructor;\n\n    function setControlledTranslate(c) {\n      // this will create an Interpolate function based on the snapGrids\n      // x is the Grid of the scrolled scroller and y will be the controlled scroller\n      // it makes sense to create this only once and recall it for the interpolation\n      // the function does a lot of value caching for performance\n      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;\n\n      if (swiper.params.controller.by === 'slide') {\n        getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid\n        // but it did not work out\n\n        controlledTranslate = -swiper.controller.spline.interpolate(-translate);\n      }\n\n      if (!controlledTranslate || swiper.params.controller.by === 'container') {\n        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());\n        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();\n      }\n\n      if (swiper.params.controller.inverse) {\n        controlledTranslate = c.maxTranslate() - controlledTranslate;\n      }\n\n      c.updateProgress(controlledTranslate);\n      c.setTranslate(controlledTranslate, swiper);\n      c.updateActiveIndex();\n      c.updateSlidesClasses();\n    }\n\n    if (Array.isArray(controlled)) {\n      for (let i = 0; i < controlled.length; i += 1) {\n        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {\n          setControlledTranslate(controlled[i]);\n        }\n      }\n    } else if (controlled instanceof Swiper && byController !== controlled) {\n      setControlledTranslate(controlled);\n    }\n  }\n\n  function setTransition(duration, byController) {\n    const Swiper = swiper.constructor;\n    const controlled = swiper.controller.control;\n    let i;\n\n    function setControlledTransition(c) {\n      c.setTransition(duration, swiper);\n\n      if (duration !== 0) {\n        c.transitionStart();\n\n        if (c.params.autoHeight) {\n          (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {\n            c.updateAutoHeight();\n          });\n        }\n\n        c.$wrapperEl.transitionEnd(() => {\n          if (!controlled) return;\n\n          if (c.params.loop && swiper.params.controller.by === 'slide') {\n            c.loopFix();\n          }\n\n          c.transitionEnd();\n        });\n      }\n    }\n\n    if (Array.isArray(controlled)) {\n      for (i = 0; i < controlled.length; i += 1) {\n        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {\n          setControlledTransition(controlled[i]);\n        }\n      }\n    } else if (controlled instanceof Swiper && byController !== controlled) {\n      setControlledTransition(controlled);\n    }\n  }\n\n  function removeSpline() {\n    if (!swiper.controller.control) return;\n\n    if (swiper.controller.spline) {\n      swiper.controller.spline = undefined;\n      delete swiper.controller.spline;\n    }\n  }\n\n  on('beforeInit', () => {\n    swiper.controller.control = swiper.params.controller.control;\n  });\n  on('update', () => {\n    removeSpline();\n  });\n  on('resize', () => {\n    removeSpline();\n  });\n  on('observerUpdate', () => {\n    removeSpline();\n  });\n  on('setTranslate', (_s, translate, byController) => {\n    if (!swiper.controller.control) return;\n    swiper.controller.setTranslate(translate, byController);\n  });\n  on('setTransition', (_s, duration, byController) => {\n    if (!swiper.controller.control) return;\n    swiper.controller.setTransition(duration, byController);\n  });\n  Object.assign(swiper.controller, {\n    setTranslate,\n    setTransition\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/controller/controller.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards/effect-cards.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards/effect-cards.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EffectCards; }\n/* harmony export */ });\n/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ \"./node_modules/swiper/shared/create-shadow.js\");\n/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ \"./node_modules/swiper/shared/effect-init.js\");\n/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ \"./node_modules/swiper/shared/effect-target.js\");\n/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ \"./node_modules/swiper/shared/effect-virtual-transition-end.js\");\n\n\n\n\nfunction EffectCards(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    cardsEffect: {\n      slideShadows: true,\n      transformEl: null\n    }\n  });\n\n  const setTranslate = () => {\n    const {\n      slides,\n      activeIndex\n    } = swiper;\n    const params = swiper.params.cardsEffect;\n    const {\n      startTranslate,\n      isTouched\n    } = swiper.touchEventsData;\n    const currentTranslate = swiper.translate;\n\n    for (let i = 0; i < slides.length; i += 1) {\n      const $slideEl = slides.eq(i);\n      const slideProgress = $slideEl[0].progress;\n      const progress = Math.min(Math.max(slideProgress, -4), 4);\n      let offset = $slideEl[0].swiperSlideOffset;\n\n      if (swiper.params.centeredSlides && !swiper.params.cssMode) {\n        swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);\n      }\n\n      if (swiper.params.centeredSlides && swiper.params.cssMode) {\n        offset -= slides[0].swiperSlideOffset;\n      }\n\n      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;\n      let tY = 0;\n      const tZ = -100 * Math.abs(progress);\n      let scale = 1;\n      let rotate = -2 * progress;\n      let tXAdd = 8 - Math.abs(progress) * 0.75;\n      const isSwipeToNext = (i === activeIndex || i === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;\n      const isSwipeToPrev = (i === activeIndex || i === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;\n\n      if (isSwipeToNext || isSwipeToPrev) {\n        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;\n        rotate += -28 * progress * subProgress;\n        scale += -0.5 * subProgress;\n        tXAdd += 96 * subProgress;\n        tY = `${-25 * subProgress * Math.abs(progress)}%`;\n      }\n\n      if (progress < 0) {\n        // next\n        tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;\n      } else if (progress > 0) {\n        // prev\n        tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;\n      } else {\n        tX = `${tX}px`;\n      }\n\n      if (!swiper.isHorizontal()) {\n        const prevY = tY;\n        tY = tX;\n        tX = prevY;\n      }\n\n      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;\n      const transform = `\n        translate3d(${tX}, ${tY}, ${tZ}px)\n        rotateZ(${rotate}deg)\n        scale(${scaleString})\n      `;\n\n      if (params.slideShadows) {\n        // Set shadows\n        let $shadowEl = $slideEl.find('.swiper-slide-shadow');\n\n        if ($shadowEl.length === 0) {\n          $shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params, $slideEl);\n        }\n\n        if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);\n      }\n\n      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;\n      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(params, $slideEl);\n      $targetEl.transform(transform);\n    }\n  };\n\n  const setTransition = duration => {\n    const {\n      transformEl\n    } = swiper.params.cardsEffect;\n    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;\n    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);\n    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      swiper,\n      duration,\n      transformEl\n    });\n  };\n\n  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    effect: 'cards',\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    perspective: () => true,\n    overwriteParams: () => ({\n      watchSlidesProgress: true,\n      virtualTranslate: !swiper.params.cssMode\n    })\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/effect-cards/effect-cards.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EffectCoverflow; }\n/* harmony export */ });\n/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ \"./node_modules/swiper/shared/create-shadow.js\");\n/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ \"./node_modules/swiper/shared/effect-init.js\");\n/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ \"./node_modules/swiper/shared/effect-target.js\");\n\n\n\nfunction EffectCoverflow(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    coverflowEffect: {\n      rotate: 50,\n      stretch: 0,\n      depth: 100,\n      scale: 1,\n      modifier: 1,\n      slideShadows: true,\n      transformEl: null\n    }\n  });\n\n  const setTranslate = () => {\n    const {\n      width: swiperWidth,\n      height: swiperHeight,\n      slides,\n      slidesSizesGrid\n    } = swiper;\n    const params = swiper.params.coverflowEffect;\n    const isHorizontal = swiper.isHorizontal();\n    const transform = swiper.translate;\n    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;\n    const rotate = isHorizontal ? params.rotate : -params.rotate;\n    const translate = params.depth; // Each slide offset from center\n\n    for (let i = 0, length = slides.length; i < length; i += 1) {\n      const $slideEl = slides.eq(i);\n      const slideSize = slidesSizesGrid[i];\n      const slideOffset = $slideEl[0].swiperSlideOffset;\n      const offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;\n      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;\n      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0\n\n      let translateZ = -translate * Math.abs(offsetMultiplier);\n      let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders\n\n      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {\n        stretch = parseFloat(params.stretch) / 100 * slideSize;\n      }\n\n      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;\n      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;\n      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values\n\n      if (Math.abs(translateX) < 0.001) translateX = 0;\n      if (Math.abs(translateY) < 0.001) translateY = 0;\n      if (Math.abs(translateZ) < 0.001) translateZ = 0;\n      if (Math.abs(rotateY) < 0.001) rotateY = 0;\n      if (Math.abs(rotateX) < 0.001) rotateX = 0;\n      if (Math.abs(scale) < 0.001) scale = 0;\n      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;\n      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(params, $slideEl);\n      $targetEl.transform(slideTransform);\n      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;\n\n      if (params.slideShadows) {\n        // Set shadows\n        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');\n        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');\n\n        if ($shadowBeforeEl.length === 0) {\n          $shadowBeforeEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params, $slideEl, isHorizontal ? 'left' : 'top');\n        }\n\n        if ($shadowAfterEl.length === 0) {\n          $shadowAfterEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params, $slideEl, isHorizontal ? 'right' : 'bottom');\n        }\n\n        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;\n        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;\n      }\n    }\n  };\n\n  const setTransition = duration => {\n    const {\n      transformEl\n    } = swiper.params.coverflowEffect;\n    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;\n    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);\n  };\n\n  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    effect: 'coverflow',\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    perspective: () => true,\n    overwriteParams: () => ({\n      watchSlidesProgress: true\n    })\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative/effect-creative.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative/effect-creative.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EffectCreative; }\n/* harmony export */ });\n/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ \"./node_modules/swiper/shared/create-shadow.js\");\n/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ \"./node_modules/swiper/shared/effect-init.js\");\n/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ \"./node_modules/swiper/shared/effect-target.js\");\n/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ \"./node_modules/swiper/shared/effect-virtual-transition-end.js\");\n\n\n\n\nfunction EffectCreative(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    creativeEffect: {\n      transformEl: null,\n      limitProgress: 1,\n      shadowPerProgress: false,\n      progressMultiplier: 1,\n      perspective: true,\n      prev: {\n        translate: [0, 0, 0],\n        rotate: [0, 0, 0],\n        opacity: 1,\n        scale: 1\n      },\n      next: {\n        translate: [0, 0, 0],\n        rotate: [0, 0, 0],\n        opacity: 1,\n        scale: 1\n      }\n    }\n  });\n\n  const getTranslateValue = value => {\n    if (typeof value === 'string') return value;\n    return `${value}px`;\n  };\n\n  const setTranslate = () => {\n    const {\n      slides,\n      $wrapperEl,\n      slidesSizesGrid\n    } = swiper;\n    const params = swiper.params.creativeEffect;\n    const {\n      progressMultiplier: multiplier\n    } = params;\n    const isCenteredSlides = swiper.params.centeredSlides;\n\n    if (isCenteredSlides) {\n      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;\n      $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);\n    }\n\n    for (let i = 0; i < slides.length; i += 1) {\n      const $slideEl = slides.eq(i);\n      const slideProgress = $slideEl[0].progress;\n      const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);\n      let originalProgress = progress;\n\n      if (!isCenteredSlides) {\n        originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);\n      }\n\n      const offset = $slideEl[0].swiperSlideOffset;\n      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];\n      const r = [0, 0, 0];\n      let custom = false;\n\n      if (!swiper.isHorizontal()) {\n        t[1] = t[0];\n        t[0] = 0;\n      }\n\n      let data = {\n        translate: [0, 0, 0],\n        rotate: [0, 0, 0],\n        scale: 1,\n        opacity: 1\n      };\n\n      if (progress < 0) {\n        data = params.next;\n        custom = true;\n      } else if (progress > 0) {\n        data = params.prev;\n        custom = true;\n      } // set translate\n\n\n      t.forEach((value, index) => {\n        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;\n      }); // set rotates\n\n      r.forEach((value, index) => {\n        r[index] = data.rotate[index] * Math.abs(progress * multiplier);\n      });\n      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;\n      const translateString = t.join(', ');\n      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;\n      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;\n      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;\n      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows\n\n      if (custom && data.shadow || !custom) {\n        let $shadowEl = $slideEl.children('.swiper-slide-shadow');\n\n        if ($shadowEl.length === 0 && data.shadow) {\n          $shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params, $slideEl);\n        }\n\n        if ($shadowEl.length) {\n          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;\n          $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);\n        }\n      }\n\n      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(params, $slideEl);\n      $targetEl.transform(transform).css({\n        opacity: opacityString\n      });\n\n      if (data.origin) {\n        $targetEl.css('transform-origin', data.origin);\n      }\n    }\n  };\n\n  const setTransition = duration => {\n    const {\n      transformEl\n    } = swiper.params.creativeEffect;\n    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;\n    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);\n    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      swiper,\n      duration,\n      transformEl,\n      allSlides: true\n    });\n  };\n\n  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    effect: 'creative',\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    perspective: () => swiper.params.creativeEffect.perspective,\n    overwriteParams: () => ({\n      watchSlidesProgress: true,\n      virtualTranslate: !swiper.params.cssMode\n    })\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/effect-creative/effect-creative.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube/effect-cube.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube/effect-cube.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EffectCube; }\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ \"./node_modules/swiper/shared/effect-init.js\");\n\n\nfunction EffectCube(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    cubeEffect: {\n      slideShadows: true,\n      shadow: true,\n      shadowOffset: 20,\n      shadowScale: 0.94\n    }\n  });\n\n  const setTranslate = () => {\n    const {\n      $el,\n      $wrapperEl,\n      slides,\n      width: swiperWidth,\n      height: swiperHeight,\n      rtlTranslate: rtl,\n      size: swiperSize,\n      browser\n    } = swiper;\n    const params = swiper.params.cubeEffect;\n    const isHorizontal = swiper.isHorizontal();\n    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;\n    let wrapperRotate = 0;\n    let $cubeShadowEl;\n\n    if (params.shadow) {\n      if (isHorizontal) {\n        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');\n\n        if ($cubeShadowEl.length === 0) {\n          $cubeShadowEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('<div class=\"swiper-cube-shadow\"></div>');\n          $wrapperEl.append($cubeShadowEl);\n        }\n\n        $cubeShadowEl.css({\n          height: `${swiperWidth}px`\n        });\n      } else {\n        $cubeShadowEl = $el.find('.swiper-cube-shadow');\n\n        if ($cubeShadowEl.length === 0) {\n          $cubeShadowEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('<div class=\"swiper-cube-shadow\"></div>');\n          $el.append($cubeShadowEl);\n        }\n      }\n    }\n\n    for (let i = 0; i < slides.length; i += 1) {\n      const $slideEl = slides.eq(i);\n      let slideIndex = i;\n\n      if (isVirtual) {\n        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);\n      }\n\n      let slideAngle = slideIndex * 90;\n      let round = Math.floor(slideAngle / 360);\n\n      if (rtl) {\n        slideAngle = -slideAngle;\n        round = Math.floor(-slideAngle / 360);\n      }\n\n      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);\n      let tx = 0;\n      let ty = 0;\n      let tz = 0;\n\n      if (slideIndex % 4 === 0) {\n        tx = -round * 4 * swiperSize;\n        tz = 0;\n      } else if ((slideIndex - 1) % 4 === 0) {\n        tx = 0;\n        tz = -round * 4 * swiperSize;\n      } else if ((slideIndex - 2) % 4 === 0) {\n        tx = swiperSize + round * 4 * swiperSize;\n        tz = swiperSize;\n      } else if ((slideIndex - 3) % 4 === 0) {\n        tx = -swiperSize;\n        tz = 3 * swiperSize + swiperSize * 4 * round;\n      }\n\n      if (rtl) {\n        tx = -tx;\n      }\n\n      if (!isHorizontal) {\n        ty = tx;\n        tx = 0;\n      }\n\n      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;\n\n      if (progress <= 1 && progress > -1) {\n        wrapperRotate = slideIndex * 90 + progress * 90;\n        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;\n      }\n\n      $slideEl.transform(transform);\n\n      if (params.slideShadows) {\n        // Set shadows\n        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');\n        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');\n\n        if (shadowBefore.length === 0) {\n          shadowBefore = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div class=\"swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}\"></div>`);\n          $slideEl.append(shadowBefore);\n        }\n\n        if (shadowAfter.length === 0) {\n          shadowAfter = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div class=\"swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}\"></div>`);\n          $slideEl.append(shadowAfter);\n        }\n\n        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);\n        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);\n      }\n    }\n\n    $wrapperEl.css({\n      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,\n      'transform-origin': `50% 50% -${swiperSize / 2}px`\n    });\n\n    if (params.shadow) {\n      if (isHorizontal) {\n        $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);\n      } else {\n        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;\n        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);\n        const scale1 = params.shadowScale;\n        const scale2 = params.shadowScale / multiplier;\n        const offset = params.shadowOffset;\n        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);\n      }\n    }\n\n    const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;\n    $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);\n  };\n\n  const setTransition = duration => {\n    const {\n      $el,\n      slides\n    } = swiper;\n    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);\n\n    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {\n      $el.find('.swiper-cube-shadow').transition(duration);\n    }\n  };\n\n  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    effect: 'cube',\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    perspective: () => true,\n    overwriteParams: () => ({\n      slidesPerView: 1,\n      slidesPerGroup: 1,\n      watchSlidesProgress: true,\n      resistanceRatio: 0,\n      spaceBetween: 0,\n      centeredSlides: false,\n      virtualTranslate: true\n    })\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/effect-cube/effect-cube.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EffectFade; }\n/* harmony export */ });\n/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/effect-init.js */ \"./node_modules/swiper/shared/effect-init.js\");\n/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-target.js */ \"./node_modules/swiper/shared/effect-target.js\");\n/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ \"./node_modules/swiper/shared/effect-virtual-transition-end.js\");\n\n\n\nfunction EffectFade(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    fadeEffect: {\n      crossFade: false,\n      transformEl: null\n    }\n  });\n\n  const setTranslate = () => {\n    const {\n      slides\n    } = swiper;\n    const params = swiper.params.fadeEffect;\n\n    for (let i = 0; i < slides.length; i += 1) {\n      const $slideEl = swiper.slides.eq(i);\n      const offset = $slideEl[0].swiperSlideOffset;\n      let tx = -offset;\n      if (!swiper.params.virtualTranslate) tx -= swiper.translate;\n      let ty = 0;\n\n      if (!swiper.isHorizontal()) {\n        ty = tx;\n        tx = 0;\n      }\n\n      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);\n      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params, $slideEl);\n      $targetEl.css({\n        opacity: slideOpacity\n      }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);\n    }\n  };\n\n  const setTransition = duration => {\n    const {\n      transformEl\n    } = swiper.params.fadeEffect;\n    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;\n    $transitionElements.transition(duration);\n    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      swiper,\n      duration,\n      transformEl,\n      allSlides: true\n    });\n  };\n\n  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    effect: 'fade',\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    overwriteParams: () => ({\n      slidesPerView: 1,\n      slidesPerGroup: 1,\n      watchSlidesProgress: true,\n      spaceBetween: 0,\n      virtualTranslate: !swiper.params.cssMode\n    })\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/effect-fade/effect-fade.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip/effect-flip.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip/effect-flip.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EffectFlip; }\n/* harmony export */ });\n/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ \"./node_modules/swiper/shared/create-shadow.js\");\n/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ \"./node_modules/swiper/shared/effect-init.js\");\n/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ \"./node_modules/swiper/shared/effect-target.js\");\n/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ \"./node_modules/swiper/shared/effect-virtual-transition-end.js\");\n\n\n\n\nfunction EffectFlip(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    flipEffect: {\n      slideShadows: true,\n      limitRotation: true,\n      transformEl: null\n    }\n  });\n\n  const setTranslate = () => {\n    const {\n      slides,\n      rtlTranslate: rtl\n    } = swiper;\n    const params = swiper.params.flipEffect;\n\n    for (let i = 0; i < slides.length; i += 1) {\n      const $slideEl = slides.eq(i);\n      let progress = $slideEl[0].progress;\n\n      if (swiper.params.flipEffect.limitRotation) {\n        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);\n      }\n\n      const offset = $slideEl[0].swiperSlideOffset;\n      const rotate = -180 * progress;\n      let rotateY = rotate;\n      let rotateX = 0;\n      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;\n      let ty = 0;\n\n      if (!swiper.isHorizontal()) {\n        ty = tx;\n        tx = 0;\n        rotateX = -rotateY;\n        rotateY = 0;\n      } else if (rtl) {\n        rotateY = -rotateY;\n      }\n\n      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;\n\n      if (params.slideShadows) {\n        // Set shadows\n        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');\n        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');\n\n        if (shadowBefore.length === 0) {\n          shadowBefore = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');\n        }\n\n        if (shadowAfter.length === 0) {\n          shadowAfter = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');\n        }\n\n        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);\n        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);\n      }\n\n      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;\n      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(params, $slideEl);\n      $targetEl.transform(transform);\n    }\n  };\n\n  const setTransition = duration => {\n    const {\n      transformEl\n    } = swiper.params.flipEffect;\n    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;\n    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);\n    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      swiper,\n      duration,\n      transformEl\n    });\n  };\n\n  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    effect: 'flip',\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    perspective: () => true,\n    overwriteParams: () => ({\n      slidesPerView: 1,\n      slidesPerGroup: 1,\n      watchSlidesProgress: true,\n      spaceBetween: 0,\n      virtualTranslate: !swiper.params.cssMode\n    })\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/effect-flip/effect-flip.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/free-mode/free-mode.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode/free-mode.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ freeMode; }\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\nfunction freeMode(_ref) {\n  let {\n    swiper,\n    extendParams,\n    emit,\n    once\n  } = _ref;\n  extendParams({\n    freeMode: {\n      enabled: false,\n      momentum: true,\n      momentumRatio: 1,\n      momentumBounce: true,\n      momentumBounceRatio: 1,\n      momentumVelocityRatio: 1,\n      sticky: false,\n      minimumVelocity: 0.02\n    }\n  });\n\n  function onTouchStart() {\n    const translate = swiper.getTranslate();\n    swiper.setTranslate(translate);\n    swiper.setTransition(0);\n    swiper.touchEventsData.velocities.length = 0;\n    swiper.freeMode.onTouchEnd({\n      currentPos: swiper.rtl ? swiper.translate : -swiper.translate\n    });\n  }\n\n  function onTouchMove() {\n    const {\n      touchEventsData: data,\n      touches\n    } = swiper; // Velocity\n\n    if (data.velocities.length === 0) {\n      data.velocities.push({\n        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],\n        time: data.touchStartTime\n      });\n    }\n\n    data.velocities.push({\n      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],\n      time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)()\n    });\n  }\n\n  function onTouchEnd(_ref2) {\n    let {\n      currentPos\n    } = _ref2;\n    const {\n      params,\n      $wrapperEl,\n      rtlTranslate: rtl,\n      snapGrid,\n      touchEventsData: data\n    } = swiper; // Time diff\n\n    const touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();\n    const timeDiff = touchEndTime - data.touchStartTime;\n\n    if (currentPos < -swiper.minTranslate()) {\n      swiper.slideTo(swiper.activeIndex);\n      return;\n    }\n\n    if (currentPos > -swiper.maxTranslate()) {\n      if (swiper.slides.length < snapGrid.length) {\n        swiper.slideTo(snapGrid.length - 1);\n      } else {\n        swiper.slideTo(swiper.slides.length - 1);\n      }\n\n      return;\n    }\n\n    if (params.freeMode.momentum) {\n      if (data.velocities.length > 1) {\n        const lastMoveEvent = data.velocities.pop();\n        const velocityEvent = data.velocities.pop();\n        const distance = lastMoveEvent.position - velocityEvent.position;\n        const time = lastMoveEvent.time - velocityEvent.time;\n        swiper.velocity = distance / time;\n        swiper.velocity /= 2;\n\n        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {\n          swiper.velocity = 0;\n        } // this implies that the user stopped moving a finger then released.\n        // There would be no events with distance zero, so the last event is stale.\n\n\n        if (time > 150 || (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)() - lastMoveEvent.time > 300) {\n          swiper.velocity = 0;\n        }\n      } else {\n        swiper.velocity = 0;\n      }\n\n      swiper.velocity *= params.freeMode.momentumVelocityRatio;\n      data.velocities.length = 0;\n      let momentumDuration = 1000 * params.freeMode.momentumRatio;\n      const momentumDistance = swiper.velocity * momentumDuration;\n      let newPosition = swiper.translate + momentumDistance;\n      if (rtl) newPosition = -newPosition;\n      let doBounce = false;\n      let afterBouncePosition;\n      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;\n      let needsLoopFix;\n\n      if (newPosition < swiper.maxTranslate()) {\n        if (params.freeMode.momentumBounce) {\n          if (newPosition + swiper.maxTranslate() < -bounceAmount) {\n            newPosition = swiper.maxTranslate() - bounceAmount;\n          }\n\n          afterBouncePosition = swiper.maxTranslate();\n          doBounce = true;\n          data.allowMomentumBounce = true;\n        } else {\n          newPosition = swiper.maxTranslate();\n        }\n\n        if (params.loop && params.centeredSlides) needsLoopFix = true;\n      } else if (newPosition > swiper.minTranslate()) {\n        if (params.freeMode.momentumBounce) {\n          if (newPosition - swiper.minTranslate() > bounceAmount) {\n            newPosition = swiper.minTranslate() + bounceAmount;\n          }\n\n          afterBouncePosition = swiper.minTranslate();\n          doBounce = true;\n          data.allowMomentumBounce = true;\n        } else {\n          newPosition = swiper.minTranslate();\n        }\n\n        if (params.loop && params.centeredSlides) needsLoopFix = true;\n      } else if (params.freeMode.sticky) {\n        let nextSlide;\n\n        for (let j = 0; j < snapGrid.length; j += 1) {\n          if (snapGrid[j] > -newPosition) {\n            nextSlide = j;\n            break;\n          }\n        }\n\n        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {\n          newPosition = snapGrid[nextSlide];\n        } else {\n          newPosition = snapGrid[nextSlide - 1];\n        }\n\n        newPosition = -newPosition;\n      }\n\n      if (needsLoopFix) {\n        once('transitionEnd', () => {\n          swiper.loopFix();\n        });\n      } // Fix duration\n\n\n      if (swiper.velocity !== 0) {\n        if (rtl) {\n          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);\n        } else {\n          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);\n        }\n\n        if (params.freeMode.sticky) {\n          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity\n          // event, then durations can be 20+ seconds to slide one (or zero!) slides.\n          // It's easy to see this when simulating touch with mouse events. To fix this,\n          // limit single-slide swipes to the default slide duration. This also has the\n          // nice side effect of matching slide speed if the user stopped moving before\n          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.\n          // For faster swipes, also apply limits (albeit higher ones).\n          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);\n          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];\n\n          if (moveDistance < currentSlideSize) {\n            momentumDuration = params.speed;\n          } else if (moveDistance < 2 * currentSlideSize) {\n            momentumDuration = params.speed * 1.5;\n          } else {\n            momentumDuration = params.speed * 2.5;\n          }\n        }\n      } else if (params.freeMode.sticky) {\n        swiper.slideToClosest();\n        return;\n      }\n\n      if (params.freeMode.momentumBounce && doBounce) {\n        swiper.updateProgress(afterBouncePosition);\n        swiper.setTransition(momentumDuration);\n        swiper.setTranslate(newPosition);\n        swiper.transitionStart(true, swiper.swipeDirection);\n        swiper.animating = true;\n        $wrapperEl.transitionEnd(() => {\n          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;\n          emit('momentumBounce');\n          swiper.setTransition(params.speed);\n          setTimeout(() => {\n            swiper.setTranslate(afterBouncePosition);\n            $wrapperEl.transitionEnd(() => {\n              if (!swiper || swiper.destroyed) return;\n              swiper.transitionEnd();\n            });\n          }, 0);\n        });\n      } else if (swiper.velocity) {\n        emit('_freeModeNoMomentumRelease');\n        swiper.updateProgress(newPosition);\n        swiper.setTransition(momentumDuration);\n        swiper.setTranslate(newPosition);\n        swiper.transitionStart(true, swiper.swipeDirection);\n\n        if (!swiper.animating) {\n          swiper.animating = true;\n          $wrapperEl.transitionEnd(() => {\n            if (!swiper || swiper.destroyed) return;\n            swiper.transitionEnd();\n          });\n        }\n      } else {\n        swiper.updateProgress(newPosition);\n      }\n\n      swiper.updateActiveIndex();\n      swiper.updateSlidesClasses();\n    } else if (params.freeMode.sticky) {\n      swiper.slideToClosest();\n      return;\n    } else if (params.freeMode) {\n      emit('_freeModeNoMomentumRelease');\n    }\n\n    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {\n      swiper.updateProgress();\n      swiper.updateActiveIndex();\n      swiper.updateSlidesClasses();\n    }\n  }\n\n  Object.assign(swiper, {\n    freeMode: {\n      onTouchStart,\n      onTouchMove,\n      onTouchEnd\n    }\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/free-mode/free-mode.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/grid/grid.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/grid/grid.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Grid; }\n/* harmony export */ });\nfunction Grid(_ref) {\n  let {\n    swiper,\n    extendParams\n  } = _ref;\n  extendParams({\n    grid: {\n      rows: 1,\n      fill: 'column'\n    }\n  });\n  let slidesNumberEvenToRows;\n  let slidesPerRow;\n  let numFullColumns;\n\n  const initSlides = slidesLength => {\n    const {\n      slidesPerView\n    } = swiper.params;\n    const {\n      rows,\n      fill\n    } = swiper.params.grid;\n    slidesPerRow = slidesNumberEvenToRows / rows;\n    numFullColumns = Math.floor(slidesLength / rows);\n\n    if (Math.floor(slidesLength / rows) === slidesLength / rows) {\n      slidesNumberEvenToRows = slidesLength;\n    } else {\n      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;\n    }\n\n    if (slidesPerView !== 'auto' && fill === 'row') {\n      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);\n    }\n  };\n\n  const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {\n    const {\n      slidesPerGroup,\n      spaceBetween\n    } = swiper.params;\n    const {\n      rows,\n      fill\n    } = swiper.params.grid; // Set slides order\n\n    let newSlideOrderIndex;\n    let column;\n    let row;\n\n    if (fill === 'row' && slidesPerGroup > 1) {\n      const groupIndex = Math.floor(i / (slidesPerGroup * rows));\n      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;\n      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);\n      row = Math.floor(slideIndexInGroup / columnsInGroup);\n      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;\n      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;\n      slide.css({\n        '-webkit-order': newSlideOrderIndex,\n        order: newSlideOrderIndex\n      });\n    } else if (fill === 'column') {\n      column = Math.floor(i / rows);\n      row = i - column * rows;\n\n      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {\n        row += 1;\n\n        if (row >= rows) {\n          row = 0;\n          column += 1;\n        }\n      }\n    } else {\n      row = Math.floor(i / slidesPerRow);\n      column = i - row * slidesPerRow;\n    }\n\n    slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');\n  };\n\n  const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {\n    const {\n      spaceBetween,\n      centeredSlides,\n      roundLengths\n    } = swiper.params;\n    const {\n      rows\n    } = swiper.params.grid;\n    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;\n    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;\n    swiper.$wrapperEl.css({\n      [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`\n    });\n\n    if (centeredSlides) {\n      snapGrid.splice(0, snapGrid.length);\n      const newSlidesGrid = [];\n\n      for (let i = 0; i < snapGrid.length; i += 1) {\n        let slidesGridItem = snapGrid[i];\n        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);\n        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);\n      }\n\n      snapGrid.push(...newSlidesGrid);\n    }\n  };\n\n  swiper.grid = {\n    initSlides,\n    updateSlide,\n    updateWrapperSize\n  };\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/grid/grid.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation/hash-navigation.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HashNavigation; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\n\nfunction HashNavigation(_ref) {\n  let {\n    swiper,\n    extendParams,\n    emit,\n    on\n  } = _ref;\n  let initialized = false;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  extendParams({\n    hashNavigation: {\n      enabled: false,\n      replaceState: false,\n      watchState: false\n    }\n  });\n\n  const onHashChange = () => {\n    emit('hashChange');\n    const newHash = document.location.hash.replace('#', '');\n    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');\n\n    if (newHash !== activeSlideHash) {\n      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash=\"${newHash}\"]`).index();\n      if (typeof newIndex === 'undefined') return;\n      swiper.slideTo(newIndex);\n    }\n  };\n\n  const setHash = () => {\n    if (!initialized || !swiper.params.hashNavigation.enabled) return;\n\n    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {\n      window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');\n      emit('hashSet');\n    } else {\n      const slide = swiper.slides.eq(swiper.activeIndex);\n      const hash = slide.attr('data-hash') || slide.attr('data-history');\n      document.location.hash = hash || '';\n      emit('hashSet');\n    }\n  };\n\n  const init = () => {\n    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;\n    initialized = true;\n    const hash = document.location.hash.replace('#', '');\n\n    if (hash) {\n      const speed = 0;\n\n      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {\n        const slide = swiper.slides.eq(i);\n        const slideHash = slide.attr('data-hash') || slide.attr('data-history');\n\n        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {\n          const index = slide.index();\n          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);\n        }\n      }\n    }\n\n    if (swiper.params.hashNavigation.watchState) {\n      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(window).on('hashchange', onHashChange);\n    }\n  };\n\n  const destroy = () => {\n    if (swiper.params.hashNavigation.watchState) {\n      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(window).off('hashchange', onHashChange);\n    }\n  };\n\n  on('init', () => {\n    if (swiper.params.hashNavigation.enabled) {\n      init();\n    }\n  });\n  on('destroy', () => {\n    if (swiper.params.hashNavigation.enabled) {\n      destroy();\n    }\n  });\n  on('transitionEnd _freeModeNoMomentumRelease', () => {\n    if (initialized) {\n      setHash();\n    }\n  });\n  on('slideChange', () => {\n    if (initialized && swiper.params.cssMode) {\n      setHash();\n    }\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/hash-navigation/hash-navigation.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/history/history.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/modules/history/history.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ History; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nfunction History(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    history: {\n      enabled: false,\n      root: '',\n      replaceState: false,\n      key: 'slides'\n    }\n  });\n  let initialized = false;\n  let paths = {};\n\n  const slugify = text => {\n    return text.toString().replace(/\\s+/g, '-').replace(/[^\\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');\n  };\n\n  const getPathValues = urlOverride => {\n    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n    let location;\n\n    if (urlOverride) {\n      location = new URL(urlOverride);\n    } else {\n      location = window.location;\n    }\n\n    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');\n    const total = pathArray.length;\n    const key = pathArray[total - 2];\n    const value = pathArray[total - 1];\n    return {\n      key,\n      value\n    };\n  };\n\n  const setHistory = (key, index) => {\n    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n    if (!initialized || !swiper.params.history.enabled) return;\n    let location;\n\n    if (swiper.params.url) {\n      location = new URL(swiper.params.url);\n    } else {\n      location = window.location;\n    }\n\n    const slide = swiper.slides.eq(index);\n    let value = slugify(slide.attr('data-history'));\n\n    if (swiper.params.history.root.length > 0) {\n      let root = swiper.params.history.root;\n      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);\n      value = `${root}/${key}/${value}`;\n    } else if (!location.pathname.includes(key)) {\n      value = `${key}/${value}`;\n    }\n\n    const currentState = window.history.state;\n\n    if (currentState && currentState.value === value) {\n      return;\n    }\n\n    if (swiper.params.history.replaceState) {\n      window.history.replaceState({\n        value\n      }, null, value);\n    } else {\n      window.history.pushState({\n        value\n      }, null, value);\n    }\n  };\n\n  const scrollToSlide = (speed, value, runCallbacks) => {\n    if (value) {\n      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {\n        const slide = swiper.slides.eq(i);\n        const slideHistory = slugify(slide.attr('data-history'));\n\n        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {\n          const index = slide.index();\n          swiper.slideTo(index, speed, runCallbacks);\n        }\n      }\n    } else {\n      swiper.slideTo(0, speed, runCallbacks);\n    }\n  };\n\n  const setHistoryPopState = () => {\n    paths = getPathValues(swiper.params.url);\n    scrollToSlide(swiper.params.speed, swiper.paths.value, false);\n  };\n\n  const init = () => {\n    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n    if (!swiper.params.history) return;\n\n    if (!window.history || !window.history.pushState) {\n      swiper.params.history.enabled = false;\n      swiper.params.hashNavigation.enabled = true;\n      return;\n    }\n\n    initialized = true;\n    paths = getPathValues(swiper.params.url);\n    if (!paths.key && !paths.value) return;\n    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);\n\n    if (!swiper.params.history.replaceState) {\n      window.addEventListener('popstate', setHistoryPopState);\n    }\n  };\n\n  const destroy = () => {\n    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n\n    if (!swiper.params.history.replaceState) {\n      window.removeEventListener('popstate', setHistoryPopState);\n    }\n  };\n\n  on('init', () => {\n    if (swiper.params.history.enabled) {\n      init();\n    }\n  });\n  on('destroy', () => {\n    if (swiper.params.history.enabled) {\n      destroy();\n    }\n  });\n  on('transitionEnd _freeModeNoMomentumRelease', () => {\n    if (initialized) {\n      setHistory(swiper.params.history.key, swiper.activeIndex);\n    }\n  });\n  on('slideChange', () => {\n    if (initialized && swiper.params.cssMode) {\n      setHistory(swiper.params.history.key, swiper.activeIndex);\n    }\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/history/history.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/keyboard/keyboard.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard/keyboard.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Keyboard; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* eslint-disable consistent-return */\n\n\nfunction Keyboard(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  swiper.keyboard = {\n    enabled: false\n  };\n  extendParams({\n    keyboard: {\n      enabled: false,\n      onlyInViewport: true,\n      pageUpDown: true\n    }\n  });\n\n  function handle(event) {\n    if (!swiper.enabled) return;\n    const {\n      rtlTranslate: rtl\n    } = swiper;\n    let e = event;\n    if (e.originalEvent) e = e.originalEvent; // jquery fix\n\n    const kc = e.keyCode || e.charCode;\n    const pageUpDown = swiper.params.keyboard.pageUpDown;\n    const isPageUp = pageUpDown && kc === 33;\n    const isPageDown = pageUpDown && kc === 34;\n    const isArrowLeft = kc === 37;\n    const isArrowRight = kc === 39;\n    const isArrowUp = kc === 38;\n    const isArrowDown = kc === 40; // Directions locks\n\n    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {\n      return false;\n    }\n\n    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {\n      return false;\n    }\n\n    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {\n      return undefined;\n    }\n\n    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {\n      return undefined;\n    }\n\n    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {\n      let inView = false; // Check that swiper should be inside of visible area of window\n\n      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {\n        return undefined;\n      }\n\n      const $el = swiper.$el;\n      const swiperWidth = $el[0].clientWidth;\n      const swiperHeight = $el[0].clientHeight;\n      const windowWidth = window.innerWidth;\n      const windowHeight = window.innerHeight;\n      const swiperOffset = swiper.$el.offset();\n      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;\n      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];\n\n      for (let i = 0; i < swiperCoord.length; i += 1) {\n        const point = swiperCoord[i];\n\n        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {\n          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line\n\n          inView = true;\n        }\n      }\n\n      if (!inView) return undefined;\n    }\n\n    if (swiper.isHorizontal()) {\n      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {\n        if (e.preventDefault) e.preventDefault();else e.returnValue = false;\n      }\n\n      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();\n      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();\n    } else {\n      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {\n        if (e.preventDefault) e.preventDefault();else e.returnValue = false;\n      }\n\n      if (isPageDown || isArrowDown) swiper.slideNext();\n      if (isPageUp || isArrowUp) swiper.slidePrev();\n    }\n\n    emit('keyPress', kc);\n    return undefined;\n  }\n\n  function enable() {\n    if (swiper.keyboard.enabled) return;\n    (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document).on('keydown', handle);\n    swiper.keyboard.enabled = true;\n  }\n\n  function disable() {\n    if (!swiper.keyboard.enabled) return;\n    (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document).off('keydown', handle);\n    swiper.keyboard.enabled = false;\n  }\n\n  on('init', () => {\n    if (swiper.params.keyboard.enabled) {\n      enable();\n    }\n  });\n  on('destroy', () => {\n    if (swiper.keyboard.enabled) {\n      disable();\n    }\n  });\n  Object.assign(swiper.keyboard, {\n    enable,\n    disable\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/keyboard/keyboard.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/lazy/lazy.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/lazy/lazy.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Lazy; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\n\nfunction Lazy(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  extendParams({\n    lazy: {\n      checkInView: false,\n      enabled: false,\n      loadPrevNext: false,\n      loadPrevNextAmount: 1,\n      loadOnTransitionStart: false,\n      scrollingElement: '',\n      elementClass: 'swiper-lazy',\n      loadingClass: 'swiper-lazy-loading',\n      loadedClass: 'swiper-lazy-loaded',\n      preloaderClass: 'swiper-lazy-preloader'\n    }\n  });\n  swiper.lazy = {};\n  let scrollHandlerAttached = false;\n  let initialImageLoaded = false;\n\n  function loadInSlide(index, loadInDuplicate) {\n    if (loadInDuplicate === void 0) {\n      loadInDuplicate = true;\n    }\n\n    const params = swiper.params.lazy;\n    if (typeof index === 'undefined') return;\n    if (swiper.slides.length === 0) return;\n    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;\n    const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index=\"${index}\"]`) : swiper.slides.eq(index);\n    const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);\n\n    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {\n      $images.push($slideEl[0]);\n    }\n\n    if ($images.length === 0) return;\n    $images.each(imageEl => {\n      const $imageEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(imageEl);\n      $imageEl.addClass(params.loadingClass);\n      const background = $imageEl.attr('data-background');\n      const src = $imageEl.attr('data-src');\n      const srcset = $imageEl.attr('data-srcset');\n      const sizes = $imageEl.attr('data-sizes');\n      const $pictureEl = $imageEl.parent('picture');\n      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {\n        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;\n\n        if (background) {\n          $imageEl.css('background-image', `url(\"${background}\")`);\n          $imageEl.removeAttr('data-background');\n        } else {\n          if (srcset) {\n            $imageEl.attr('srcset', srcset);\n            $imageEl.removeAttr('data-srcset');\n          }\n\n          if (sizes) {\n            $imageEl.attr('sizes', sizes);\n            $imageEl.removeAttr('data-sizes');\n          }\n\n          if ($pictureEl.length) {\n            $pictureEl.children('source').each(sourceEl => {\n              const $source = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sourceEl);\n\n              if ($source.attr('data-srcset')) {\n                $source.attr('srcset', $source.attr('data-srcset'));\n                $source.removeAttr('data-srcset');\n              }\n            });\n          }\n\n          if (src) {\n            $imageEl.attr('src', src);\n            $imageEl.removeAttr('data-src');\n          }\n        }\n\n        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);\n        $slideEl.find(`.${params.preloaderClass}`).remove();\n\n        if (swiper.params.loop && loadInDuplicate) {\n          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');\n\n          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {\n            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index=\"${slideOriginalIndex}\"]:not(.${swiper.params.slideDuplicateClass})`);\n            loadInSlide(originalSlide.index(), false);\n          } else {\n            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index=\"${slideOriginalIndex}\"]`);\n            loadInSlide(duplicatedSlide.index(), false);\n          }\n        }\n\n        emit('lazyImageReady', $slideEl[0], $imageEl[0]);\n\n        if (swiper.params.autoHeight) {\n          swiper.updateAutoHeight();\n        }\n      });\n      emit('lazyImageLoad', $slideEl[0], $imageEl[0]);\n    });\n  }\n\n  function load() {\n    const {\n      $wrapperEl,\n      params: swiperParams,\n      slides,\n      activeIndex\n    } = swiper;\n    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;\n    const params = swiperParams.lazy;\n    let slidesPerView = swiperParams.slidesPerView;\n\n    if (slidesPerView === 'auto') {\n      slidesPerView = 0;\n    }\n\n    function slideExist(index) {\n      if (isVirtual) {\n        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index=\"${index}\"]`).length) {\n          return true;\n        }\n      } else if (slides[index]) return true;\n\n      return false;\n    }\n\n    function slideIndex(slideEl) {\n      if (isVirtual) {\n        return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(slideEl).attr('data-swiper-slide-index');\n      }\n\n      return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(slideEl).index();\n    }\n\n    if (!initialImageLoaded) initialImageLoaded = true;\n\n    if (swiper.params.watchSlidesProgress) {\n      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {\n        const index = isVirtual ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(slideEl).attr('data-swiper-slide-index') : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(slideEl).index();\n        loadInSlide(index);\n      });\n    } else if (slidesPerView > 1) {\n      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {\n        if (slideExist(i)) loadInSlide(i);\n      }\n    } else {\n      loadInSlide(activeIndex);\n    }\n\n    if (params.loadPrevNext) {\n      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {\n        const amount = params.loadPrevNextAmount;\n        const spv = slidesPerView;\n        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);\n        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides\n\n        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {\n          if (slideExist(i)) loadInSlide(i);\n        } // Prev Slides\n\n\n        for (let i = minIndex; i < activeIndex; i += 1) {\n          if (slideExist(i)) loadInSlide(i);\n        }\n      } else {\n        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);\n        if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));\n        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);\n        if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));\n      }\n    }\n  }\n\n  function checkInViewOnLoad() {\n    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n    if (!swiper || swiper.destroyed) return;\n    const $scrollElement = swiper.params.lazy.scrollingElement ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(swiper.params.lazy.scrollingElement) : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(window);\n    const isWindow = $scrollElement[0] === window;\n    const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;\n    const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;\n    const swiperOffset = swiper.$el.offset();\n    const {\n      rtlTranslate: rtl\n    } = swiper;\n    let inView = false;\n    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;\n    const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];\n\n    for (let i = 0; i < swiperCoord.length; i += 1) {\n      const point = swiperCoord[i];\n\n      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {\n        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line\n\n        inView = true;\n      }\n    }\n\n    const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {\n      passive: true,\n      capture: false\n    } : false;\n\n    if (inView) {\n      load();\n      $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);\n    } else if (!scrollHandlerAttached) {\n      scrollHandlerAttached = true;\n      $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);\n    }\n  }\n\n  on('beforeInit', () => {\n    if (swiper.params.lazy.enabled && swiper.params.preloadImages) {\n      swiper.params.preloadImages = false;\n    }\n  });\n  on('init', () => {\n    if (swiper.params.lazy.enabled) {\n      if (swiper.params.lazy.checkInView) {\n        checkInViewOnLoad();\n      } else {\n        load();\n      }\n    }\n  });\n  on('scroll', () => {\n    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {\n      load();\n    }\n  });\n  on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {\n    if (swiper.params.lazy.enabled) {\n      if (swiper.params.lazy.checkInView) {\n        checkInViewOnLoad();\n      } else {\n        load();\n      }\n    }\n  });\n  on('transitionStart', () => {\n    if (swiper.params.lazy.enabled) {\n      if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {\n        if (swiper.params.lazy.checkInView) {\n          checkInViewOnLoad();\n        } else {\n          load();\n        }\n      }\n    }\n  });\n  on('transitionEnd', () => {\n    if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {\n      if (swiper.params.lazy.checkInView) {\n        checkInViewOnLoad();\n      } else {\n        load();\n      }\n    }\n  });\n  on('slideChange', () => {\n    const {\n      lazy,\n      cssMode,\n      watchSlidesProgress,\n      touchReleaseOnEdges,\n      resistanceRatio\n    } = swiper.params;\n\n    if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {\n      load();\n    }\n  });\n  Object.assign(swiper.lazy, {\n    load,\n    loadInSlide\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/lazy/lazy.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/manipulation.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/manipulation.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Manipulation; }\n/* harmony export */ });\n/* harmony import */ var _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/appendSlide.js */ \"./node_modules/swiper/modules/manipulation/methods/appendSlide.js\");\n/* harmony import */ var _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/prependSlide.js */ \"./node_modules/swiper/modules/manipulation/methods/prependSlide.js\");\n/* harmony import */ var _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/addSlide.js */ \"./node_modules/swiper/modules/manipulation/methods/addSlide.js\");\n/* harmony import */ var _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/removeSlide.js */ \"./node_modules/swiper/modules/manipulation/methods/removeSlide.js\");\n/* harmony import */ var _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/removeAllSlides.js */ \"./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js\");\n\n\n\n\n\nfunction Manipulation(_ref) {\n  let {\n    swiper\n  } = _ref;\n  Object.assign(swiper, {\n    appendSlide: _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(swiper),\n    prependSlide: _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(swiper),\n    addSlide: _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(swiper),\n    removeSlide: _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bind(swiper),\n    removeAllSlides: _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].bind(swiper)\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/manipulation/manipulation.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/addSlide.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/addSlide.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addSlide; }\n/* harmony export */ });\nfunction addSlide(index, slides) {\n  const swiper = this;\n  const {\n    $wrapperEl,\n    params,\n    activeIndex\n  } = swiper;\n  let activeIndexBuffer = activeIndex;\n\n  if (params.loop) {\n    activeIndexBuffer -= swiper.loopedSlides;\n    swiper.loopDestroy();\n    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);\n  }\n\n  const baseLength = swiper.slides.length;\n\n  if (index <= 0) {\n    swiper.prependSlide(slides);\n    return;\n  }\n\n  if (index >= baseLength) {\n    swiper.appendSlide(slides);\n    return;\n  }\n\n  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;\n  const slidesBuffer = [];\n\n  for (let i = baseLength - 1; i >= index; i -= 1) {\n    const currentSlide = swiper.slides.eq(i);\n    currentSlide.remove();\n    slidesBuffer.unshift(currentSlide);\n  }\n\n  if (typeof slides === 'object' && 'length' in slides) {\n    for (let i = 0; i < slides.length; i += 1) {\n      if (slides[i]) $wrapperEl.append(slides[i]);\n    }\n\n    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;\n  } else {\n    $wrapperEl.append(slides);\n  }\n\n  for (let i = 0; i < slidesBuffer.length; i += 1) {\n    $wrapperEl.append(slidesBuffer[i]);\n  }\n\n  if (params.loop) {\n    swiper.loopCreate();\n  }\n\n  if (!params.observer) {\n    swiper.update();\n  }\n\n  if (params.loop) {\n    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);\n  } else {\n    swiper.slideTo(newActiveIndex, 0, false);\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/manipulation/methods/addSlide.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/appendSlide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/appendSlide.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ appendSlide; }\n/* harmony export */ });\nfunction appendSlide(slides) {\n  const swiper = this;\n  const {\n    $wrapperEl,\n    params\n  } = swiper;\n\n  if (params.loop) {\n    swiper.loopDestroy();\n  }\n\n  if (typeof slides === 'object' && 'length' in slides) {\n    for (let i = 0; i < slides.length; i += 1) {\n      if (slides[i]) $wrapperEl.append(slides[i]);\n    }\n  } else {\n    $wrapperEl.append(slides);\n  }\n\n  if (params.loop) {\n    swiper.loopCreate();\n  }\n\n  if (!params.observer) {\n    swiper.update();\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/manipulation/methods/appendSlide.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/prependSlide.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/prependSlide.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ prependSlide; }\n/* harmony export */ });\nfunction prependSlide(slides) {\n  const swiper = this;\n  const {\n    params,\n    $wrapperEl,\n    activeIndex\n  } = swiper;\n\n  if (params.loop) {\n    swiper.loopDestroy();\n  }\n\n  let newActiveIndex = activeIndex + 1;\n\n  if (typeof slides === 'object' && 'length' in slides) {\n    for (let i = 0; i < slides.length; i += 1) {\n      if (slides[i]) $wrapperEl.prepend(slides[i]);\n    }\n\n    newActiveIndex = activeIndex + slides.length;\n  } else {\n    $wrapperEl.prepend(slides);\n  }\n\n  if (params.loop) {\n    swiper.loopCreate();\n  }\n\n  if (!params.observer) {\n    swiper.update();\n  }\n\n  swiper.slideTo(newActiveIndex, 0, false);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/manipulation/methods/prependSlide.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ removeAllSlides; }\n/* harmony export */ });\nfunction removeAllSlides() {\n  const swiper = this;\n  const slidesIndexes = [];\n\n  for (let i = 0; i < swiper.slides.length; i += 1) {\n    slidesIndexes.push(i);\n  }\n\n  swiper.removeSlide(slidesIndexes);\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/removeSlide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeSlide.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ removeSlide; }\n/* harmony export */ });\nfunction removeSlide(slidesIndexes) {\n  const swiper = this;\n  const {\n    params,\n    $wrapperEl,\n    activeIndex\n  } = swiper;\n  let activeIndexBuffer = activeIndex;\n\n  if (params.loop) {\n    activeIndexBuffer -= swiper.loopedSlides;\n    swiper.loopDestroy();\n    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);\n  }\n\n  let newActiveIndex = activeIndexBuffer;\n  let indexToRemove;\n\n  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {\n    for (let i = 0; i < slidesIndexes.length; i += 1) {\n      indexToRemove = slidesIndexes[i];\n      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();\n      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;\n    }\n\n    newActiveIndex = Math.max(newActiveIndex, 0);\n  } else {\n    indexToRemove = slidesIndexes;\n    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();\n    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;\n    newActiveIndex = Math.max(newActiveIndex, 0);\n  }\n\n  if (params.loop) {\n    swiper.loopCreate();\n  }\n\n  if (!params.observer) {\n    swiper.update();\n  }\n\n  if (params.loop) {\n    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);\n  } else {\n    swiper.slideTo(newActiveIndex, 0, false);\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/manipulation/methods/removeSlide.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel/mousewheel.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel/mousewheel.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Mousewheel; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n/* eslint-disable consistent-return */\n\n\n\nfunction Mousewheel(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  extendParams({\n    mousewheel: {\n      enabled: false,\n      releaseOnEdges: false,\n      invert: false,\n      forceToAxis: false,\n      sensitivity: 1,\n      eventsTarget: 'container',\n      thresholdDelta: null,\n      thresholdTime: null\n    }\n  });\n  swiper.mousewheel = {\n    enabled: false\n  };\n  let timeout;\n  let lastScrollTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();\n  let lastEventBeforeSnap;\n  const recentWheelEvents = [];\n\n  function normalize(e) {\n    // Reasonable defaults\n    const PIXEL_STEP = 10;\n    const LINE_HEIGHT = 40;\n    const PAGE_HEIGHT = 800;\n    let sX = 0;\n    let sY = 0; // spinX, spinY\n\n    let pX = 0;\n    let pY = 0; // pixelX, pixelY\n    // Legacy\n\n    if ('detail' in e) {\n      sY = e.detail;\n    }\n\n    if ('wheelDelta' in e) {\n      sY = -e.wheelDelta / 120;\n    }\n\n    if ('wheelDeltaY' in e) {\n      sY = -e.wheelDeltaY / 120;\n    }\n\n    if ('wheelDeltaX' in e) {\n      sX = -e.wheelDeltaX / 120;\n    } // side scrolling on FF with DOMMouseScroll\n\n\n    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {\n      sX = sY;\n      sY = 0;\n    }\n\n    pX = sX * PIXEL_STEP;\n    pY = sY * PIXEL_STEP;\n\n    if ('deltaY' in e) {\n      pY = e.deltaY;\n    }\n\n    if ('deltaX' in e) {\n      pX = e.deltaX;\n    }\n\n    if (e.shiftKey && !pX) {\n      // if user scrolls with shift he wants horizontal scroll\n      pX = pY;\n      pY = 0;\n    }\n\n    if ((pX || pY) && e.deltaMode) {\n      if (e.deltaMode === 1) {\n        // delta in LINE units\n        pX *= LINE_HEIGHT;\n        pY *= LINE_HEIGHT;\n      } else {\n        // delta in PAGE units\n        pX *= PAGE_HEIGHT;\n        pY *= PAGE_HEIGHT;\n      }\n    } // Fall-back if spin cannot be determined\n\n\n    if (pX && !sX) {\n      sX = pX < 1 ? -1 : 1;\n    }\n\n    if (pY && !sY) {\n      sY = pY < 1 ? -1 : 1;\n    }\n\n    return {\n      spinX: sX,\n      spinY: sY,\n      pixelX: pX,\n      pixelY: pY\n    };\n  }\n\n  function handleMouseEnter() {\n    if (!swiper.enabled) return;\n    swiper.mouseEntered = true;\n  }\n\n  function handleMouseLeave() {\n    if (!swiper.enabled) return;\n    swiper.mouseEntered = false;\n  }\n\n  function animateSlider(newEvent) {\n    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {\n      // Prevent if delta of wheel scroll delta is below configured threshold\n      return false;\n    }\n\n    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {\n      // Prevent if time between scrolls is below configured threshold\n      return false;\n    } // If the movement is NOT big enough and\n    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):\n    //   Don't go any further (avoid insignificant scroll movement).\n\n\n    if (newEvent.delta >= 6 && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)() - lastScrollTime < 60) {\n      // Return false as a default\n      return true;\n    } // If user is scrolling towards the end:\n    //   If the slider hasn't hit the latest slide or\n    //   if the slider is a loop and\n    //   if the slider isn't moving right now:\n    //     Go to next slide and\n    //     emit a scroll event.\n    // Else (the user is scrolling towards the beginning) and\n    // if the slider hasn't hit the first slide or\n    // if the slider is a loop and\n    // if the slider isn't moving right now:\n    //   Go to prev slide and\n    //   emit a scroll event.\n\n\n    if (newEvent.direction < 0) {\n      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {\n        swiper.slideNext();\n        emit('scroll', newEvent.raw);\n      }\n    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {\n      swiper.slidePrev();\n      emit('scroll', newEvent.raw);\n    } // If you got here is because an animation has been triggered so store the current time\n\n\n    lastScrollTime = new window.Date().getTime(); // Return false as a default\n\n    return false;\n  }\n\n  function releaseScroll(newEvent) {\n    const params = swiper.params.mousewheel;\n\n    if (newEvent.direction < 0) {\n      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {\n        // Return true to animate scroll on edges\n        return true;\n      }\n    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {\n      // Return true to animate scroll on edges\n      return true;\n    }\n\n    return false;\n  }\n\n  function handle(event) {\n    let e = event;\n    let disableParentSwiper = true;\n    if (!swiper.enabled) return;\n    const params = swiper.params.mousewheel;\n\n    if (swiper.params.cssMode) {\n      e.preventDefault();\n    }\n\n    let target = swiper.$el;\n\n    if (swiper.params.mousewheel.eventsTarget !== 'container') {\n      target = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(swiper.params.mousewheel.eventsTarget);\n    }\n\n    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;\n    if (e.originalEvent) e = e.originalEvent; // jquery fix\n\n    let delta = 0;\n    const rtlFactor = swiper.rtlTranslate ? -1 : 1;\n    const data = normalize(e);\n\n    if (params.forceToAxis) {\n      if (swiper.isHorizontal()) {\n        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;\n      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;\n    } else {\n      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;\n    }\n\n    if (delta === 0) return true;\n    if (params.invert) delta = -delta; // Get the scroll positions\n\n    let positions = swiper.getTranslate() + delta * params.sensitivity;\n    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();\n    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:\n    //     the disableParentSwiper will be true.\n    // When loop is false:\n    //     if the scroll positions is not on edge,\n    //     then the disableParentSwiper will be true.\n    //     if the scroll on edge positions,\n    //     then the disableParentSwiper will be false.\n\n    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());\n    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();\n\n    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {\n      // Register the new event in a variable which stores the relevant data\n      const newEvent = {\n        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),\n        delta: Math.abs(delta),\n        direction: Math.sign(delta),\n        raw: event\n      }; // Keep the most recent events\n\n      if (recentWheelEvents.length >= 2) {\n        recentWheelEvents.shift(); // only store the last N events\n      }\n\n      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;\n      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:\n      //   If direction has changed or\n      //   if the scroll is quicker than the previous one:\n      //     Animate the slider.\n      // Else (this is the first time the wheel is moved):\n      //     Animate the slider.\n\n      if (prevEvent) {\n        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {\n          animateSlider(newEvent);\n        }\n      } else {\n        animateSlider(newEvent);\n      } // If it's time to release the scroll:\n      //   Return now so you don't hit the preventDefault.\n\n\n      if (releaseScroll(newEvent)) {\n        return true;\n      }\n    } else {\n      // Freemode or scrollContainer:\n      // If we recently snapped after a momentum scroll, then ignore wheel events\n      // to give time for the deceleration to finish. Stop ignoring after 500 msecs\n      // or if it's a new scroll (larger delta or inverse sign as last event before\n      // an end-of-momentum snap).\n      const newEvent = {\n        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),\n        delta: Math.abs(delta),\n        direction: Math.sign(delta)\n      };\n      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;\n\n      if (!ignoreWheelEvents) {\n        lastEventBeforeSnap = undefined;\n\n        if (swiper.params.loop) {\n          swiper.loopFix();\n        }\n\n        let position = swiper.getTranslate() + delta * params.sensitivity;\n        const wasBeginning = swiper.isBeginning;\n        const wasEnd = swiper.isEnd;\n        if (position >= swiper.minTranslate()) position = swiper.minTranslate();\n        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();\n        swiper.setTransition(0);\n        swiper.setTranslate(position);\n        swiper.updateProgress();\n        swiper.updateActiveIndex();\n        swiper.updateSlidesClasses();\n\n        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {\n          swiper.updateSlidesClasses();\n        }\n\n        if (swiper.params.freeMode.sticky) {\n          // When wheel scrolling starts with sticky (aka snap) enabled, then detect\n          // the end of a momentum scroll by storing recent (N=15?) wheel events.\n          // 1. do all N events have decreasing or same (absolute value) delta?\n          // 2. did all N events arrive in the last M (M=500?) msecs?\n          // 3. does the earliest event have an (absolute value) delta that's\n          //    at least P (P=1?) larger than the most recent event's delta?\n          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?\n          // If 1-4 are \"yes\" then we're near the end of a momentum scroll deceleration.\n          // Snap immediately and ignore remaining wheel events in this scroll.\n          // See comment above for \"remaining wheel events in this scroll\" determination.\n          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.\n          clearTimeout(timeout);\n          timeout = undefined;\n\n          if (recentWheelEvents.length >= 15) {\n            recentWheelEvents.shift(); // only store the last N events\n          }\n\n          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;\n          const firstEvent = recentWheelEvents[0];\n          recentWheelEvents.push(newEvent);\n\n          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {\n            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.\n            recentWheelEvents.splice(0);\n          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {\n            // We're at the end of the deceleration of a momentum scroll, so there's no need\n            // to wait for more events. Snap ASAP on the next tick.\n            // Also, because there's some remaining momentum we'll bias the snap in the\n            // direction of the ongoing scroll because it's better UX for the scroll to snap\n            // in the same direction as the scroll instead of reversing to snap.  Therefore,\n            // if it's already scrolled more than 20% in the current direction, keep going.\n            const snapToThreshold = delta > 0 ? 0.8 : 0.2;\n            lastEventBeforeSnap = newEvent;\n            recentWheelEvents.splice(0);\n            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {\n              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);\n            }, 0); // no delay; move on next tick\n          }\n\n          if (!timeout) {\n            // if we get here, then we haven't detected the end of a momentum scroll, so\n            // we'll consider a scroll \"complete\" when there haven't been any wheel events\n            // for 500ms.\n            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {\n              const snapToThreshold = 0.5;\n              lastEventBeforeSnap = newEvent;\n              recentWheelEvents.splice(0);\n              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);\n            }, 500);\n          }\n        } // Emit event\n\n\n        if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay\n\n        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions\n\n        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;\n      }\n    }\n\n    if (e.preventDefault) e.preventDefault();else e.returnValue = false;\n    return false;\n  }\n\n  function events(method) {\n    let target = swiper.$el;\n\n    if (swiper.params.mousewheel.eventsTarget !== 'container') {\n      target = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(swiper.params.mousewheel.eventsTarget);\n    }\n\n    target[method]('mouseenter', handleMouseEnter);\n    target[method]('mouseleave', handleMouseLeave);\n    target[method]('wheel', handle);\n  }\n\n  function enable() {\n    if (swiper.params.cssMode) {\n      swiper.wrapperEl.removeEventListener('wheel', handle);\n      return true;\n    }\n\n    if (swiper.mousewheel.enabled) return false;\n    events('on');\n    swiper.mousewheel.enabled = true;\n    return true;\n  }\n\n  function disable() {\n    if (swiper.params.cssMode) {\n      swiper.wrapperEl.addEventListener(event, handle);\n      return true;\n    }\n\n    if (!swiper.mousewheel.enabled) return false;\n    events('off');\n    swiper.mousewheel.enabled = false;\n    return true;\n  }\n\n  on('init', () => {\n    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {\n      disable();\n    }\n\n    if (swiper.params.mousewheel.enabled) enable();\n  });\n  on('destroy', () => {\n    if (swiper.params.cssMode) {\n      enable();\n    }\n\n    if (swiper.mousewheel.enabled) disable();\n  });\n  Object.assign(swiper.mousewheel, {\n    enable,\n    disable\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/mousewheel/mousewheel.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/navigation/navigation.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/navigation/navigation.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ \"./node_modules/swiper/shared/create-element-if-not-defined.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\n\nfunction Navigation(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  extendParams({\n    navigation: {\n      nextEl: null,\n      prevEl: null,\n      hideOnClick: false,\n      disabledClass: 'swiper-button-disabled',\n      hiddenClass: 'swiper-button-hidden',\n      lockClass: 'swiper-button-lock'\n    }\n  });\n  swiper.navigation = {\n    nextEl: null,\n    $nextEl: null,\n    prevEl: null,\n    $prevEl: null\n  };\n\n  function getEl(el) {\n    let $el;\n\n    if (el) {\n      $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el);\n\n      if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {\n        $el = swiper.$el.find(el);\n      }\n    }\n\n    return $el;\n  }\n\n  function toggleEl($el, disabled) {\n    const params = swiper.params.navigation;\n\n    if ($el && $el.length > 0) {\n      $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);\n      if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;\n\n      if (swiper.params.watchOverflow && swiper.enabled) {\n        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);\n      }\n    }\n  }\n\n  function update() {\n    // Update Navigation Buttons\n    if (swiper.params.loop) return;\n    const {\n      $nextEl,\n      $prevEl\n    } = swiper.navigation;\n    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);\n    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);\n  }\n\n  function onPrevClick(e) {\n    e.preventDefault();\n    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;\n    swiper.slidePrev();\n  }\n\n  function onNextClick(e) {\n    e.preventDefault();\n    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;\n    swiper.slideNext();\n  }\n\n  function init() {\n    const params = swiper.params.navigation;\n    swiper.params.navigation = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(swiper, swiper.originalParams.navigation, swiper.params.navigation, {\n      nextEl: 'swiper-button-next',\n      prevEl: 'swiper-button-prev'\n    });\n    if (!(params.nextEl || params.prevEl)) return;\n    const $nextEl = getEl(params.nextEl);\n    const $prevEl = getEl(params.prevEl);\n\n    if ($nextEl && $nextEl.length > 0) {\n      $nextEl.on('click', onNextClick);\n    }\n\n    if ($prevEl && $prevEl.length > 0) {\n      $prevEl.on('click', onPrevClick);\n    }\n\n    Object.assign(swiper.navigation, {\n      $nextEl,\n      nextEl: $nextEl && $nextEl[0],\n      $prevEl,\n      prevEl: $prevEl && $prevEl[0]\n    });\n\n    if (!swiper.enabled) {\n      if ($nextEl) $nextEl.addClass(params.lockClass);\n      if ($prevEl) $prevEl.addClass(params.lockClass);\n    }\n  }\n\n  function destroy() {\n    const {\n      $nextEl,\n      $prevEl\n    } = swiper.navigation;\n\n    if ($nextEl && $nextEl.length) {\n      $nextEl.off('click', onNextClick);\n      $nextEl.removeClass(swiper.params.navigation.disabledClass);\n    }\n\n    if ($prevEl && $prevEl.length) {\n      $prevEl.off('click', onPrevClick);\n      $prevEl.removeClass(swiper.params.navigation.disabledClass);\n    }\n  }\n\n  on('init', () => {\n    init();\n    update();\n  });\n  on('toEdge fromEdge lock unlock', () => {\n    update();\n  });\n  on('destroy', () => {\n    destroy();\n  });\n  on('enable disable', () => {\n    const {\n      $nextEl,\n      $prevEl\n    } = swiper.navigation;\n\n    if ($nextEl) {\n      $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);\n    }\n\n    if ($prevEl) {\n      $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);\n    }\n  });\n  on('click', (_s, e) => {\n    const {\n      $nextEl,\n      $prevEl\n    } = swiper.navigation;\n    const targetEl = e.target;\n\n    if (swiper.params.navigation.hideOnClick && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(targetEl).is($prevEl) && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(targetEl).is($nextEl)) {\n      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;\n      let isHidden;\n\n      if ($nextEl) {\n        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);\n      } else if ($prevEl) {\n        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);\n      }\n\n      if (isHidden === true) {\n        emit('navigationShow');\n      } else {\n        emit('navigationHide');\n      }\n\n      if ($nextEl) {\n        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);\n      }\n\n      if ($prevEl) {\n        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);\n      }\n    }\n  });\n  Object.assign(swiper.navigation, {\n    update,\n    init,\n    destroy\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/navigation/navigation.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/pagination/pagination.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/pagination/pagination.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ \"./node_modules/swiper/shared/classes-to-selector.js\");\n/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ \"./node_modules/swiper/shared/create-element-if-not-defined.js\");\n\n\n\nfunction Pagination(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  const pfx = 'swiper-pagination';\n  extendParams({\n    pagination: {\n      el: null,\n      bulletElement: 'span',\n      clickable: false,\n      hideOnClick: false,\n      renderBullet: null,\n      renderProgressbar: null,\n      renderFraction: null,\n      renderCustom: null,\n      progressbarOpposite: false,\n      type: 'bullets',\n      // 'bullets' or 'progressbar' or 'fraction' or 'custom'\n      dynamicBullets: false,\n      dynamicMainBullets: 1,\n      formatFractionCurrent: number => number,\n      formatFractionTotal: number => number,\n      bulletClass: `${pfx}-bullet`,\n      bulletActiveClass: `${pfx}-bullet-active`,\n      modifierClass: `${pfx}-`,\n      currentClass: `${pfx}-current`,\n      totalClass: `${pfx}-total`,\n      hiddenClass: `${pfx}-hidden`,\n      progressbarFillClass: `${pfx}-progressbar-fill`,\n      progressbarOppositeClass: `${pfx}-progressbar-opposite`,\n      clickableClass: `${pfx}-clickable`,\n      lockClass: `${pfx}-lock`,\n      horizontalClass: `${pfx}-horizontal`,\n      verticalClass: `${pfx}-vertical`\n    }\n  });\n  swiper.pagination = {\n    el: null,\n    $el: null,\n    bullets: []\n  };\n  let bulletSize;\n  let dynamicBulletIndex = 0;\n\n  function isPaginationDisabled() {\n    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;\n  }\n\n  function setSideBullets($bulletEl, position) {\n    const {\n      bulletActiveClass\n    } = swiper.params.pagination;\n    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);\n  }\n\n  function update() {\n    // Render || Update Pagination bullets/items\n    const rtl = swiper.rtl;\n    const params = swiper.params.pagination;\n    if (isPaginationDisabled()) return;\n    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;\n    const $el = swiper.pagination.$el; // Current/Total\n\n    let current;\n    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;\n\n    if (swiper.params.loop) {\n      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);\n\n      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {\n        current -= slidesLength - swiper.loopedSlides * 2;\n      }\n\n      if (current > total - 1) current -= total;\n      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;\n    } else if (typeof swiper.snapIndex !== 'undefined') {\n      current = swiper.snapIndex;\n    } else {\n      current = swiper.activeIndex || 0;\n    } // Types\n\n\n    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {\n      const bullets = swiper.pagination.bullets;\n      let firstIndex;\n      let lastIndex;\n      let midIndex;\n\n      if (params.dynamicBullets) {\n        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);\n        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);\n\n        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {\n          dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);\n\n          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {\n            dynamicBulletIndex = params.dynamicMainBullets - 1;\n          } else if (dynamicBulletIndex < 0) {\n            dynamicBulletIndex = 0;\n          }\n        }\n\n        firstIndex = Math.max(current - dynamicBulletIndex, 0);\n        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);\n        midIndex = (lastIndex + firstIndex) / 2;\n      }\n\n      bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));\n\n      if ($el.length > 1) {\n        bullets.each(bullet => {\n          const $bullet = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bullet);\n          const bulletIndex = $bullet.index();\n\n          if (bulletIndex === current) {\n            $bullet.addClass(params.bulletActiveClass);\n          }\n\n          if (params.dynamicBullets) {\n            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {\n              $bullet.addClass(`${params.bulletActiveClass}-main`);\n            }\n\n            if (bulletIndex === firstIndex) {\n              setSideBullets($bullet, 'prev');\n            }\n\n            if (bulletIndex === lastIndex) {\n              setSideBullets($bullet, 'next');\n            }\n          }\n        });\n      } else {\n        const $bullet = bullets.eq(current);\n        const bulletIndex = $bullet.index();\n        $bullet.addClass(params.bulletActiveClass);\n\n        if (params.dynamicBullets) {\n          const $firstDisplayedBullet = bullets.eq(firstIndex);\n          const $lastDisplayedBullet = bullets.eq(lastIndex);\n\n          for (let i = firstIndex; i <= lastIndex; i += 1) {\n            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);\n          }\n\n          if (swiper.params.loop) {\n            if (bulletIndex >= bullets.length) {\n              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {\n                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);\n              }\n\n              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);\n            } else {\n              setSideBullets($firstDisplayedBullet, 'prev');\n              setSideBullets($lastDisplayedBullet, 'next');\n            }\n          } else {\n            setSideBullets($firstDisplayedBullet, 'prev');\n            setSideBullets($lastDisplayedBullet, 'next');\n          }\n        }\n      }\n\n      if (params.dynamicBullets) {\n        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);\n        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;\n        const offsetProp = rtl ? 'right' : 'left';\n        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);\n      }\n    }\n\n    if (params.type === 'fraction') {\n      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.currentClass)).text(params.formatFractionCurrent(current + 1));\n      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.totalClass)).text(params.formatFractionTotal(total));\n    }\n\n    if (params.type === 'progressbar') {\n      let progressbarDirection;\n\n      if (params.progressbarOpposite) {\n        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';\n      } else {\n        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';\n      }\n\n      const scale = (current + 1) / total;\n      let scaleX = 1;\n      let scaleY = 1;\n\n      if (progressbarDirection === 'horizontal') {\n        scaleX = scale;\n      } else {\n        scaleY = scale;\n      }\n\n      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);\n    }\n\n    if (params.type === 'custom' && params.renderCustom) {\n      $el.html(params.renderCustom(swiper, current + 1, total));\n      emit('paginationRender', $el[0]);\n    } else {\n      emit('paginationUpdate', $el[0]);\n    }\n\n    if (swiper.params.watchOverflow && swiper.enabled) {\n      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);\n    }\n  }\n\n  function render() {\n    // Render Container\n    const params = swiper.params.pagination;\n    if (isPaginationDisabled()) return;\n    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;\n    const $el = swiper.pagination.$el;\n    let paginationHTML = '';\n\n    if (params.type === 'bullets') {\n      let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;\n\n      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {\n        numberOfBullets = slidesLength;\n      }\n\n      for (let i = 0; i < numberOfBullets; i += 1) {\n        if (params.renderBullet) {\n          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);\n        } else {\n          paginationHTML += `<${params.bulletElement} class=\"${params.bulletClass}\"></${params.bulletElement}>`;\n        }\n      }\n\n      $el.html(paginationHTML);\n      swiper.pagination.bullets = $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.bulletClass));\n    }\n\n    if (params.type === 'fraction') {\n      if (params.renderFraction) {\n        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);\n      } else {\n        paginationHTML = `<span class=\"${params.currentClass}\"></span>` + ' / ' + `<span class=\"${params.totalClass}\"></span>`;\n      }\n\n      $el.html(paginationHTML);\n    }\n\n    if (params.type === 'progressbar') {\n      if (params.renderProgressbar) {\n        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);\n      } else {\n        paginationHTML = `<span class=\"${params.progressbarFillClass}\"></span>`;\n      }\n\n      $el.html(paginationHTML);\n    }\n\n    if (params.type !== 'custom') {\n      emit('paginationRender', swiper.pagination.$el[0]);\n    }\n  }\n\n  function init() {\n    swiper.params.pagination = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(swiper, swiper.originalParams.pagination, swiper.params.pagination, {\n      el: 'swiper-pagination'\n    });\n    const params = swiper.params.pagination;\n    if (!params.el) return;\n    let $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params.el);\n    if ($el.length === 0) return;\n\n    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {\n      $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper\n\n      if ($el.length > 1) {\n        $el = $el.filter(el => {\n          if ((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el).parents('.swiper')[0] !== swiper.el) return false;\n          return true;\n        });\n      }\n    }\n\n    if (params.type === 'bullets' && params.clickable) {\n      $el.addClass(params.clickableClass);\n    }\n\n    $el.addClass(params.modifierClass + params.type);\n    $el.addClass(params.modifierClass + swiper.params.direction);\n\n    if (params.type === 'bullets' && params.dynamicBullets) {\n      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);\n      dynamicBulletIndex = 0;\n\n      if (params.dynamicMainBullets < 1) {\n        params.dynamicMainBullets = 1;\n      }\n    }\n\n    if (params.type === 'progressbar' && params.progressbarOpposite) {\n      $el.addClass(params.progressbarOppositeClass);\n    }\n\n    if (params.clickable) {\n      $el.on('click', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.bulletClass), function onClick(e) {\n        e.preventDefault();\n        let index = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).index() * swiper.params.slidesPerGroup;\n        if (swiper.params.loop) index += swiper.loopedSlides;\n        swiper.slideTo(index);\n      });\n    }\n\n    Object.assign(swiper.pagination, {\n      $el,\n      el: $el[0]\n    });\n\n    if (!swiper.enabled) {\n      $el.addClass(params.lockClass);\n    }\n  }\n\n  function destroy() {\n    const params = swiper.params.pagination;\n    if (isPaginationDisabled()) return;\n    const $el = swiper.pagination.$el;\n    $el.removeClass(params.hiddenClass);\n    $el.removeClass(params.modifierClass + params.type);\n    $el.removeClass(params.modifierClass + swiper.params.direction);\n    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);\n\n    if (params.clickable) {\n      $el.off('click', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.bulletClass));\n    }\n  }\n\n  on('init', () => {\n    init();\n    render();\n    update();\n  });\n  on('activeIndexChange', () => {\n    if (swiper.params.loop) {\n      update();\n    } else if (typeof swiper.snapIndex === 'undefined') {\n      update();\n    }\n  });\n  on('snapIndexChange', () => {\n    if (!swiper.params.loop) {\n      update();\n    }\n  });\n  on('slidesLengthChange', () => {\n    if (swiper.params.loop) {\n      render();\n      update();\n    }\n  });\n  on('snapGridLengthChange', () => {\n    if (!swiper.params.loop) {\n      render();\n      update();\n    }\n  });\n  on('destroy', () => {\n    destroy();\n  });\n  on('enable disable', () => {\n    const {\n      $el\n    } = swiper.pagination;\n\n    if ($el) {\n      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);\n    }\n  });\n  on('lock unlock', () => {\n    update();\n  });\n  on('click', (_s, e) => {\n    const targetEl = e.target;\n    const {\n      $el\n    } = swiper.pagination;\n\n    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(targetEl).hasClass(swiper.params.pagination.bulletClass)) {\n      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;\n      const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);\n\n      if (isHidden === true) {\n        emit('paginationShow');\n      } else {\n        emit('paginationHide');\n      }\n\n      $el.toggleClass(swiper.params.pagination.hiddenClass);\n    }\n  });\n  Object.assign(swiper.pagination, {\n    render,\n    update,\n    init,\n    destroy\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/pagination/pagination.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/parallax/parallax.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/parallax/parallax.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Parallax; }\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\nfunction Parallax(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    parallax: {\n      enabled: false\n    }\n  });\n\n  const setTransform = (el, progress) => {\n    const {\n      rtl\n    } = swiper;\n    const $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el);\n    const rtlFactor = rtl ? -1 : 1;\n    const p = $el.attr('data-swiper-parallax') || '0';\n    let x = $el.attr('data-swiper-parallax-x');\n    let y = $el.attr('data-swiper-parallax-y');\n    const scale = $el.attr('data-swiper-parallax-scale');\n    const opacity = $el.attr('data-swiper-parallax-opacity');\n\n    if (x || y) {\n      x = x || '0';\n      y = y || '0';\n    } else if (swiper.isHorizontal()) {\n      x = p;\n      y = '0';\n    } else {\n      y = p;\n      x = '0';\n    }\n\n    if (x.indexOf('%') >= 0) {\n      x = `${parseInt(x, 10) * progress * rtlFactor}%`;\n    } else {\n      x = `${x * progress * rtlFactor}px`;\n    }\n\n    if (y.indexOf('%') >= 0) {\n      y = `${parseInt(y, 10) * progress}%`;\n    } else {\n      y = `${y * progress}px`;\n    }\n\n    if (typeof opacity !== 'undefined' && opacity !== null) {\n      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));\n      $el[0].style.opacity = currentOpacity;\n    }\n\n    if (typeof scale === 'undefined' || scale === null) {\n      $el.transform(`translate3d(${x}, ${y}, 0px)`);\n    } else {\n      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));\n      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);\n    }\n  };\n\n  const setTranslate = () => {\n    const {\n      $el,\n      slides,\n      progress,\n      snapGrid\n    } = swiper;\n    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {\n      setTransform(el, progress);\n    });\n    slides.each((slideEl, slideIndex) => {\n      let slideProgress = slideEl.progress;\n\n      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {\n        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);\n      }\n\n      slideProgress = Math.min(Math.max(slideProgress, -1), 1);\n      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {\n        setTransform(el, slideProgress);\n      });\n    });\n  };\n\n  const setTransition = function (duration) {\n    if (duration === void 0) {\n      duration = swiper.params.speed;\n    }\n\n    const {\n      $el\n    } = swiper;\n    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {\n      const $parallaxEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parallaxEl);\n      let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;\n      if (duration === 0) parallaxDuration = 0;\n      $parallaxEl.transition(parallaxDuration);\n    });\n  };\n\n  on('beforeInit', () => {\n    if (!swiper.params.parallax.enabled) return;\n    swiper.params.watchSlidesProgress = true;\n    swiper.originalParams.watchSlidesProgress = true;\n  });\n  on('init', () => {\n    if (!swiper.params.parallax.enabled) return;\n    setTranslate();\n  });\n  on('setTranslate', () => {\n    if (!swiper.params.parallax.enabled) return;\n    setTranslate();\n  });\n  on('setTransition', (_swiper, duration) => {\n    if (!swiper.params.parallax.enabled) return;\n    setTransition(duration);\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/parallax/parallax.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar/scrollbar.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar/scrollbar.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Scrollbar; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ \"./node_modules/swiper/shared/create-element-if-not-defined.js\");\n\n\n\n\nfunction Scrollbar(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  let isTouched = false;\n  let timeout = null;\n  let dragTimeout = null;\n  let dragStartPos;\n  let dragSize;\n  let trackSize;\n  let divider;\n  extendParams({\n    scrollbar: {\n      el: null,\n      dragSize: 'auto',\n      hide: false,\n      draggable: false,\n      snapOnRelease: true,\n      lockClass: 'swiper-scrollbar-lock',\n      dragClass: 'swiper-scrollbar-drag'\n    }\n  });\n  swiper.scrollbar = {\n    el: null,\n    dragEl: null,\n    $el: null,\n    $dragEl: null\n  };\n\n  function setTranslate() {\n    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;\n    const {\n      scrollbar,\n      rtlTranslate: rtl,\n      progress\n    } = swiper;\n    const {\n      $dragEl,\n      $el\n    } = scrollbar;\n    const params = swiper.params.scrollbar;\n    let newSize = dragSize;\n    let newPos = (trackSize - dragSize) * progress;\n\n    if (rtl) {\n      newPos = -newPos;\n\n      if (newPos > 0) {\n        newSize = dragSize - newPos;\n        newPos = 0;\n      } else if (-newPos + dragSize > trackSize) {\n        newSize = trackSize + newPos;\n      }\n    } else if (newPos < 0) {\n      newSize = dragSize + newPos;\n      newPos = 0;\n    } else if (newPos + dragSize > trackSize) {\n      newSize = trackSize - newPos;\n    }\n\n    if (swiper.isHorizontal()) {\n      $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);\n      $dragEl[0].style.width = `${newSize}px`;\n    } else {\n      $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);\n      $dragEl[0].style.height = `${newSize}px`;\n    }\n\n    if (params.hide) {\n      clearTimeout(timeout);\n      $el[0].style.opacity = 1;\n      timeout = setTimeout(() => {\n        $el[0].style.opacity = 0;\n        $el.transition(400);\n      }, 1000);\n    }\n  }\n\n  function setTransition(duration) {\n    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;\n    swiper.scrollbar.$dragEl.transition(duration);\n  }\n\n  function updateSize() {\n    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;\n    const {\n      scrollbar\n    } = swiper;\n    const {\n      $dragEl,\n      $el\n    } = scrollbar;\n    $dragEl[0].style.width = '';\n    $dragEl[0].style.height = '';\n    trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;\n    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));\n\n    if (swiper.params.scrollbar.dragSize === 'auto') {\n      dragSize = trackSize * divider;\n    } else {\n      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);\n    }\n\n    if (swiper.isHorizontal()) {\n      $dragEl[0].style.width = `${dragSize}px`;\n    } else {\n      $dragEl[0].style.height = `${dragSize}px`;\n    }\n\n    if (divider >= 1) {\n      $el[0].style.display = 'none';\n    } else {\n      $el[0].style.display = '';\n    }\n\n    if (swiper.params.scrollbar.hide) {\n      $el[0].style.opacity = 0;\n    }\n\n    if (swiper.params.watchOverflow && swiper.enabled) {\n      scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);\n    }\n  }\n\n  function getPointerPosition(e) {\n    if (swiper.isHorizontal()) {\n      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;\n    }\n\n    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;\n  }\n\n  function setDragPosition(e) {\n    const {\n      scrollbar,\n      rtlTranslate: rtl\n    } = swiper;\n    const {\n      $el\n    } = scrollbar;\n    let positionRatio;\n    positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);\n    positionRatio = Math.max(Math.min(positionRatio, 1), 0);\n\n    if (rtl) {\n      positionRatio = 1 - positionRatio;\n    }\n\n    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;\n    swiper.updateProgress(position);\n    swiper.setTranslate(position);\n    swiper.updateActiveIndex();\n    swiper.updateSlidesClasses();\n  }\n\n  function onDragStart(e) {\n    const params = swiper.params.scrollbar;\n    const {\n      scrollbar,\n      $wrapperEl\n    } = swiper;\n    const {\n      $el,\n      $dragEl\n    } = scrollbar;\n    isTouched = true;\n    dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;\n    e.preventDefault();\n    e.stopPropagation();\n    $wrapperEl.transition(100);\n    $dragEl.transition(100);\n    setDragPosition(e);\n    clearTimeout(dragTimeout);\n    $el.transition(0);\n\n    if (params.hide) {\n      $el.css('opacity', 1);\n    }\n\n    if (swiper.params.cssMode) {\n      swiper.$wrapperEl.css('scroll-snap-type', 'none');\n    }\n\n    emit('scrollbarDragStart', e);\n  }\n\n  function onDragMove(e) {\n    const {\n      scrollbar,\n      $wrapperEl\n    } = swiper;\n    const {\n      $el,\n      $dragEl\n    } = scrollbar;\n    if (!isTouched) return;\n    if (e.preventDefault) e.preventDefault();else e.returnValue = false;\n    setDragPosition(e);\n    $wrapperEl.transition(0);\n    $el.transition(0);\n    $dragEl.transition(0);\n    emit('scrollbarDragMove', e);\n  }\n\n  function onDragEnd(e) {\n    const params = swiper.params.scrollbar;\n    const {\n      scrollbar,\n      $wrapperEl\n    } = swiper;\n    const {\n      $el\n    } = scrollbar;\n    if (!isTouched) return;\n    isTouched = false;\n\n    if (swiper.params.cssMode) {\n      swiper.$wrapperEl.css('scroll-snap-type', '');\n      $wrapperEl.transition('');\n    }\n\n    if (params.hide) {\n      clearTimeout(dragTimeout);\n      dragTimeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {\n        $el.css('opacity', 0);\n        $el.transition(400);\n      }, 1000);\n    }\n\n    emit('scrollbarDragEnd', e);\n\n    if (params.snapOnRelease) {\n      swiper.slideToClosest();\n    }\n  }\n\n  function events(method) {\n    const {\n      scrollbar,\n      touchEventsTouch,\n      touchEventsDesktop,\n      params,\n      support\n    } = swiper;\n    const $el = scrollbar.$el;\n    const target = $el[0];\n    const activeListener = support.passiveListener && params.passiveListeners ? {\n      passive: false,\n      capture: false\n    } : false;\n    const passiveListener = support.passiveListener && params.passiveListeners ? {\n      passive: true,\n      capture: false\n    } : false;\n    if (!target) return;\n    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';\n\n    if (!support.touch) {\n      target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);\n      document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);\n      document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);\n    } else {\n      target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);\n      target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);\n      target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);\n    }\n  }\n\n  function enableDraggable() {\n    if (!swiper.params.scrollbar.el) return;\n    events('on');\n  }\n\n  function disableDraggable() {\n    if (!swiper.params.scrollbar.el) return;\n    events('off');\n  }\n\n  function init() {\n    const {\n      scrollbar,\n      $el: $swiperEl\n    } = swiper;\n    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {\n      el: 'swiper-scrollbar'\n    });\n    const params = swiper.params.scrollbar;\n    if (!params.el) return;\n    let $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params.el);\n\n    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {\n      $el = $swiperEl.find(params.el);\n    }\n\n    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);\n\n    if ($dragEl.length === 0) {\n      $dragEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`<div class=\"${swiper.params.scrollbar.dragClass}\"></div>`);\n      $el.append($dragEl);\n    }\n\n    Object.assign(scrollbar, {\n      $el,\n      el: $el[0],\n      $dragEl,\n      dragEl: $dragEl[0]\n    });\n\n    if (params.draggable) {\n      enableDraggable();\n    }\n\n    if ($el) {\n      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);\n    }\n  }\n\n  function destroy() {\n    disableDraggable();\n  }\n\n  on('init', () => {\n    init();\n    updateSize();\n    setTranslate();\n  });\n  on('update resize observerUpdate lock unlock', () => {\n    updateSize();\n  });\n  on('setTranslate', () => {\n    setTranslate();\n  });\n  on('setTransition', (_s, duration) => {\n    setTransition(duration);\n  });\n  on('enable disable', () => {\n    const {\n      $el\n    } = swiper.scrollbar;\n\n    if ($el) {\n      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);\n    }\n  });\n  on('destroy', () => {\n    destroy();\n  });\n  Object.assign(swiper.scrollbar, {\n    updateSize,\n    setTranslate,\n    init,\n    destroy\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/scrollbar/scrollbar.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/thumbs/thumbs.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs/thumbs.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Thumb; }\n/* harmony export */ });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\n\nfunction Thumb(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    thumbs: {\n      swiper: null,\n      multipleActiveThumbs: true,\n      autoScrollOffset: 0,\n      slideThumbActiveClass: 'swiper-slide-thumb-active',\n      thumbsContainerClass: 'swiper-thumbs'\n    }\n  });\n  let initialized = false;\n  let swiperCreated = false;\n  swiper.thumbs = {\n    swiper: null\n  };\n\n  function onThumbClick() {\n    const thumbsSwiper = swiper.thumbs.swiper;\n    if (!thumbsSwiper) return;\n    const clickedIndex = thumbsSwiper.clickedIndex;\n    const clickedSlide = thumbsSwiper.clickedSlide;\n    if (clickedSlide && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;\n    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;\n    let slideToIndex;\n\n    if (thumbsSwiper.params.loop) {\n      slideToIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);\n    } else {\n      slideToIndex = clickedIndex;\n    }\n\n    if (swiper.params.loop) {\n      let currentIndex = swiper.activeIndex;\n\n      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {\n        swiper.loopFix(); // eslint-disable-next-line\n\n        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;\n        currentIndex = swiper.activeIndex;\n      }\n\n      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index=\"${slideToIndex}\"]`).eq(0).index();\n      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index=\"${slideToIndex}\"]`).eq(0).index();\n      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;\n    }\n\n    swiper.slideTo(slideToIndex);\n  }\n\n  function init() {\n    const {\n      thumbs: thumbsParams\n    } = swiper.params;\n    if (initialized) return false;\n    initialized = true;\n    const SwiperClass = swiper.constructor;\n\n    if (thumbsParams.swiper instanceof SwiperClass) {\n      swiper.thumbs.swiper = thumbsParams.swiper;\n      Object.assign(swiper.thumbs.swiper.originalParams, {\n        watchSlidesProgress: true,\n        slideToClickedSlide: false\n      });\n      Object.assign(swiper.thumbs.swiper.params, {\n        watchSlidesProgress: true,\n        slideToClickedSlide: false\n      });\n    } else if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(thumbsParams.swiper)) {\n      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);\n      Object.assign(thumbsSwiperParams, {\n        watchSlidesProgress: true,\n        slideToClickedSlide: false\n      });\n      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);\n      swiperCreated = true;\n    }\n\n    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);\n    swiper.thumbs.swiper.on('tap', onThumbClick);\n    return true;\n  }\n\n  function update(initial) {\n    const thumbsSwiper = swiper.thumbs.swiper;\n    if (!thumbsSwiper) return;\n    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;\n    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;\n    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;\n\n    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {\n      let currentThumbsIndex = thumbsSwiper.activeIndex;\n      let newThumbsIndex;\n      let direction;\n\n      if (thumbsSwiper.params.loop) {\n        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {\n          thumbsSwiper.loopFix(); // eslint-disable-next-line\n\n          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;\n          currentThumbsIndex = thumbsSwiper.activeIndex;\n        } // Find actual thumbs index to slide to\n\n\n        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index=\"${swiper.realIndex}\"]`).eq(0).index();\n        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index=\"${swiper.realIndex}\"]`).eq(0).index();\n\n        if (typeof prevThumbsIndex === 'undefined') {\n          newThumbsIndex = nextThumbsIndex;\n        } else if (typeof nextThumbsIndex === 'undefined') {\n          newThumbsIndex = prevThumbsIndex;\n        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {\n          newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;\n        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {\n          newThumbsIndex = nextThumbsIndex;\n        } else {\n          newThumbsIndex = prevThumbsIndex;\n        }\n\n        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';\n      } else {\n        newThumbsIndex = swiper.realIndex;\n        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';\n      }\n\n      if (useOffset) {\n        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;\n      }\n\n      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {\n        if (thumbsSwiper.params.centeredSlides) {\n          if (newThumbsIndex > currentThumbsIndex) {\n            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;\n          } else {\n            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;\n          }\n        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {// newThumbsIndex = newThumbsIndex - slidesPerView + 1;\n        }\n\n        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);\n      }\n    } // Activate thumbs\n\n\n    let thumbsToActivate = 1;\n    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;\n\n    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {\n      thumbsToActivate = swiper.params.slidesPerView;\n    }\n\n    if (!swiper.params.thumbs.multipleActiveThumbs) {\n      thumbsToActivate = 1;\n    }\n\n    thumbsToActivate = Math.floor(thumbsToActivate);\n    thumbsSwiper.slides.removeClass(thumbActiveClass);\n\n    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {\n      for (let i = 0; i < thumbsToActivate; i += 1) {\n        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index=\"${swiper.realIndex + i}\"]`).addClass(thumbActiveClass);\n      }\n    } else {\n      for (let i = 0; i < thumbsToActivate; i += 1) {\n        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);\n      }\n    }\n  }\n\n  on('beforeInit', () => {\n    const {\n      thumbs\n    } = swiper.params;\n    if (!thumbs || !thumbs.swiper) return;\n    init();\n    update(true);\n  });\n  on('slideChange update resize observerUpdate', () => {\n    if (!swiper.thumbs.swiper) return;\n    update();\n  });\n  on('setTransition', (_s, duration) => {\n    const thumbsSwiper = swiper.thumbs.swiper;\n    if (!thumbsSwiper) return;\n    thumbsSwiper.setTransition(duration);\n  });\n  on('beforeDestroy', () => {\n    const thumbsSwiper = swiper.thumbs.swiper;\n    if (!thumbsSwiper) return;\n\n    if (swiperCreated && thumbsSwiper) {\n      thumbsSwiper.destroy();\n    }\n  });\n  Object.assign(swiper.thumbs, {\n    init,\n    update\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/thumbs/thumbs.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/virtual/virtual.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/modules/virtual/virtual.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Virtual; }\n/* harmony export */ });\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\n\nfunction Virtual(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on\n  } = _ref;\n  extendParams({\n    virtual: {\n      enabled: false,\n      slides: [],\n      cache: true,\n      renderSlide: null,\n      renderExternal: null,\n      renderExternalUpdate: true,\n      addSlidesBefore: 0,\n      addSlidesAfter: 0\n    }\n  });\n  let cssModeTimeout;\n  swiper.virtual = {\n    cache: {},\n    from: undefined,\n    to: undefined,\n    slides: [],\n    offset: 0,\n    slidesGrid: []\n  };\n\n  function renderSlide(slide, index) {\n    const params = swiper.params.virtual;\n\n    if (params.cache && swiper.virtual.cache[index]) {\n      return swiper.virtual.cache[index];\n    }\n\n    const $slideEl = params.renderSlide ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params.renderSlide.call(swiper, slide, index)) : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div class=\"${swiper.params.slideClass}\" data-swiper-slide-index=\"${index}\">${slide}</div>`);\n    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);\n    if (params.cache) swiper.virtual.cache[index] = $slideEl;\n    return $slideEl;\n  }\n\n  function update(force) {\n    const {\n      slidesPerView,\n      slidesPerGroup,\n      centeredSlides\n    } = swiper.params;\n    const {\n      addSlidesBefore,\n      addSlidesAfter\n    } = swiper.params.virtual;\n    const {\n      from: previousFrom,\n      to: previousTo,\n      slides,\n      slidesGrid: previousSlidesGrid,\n      offset: previousOffset\n    } = swiper.virtual;\n\n    if (!swiper.params.cssMode) {\n      swiper.updateActiveIndex();\n    }\n\n    const activeIndex = swiper.activeIndex || 0;\n    let offsetProp;\n    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';\n    let slidesAfter;\n    let slidesBefore;\n\n    if (centeredSlides) {\n      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;\n      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;\n    } else {\n      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;\n      slidesBefore = slidesPerGroup + addSlidesBefore;\n    }\n\n    const from = Math.max((activeIndex || 0) - slidesBefore, 0);\n    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);\n    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);\n    Object.assign(swiper.virtual, {\n      from,\n      to,\n      offset,\n      slidesGrid: swiper.slidesGrid\n    });\n\n    function onRendered() {\n      swiper.updateSlides();\n      swiper.updateProgress();\n      swiper.updateSlidesClasses();\n\n      if (swiper.lazy && swiper.params.lazy.enabled) {\n        swiper.lazy.load();\n      }\n    }\n\n    if (previousFrom === from && previousTo === to && !force) {\n      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {\n        swiper.slides.css(offsetProp, `${offset}px`);\n      }\n\n      swiper.updateProgress();\n      return;\n    }\n\n    if (swiper.params.virtual.renderExternal) {\n      swiper.params.virtual.renderExternal.call(swiper, {\n        offset,\n        from,\n        to,\n        slides: function getSlides() {\n          const slidesToRender = [];\n\n          for (let i = from; i <= to; i += 1) {\n            slidesToRender.push(slides[i]);\n          }\n\n          return slidesToRender;\n        }()\n      });\n\n      if (swiper.params.virtual.renderExternalUpdate) {\n        onRendered();\n      }\n\n      return;\n    }\n\n    const prependIndexes = [];\n    const appendIndexes = [];\n\n    if (force) {\n      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();\n    } else {\n      for (let i = previousFrom; i <= previousTo; i += 1) {\n        if (i < from || i > to) {\n          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index=\"${i}\"]`).remove();\n        }\n      }\n    }\n\n    for (let i = 0; i < slides.length; i += 1) {\n      if (i >= from && i <= to) {\n        if (typeof previousTo === 'undefined' || force) {\n          appendIndexes.push(i);\n        } else {\n          if (i > previousTo) appendIndexes.push(i);\n          if (i < previousFrom) prependIndexes.push(i);\n        }\n      }\n    }\n\n    appendIndexes.forEach(index => {\n      swiper.$wrapperEl.append(renderSlide(slides[index], index));\n    });\n    prependIndexes.sort((a, b) => b - a).forEach(index => {\n      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));\n    });\n    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);\n    onRendered();\n  }\n\n  function appendSlide(slides) {\n    if (typeof slides === 'object' && 'length' in slides) {\n      for (let i = 0; i < slides.length; i += 1) {\n        if (slides[i]) swiper.virtual.slides.push(slides[i]);\n      }\n    } else {\n      swiper.virtual.slides.push(slides);\n    }\n\n    update(true);\n  }\n\n  function prependSlide(slides) {\n    const activeIndex = swiper.activeIndex;\n    let newActiveIndex = activeIndex + 1;\n    let numberOfNewSlides = 1;\n\n    if (Array.isArray(slides)) {\n      for (let i = 0; i < slides.length; i += 1) {\n        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);\n      }\n\n      newActiveIndex = activeIndex + slides.length;\n      numberOfNewSlides = slides.length;\n    } else {\n      swiper.virtual.slides.unshift(slides);\n    }\n\n    if (swiper.params.virtual.cache) {\n      const cache = swiper.virtual.cache;\n      const newCache = {};\n      Object.keys(cache).forEach(cachedIndex => {\n        const $cachedEl = cache[cachedIndex];\n        const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');\n\n        if (cachedElIndex) {\n          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);\n        }\n\n        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;\n      });\n      swiper.virtual.cache = newCache;\n    }\n\n    update(true);\n    swiper.slideTo(newActiveIndex, 0);\n  }\n\n  function removeSlide(slidesIndexes) {\n    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;\n    let activeIndex = swiper.activeIndex;\n\n    if (Array.isArray(slidesIndexes)) {\n      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {\n        swiper.virtual.slides.splice(slidesIndexes[i], 1);\n\n        if (swiper.params.virtual.cache) {\n          delete swiper.virtual.cache[slidesIndexes[i]];\n        }\n\n        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;\n        activeIndex = Math.max(activeIndex, 0);\n      }\n    } else {\n      swiper.virtual.slides.splice(slidesIndexes, 1);\n\n      if (swiper.params.virtual.cache) {\n        delete swiper.virtual.cache[slidesIndexes];\n      }\n\n      if (slidesIndexes < activeIndex) activeIndex -= 1;\n      activeIndex = Math.max(activeIndex, 0);\n    }\n\n    update(true);\n    swiper.slideTo(activeIndex, 0);\n  }\n\n  function removeAllSlides() {\n    swiper.virtual.slides = [];\n\n    if (swiper.params.virtual.cache) {\n      swiper.virtual.cache = {};\n    }\n\n    update(true);\n    swiper.slideTo(0, 0);\n  }\n\n  on('beforeInit', () => {\n    if (!swiper.params.virtual.enabled) return;\n    swiper.virtual.slides = swiper.params.virtual.slides;\n    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);\n    swiper.params.watchSlidesProgress = true;\n    swiper.originalParams.watchSlidesProgress = true;\n\n    if (!swiper.params.initialSlide) {\n      update();\n    }\n  });\n  on('setTranslate', () => {\n    if (!swiper.params.virtual.enabled) return;\n\n    if (swiper.params.cssMode && !swiper._immediateVirtual) {\n      clearTimeout(cssModeTimeout);\n      cssModeTimeout = setTimeout(() => {\n        update();\n      }, 100);\n    } else {\n      update();\n    }\n  });\n  on('init update resize', () => {\n    if (!swiper.params.virtual.enabled) return;\n\n    if (swiper.params.cssMode) {\n      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.setCSSProperty)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);\n    }\n  });\n  Object.assign(swiper.virtual, {\n    appendSlide,\n    prependSlide,\n    removeSlide,\n    removeAllSlides,\n    update\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/virtual/virtual.js?");

/***/ }),

/***/ "./node_modules/swiper/modules/zoom/zoom.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/zoom/zoom.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Zoom; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ \"./node_modules/swiper/shared/dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ \"./node_modules/swiper/shared/utils.js\");\n\n\n\nfunction Zoom(_ref) {\n  let {\n    swiper,\n    extendParams,\n    on,\n    emit\n  } = _ref;\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  extendParams({\n    zoom: {\n      enabled: false,\n      maxRatio: 3,\n      minRatio: 1,\n      toggle: true,\n      containerClass: 'swiper-zoom-container',\n      zoomedSlideClass: 'swiper-slide-zoomed'\n    }\n  });\n  swiper.zoom = {\n    enabled: false\n  };\n  let currentScale = 1;\n  let isScaling = false;\n  let gesturesEnabled;\n  let fakeGestureTouched;\n  let fakeGestureMoved;\n  const gesture = {\n    $slideEl: undefined,\n    slideWidth: undefined,\n    slideHeight: undefined,\n    $imageEl: undefined,\n    $imageWrapEl: undefined,\n    maxRatio: 3\n  };\n  const image = {\n    isTouched: undefined,\n    isMoved: undefined,\n    currentX: undefined,\n    currentY: undefined,\n    minX: undefined,\n    minY: undefined,\n    maxX: undefined,\n    maxY: undefined,\n    width: undefined,\n    height: undefined,\n    startX: undefined,\n    startY: undefined,\n    touchesStart: {},\n    touchesCurrent: {}\n  };\n  const velocity = {\n    x: undefined,\n    y: undefined,\n    prevPositionX: undefined,\n    prevPositionY: undefined,\n    prevTime: undefined\n  };\n  let scale = 1;\n  Object.defineProperty(swiper.zoom, 'scale', {\n    get() {\n      return scale;\n    },\n\n    set(value) {\n      if (scale !== value) {\n        const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;\n        const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;\n        emit('zoomChange', value, imageEl, slideEl);\n      }\n\n      scale = value;\n    }\n\n  });\n\n  function getDistanceBetweenTouches(e) {\n    if (e.targetTouches.length < 2) return 1;\n    const x1 = e.targetTouches[0].pageX;\n    const y1 = e.targetTouches[0].pageY;\n    const x2 = e.targetTouches[1].pageX;\n    const y2 = e.targetTouches[1].pageY;\n    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);\n    return distance;\n  } // Events\n\n\n  function onGestureStart(e) {\n    const support = swiper.support;\n    const params = swiper.params.zoom;\n    fakeGestureTouched = false;\n    fakeGestureMoved = false;\n\n    if (!support.gestures) {\n      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {\n        return;\n      }\n\n      fakeGestureTouched = true;\n      gesture.scaleStart = getDistanceBetweenTouches(e);\n    }\n\n    if (!gesture.$slideEl || !gesture.$slideEl.length) {\n      gesture.$slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target).closest(`.${swiper.params.slideClass}`);\n      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);\n      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);\n      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);\n      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;\n\n      if (gesture.$imageWrapEl.length === 0) {\n        gesture.$imageEl = undefined;\n        return;\n      }\n    }\n\n    if (gesture.$imageEl) {\n      gesture.$imageEl.transition(0);\n    }\n\n    isScaling = true;\n  }\n\n  function onGestureChange(e) {\n    const support = swiper.support;\n    const params = swiper.params.zoom;\n    const zoom = swiper.zoom;\n\n    if (!support.gestures) {\n      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {\n        return;\n      }\n\n      fakeGestureMoved = true;\n      gesture.scaleMove = getDistanceBetweenTouches(e);\n    }\n\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {\n      if (e.type === 'gesturechange') onGestureStart(e);\n      return;\n    }\n\n    if (support.gestures) {\n      zoom.scale = e.scale * currentScale;\n    } else {\n      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;\n    }\n\n    if (zoom.scale > gesture.maxRatio) {\n      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;\n    }\n\n    if (zoom.scale < params.minRatio) {\n      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;\n    }\n\n    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);\n  }\n\n  function onGestureEnd(e) {\n    const device = swiper.device;\n    const support = swiper.support;\n    const params = swiper.params.zoom;\n    const zoom = swiper.zoom;\n\n    if (!support.gestures) {\n      if (!fakeGestureTouched || !fakeGestureMoved) {\n        return;\n      }\n\n      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {\n        return;\n      }\n\n      fakeGestureTouched = false;\n      fakeGestureMoved = false;\n    }\n\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;\n    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);\n    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);\n    currentScale = zoom.scale;\n    isScaling = false;\n    if (zoom.scale === 1) gesture.$slideEl = undefined;\n  }\n\n  function onTouchStart(e) {\n    const device = swiper.device;\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;\n    if (image.isTouched) return;\n    if (device.android && e.cancelable) e.preventDefault();\n    image.isTouched = true;\n    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;\n    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;\n  }\n\n  function onTouchMove(e) {\n    const zoom = swiper.zoom;\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;\n    swiper.allowClick = false;\n    if (!image.isTouched || !gesture.$slideEl) return;\n\n    if (!image.isMoved) {\n      image.width = gesture.$imageEl[0].offsetWidth;\n      image.height = gesture.$imageEl[0].offsetHeight;\n      image.startX = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTranslate)(gesture.$imageWrapEl[0], 'x') || 0;\n      image.startY = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTranslate)(gesture.$imageWrapEl[0], 'y') || 0;\n      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;\n      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;\n      gesture.$imageWrapEl.transition(0);\n    } // Define if we need image drag\n\n\n    const scaledWidth = image.width * zoom.scale;\n    const scaledHeight = image.height * zoom.scale;\n    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;\n    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);\n    image.maxX = -image.minX;\n    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);\n    image.maxY = -image.minY;\n    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;\n    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;\n\n    if (!image.isMoved && !isScaling) {\n      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {\n        image.isTouched = false;\n        return;\n      }\n\n      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {\n        image.isTouched = false;\n        return;\n      }\n    }\n\n    if (e.cancelable) {\n      e.preventDefault();\n    }\n\n    e.stopPropagation();\n    image.isMoved = true;\n    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;\n    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;\n\n    if (image.currentX < image.minX) {\n      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;\n    }\n\n    if (image.currentX > image.maxX) {\n      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;\n    }\n\n    if (image.currentY < image.minY) {\n      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;\n    }\n\n    if (image.currentY > image.maxY) {\n      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;\n    } // Velocity\n\n\n    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;\n    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;\n    if (!velocity.prevTime) velocity.prevTime = Date.now();\n    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;\n    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;\n    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;\n    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;\n    velocity.prevPositionX = image.touchesCurrent.x;\n    velocity.prevPositionY = image.touchesCurrent.y;\n    velocity.prevTime = Date.now();\n    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);\n  }\n\n  function onTouchEnd() {\n    const zoom = swiper.zoom;\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;\n\n    if (!image.isTouched || !image.isMoved) {\n      image.isTouched = false;\n      image.isMoved = false;\n      return;\n    }\n\n    image.isTouched = false;\n    image.isMoved = false;\n    let momentumDurationX = 300;\n    let momentumDurationY = 300;\n    const momentumDistanceX = velocity.x * momentumDurationX;\n    const newPositionX = image.currentX + momentumDistanceX;\n    const momentumDistanceY = velocity.y * momentumDurationY;\n    const newPositionY = image.currentY + momentumDistanceY; // Fix duration\n\n    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);\n    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);\n    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);\n    image.currentX = newPositionX;\n    image.currentY = newPositionY; // Define if we need image drag\n\n    const scaledWidth = image.width * zoom.scale;\n    const scaledHeight = image.height * zoom.scale;\n    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);\n    image.maxX = -image.minX;\n    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);\n    image.maxY = -image.minY;\n    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);\n    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);\n    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);\n  }\n\n  function onTransitionEnd() {\n    const zoom = swiper.zoom;\n\n    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {\n      if (gesture.$imageEl) {\n        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');\n      }\n\n      if (gesture.$imageWrapEl) {\n        gesture.$imageWrapEl.transform('translate3d(0,0,0)');\n      }\n\n      zoom.scale = 1;\n      currentScale = 1;\n      gesture.$slideEl = undefined;\n      gesture.$imageEl = undefined;\n      gesture.$imageWrapEl = undefined;\n    }\n  }\n\n  function zoomIn(e) {\n    const zoom = swiper.zoom;\n    const params = swiper.params.zoom;\n\n    if (!gesture.$slideEl) {\n      if (e && e.target) {\n        gesture.$slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target).closest(`.${swiper.params.slideClass}`);\n      }\n\n      if (!gesture.$slideEl) {\n        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {\n          gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);\n        } else {\n          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);\n        }\n      }\n\n      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);\n      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);\n    }\n\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;\n\n    if (swiper.params.cssMode) {\n      swiper.wrapperEl.style.overflow = 'hidden';\n      swiper.wrapperEl.style.touchAction = 'none';\n    }\n\n    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);\n    let touchX;\n    let touchY;\n    let offsetX;\n    let offsetY;\n    let diffX;\n    let diffY;\n    let translateX;\n    let translateY;\n    let imageWidth;\n    let imageHeight;\n    let scaledWidth;\n    let scaledHeight;\n    let translateMinX;\n    let translateMinY;\n    let translateMaxX;\n    let translateMaxY;\n    let slideWidth;\n    let slideHeight;\n\n    if (typeof image.touchesStart.x === 'undefined' && e) {\n      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;\n      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;\n    } else {\n      touchX = image.touchesStart.x;\n      touchY = image.touchesStart.y;\n    }\n\n    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;\n    currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;\n\n    if (e) {\n      slideWidth = gesture.$slideEl[0].offsetWidth;\n      slideHeight = gesture.$slideEl[0].offsetHeight;\n      offsetX = gesture.$slideEl.offset().left + window.scrollX;\n      offsetY = gesture.$slideEl.offset().top + window.scrollY;\n      diffX = offsetX + slideWidth / 2 - touchX;\n      diffY = offsetY + slideHeight / 2 - touchY;\n      imageWidth = gesture.$imageEl[0].offsetWidth;\n      imageHeight = gesture.$imageEl[0].offsetHeight;\n      scaledWidth = imageWidth * zoom.scale;\n      scaledHeight = imageHeight * zoom.scale;\n      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);\n      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);\n      translateMaxX = -translateMinX;\n      translateMaxY = -translateMinY;\n      translateX = diffX * zoom.scale;\n      translateY = diffY * zoom.scale;\n\n      if (translateX < translateMinX) {\n        translateX = translateMinX;\n      }\n\n      if (translateX > translateMaxX) {\n        translateX = translateMaxX;\n      }\n\n      if (translateY < translateMinY) {\n        translateY = translateMinY;\n      }\n\n      if (translateY > translateMaxY) {\n        translateY = translateMaxY;\n      }\n    } else {\n      translateX = 0;\n      translateY = 0;\n    }\n\n    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);\n    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);\n  }\n\n  function zoomOut() {\n    const zoom = swiper.zoom;\n    const params = swiper.params.zoom;\n\n    if (!gesture.$slideEl) {\n      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {\n        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);\n      } else {\n        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);\n      }\n\n      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);\n      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);\n    }\n\n    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;\n\n    if (swiper.params.cssMode) {\n      swiper.wrapperEl.style.overflow = '';\n      swiper.wrapperEl.style.touchAction = '';\n    }\n\n    zoom.scale = 1;\n    currentScale = 1;\n    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');\n    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');\n    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);\n    gesture.$slideEl = undefined;\n  } // Toggle Zoom\n\n\n  function zoomToggle(e) {\n    const zoom = swiper.zoom;\n\n    if (zoom.scale && zoom.scale !== 1) {\n      // Zoom Out\n      zoomOut();\n    } else {\n      // Zoom In\n      zoomIn(e);\n    }\n  }\n\n  function getListeners() {\n    const support = swiper.support;\n    const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {\n      passive: true,\n      capture: false\n    } : false;\n    const activeListenerWithCapture = support.passiveListener ? {\n      passive: false,\n      capture: true\n    } : true;\n    return {\n      passiveListener,\n      activeListenerWithCapture\n    };\n  }\n\n  function getSlideSelector() {\n    return `.${swiper.params.slideClass}`;\n  }\n\n  function toggleGestures(method) {\n    const {\n      passiveListener\n    } = getListeners();\n    const slideSelector = getSlideSelector();\n    swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);\n    swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);\n    swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);\n  }\n\n  function enableGestures() {\n    if (gesturesEnabled) return;\n    gesturesEnabled = true;\n    toggleGestures('on');\n  }\n\n  function disableGestures() {\n    if (!gesturesEnabled) return;\n    gesturesEnabled = false;\n    toggleGestures('off');\n  } // Attach/Detach Events\n\n\n  function enable() {\n    const zoom = swiper.zoom;\n    if (zoom.enabled) return;\n    zoom.enabled = true;\n    const support = swiper.support;\n    const {\n      passiveListener,\n      activeListenerWithCapture\n    } = getListeners();\n    const slideSelector = getSlideSelector(); // Scale image\n\n    if (support.gestures) {\n      swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);\n      swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);\n    } else if (swiper.touchEvents.start === 'touchstart') {\n      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);\n      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);\n      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);\n\n      if (swiper.touchEvents.cancel) {\n        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);\n      }\n    } // Move image\n\n\n    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);\n  }\n\n  function disable() {\n    const zoom = swiper.zoom;\n    if (!zoom.enabled) return;\n    const support = swiper.support;\n    zoom.enabled = false;\n    const {\n      passiveListener,\n      activeListenerWithCapture\n    } = getListeners();\n    const slideSelector = getSlideSelector(); // Scale image\n\n    if (support.gestures) {\n      swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);\n      swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);\n    } else if (swiper.touchEvents.start === 'touchstart') {\n      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);\n      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);\n      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);\n\n      if (swiper.touchEvents.cancel) {\n        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);\n      }\n    } // Move image\n\n\n    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);\n  }\n\n  on('init', () => {\n    if (swiper.params.zoom.enabled) {\n      enable();\n    }\n  });\n  on('destroy', () => {\n    disable();\n  });\n  on('touchStart', (_s, e) => {\n    if (!swiper.zoom.enabled) return;\n    onTouchStart(e);\n  });\n  on('touchEnd', (_s, e) => {\n    if (!swiper.zoom.enabled) return;\n    onTouchEnd(e);\n  });\n  on('doubleTap', (_s, e) => {\n    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {\n      zoomToggle(e);\n    }\n  });\n  on('transitionEnd', () => {\n    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {\n      onTransitionEnd();\n    }\n  });\n  on('slideChange', () => {\n    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {\n      onTransitionEnd();\n    }\n  });\n  Object.assign(swiper.zoom, {\n    enable,\n    disable,\n    in: zoomIn,\n    out: zoomOut,\n    toggle: zoomToggle\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/modules/zoom/zoom.js?");

/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ classesToSelector; }\n/* harmony export */ });\nfunction classesToSelector(classes) {\n  if (classes === void 0) {\n    classes = '';\n  }\n\n  return `.${classes.trim().replace(/([\\.:!\\/])/g, '\\\\$1') // eslint-disable-line\n  .replace(/ /g, '.')}`;\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/shared/classes-to-selector.js?");

/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ createElementIfNotDefined; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nfunction createElementIfNotDefined(swiper, originalParams, params, checkProps) {\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n\n  if (swiper.params.createElements) {\n    Object.keys(checkProps).forEach(key => {\n      if (!params[key] && params.auto === true) {\n        let element = swiper.$el.children(`.${checkProps[key]}`)[0];\n\n        if (!element) {\n          element = document.createElement('div');\n          element.className = checkProps[key];\n          swiper.$el.append(element);\n        }\n\n        params[key] = element;\n        originalParams[key] = element;\n      }\n    });\n  }\n\n  return params;\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/shared/create-element-if-not-defined.js?");

/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ createShadow; }\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./node_modules/swiper/shared/dom.js\");\n\nfunction createShadow(params, $slideEl, side) {\n  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;\n  const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;\n  let $shadowEl = $shadowContainer.children(`.${shadowClass}`);\n\n  if (!$shadowEl.length) {\n    $shadowEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div class=\"swiper-slide-shadow${side ? `-${side}` : ''}\"></div>`);\n    $shadowContainer.append($shadowEl);\n  }\n\n  return $shadowEl;\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/shared/create-shadow.js?");

/***/ }),

/***/ "./node_modules/swiper/shared/dom.js":
/*!*******************************************!*\
  !*** ./node_modules/swiper/shared/dom.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ \"./node_modules/dom7/dom7.esm.js\");\n\nconst Methods = {\n  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__.addClass,\n  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__.removeClass,\n  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__.hasClass,\n  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__.toggleClass,\n  attr: dom7__WEBPACK_IMPORTED_MODULE_0__.attr,\n  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__.removeAttr,\n  transform: dom7__WEBPACK_IMPORTED_MODULE_0__.transform,\n  transition: dom7__WEBPACK_IMPORTED_MODULE_0__.transition,\n  on: dom7__WEBPACK_IMPORTED_MODULE_0__.on,\n  off: dom7__WEBPACK_IMPORTED_MODULE_0__.off,\n  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__.trigger,\n  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__.transitionEnd,\n  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__.outerWidth,\n  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__.outerHeight,\n  styles: dom7__WEBPACK_IMPORTED_MODULE_0__.styles,\n  offset: dom7__WEBPACK_IMPORTED_MODULE_0__.offset,\n  css: dom7__WEBPACK_IMPORTED_MODULE_0__.css,\n  each: dom7__WEBPACK_IMPORTED_MODULE_0__.each,\n  html: dom7__WEBPACK_IMPORTED_MODULE_0__.html,\n  text: dom7__WEBPACK_IMPORTED_MODULE_0__.text,\n  is: dom7__WEBPACK_IMPORTED_MODULE_0__.is,\n  index: dom7__WEBPACK_IMPORTED_MODULE_0__.index,\n  eq: dom7__WEBPACK_IMPORTED_MODULE_0__.eq,\n  append: dom7__WEBPACK_IMPORTED_MODULE_0__.append,\n  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__.prepend,\n  next: dom7__WEBPACK_IMPORTED_MODULE_0__.next,\n  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__.nextAll,\n  prev: dom7__WEBPACK_IMPORTED_MODULE_0__.prev,\n  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__.prevAll,\n  parent: dom7__WEBPACK_IMPORTED_MODULE_0__.parent,\n  parents: dom7__WEBPACK_IMPORTED_MODULE_0__.parents,\n  closest: dom7__WEBPACK_IMPORTED_MODULE_0__.closest,\n  find: dom7__WEBPACK_IMPORTED_MODULE_0__.find,\n  children: dom7__WEBPACK_IMPORTED_MODULE_0__.children,\n  filter: dom7__WEBPACK_IMPORTED_MODULE_0__.filter,\n  remove: dom7__WEBPACK_IMPORTED_MODULE_0__.remove\n};\nObject.keys(Methods).forEach(methodName => {\n  Object.defineProperty(dom7__WEBPACK_IMPORTED_MODULE_0__.$.fn, methodName, {\n    value: Methods[methodName],\n    writable: true\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (dom7__WEBPACK_IMPORTED_MODULE_0__.$);\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/shared/dom.js?");

/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ effectInit; }\n/* harmony export */ });\nfunction effectInit(params) {\n  const {\n    effect,\n    swiper,\n    on,\n    setTranslate,\n    setTransition,\n    overwriteParams,\n    perspective\n  } = params;\n  on('beforeInit', () => {\n    if (swiper.params.effect !== effect) return;\n    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);\n\n    if (perspective && perspective()) {\n      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);\n    }\n\n    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};\n    Object.assign(swiper.params, overwriteParamsResult);\n    Object.assign(swiper.originalParams, overwriteParamsResult);\n  });\n  on('setTranslate', () => {\n    if (swiper.params.effect !== effect) return;\n    setTranslate();\n  });\n  on('setTransition', (_s, duration) => {\n    if (swiper.params.effect !== effect) return;\n    setTransition(duration);\n  });\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/shared/effect-init.js?");

/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ effectTarget; }\n/* harmony export */ });\nfunction effectTarget(effectParams, $slideEl) {\n  if (effectParams.transformEl) {\n    return $slideEl.find(effectParams.transformEl).css({\n      'backface-visibility': 'hidden',\n      '-webkit-backface-visibility': 'hidden'\n    });\n  }\n\n  return $slideEl;\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/shared/effect-target.js?");

/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ effectVirtualTransitionEnd; }\n/* harmony export */ });\nfunction effectVirtualTransitionEnd(_ref) {\n  let {\n    swiper,\n    duration,\n    transformEl,\n    allSlides\n  } = _ref;\n  const {\n    slides,\n    activeIndex,\n    $wrapperEl\n  } = swiper;\n\n  if (swiper.params.virtualTranslate && duration !== 0) {\n    let eventTriggered = false;\n    let $transitionEndTarget;\n\n    if (allSlides) {\n      $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;\n    } else {\n      $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);\n    }\n\n    $transitionEndTarget.transitionEnd(() => {\n      if (eventTriggered) return;\n      if (!swiper || swiper.destroyed) return;\n      eventTriggered = true;\n      swiper.animating = false;\n      const triggerEvents = ['webkitTransitionEnd', 'transitionend'];\n\n      for (let i = 0; i < triggerEvents.length; i += 1) {\n        $wrapperEl.trigger(triggerEvents[i]);\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/shared/effect-virtual-transition-end.js?");

/***/ }),

/***/ "./node_modules/swiper/shared/get-browser.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-browser.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBrowser\": function() { return /* binding */ getBrowser; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nlet browser;\n\nfunction calcBrowser() {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n\n  function isSafari() {\n    const ua = window.navigator.userAgent.toLowerCase();\n    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;\n  }\n\n  return {\n    isSafari: isSafari(),\n    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)\n  };\n}\n\nfunction getBrowser() {\n  if (!browser) {\n    browser = calcBrowser();\n  }\n\n  return browser;\n}\n\n\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/shared/get-browser.js?");

/***/ }),

/***/ "./node_modules/swiper/shared/get-device.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/shared/get-device.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDevice\": function() { return /* binding */ getDevice; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n/* harmony import */ var _get_support_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support.js */ \"./node_modules/swiper/shared/get-support.js\");\n\n\nlet deviceCached;\n\nfunction calcDevice(_temp) {\n  let {\n    userAgent\n  } = _temp === void 0 ? {} : _temp;\n  const support = (0,_get_support_js__WEBPACK_IMPORTED_MODULE_1__.getSupport)();\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const platform = window.navigator.platform;\n  const ua = userAgent || window.navigator.userAgent;\n  const device = {\n    ios: false,\n    android: false\n  };\n  const screenWidth = window.screen.width;\n  const screenHeight = window.screen.height;\n  const android = ua.match(/(Android);?[\\s\\/]+([\\d.]+)?/); // eslint-disable-line\n\n  let ipad = ua.match(/(iPad).*OS\\s([\\d_]+)/);\n  const ipod = ua.match(/(iPod)(.*OS\\s([\\d_]+))?/);\n  const iphone = !ipad && ua.match(/(iPhone\\sOS|iOS)\\s([\\d_]+)/);\n  const windows = platform === 'Win32';\n  let macos = platform === 'MacIntel'; // iPadOs 13 fix\n\n  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];\n\n  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {\n    ipad = ua.match(/(Version)\\/([\\d.]+)/);\n    if (!ipad) ipad = [0, 1, '13_0_0'];\n    macos = false;\n  } // Android\n\n\n  if (android && !windows) {\n    device.os = 'android';\n    device.android = true;\n  }\n\n  if (ipad || iphone || ipod) {\n    device.os = 'ios';\n    device.ios = true;\n  } // Export object\n\n\n  return device;\n}\n\nfunction getDevice(overrides) {\n  if (overrides === void 0) {\n    overrides = {};\n  }\n\n  if (!deviceCached) {\n    deviceCached = calcDevice(overrides);\n  }\n\n  return deviceCached;\n}\n\n\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/shared/get-device.js?");

/***/ }),

/***/ "./node_modules/swiper/shared/get-support.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-support.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSupport\": function() { return /* binding */ getSupport; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\nlet support;\n\nfunction calcSupport() {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();\n  return {\n    smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,\n    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),\n    passiveListener: function checkPassiveListener() {\n      let supportsPassive = false;\n\n      try {\n        const opts = Object.defineProperty({}, 'passive', {\n          // eslint-disable-next-line\n          get() {\n            supportsPassive = true;\n          }\n\n        });\n        window.addEventListener('testPassiveListener', null, opts);\n      } catch (e) {// No support\n      }\n\n      return supportsPassive;\n    }(),\n    gestures: function checkGestures() {\n      return 'ongesturestart' in window;\n    }()\n  };\n}\n\nfunction getSupport() {\n  if (!support) {\n    support = calcSupport();\n  }\n\n  return support;\n}\n\n\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/shared/get-support.js?");

/***/ }),

/***/ "./node_modules/swiper/shared/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/swiper/shared/utils.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animateCSSModeScroll\": function() { return /* binding */ animateCSSModeScroll; },\n/* harmony export */   \"deleteProps\": function() { return /* binding */ deleteProps; },\n/* harmony export */   \"nextTick\": function() { return /* binding */ nextTick; },\n/* harmony export */   \"now\": function() { return /* binding */ now; },\n/* harmony export */   \"getTranslate\": function() { return /* binding */ getTranslate; },\n/* harmony export */   \"isObject\": function() { return /* binding */ isObject; },\n/* harmony export */   \"extend\": function() { return /* binding */ extend; },\n/* harmony export */   \"getComputedStyle\": function() { return /* binding */ getComputedStyle; },\n/* harmony export */   \"setCSSProperty\": function() { return /* binding */ setCSSProperty; }\n/* harmony export */ });\n/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ \"./node_modules/ssr-window/ssr-window.esm.js\");\n\n\nfunction deleteProps(obj) {\n  const object = obj;\n  Object.keys(object).forEach(key => {\n    try {\n      object[key] = null;\n    } catch (e) {// no getter for object\n    }\n\n    try {\n      delete object[key];\n    } catch (e) {// something got wrong\n    }\n  });\n}\n\nfunction nextTick(callback, delay) {\n  if (delay === void 0) {\n    delay = 0;\n  }\n\n  return setTimeout(callback, delay);\n}\n\nfunction now() {\n  return Date.now();\n}\n\nfunction getComputedStyle(el) {\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  let style;\n\n  if (window.getComputedStyle) {\n    style = window.getComputedStyle(el, null);\n  }\n\n  if (!style && el.currentStyle) {\n    style = el.currentStyle;\n  }\n\n  if (!style) {\n    style = el.style;\n  }\n\n  return style;\n}\n\nfunction getTranslate(el, axis) {\n  if (axis === void 0) {\n    axis = 'x';\n  }\n\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  let matrix;\n  let curTransform;\n  let transformMatrix;\n  const curStyle = getComputedStyle(el, null);\n\n  if (window.WebKitCSSMatrix) {\n    curTransform = curStyle.transform || curStyle.webkitTransform;\n\n    if (curTransform.split(',').length > 6) {\n      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');\n    } // Some old versions of Webkit choke when 'none' is passed; pass\n    // empty string instead in this case\n\n\n    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);\n  } else {\n    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');\n    matrix = transformMatrix.toString().split(',');\n  }\n\n  if (axis === 'x') {\n    // Latest Chrome and webkits Fix\n    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix\n    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers\n    else curTransform = parseFloat(matrix[4]);\n  }\n\n  if (axis === 'y') {\n    // Latest Chrome and webkits Fix\n    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix\n    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers\n    else curTransform = parseFloat(matrix[5]);\n  }\n\n  return curTransform || 0;\n}\n\nfunction isObject(o) {\n  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';\n}\n\nfunction isNode(node) {\n  // eslint-disable-next-line\n  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {\n    return node instanceof HTMLElement;\n  }\n\n  return node && (node.nodeType === 1 || node.nodeType === 11);\n}\n\nfunction extend() {\n  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);\n  const noExtend = ['__proto__', 'constructor', 'prototype'];\n\n  for (let i = 1; i < arguments.length; i += 1) {\n    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];\n\n    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {\n      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);\n\n      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {\n        const nextKey = keysArray[nextIndex];\n        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);\n\n        if (desc !== undefined && desc.enumerable) {\n          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {\n            if (nextSource[nextKey].__swiper__) {\n              to[nextKey] = nextSource[nextKey];\n            } else {\n              extend(to[nextKey], nextSource[nextKey]);\n            }\n          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {\n            to[nextKey] = {};\n\n            if (nextSource[nextKey].__swiper__) {\n              to[nextKey] = nextSource[nextKey];\n            } else {\n              extend(to[nextKey], nextSource[nextKey]);\n            }\n          } else {\n            to[nextKey] = nextSource[nextKey];\n          }\n        }\n      }\n    }\n  }\n\n  return to;\n}\n\nfunction setCSSProperty(el, varName, varValue) {\n  el.style.setProperty(varName, varValue);\n}\n\nfunction animateCSSModeScroll(_ref) {\n  let {\n    swiper,\n    targetPosition,\n    side\n  } = _ref;\n  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();\n  const startPosition = -swiper.translate;\n  let startTime = null;\n  let time;\n  const duration = swiper.params.speed;\n  swiper.wrapperEl.style.scrollSnapType = 'none';\n  window.cancelAnimationFrame(swiper.cssModeFrameID);\n  const dir = targetPosition > startPosition ? 'next' : 'prev';\n\n  const isOutOfBound = (current, target) => {\n    return dir === 'next' && current >= target || dir === 'prev' && current <= target;\n  };\n\n  const animate = () => {\n    time = new Date().getTime();\n\n    if (startTime === null) {\n      startTime = time;\n    }\n\n    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);\n    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;\n    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);\n\n    if (isOutOfBound(currentPosition, targetPosition)) {\n      currentPosition = targetPosition;\n    }\n\n    swiper.wrapperEl.scrollTo({\n      [side]: currentPosition\n    });\n\n    if (isOutOfBound(currentPosition, targetPosition)) {\n      swiper.wrapperEl.style.overflow = 'hidden';\n      swiper.wrapperEl.style.scrollSnapType = '';\n      setTimeout(() => {\n        swiper.wrapperEl.style.overflow = '';\n        swiper.wrapperEl.scrollTo({\n          [side]: currentPosition\n        });\n      });\n      window.cancelAnimationFrame(swiper.cssModeFrameID);\n      return;\n    }\n\n    swiper.cssModeFrameID = window.requestAnimationFrame(animate);\n  };\n\n  animate();\n}\n\n\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/shared/utils.js?");

/***/ }),

/***/ "./node_modules/swiper/swiper.esm.js":
/*!*******************************************!*\
  !*** ./node_modules/swiper/swiper.esm.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Swiper\": function() { return /* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   \"default\": function() { return /* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   \"Virtual\": function() { return /* reexport safe */ _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; },\n/* harmony export */   \"Keyboard\": function() { return /* reexport safe */ _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; },\n/* harmony export */   \"Mousewheel\": function() { return /* reexport safe */ _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; },\n/* harmony export */   \"Navigation\": function() { return /* reexport safe */ _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; },\n/* harmony export */   \"Pagination\": function() { return /* reexport safe */ _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; },\n/* harmony export */   \"Scrollbar\": function() { return /* reexport safe */ _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; },\n/* harmony export */   \"Parallax\": function() { return /* reexport safe */ _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; },\n/* harmony export */   \"Zoom\": function() { return /* reexport safe */ _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; },\n/* harmony export */   \"Lazy\": function() { return /* reexport safe */ _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; },\n/* harmony export */   \"Controller\": function() { return /* reexport safe */ _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; },\n/* harmony export */   \"A11y\": function() { return /* reexport safe */ _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; },\n/* harmony export */   \"History\": function() { return /* reexport safe */ _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; },\n/* harmony export */   \"HashNavigation\": function() { return /* reexport safe */ _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; },\n/* harmony export */   \"Autoplay\": function() { return /* reexport safe */ _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; },\n/* harmony export */   \"Thumbs\": function() { return /* reexport safe */ _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; },\n/* harmony export */   \"FreeMode\": function() { return /* reexport safe */ _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; },\n/* harmony export */   \"Grid\": function() { return /* reexport safe */ _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; },\n/* harmony export */   \"Manipulation\": function() { return /* reexport safe */ _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; },\n/* harmony export */   \"EffectFade\": function() { return /* reexport safe */ _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; },\n/* harmony export */   \"EffectCube\": function() { return /* reexport safe */ _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__[\"default\"]; },\n/* harmony export */   \"EffectFlip\": function() { return /* reexport safe */ _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__[\"default\"]; },\n/* harmony export */   \"EffectCoverflow\": function() { return /* reexport safe */ _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; },\n/* harmony export */   \"EffectCreative\": function() { return /* reexport safe */ _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; },\n/* harmony export */   \"EffectCards\": function() { return /* reexport safe */ _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.js */ \"./node_modules/swiper/core/core.js\");\n/* harmony import */ var _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/virtual/virtual.js */ \"./node_modules/swiper/modules/virtual/virtual.js\");\n/* harmony import */ var _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyboard/keyboard.js */ \"./node_modules/swiper/modules/keyboard/keyboard.js\");\n/* harmony import */ var _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mousewheel/mousewheel.js */ \"./node_modules/swiper/modules/mousewheel/mousewheel.js\");\n/* harmony import */ var _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation/navigation.js */ \"./node_modules/swiper/modules/navigation/navigation.js\");\n/* harmony import */ var _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pagination/pagination.js */ \"./node_modules/swiper/modules/pagination/pagination.js\");\n/* harmony import */ var _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollbar/scrollbar.js */ \"./node_modules/swiper/modules/scrollbar/scrollbar.js\");\n/* harmony import */ var _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax/parallax.js */ \"./node_modules/swiper/modules/parallax/parallax.js\");\n/* harmony import */ var _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom/zoom.js */ \"./node_modules/swiper/modules/zoom/zoom.js\");\n/* harmony import */ var _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/lazy/lazy.js */ \"./node_modules/swiper/modules/lazy/lazy.js\");\n/* harmony import */ var _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/controller/controller.js */ \"./node_modules/swiper/modules/controller/controller.js\");\n/* harmony import */ var _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/a11y/a11y.js */ \"./node_modules/swiper/modules/a11y/a11y.js\");\n/* harmony import */ var _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/history/history.js */ \"./node_modules/swiper/modules/history/history.js\");\n/* harmony import */ var _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/hash-navigation/hash-navigation.js */ \"./node_modules/swiper/modules/hash-navigation/hash-navigation.js\");\n/* harmony import */ var _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/autoplay/autoplay.js */ \"./node_modules/swiper/modules/autoplay/autoplay.js\");\n/* harmony import */ var _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/thumbs/thumbs.js */ \"./node_modules/swiper/modules/thumbs/thumbs.js\");\n/* harmony import */ var _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/free-mode/free-mode.js */ \"./node_modules/swiper/modules/free-mode/free-mode.js\");\n/* harmony import */ var _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/grid/grid.js */ \"./node_modules/swiper/modules/grid/grid.js\");\n/* harmony import */ var _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/manipulation/manipulation.js */ \"./node_modules/swiper/modules/manipulation/manipulation.js\");\n/* harmony import */ var _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/effect-fade/effect-fade.js */ \"./node_modules/swiper/modules/effect-fade/effect-fade.js\");\n/* harmony import */ var _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/effect-cube/effect-cube.js */ \"./node_modules/swiper/modules/effect-cube/effect-cube.js\");\n/* harmony import */ var _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/effect-flip/effect-flip.js */ \"./node_modules/swiper/modules/effect-flip/effect-flip.js\");\n/* harmony import */ var _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/effect-coverflow/effect-coverflow.js */ \"./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js\");\n/* harmony import */ var _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/effect-creative/effect-creative.js */ \"./node_modules/swiper/modules/effect-creative/effect-creative.js\");\n/* harmony import */ var _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/effect-cards/effect-cards.js */ \"./node_modules/swiper/modules/effect-cards/effect-cards.js\");\n/**\n * Swiper 8.0.6\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2022 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: February 14, 2022\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://gulp-nunjucks/./node_modules/swiper/swiper.esm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;

});
function cart_add(product_id) {
  $.getScript(`/cart/add?product_id=${product_id}`)

  var count = parseInt($(".cart-counter-wrap .user-item__count").html()) || 0;


  $(".cart-counter-wrap").html(`<span class='user-item__count'>${count+1}</span>`)
};
function fav_buttons_fix() {
  //чтобы можно было закэшировать

  $(".card-product .fav-remove").hide()
  $(".card-product .fav-add").not(".initially-fav").hide()
  $(".card-product .fav-add.initially-fav").show()

  $(window.FAV_IDS).each((k,product_id) => {
    //console.log({product_id})
    var card = $(`.card-product[data-product-id=${product_id}]`)
    card.find(".fav-remove").show()
    card.find(".fav-add").addClass("initially-fav").hide()
  })


  $(".product-main[data-product-id]").each(function() {
    var product_hashid = $(this).attr("data-product-id")
    if( window.FAV_IDS.includes(product_hashid))  {
      $(".fav-remove").show()
      $(".fav-add").hide()
    } else {
      $(".fav-remove").hide()
      $(".fav-add").show()
    }
  })


  if(window.FAV_IDS && window.FAV_IDS.length>0) {
    $(".fav-count").show().html(window.FAV_IDS.length)
  } else {
    $(".fav-count").hide()
  }


}


function fav_add(product_id) {
  window.FAV_IDS.push(product_id)
  fav_buttons_fix()
  $.getScript(`/fav/add/${product_id}`)
}

function fav_remove(product_id) {
  window.FAV_IDS = window.FAV_IDS.filter(function(v) {
    return v!=product_id;
  })
  fav_buttons_fix()
  $.getScript(`/fav/remove/${product_id}`)
};
//yandex metrica support
$(document).on('turbolinks:before-visit', function () {
    window.turbolinks_referer = location.href;
});

$(document).on('turbolinks:load', function () {

  //google analytics support
  if (typeof ga === "function") {
    ga("set", "location", location.pathname);
    ga("send", "pageview");
  }


    if (window.turbolinks_referer) {
        // yandex metrika
        if (window.yaCounter99999999) {
            window.yaCounter99999999.hit(location.href, $('title').html(), window.turbolinks_referer);
        }
    }


});
/*!
 * Jasny Bootstrap v3.1.3 (http://jasny.github.io/bootstrap)
 * Copyright 2012-2014 Arnold Daniels
 * Licensed under Apache-2.0 (https://github.com/jasny/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') { throw new Error('Jasny Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.1.3
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  if ($.support.transition !== undefined) return  // Prevent conflict with Twitter Bootstrap

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: offcanvas.js v3.1.3
 * http://jasny.github.io/bootstrap/javascript/#offcanvas
 * ========================================================================
 * Copyright 2013-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

+function ($) { "use strict";

  // OFFCANVAS PUBLIC CLASS DEFINITION
  // =================================

  var OffCanvas = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, OffCanvas.DEFAULTS, options)
    this.state    = null
    this.placement = null
    
    if (this.options.recalc) {
      this.calcClone()
      $(window).on('resize', $.proxy(this.recalc, this))
    }
    
    if (this.options.autohide)
      $(document).on('click', $.proxy(this.autohide, this))

    if (this.options.toggle) this.toggle()
    
    if (this.options.disablescrolling) {
        this.options.disableScrolling = this.options.disablescrolling
        delete this.options.disablescrolling
    }
  }

  OffCanvas.DEFAULTS = {
    toggle: true,
    placement: 'auto',
    autohide: true,
    recalc: true,
    disableScrolling: true
  }

  OffCanvas.prototype.offset = function () {
    switch (this.placement) {
      case 'left':
      case 'right':  return this.$element.outerWidth()
      case 'top':
      case 'bottom': return this.$element.outerHeight()
    }
  }
  
  OffCanvas.prototype.calcPlacement = function () {
    if (this.options.placement !== 'auto') {
        this.placement = this.options.placement
        return
    }
    
    if (!this.$element.hasClass('in')) {
      this.$element.css('visiblity', 'hidden !important').addClass('in')
    } 
    
    var horizontal = $(window).width() / this.$element.width()
    var vertical = $(window).height() / this.$element.height()
        
    var element = this.$element
    function ab(a, b) {
      if (element.css(b) === 'auto') return a
      if (element.css(a) === 'auto') return b
      
      var size_a = parseInt(element.css(a), 10)
      var size_b = parseInt(element.css(b), 10)
  
      return size_a > size_b ? b : a
    }
    
    this.placement = horizontal >= vertical ? ab('left', 'right') : ab('top', 'bottom')
      
    if (this.$element.css('visibility') === 'hidden !important') {
      this.$element.removeClass('in').css('visiblity', '')
    }
  }
  
  OffCanvas.prototype.opposite = function (placement) {
    switch (placement) {
      case 'top':    return 'bottom'
      case 'left':   return 'right'
      case 'bottom': return 'top'
      case 'right':  return 'left'
    }
  }
  
  OffCanvas.prototype.getCanvasElements = function() {
    // Return a set containing the canvas plus all fixed elements
    var canvas = this.options.canvas ? $(this.options.canvas) : this.$element
    
    var fixed_elements = canvas.find('*').filter(function() {
      return $(this).css('position') === 'fixed'
    }).not(this.options.exclude)
    
    return canvas.add(fixed_elements)
  }
  
  OffCanvas.prototype.slide = function (elements, offset, callback) {
    // Use jQuery animation if CSS transitions aren't supported
    if (!$.support.transition) {
      var anim = {}
      anim[this.placement] = "+=" + offset
      return elements.animate(anim, 350, callback)
    }

    var placement = this.placement
    var opposite = this.opposite(placement)
    
    elements.each(function() {
      if ($(this).css(placement) !== 'auto')
        $(this).css(placement, (parseInt($(this).css(placement), 10) || 0) + offset)
      
      if ($(this).css(opposite) !== 'auto')
        $(this).css(opposite, (parseInt($(this).css(opposite), 10) || 0) - offset)
    })
    
    this.$element
      .one($.support.transition.end, callback)
      .emulateTransitionEnd(350)
  }

  OffCanvas.prototype.disableScrolling = function() {
    var bodyWidth = $('body').width()
    var prop = 'padding-' + this.opposite(this.placement)

    if ($('body').data('offcanvas-style') === undefined) {
      $('body').data('offcanvas-style', $('body').attr('style') || '')
    }
      
    $('body').css('overflow', 'hidden')

    if ($('body').width() > bodyWidth) {
      var padding = parseInt($('body').css(prop), 10) + $('body').width() - bodyWidth
      
      setTimeout(function() {
        $('body').css(prop, padding)
      }, 1)
    }
  }

  OffCanvas.prototype.show = function () {
    if (this.state) return
    
    var startEvent = $.Event('show.bs.offcanvas')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    this.state = 'slide-in'
    this.calcPlacement();
    
    var elements = this.getCanvasElements()
    var placement = this.placement
    var opposite = this.opposite(placement)
    var offset = this.offset()

    if (elements.index(this.$element) !== -1) {
      $(this.$element).data('offcanvas-style', $(this.$element).attr('style') || '')
      this.$element.css(placement, -1 * offset)
      this.$element.css(placement); // Workaround: Need to get the CSS property for it to be applied before the next line of code
    }

    elements.addClass('canvas-sliding').each(function() {
      if ($(this).data('offcanvas-style') === undefined) $(this).data('offcanvas-style', $(this).attr('style') || '')
      if ($(this).css('position') === 'static') $(this).css('position', 'relative')
      if (($(this).css(placement) === 'auto' || $(this).css(placement) === '0px') &&
          ($(this).css(opposite) === 'auto' || $(this).css(opposite) === '0px')) {
        $(this).css(placement, 0)
      }
    })
    
    if (this.options.disableScrolling) this.disableScrolling()
    
    var complete = function () {
      if (this.state != 'slide-in') return
      
      this.state = 'slid'

      elements.removeClass('canvas-sliding').addClass('canvas-slid')
      this.$element.trigger('shown.bs.offcanvas')
    }

    setTimeout($.proxy(function() {
      this.$element.addClass('in')
      this.slide(elements, offset, $.proxy(complete, this))
    }, this), 1)
  }

  OffCanvas.prototype.hide = function (fast) {
    if (this.state !== 'slid') return

    var startEvent = $.Event('hide.bs.offcanvas')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    this.state = 'slide-out'

    var elements = $('.canvas-slid')
    var placement = this.placement
    var offset = -1 * this.offset()

    var complete = function () {
      if (this.state != 'slide-out') return
      
      this.state = null
      this.placement = null
      
      this.$element.removeClass('in')
      
      elements.removeClass('canvas-sliding')
      elements.add(this.$element).add('body').each(function() {
        $(this).attr('style', $(this).data('offcanvas-style')).removeData('offcanvas-style')
      })

      this.$element.trigger('hidden.bs.offcanvas')
    }

    elements.removeClass('canvas-slid').addClass('canvas-sliding')
    
    setTimeout($.proxy(function() {
      this.slide(elements, offset, $.proxy(complete, this))
    }, this), 1)
  }

  OffCanvas.prototype.toggle = function () {
    if (this.state === 'slide-in' || this.state === 'slide-out') return
    this[this.state === 'slid' ? 'hide' : 'show']()
  }

  OffCanvas.prototype.calcClone = function() {
    this.$calcClone = this.$element.clone()
      .html('')
      .addClass('offcanvas-clone').removeClass('in')
      .appendTo($('body'))
  }

  OffCanvas.prototype.recalc = function () {
    if (this.$calcClone.css('display') === 'none' || (this.state !== 'slid' && this.state !== 'slide-in')) return
    
    this.state = null
    this.placement = null
    var elements = this.getCanvasElements()
    
    this.$element.removeClass('in')
    
    elements.removeClass('canvas-slid')
    elements.add(this.$element).add('body').each(function() {
      $(this).attr('style', $(this).data('offcanvas-style')).removeData('offcanvas-style')
    })
  }
  
  OffCanvas.prototype.autohide = function (e) {
    if ($(e.target).closest(this.$element).length === 0) this.hide()
  }

  // OFFCANVAS PLUGIN DEFINITION
  // ==========================

  var old = $.fn.offcanvas

  $.fn.offcanvas = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.offcanvas')
      var options = $.extend({}, OffCanvas.DEFAULTS, $this.data(), typeof option === 'object' && option)

      if (!data) $this.data('bs.offcanvas', (data = new OffCanvas(this, options)))
      if (typeof option === 'string') data[option]()
    })
  }

  $.fn.offcanvas.Constructor = OffCanvas


  // OFFCANVAS NO CONFLICT
  // ====================

  $.fn.offcanvas.noConflict = function () {
    $.fn.offcanvas = old
    return this
  }


  // OFFCANVAS DATA-API
  // =================

  $(document).on('click.bs.offcanvas.data-api', '[data-toggle=offcanvas]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $canvas = $(target)
    var data    = $canvas.data('bs.offcanvas')
    var option  = data ? 'toggle' : $this.data()

    e.stopPropagation()

    if (data) data.toggle()
      else $canvas.offcanvas(option)
  })

}(window.jQuery);

/* ============================================================
 * Bootstrap: rowlink.js v3.1.3
 * http://jasny.github.io/bootstrap/javascript/#rowlink
 * ============================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

+function ($) { "use strict";

  var Rowlink = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, Rowlink.DEFAULTS, options)
    
    this.$element.on('click.bs.rowlink', 'td:not(.rowlink-skip)', $.proxy(this.click, this))
  }

  Rowlink.DEFAULTS = {
    target: "a"
  }

  Rowlink.prototype.click = function(e) {
    var target = $(e.currentTarget).closest('tr').find(this.options.target)[0]
    if ($(e.target)[0] === target) return
    
    e.preventDefault();
    
    if (target.click) {
      target.click()
    } else if (document.createEvent) {
      var evt = document.createEvent("MouseEvents"); 
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
      target.dispatchEvent(evt);
    }
  }

  
  // ROWLINK PLUGIN DEFINITION
  // ===========================

  var old = $.fn.rowlink

  $.fn.rowlink = function (options) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.rowlink')
      if (!data) $this.data('bs.rowlink', (data = new Rowlink(this, options)))
    })
  }

  $.fn.rowlink.Constructor = Rowlink


  // ROWLINK NO CONFLICT
  // ====================

  $.fn.rowlink.noConflict = function () {
    $.fn.rowlink = old
    return this
  }


  // ROWLINK DATA-API
  // ==================

  $(document).on('click.bs.rowlink.data-api', '[data-link="row"]', function (e) {
    if ($(e.target).closest('.rowlink-skip').length !== 0) return
    
    var $this = $(this)
    if ($this.data('bs.rowlink')) return
    $this.rowlink($this.data())
    $(e.target).trigger('click.bs.rowlink')
  })
  
}(window.jQuery);

/* ===========================================================
 * Bootstrap: inputmask.js v3.1.0
 * http://jasny.github.io/bootstrap/javascript/#inputmask
 * 
 * Based on Masked Input plugin by Josh Bush (digitalbush.com)
 * ===========================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

  var isIphone = (window.orientation !== undefined)
  var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1
  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // INPUTMASK PUBLIC CLASS DEFINITION
  // =================================

  var Inputmask = function (element, options) {
    if (isAndroid) return // No support because caret positioning doesn't work on Android
    
    this.$element = $(element)
    this.options = $.extend({}, Inputmask.DEFAULTS, options)
    this.mask = String(this.options.mask)
    
    this.init()
    this.listen()
        
    this.checkVal() //Perform initial check for existing values
  }

  Inputmask.DEFAULTS = {
    mask: "",
    placeholder: "_",
    definitions: {
      '9': "[0-9]",
      'a': "[A-Za-z]",
      'w': "[A-Za-z0-9]",
      '*': "."
    }
  }

  Inputmask.prototype.init = function() {
    var defs = this.options.definitions
    var len = this.mask.length

    this.tests = [] 
    this.partialPosition = this.mask.length
    this.firstNonMaskPos = null

    $.each(this.mask.split(""), $.proxy(function(i, c) {
      if (c == '?') {
        len--
        this.partialPosition = i
      } else if (defs[c]) {
        this.tests.push(new RegExp(defs[c]))
        if (this.firstNonMaskPos === null)
          this.firstNonMaskPos =  this.tests.length - 1
      } else {
        this.tests.push(null)
      }
    }, this))

    this.buffer = $.map(this.mask.split(""), $.proxy(function(c, i) {
      if (c != '?') return defs[c] ? this.options.placeholder : c
    }, this))

    this.focusText = this.$element.val()

    this.$element.data("rawMaskFn", $.proxy(function() {
      return $.map(this.buffer, function(c, i) {
        return this.tests[i] && c != this.options.placeholder ? c : null
      }).join('')
    }, this))
  }
    
  Inputmask.prototype.listen = function() {
    if (this.$element.attr("readonly")) return

    var pasteEventName = (isIE ? 'paste' : 'input') + ".mask"

    this.$element
      .on("unmask.bs.inputmask", $.proxy(this.unmask, this))

      .on("focus.bs.inputmask", $.proxy(this.focusEvent, this))
      .on("blur.bs.inputmask", $.proxy(this.blurEvent, this))

      .on("keydown.bs.inputmask", $.proxy(this.keydownEvent, this))
      .on("keypress.bs.inputmask", $.proxy(this.keypressEvent, this))

      .on(pasteEventName, $.proxy(this.pasteEvent, this))
  }

  //Helper Function for Caret positioning
  Inputmask.prototype.caret = function(begin, end) {
    if (this.$element.length === 0) return
    if (typeof begin == 'number') {
      end = (typeof end == 'number') ? end : begin
      return this.$element.each(function() {
        if (this.setSelectionRange) {
          this.setSelectionRange(begin, end)
        } else if (this.createTextRange) {
          var range = this.createTextRange()
          range.collapse(true)
          range.moveEnd('character', end)
          range.moveStart('character', begin)
          range.select()
        }
      })
    } else {
      if (this.$element[0].setSelectionRange) {
        begin = this.$element[0].selectionStart
        end = this.$element[0].selectionEnd
      } else if (document.selection && document.selection.createRange) {
        var range = document.selection.createRange()
        begin = 0 - range.duplicate().moveStart('character', -100000)
        end = begin + range.text.length
      }
      return {
        begin: begin, 
        end: end
      }
    }
  }
  
  Inputmask.prototype.seekNext = function(pos) {
    var len = this.mask.length
    while (++pos <= len && !this.tests[pos]);

    return pos
  }
  
  Inputmask.prototype.seekPrev = function(pos) {
    while (--pos >= 0 && !this.tests[pos]);

    return pos
  }

  Inputmask.prototype.shiftL = function(begin,end) {
    var len = this.mask.length

    if (begin < 0) return

    for (var i = begin, j = this.seekNext(end); i < len; i++) {
      if (this.tests[i]) {
        if (j < len && this.tests[i].test(this.buffer[j])) {
          this.buffer[i] = this.buffer[j]
          this.buffer[j] = this.options.placeholder
        } else
          break
        j = this.seekNext(j)
      }
    }
    this.writeBuffer()
    this.caret(Math.max(this.firstNonMaskPos, begin))
  }

  Inputmask.prototype.shiftR = function(pos) {
    var len = this.mask.length

    for (var i = pos, c = this.options.placeholder; i < len; i++) {
      if (this.tests[i]) {
        var j = this.seekNext(i)
        var t = this.buffer[i]
        this.buffer[i] = c
        if (j < len && this.tests[j].test(t))
          c = t
        else
          break
      }
    }
  },

  Inputmask.prototype.unmask = function() {
    this.$element
      .unbind(".mask")
      .removeData("inputmask")
  }

  Inputmask.prototype.focusEvent = function() {
    this.focusText = this.$element.val()
    var len = this.mask.length 
    var pos = this.checkVal()
    this.writeBuffer()

    var that = this
    var moveCaret = function() {
      if (pos == len)
        that.caret(0, pos)
      else
        that.caret(pos)
    }

    moveCaret()
    setTimeout(moveCaret, 50)
  }

  Inputmask.prototype.blurEvent = function() {
    this.checkVal()
    if (this.$element.val() !== this.focusText)
      this.$element.trigger('change')
  }

  Inputmask.prototype.keydownEvent = function(e) {
    var k = e.which

    //backspace, delete, and escape get special treatment
    if (k == 8 || k == 46 || (isIphone && k == 127)) {
      var pos = this.caret(),
      begin = pos.begin,
      end = pos.end

      if (end - begin === 0) {
        begin = k != 46 ? this.seekPrev(begin) : (end = this.seekNext(begin - 1))
        end = k == 46 ? this.seekNext(end) : end
      }
      this.clearBuffer(begin, end)
      this.shiftL(begin, end - 1)

      return false
    } else if (k == 27) {//escape
      this.$element.val(this.focusText)
      this.caret(0, this.checkVal())
      return false
    }
  }

  Inputmask.prototype.keypressEvent = function(e) {
    var len = this.mask.length

    var k = e.which,
    pos = this.caret()

    if (e.ctrlKey || e.altKey || e.metaKey || k < 32)  {//Ignore
      return true
    } else if (k) {
      if (pos.end - pos.begin !== 0) {
        this.clearBuffer(pos.begin, pos.end)
        this.shiftL(pos.begin, pos.end - 1)
      }

      var p = this.seekNext(pos.begin - 1)
      if (p < len) {
        var c = String.fromCharCode(k)
        if (this.tests[p].test(c)) {
          this.shiftR(p)
          this.buffer[p] = c
          this.writeBuffer()
          var next = this.seekNext(p)
          this.caret(next)
        }
      }
      return false
    }
  }

  Inputmask.prototype.pasteEvent = function() {
    var that = this

    setTimeout(function() {
      that.caret(that.checkVal(true))
    }, 0)
  }

  Inputmask.prototype.clearBuffer = function(start, end) {
    var len = this.mask.length

    for (var i = start; i < end && i < len; i++) {
      if (this.tests[i])
        this.buffer[i] = this.options.placeholder
    }
  }

  Inputmask.prototype.writeBuffer = function() {
    return this.$element.val(this.buffer.join('')).val()
  }

  Inputmask.prototype.checkVal = function(allow) {
    var len = this.mask.length
    //try to place characters where they belong
    var test = this.$element.val()
    var lastMatch = -1

    for (var i = 0, pos = 0; i < len; i++) {
      if (this.tests[i]) {
        this.buffer[i] = this.options.placeholder
        while (pos++ < test.length) {
          var c = test.charAt(pos - 1)
          if (this.tests[i].test(c)) {
            this.buffer[i] = c
            lastMatch = i
            break
          }
        }
        if (pos > test.length)
          break
      } else if (this.buffer[i] == test.charAt(pos) && i != this.partialPosition) {
        pos++
        lastMatch = i
      }
    }
    if (!allow && lastMatch + 1 < this.partialPosition) {
      this.$element.val("")
      this.clearBuffer(0, len)
    } else if (allow || lastMatch + 1 >= this.partialPosition) {
      this.writeBuffer()
      if (!allow) this.$element.val(this.$element.val().substring(0, lastMatch + 1))
    }
    return (this.partialPosition ? i : this.firstNonMaskPos)
  }

  
  // INPUTMASK PLUGIN DEFINITION
  // ===========================

  var old = $.fn.inputmask
  
  $.fn.inputmask = function (options) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.inputmask')
      
      if (!data) $this.data('bs.inputmask', (data = new Inputmask(this, options)))
    })
  }

  $.fn.inputmask.Constructor = Inputmask


  // INPUTMASK NO CONFLICT
  // ====================

  $.fn.inputmask.noConflict = function () {
    $.fn.inputmask = old
    return this
  }


  // INPUTMASK DATA-API
  // ==================

  $(document).on('focus.bs.inputmask.data-api', '[data-mask]', function (e) {
    var $this = $(this)
    if ($this.data('bs.inputmask')) return
    $this.inputmask($this.data())
  })

}(window.jQuery);

/* ===========================================================
 * Bootstrap: fileinput.js v3.1.3
 * http://jasny.github.com/bootstrap/javascript/#fileinput
 * ===========================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // FILEUPLOAD PUBLIC CLASS DEFINITION
  // =================================

  var Fileinput = function (element, options) {
    this.$element = $(element)
    
    this.$input = this.$element.find(':file')
    if (this.$input.length === 0) return

    this.name = this.$input.attr('name') || options.name

    this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]')
    if (this.$hidden.length === 0) {
      this.$hidden = $('<input type="hidden">').insertBefore(this.$input)
    }

    this.$preview = this.$element.find('.fileinput-preview')
    var height = this.$preview.css('height')
    if (this.$preview.css('display') !== 'inline' && height !== '0px' && height !== 'none') {
      this.$preview.css('line-height', height)
    }
        
    this.original = {
      exists: this.$element.hasClass('fileinput-exists'),
      preview: this.$preview.html(),
      hiddenVal: this.$hidden.val()
    }
    
    this.listen()
  }
  
  Fileinput.prototype.listen = function() {
    this.$input.on('change.bs.fileinput', $.proxy(this.change, this))
    $(this.$input[0].form).on('reset.bs.fileinput', $.proxy(this.reset, this))
    
    this.$element.find('[data-trigger="fileinput"]').on('click.bs.fileinput', $.proxy(this.trigger, this))
    this.$element.find('[data-dismiss="fileinput"]').on('click.bs.fileinput', $.proxy(this.clear, this))
  },

  Fileinput.prototype.change = function(e) {
    var files = e.target.files === undefined ? (e.target && e.target.value ? [{ name: e.target.value.replace(/^.+\\/, '')}] : []) : e.target.files
    
    e.stopPropagation()

    if (files.length === 0) {
      this.clear()
      return
    }

    this.$hidden.val('')
    this.$hidden.attr('name', '')
    this.$input.attr('name', this.name)

    var file = files[0]

    if (this.$preview.length > 0 && (typeof file.type !== "undefined" ? file.type.match(/^image\/(gif|png|jpeg)$/) : file.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader !== "undefined") {
      var reader = new FileReader()
      var preview = this.$preview
      var element = this.$element

      reader.onload = function(re) {
        var $img = $('<img>')
        $img[0].src = re.target.result
        files[0].result = re.target.result
        
        element.find('.fileinput-filename').text(file.name)
        
        // if parent has max-height, using `(max-)height: 100%` on child doesn't take padding and border into account
        if (preview.css('max-height') != 'none') $img.css('max-height', parseInt(preview.css('max-height'), 10) - parseInt(preview.css('padding-top'), 10) - parseInt(preview.css('padding-bottom'), 10)  - parseInt(preview.css('border-top'), 10) - parseInt(preview.css('border-bottom'), 10))
        
        preview.html($img)
        element.addClass('fileinput-exists').removeClass('fileinput-new')

        element.trigger('change.bs.fileinput', files)
      }

      reader.readAsDataURL(file)
    } else {
      this.$element.find('.fileinput-filename').text(file.name)
      this.$preview.text(file.name)
      
      this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
      
      this.$element.trigger('change.bs.fileinput')
    }
  },

  Fileinput.prototype.clear = function(e) {
    if (e) e.preventDefault()
    
    this.$hidden.val('')
    this.$hidden.attr('name', this.name)
    this.$input.attr('name', '')

    //ie8+ doesn't support changing the value of input with type=file so clone instead
    if (isIE) { 
      var inputClone = this.$input.clone(true);
      this.$input.after(inputClone);
      this.$input.remove();
      this.$input = inputClone;
    } else {
      this.$input.val('')
    }

    this.$preview.html('')
    this.$element.find('.fileinput-filename').text('')
    this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
    
    if (e !== undefined) {
      this.$input.trigger('change')
      this.$element.trigger('clear.bs.fileinput')
    }
  },

  Fileinput.prototype.reset = function() {
    this.clear()

    this.$hidden.val(this.original.hiddenVal)
    this.$preview.html(this.original.preview)
    this.$element.find('.fileinput-filename').text('')

    if (this.original.exists) this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
     else this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
    
    this.$element.trigger('reset.bs.fileinput')
  },

  Fileinput.prototype.trigger = function(e) {
    this.$input.trigger('click')
    e.preventDefault()
  }

  
  // FILEUPLOAD PLUGIN DEFINITION
  // ===========================

  var old = $.fn.fileinput
  
  $.fn.fileinput = function (options) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('bs.fileinput')
      if (!data) $this.data('bs.fileinput', (data = new Fileinput(this, options)))
      if (typeof options == 'string') data[options]()
    })
  }

  $.fn.fileinput.Constructor = Fileinput


  // FILEINPUT NO CONFLICT
  // ====================

  $.fn.fileinput.noConflict = function () {
    $.fn.fileinput = old
    return this
  }


  // FILEUPLOAD DATA-API
  // ==================

  $(document).on('click.fileinput.data-api', '[data-provides="fileinput"]', function (e) {
    var $this = $(this)
    if ($this.data('bs.fileinput')) return
    $this.fileinput($this.data())
      
    var $target = $(e.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
    if ($target.length > 0) {
      e.preventDefault()
      $target.trigger('click.bs.fileinput')
    }
  })

}(window.jQuery);
function video_lazy_load() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
}


function img_lazy_load() {

  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  /** Then we set up a intersection observer watching over those images and whenever any of those becomes visible on the view then replace the placeholder image with actual one, remove the non-loaded class and then unobserve for that element **/
  let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
          }
      });
  });
  /** Now observe all the non-loaded images using the observer we have setup above **/
  lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
  });

}

function media_lazy_load_apply() {
  img_lazy_load()
  video_lazy_load()
}

$(document).on("turbolinks:load",media_lazy_load_apply);












window.isMobile = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


window.phone_show = function() {
  console.log("phone show")
  $(".phone-model").html(WURFL.complete_device_name)
}


function internal_nav() {
  return document.referrer.includes('//localhost') || document.referrer.includes('//qpick.kz');
}


function d_mobile_hide() {
  if(!isMobile()) {
    $(".d-mobile").hide()
  }
}

$(document).on("turbolinks:load", () => {
  d_mobile_hide()
  console.log("turbolinks:load")
  // /catalog url
  /*
  if($('body').hasClass('home_catalog')) {
    //redirect mobile devices to catalog
    if(isMobile() && !sessionStorage['forced_device_detect_from_catalog']) {
      if(internal_nav()) {
        console.log("internal nav detected, skipping force redirect to device detect")
      } else {
        sessionStorage['forced_device_detect_from_catalog'] = true
        window.location = "/?forced_device_detect_on_catalog_visit=1"
      }
    }
  }*/

  if($(".banner_device_detect_wrap").length>0) {
    if(isMobile()) {
      $(".banner_device_detect_wrap").css({opacity: 1});
    }
  }

  //$("[data-src]").lazyload()

  if($(".button-whatsapp-autoclick").length>0) {
    $(".button-whatsapp-autoclick")[0].click()
  }


  if($("body.product_show, body.cart_index").length>0) {
    console.log("referrer: "+document.referrer)
    if((typeof(window.MY_REFERRER)=='undefined' && document.referrer=='') || !internal_nav() )  {
      console.log("hiding back button")
      $(".header__back").addClass("d-none")
      $(".header__logo").addClass("d-flex")
    }
  }

  window.MY_REFERRER = window.location.href

  if($("body").hasClass("home_podbor")) {
    var url_device_name = WURFL.complete_device_name

    if(!WURFL.is_mobile) {
      Turbolinks.visit('/catalog')
    } else {
      Turbolinks.visit(`/all_for/${url_device_name}`)
    }

  }

  fav_buttons_fix()

  //защита от поисковых ботов
  $("[data-href]").each(function() {
    $(this).attr("href",$(this).attr("data-href"))
  });


  $("select[name=main_id]").replaceWith(`<select maxlength="8" id="product_main_id" class="search-select-input" data-fields="[&quot;name_with_brand&quot;,&quot;category_name&quot;,&quot;shop_code&quot;,&quot;bar_code&quot;]" data-predicate="contains" data-url="/admin/products" data-response-root="mains" data-display-name="display_name" data-minimum-input-length="2" data-width="80%" data-order="name_asc" name="main_id"><option value=""></option></select>`)

/*
  $(".swiper").each(function() {

    var initial = $(this).attr('data-active-slide')

    var effect;
    if($(this).hasClass('swiper-creative')) {
      effect = 'creative'
    } else {
      effect = false;
    }

    var swiper = new Swiper(this, {
      // Optional parameters
      direction: 'horizontal',
      effect: effect,
      loop: false,
      initialSlide: initial,
      slidePerView: 1,
      spaceBetween: 0,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 5,
        },
        1920: {
          slidesPerView: 6,
        },
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

    });







  })

*/



})

$(document).on('turbolinks:before-cache', function() {
  $('.swiper').each(function() {
    $(this).attr('data-active-slide', $(this).find(".swiper-slide-active").index())
  })

})


function catalog_product_clicked(e) {
  e.preventDefault()
  var href = $(this).attr("data-href")
  Turbolinks.visit(href)
}



function product_details_state_save() {
  setTimeout(function() {
    var details_opened = $(".accordion").hasClass("active")
    console.log({details_opened})
    sessionStorage.setItem("product_details_opened",details_opened)
  },0)
}


function product_details_state_set() {
  if(sessionStorage.getItem("product_details_opened")=='true') {
    $(".product-info .accordion__top").trigger("click")
  }
}

$(document).on('turbolinks:load',product_details_state_set);
