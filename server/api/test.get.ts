export default defineEventHandler(async (event) => {
  //const prisma = event.context.prisma
 

  return {
    status: 200,
    body: {
      message: 'Hello World'
    }
  }
})
