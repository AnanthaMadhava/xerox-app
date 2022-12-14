import promise from 'es6-promise';
import 'isomorphic-fetch';

// polyfill all `core-js` features, including early-stage proposals:
import "core-js";
// or:
import "core-js/full";
// polyfill all actual features - stable ES, web standards and stage 3 ES proposals:
import "core-js/actual";
import 'core-js/actual/array/from';
import 'core-js/actual/array/group';
import 'core-js/actual/set';        
import 'core-js/actual/promise';    
import 'core-js/actual/structured-clone';
import 'core-js/actual/queue-microtask';
// polyfill only stable features - ES and web standards:
import "core-js/stable";
// polyfill only stable ES features:
import "core-js/es";

// if you want to polyfill `Set`:
// all `Set`-related features, with early-stage ES proposals:
import "core-js/full/set";
// (DOM collections iterator in this case):
import "core-js/stable/set";
// only stable ES features required for `Set`:
import "core-js/es/set";

// if you want to polyfill just required methods:
import "core-js/full/set/intersection";
import "core-js/actual/array/find-last";
import "core-js/stable/queue-microtask";
import "core-js/es/array/from";

// polyfill iterator helpers proposal:
import "core-js/proposals/iterator-helpers";
// polyfill all stage 2+ proposals:
import "core-js/stage/2";

import 'core-js/es';
import 'core-js/proposals/set-methods';
import 'core-js/full/set/map';

import "core-js/modules/es.array.unscopables.flat";
import "core-js/modules/es.array.unscopables.flat-map";
import "core-js/modules/es.object.from-entries";
import "core-js/modules/esnext.set.difference";
import "core-js/modules/esnext.set.intersection";
import "core-js/modules/esnext.set.is-disjoint-from";
import "core-js/modules/esnext.set.is-subset-of";
import "core-js/modules/esnext.set.is-superset-of";
import "core-js/modules/esnext.set.map";
import "core-js/modules/esnext.set.symmetric-difference";
import "core-js/modules/esnext.set.union";

import 'core-js/modules/es.array.iterator';
import 'core-js/modules/es.object.to-string';
import 'core-js/modules/es.set';
import 'core-js/modules/es.array.of';

import 'regenerator-runtime/runtime';

import 'promise-polyfill/src/polyfill';

promise.polyfill();