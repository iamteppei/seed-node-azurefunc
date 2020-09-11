import helloService from '../hello.service';
import helloRepository from '../hello.repository';

jest.mock('../hello.repository.ts');

describe('hello.service', () => {
  describe('getSayHelloByName', () => {
    it('Call success when input correctly', () => {
      // Given
      const name = 'name';
      // When
      const result = helloService.getSayHelloByName(name);
      // then
      expect(result).toEqual('Hello: NAME');
    });
  });

  describe('getSayHelloWords', () => {
    it('Call success when have data', async () => {
      // Given
      const response = [
        {
          word: 'test1',
          id: '1'
        },
        {
          word: 'test2',
          id: '2'
        }
      ];
      (helloRepository.getHelloData as jest.Mock).mockResolvedValueOnce(
        response
      );
      // When
      const result = await helloService.getSayHelloWords();
      // then
      expect(result).toEqual(response);
    });

    it('Call success when have data', async () => {
      // Given
      (helloRepository.getHelloData as jest.Mock).mockResolvedValueOnce([]);
      // When
      const result = await helloService.getSayHelloWords();
      // then
      expect(result).toEqual(null);
    });
  });

  describe('addHelloWord', () => {
    it('Call success when input correctly', async () => {
      // Given
      const name = 'name';
      (helloRepository.createHello as jest.Mock).mockResolvedValueOnce({
        name
      });
      // When
      const result = await helloService.addHelloWord(name);
      // then
      expect(result).toEqual({ name });
    });
  });
});
