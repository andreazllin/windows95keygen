import Generator from './generators';

export default (req, res) => {
  var generatedKey = {
    key: Generator.generateNormalKey(),
    source: 'https://github.com/nilaerdna/windows95keygen',
    author: 'https://github.com/nilaerdna',
  };
  res.status(200).json(generatedKey);
}
