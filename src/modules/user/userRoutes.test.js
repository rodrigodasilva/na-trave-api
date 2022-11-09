import request from 'supertest';
import { app } from '../../app';
import { client } from '../../database/prismaClient';

describe('/user - create', () => {
  afterEach(async () => {
    await client.user.deleteMany()    
  })

  afterAll(async () => {
    await client.$disconnect()
  })

  it('should create a new user', async () => {
    const payload = {
      email: 'create_user@test.com',
      name: 'Create',
      username: 'create',
      password: '123456',
      role: 'seller'
    }

    const response = await request(app.callback())
      .post('/v1/user')
      .send(payload)

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 'email', 'name', 'username', 'role');
    expect(response.body).not.toHaveProperty('password');
  })

  it('should not create a new user with a existing email', async () => {
    const firstUser = {
      email: 'rodrigo@test.com',
      name: 'Rodrigo Ribeiro One',
      username: 'rodrigo',
      password: '123456',
      role: 'seller'
    }

    const firstResponse = await request(app.callback())
      .post('/v1/user')
      .send(firstUser)

    expect(firstResponse.status).toBe(200);

    const secondUser = {
      email: 'rodrigo@test.com',
      name: 'Rodrigo Ribeiro Two',
      username: 'rodrigo2',
      password: '123456',
      role: 'seller'
    }

    const secondResponse = await request(app.callback())
      .post('/v1/user')
      .send(secondUser)

    expect(secondResponse.status).toBe(400);
  })

  it('should not create a new user with a existing username', async () => {
    const firstUser = {
      email: 'rodrigo1@test.com',
      name: 'Rodrigo Ribeiro One',
      username: 'rodrigo',
      password: '123456',
      role: 'seller'
    }

    const firstResponse = await request(app.callback())
      .post('/v1/user')
      .send(firstUser)

    expect(firstResponse.status).toBe(200);

    const secondUser = {
      email: 'rodrigo2@test.com',
      name: 'Rodrigo Ribeiro Two',
      username: 'rodrigo',
      password: '123456',
      role: 'seller'
    }

    const secondResponse = await request(app.callback())
      .post('/v1/user')
      .send(secondUser)

    expect(secondResponse.status).toBe(400);
  })  
})