import prisma from '../prisma'

export default defineEventHandler(async (event) => {
  //   await prisma.user.create({ data: { name: 'peter', email: '1@2.3' } })
  const users = await prisma.user.findMany()

  return {
    users,
    event,
  }
})
