<script>
	import { page } from '$app/stores';
	import '../styles.css';
	import logo from '$lib/images/logo.svg';
	import tmdb from '$lib/images/tmdb.svg';
</script>

<nav>
	<a href="/"><img src={logo} alt="Svelteflix" /></a>
	<div class="links">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Log in</a>
	</div>
</nav>

<main class:infinite={$page.data.infinite}>
	<slot />
</main>

<footer>
	<p>
		Data provided by
		<a href="https://www.themoviedb.org">
			<img src={tmdb} alt="The Movie DB" />
		</a>
	</p>
</footer>

<style>
	nav {
		display: flex;
		width: 100%;
		height: 3rem;
		align-items: center;
		justify-content: space-between;
		max-width: var(--column);
		color: var(--accent);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	img {
		height: 1rem;
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	main.infinite {
		height: 0;
		flex: 1;
		overflow: hidden;
	}

	footer {
		display: flex;
		justify-content: center;
		height: 5rem;
	}
	.logo {
		height: 100%;
	}
</style>
