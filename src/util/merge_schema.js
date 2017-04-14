/* eslint-disable */
import _ from 'lodash';

export default schemas => {
  const props = ['schema', 'relationships', 'indexes', 'migrations', 'seeds'];

  return _.reduce(props, (result, prop) =>
    ({
      ...result,
      [prop]: (prop === 'schema' ?
        _.reduce(schemas, (object, schema) => ({...object, ...(schema[prop] || {})}), {}) :
        _.reduce(schemas, (object, schema) => [...object, ...(schema[prop] || [])], [])
      ),
    }), {});
};
