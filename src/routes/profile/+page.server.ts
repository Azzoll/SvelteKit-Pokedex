import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { db } from '$lib/database'


export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, '/login')
	}
    const user = await db.user.findUnique({
        where: {
            username: locals.user
        }
    })
    let createAT = user?.createdAt
    return{
        createAT
    }
}

