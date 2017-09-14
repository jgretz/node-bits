import _ from 'lodash';
import deepmerge from 'deepmerge';

import {log} from './log';
import mergeSchema from './util/merge_schema';

const compile = (config, allBits, hook, property, post) => {
  const func = _.flow([
    bits => _.filter(bits, b => b[hook]),
    bits => _.flatMap(bits, b => b[hook](config)),
    bits => (post ? post(bits) : bits),
  ]);

  const value = func(allBits);

  if (!value) {
    return config;
  }

  if (property) {
    config[property] = value;
    return config;
  }

  return {
    ...config,
    ...value,
  };
};

const concatMerge = (destinationArray, sourceArray) => destinationArray.concat(sourceArray);
const reduceInit = bits => {
  if (!bits || bits.length < 2) {
    return bits;
  }

  return deepmerge.all(bits, {arrayMerge: concatMerge});
};

const syncSchema = (config, bits) => {
  const merged = mergeSchema(bits);
  if (config.database) {
    config.database.synchronizeSchema(merged);
  }
  return [merged];
};

export default (bits = []) => {
  _.flow([
    config => compile(config, bits, 'initialize', null, reduceInit),
    config => compile(config, bits, 'initializeDatabase', 'database', bits => _.head(bits)),
    config => compile(config, bits, 'loadSchema', 'schema', bits => syncSchema(config, bits)),
    config => compile(config, bits, 'loadRoutes', 'routes'),
    config => compile(config, bits, 'initializeServer', 'server'),
  ])({});

  log('node-bits startup complete. the server is ready and waiting ...');
};

// other exports
export * from './constants';
export * from './log';
export * from './execute_series';
export * from './timer';
