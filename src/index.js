import _ from 'lodash';

export default (allBits = []) => {
  const config = {};

  // database
  const loadDatabase = _.flow([
    (bits) => _.filter(bits, b => b.loadDatabase),
    (bits) => _.flatMap(bits, b => b.loadDatabase(config)),
  ]);
  config.database = loadDatabase(allBits);

  // schema
  const loadSchema = _.flow([
    (bits) => _.filter(bits, b => b.loadSchema),
    (bits) => _.flatMap(bits, b => b.loadSchema(config)),
  ]);
  config.schema = loadSchema(allBits);

  // routes
  const loadRoutes = _.flow([
    (bits) => _.filter(bits, b => b.loadRoutes),
    (bits) => _.flatMap(bits, b => b.loadRoutes(config)),
  ]);
  config.routes = loadRoutes(allBits);

  // server
  const loadServer = _.flow([
    (bits) => _.filter(bits, b => b.loadServer),
    (bits) => _.flatMap(bits, b => b.loadServer(config)),
  ]);
  loadServer(allBits);
};
