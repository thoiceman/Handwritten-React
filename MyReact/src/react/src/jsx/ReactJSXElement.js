import hasOwnProperty from 'shared/hasOwnProperty';
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols'
const RESERVED_PROPS = {
    key: true,
    ref: true,
    __self: true,
    __source: true
}

function hasValidKey(config) {
    return config.key !== undefined;
}

function hasValidRef(config) {
    return config.ref !== undefined
}

function ReactElement(type, key, ref, props) {
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref,
        props,
    }
}

export function jsxDEV(type, config) {
    let propname;
    const props = {};
    let key = null;
    let ref = null;
    if (hasValidKey(config)) {
        key = config.key
    }
    if (hasValidRef(config)) {
        ref = config.ref
    }

    for (propname in config) {
        if (hasOwnProperty.call(config, propname) && !RESERVED_PROPS.hasOwnProperty(propname)) {
            props[propname] = config[propname]
        }
    }
    return ReactElement(type, key, ref, props);
}