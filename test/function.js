const genTest = require('./suite/genTest');
const operationTest = require('./suite/operationTest');
const genQuesTest = require('./suite/genQuesTest');
const getTest = require('./suite/getTest');

describe('Test Generate number function', genTest);
describe('Test Operation function', operationTest);
describe('Test genQues function', genQuesTest);
describe('Test get function', getTest);
