import request from 'supertest'
import app from '../../src/app'

describe('GET /movies', () => {
  it('should return 197 movies from database', async () => {
    const response = await request(app)
      .get('/movies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body.data.length).toEqual(197)
  })
  it(`should return the response for resource 'producersMinMaxWinInterval' correctly`, async () => {
    const response = await request(app)
      .get('/movies?resource=producersMinMaxWinInterval')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body.data.min.length).toEqual(1)
    expect(response.body.data.max.length).toEqual(1)
  })
  it('should return error when the resource is not implemented', async () => {
    const response = await request(app)
      .get('/movies?resource=notImplementedResource')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
  })
})
