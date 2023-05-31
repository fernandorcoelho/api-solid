import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const app = fastify()

prisma.user.create({
  data: {
    name: 'Fernando',
    email: 'fernando@email.com',
  },
})
