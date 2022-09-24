import { invalid, redirect } from '@sveltejs/kit'
import bcrypt from 'bcrypt'
import type { PageServerLoad, Actions } from './$types'

import { db } from '$lib/database'

export const load: PageServerLoad = async ({ locals }: {locals: any}) => {
    if (locals.user) {
        throw redirect(302, '/profile')
    }
}


export const actions: Actions = {
    default: async ({ request, cookies }: {request: any, cookies: any}) => {
        const data = await request.formData()
        const username = data.get('username');
        const password = data.get('password');

        if (typeof username !== 'string'||typeof password !== 'string'||!username||!password){
            return invalid(400, { invalid: true})
        }
        const user = await db.user.findUnique({where: { username }})
        if (!user){
            return invalid(400, { credentials: true })
        }
        const userPassword = await bcrypt.compare(password, user.passwordHash)
        if(!userPassword){
            return invalid(400, { credentials: true })
        }
        cookies.set('session', user.userAuthToken, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production'
        })
    }
}