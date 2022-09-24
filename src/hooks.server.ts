import type { Handle } from '@sveltejs/kit'
import { db } from '$lib/database'


function redirect(location: string) {
	return new Response(undefined, {
		status: 303,
		headers: { location },
	})
}

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session')
	if (!session) {
		if (event.url.pathname === '/profile') {
			return redirect('/login')
		}

		return await resolve(event)
	}

	const user = await db.user.findUnique({
		where: { userAuthToken: session },
		select: { username: true },
	})

	if (user) {
		event.locals.user = user.username
	} else {
		if (event.url.pathname === '/profile') {
			return redirect('/login')
		}
	}

	return await resolve(event)
}