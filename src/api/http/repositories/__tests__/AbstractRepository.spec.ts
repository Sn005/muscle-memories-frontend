import AbstractRepository from '../AbstractRepository'
import HttpAdapter from '../../adapters/HttpAdapter'
import MockHttpAdapter from '../../adapters/MockHttpAdapter'

interface IMockQuery {
  id?: number
  name?: string
}
interface IMockModel {
  id: number
  name: string
  title: string
  context: string
}
class MockRepository extends AbstractRepository<IMockModel, IMockQuery> {
  constructor(Adapter: typeof MockHttpAdapter | typeof HttpAdapter) {
    const rootUri = 'mock'
    super(Adapter, rootUri)
  }
}

const mockModels = [...Array(5)].map(
  (v, i): IMockModel => {
    return {
      id: i + 1,
      name: 'string',
      title: 'string',
      context: 'string'
    }
  }
)
describe('AbstractRepositoryのテスト', () => {
  const mockRepository = new MockRepository(HttpAdapter)
  it(`allメソッドのテスト`, async () => {
    HttpAdapter.prototype.get = jest
      .fn()
      .mockImplementationOnce(() => mockModels)
    const result = await mockRepository.all()
    expect(result).toEqual(mockModels)
  })
  it(`whereメソッドのテスト`, async () => {
    const mockQuery = { id: 5 }
    const mockResult = mockModels.filter(v => v.id === 5)
    HttpAdapter.prototype.get = jest
      .fn()
      .mockImplementationOnce(() => mockResult)
    const result = await mockRepository.where(mockQuery)
    expect(result).toEqual(mockResult)
  })
  it(`getメソッドのテスト`, async () => {
    const mockResult = mockModels.filter(v => v.id === 1)
    HttpAdapter.prototype.get = jest
      .fn()
      .mockImplementationOnce(() => mockResult)
    const result = await mockRepository.get(1)
    expect(result).toEqual(mockResult[0])
  })
  it(`updateメソッドのテスト`, async () => {
    const mockResult: IMockModel = {
      ...mockModels.filter(v => v.id === 1)[0],
      name: 'new',
      title: 'new',
      context: 'new'
    }
    HttpAdapter.prototype.put = jest.fn().mockImplementation(() => [mockResult])
    const result = await mockRepository.update(1, mockResult)
    expect(result).toEqual(mockResult)
  })
  it(`deleteメソッドのテスト`, async () => {
    HttpAdapter.prototype.delete = jest.fn().mockImplementation(() => true)
    const result = await mockRepository.delete(1)
    expect(result).toBeTruthy()
  })
})
