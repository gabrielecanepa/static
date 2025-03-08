export default {
	async fetch(request, env) {
		const url = new URL(request.url)

		if (url.pathname === '/') {
			return Response.redirect(`https://github.com/${env.REPO}`, 301)
		}
			
		const hostname = `https://${env.HOST}/${env.REPO}`
		const pathname = env.DIR ? `/${env.DIR}${url.pathname}` : url.pathname
		const branch = url.searchParams.get('b')
		const version = url.searchParams.get('v')

		if (branch) {
			const response = await fetch(`${hostname}/refs/heads/${branch}${pathname}`)
			if (response.ok) return response
		}

		if (version) {
			const path = /^[0-9a-f]{7,40}$/.test(version) ? `/${version}` : `/refs/tags/v${version}`
			const response = await fetch(`${hostname}${path}${pathname}`)
			if (response.ok) return response
		}

		const response = await fetch(`${hostname}/refs/heads/${env.BRANCH}${pathname}`)
		if (response.ok) return response

		return new Response('404: Not Found', { status: 404 })
	},
} satisfies ExportedHandler<Env>
