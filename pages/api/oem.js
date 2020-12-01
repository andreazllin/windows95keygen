// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Generator from './generator.js';

export default (req, res) => {
  var generatedKey = {
    key: Generator.generateOemKey(),
    source: 'https://github.com/nilaerdna/windows95keygen',
    author: 'https://github.com/nilaerdna',
  };
  res.status(200).json(generatedKey);
}
