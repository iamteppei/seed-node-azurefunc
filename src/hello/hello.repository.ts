import { HelloModel, HelloDocument, IHelloModel } from './hello.model';
import { convertDocumentToObject } from '../common/mongoUtil';

const getHelloData = async (): Promise<IHelloModel[]> => {
  const result = await HelloModel.find({});
  return result && result.map<IHelloModel>(convertDocumentToObject);
};

const createHello = async (word: string): Promise<IHelloModel> => {
  const model = new HelloModel({ word });
  const hello = await model.save();
  return convertDocumentToObject<HelloDocument, IHelloModel>(hello);
};

const helloRepository = {
  getHelloData,
  createHello
};
export default helloRepository;
