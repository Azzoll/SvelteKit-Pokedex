import { redirect, invalid } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import bcrypt from 'bcrypt'


import { db } from '$lib/database'


export const load: PageServerLoad = async ({ locals }: {locals: any}) => {
    if (locals.user) {
        throw redirect(302, '/profile')
    }
}


export const actions: Actions = {
    default: async ({ request }: {request: any}) => {
        const data = await request.formData()
        const username = data.get('username');
        const password = data.get('password');

        if (typeof username !== 'string' || typeof password !== 'string'){
            return invalid(400, {invalid:true})
        }
        const user = await db.user.findUnique({
            where: { username }
        });
        if (user){
            return invalid(400, { user: true})
        }
        let errorPass
        if (password.length < 6){
            return invalid(400, { errorPass:true })
        }
        await db.user.create({
            data: {
                username,
                passwordHash: await bcrypt.hash(password, 10)
            }
        })
        
        throw redirect(303, '/login')
    }   
}

