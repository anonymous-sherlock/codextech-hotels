import { createFactory } from "hono/factory";



export const authFactory = createFactory()

const authhandlers = authFactory.createHandlers((c) => {
    return c.json(c.env)
})

export default authhandlers