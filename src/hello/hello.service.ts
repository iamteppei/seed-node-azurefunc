import helloRepository from './hello.repository';
import { IHelloModel } from './hello.model';

const getSayHelloByName = (name: string): string => {
  return `Hello: ${name.toUpperCase()}`;
};

const getSayHelloWords = async (): Promise<IHelloModel[] | null> => {
  const result = await helloRepository.getHelloData();
  if (!result.length) {
    return null;
  }
  return result;
};

const addHelloWord = async (word: string): Promise<IHelloModel> => {
  return await helloRepository.createHello(word);
};

const helloService = {
  getSayHelloByName,
  getSayHelloWords,
  addHelloWord
};

export default helloService;
