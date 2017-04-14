// database types
export const INTEGER = 'INTEGER';
export const DECIMAL = 'DECIMAL';
export const DOUBLE = 'DOUBLE';
export const FLOAT = 'FLOAT';
export const UUID = 'UUID';
export const STRING = 'STRING';
export const PASSWORD = 'PASSWORD';
export const DATE = 'DATE';
export const BOOLEAN = 'BOOLEAN';
export const TEXT = 'TEXT';

// Database Actions
export const QUERY = 'QUERY';
export const INSERT = 'INSERT';
export const UPDATE = 'UPDATE';

// Database Relation Types
export const ONE_TO_ONE = 'ONE_TO_ONE';
export const ONE_TO_MANY = 'ONE_TO_MANY';
export const MANY_TO_ONE = 'MANY_TO_ONE';
export const MANY_TO_MANY = 'MANY_TO_MANY';

// Directions
export const ASC = 'asc';
export const DESC = 'desc';

// Stages
export const BEFORE = 'BEFORE';
export const AFTER = 'AFTER';

// configure routes
export const BEFORE_CONFIGURE_ROUTES = 'beforeConfigureRoutes';
export const AFTER_CONFIGURE_ROUTES = 'afterConfigureRoutes';

// http verbs
export const GET = 'get';
export const POST = 'post';
export const PUT = 'put';
export const DELETE = 'delete';
export const OPTIONS = 'options';

export const VERBS = [GET, POST, PUT, DELETE];

// misc
export const CLASS = 'class';
export const FUNC = 'func';
export const OBJ = 'obj';

export const DEFAULT = 'default';
export const INDEX = 'index';

export const COUNT = 'COUNT';
export const START = 'START';
export const MAX = 'MAX';

// admin modes
export const HIDDEN = 'HIDDEN';
export const READ_WRITE = 'READ_WRITE';
export const READ_ONLY = 'READ_ONLY';

// admin model edit types
export const LIST = 'LIST';
export const MEDIA = 'MEDIA';
export const RICH_TEXT = 'RICH_TEXT';
export const TIME = 'TIME';
