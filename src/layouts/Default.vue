<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <ul class="nav-items">
          <router-link to="/" class="nav-item">About</router-link>
          <router-link to="/writing" class="nav-item">Writing</router-link>
        </ul>
        <ul class="social-media-items">
          <li>
            <a
              rel="noopener noreferrer"
              href="https://twitter.com/chrissiemhrk"
              class="social-media-item"
            >
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 112.197 112.197"
                style="enable-background:new 0 0 112.197 112.197;"
                xml:space="preserve"
                width="24px"
                height="24px"
              >
                <g>
                  <circle cx="56.099" cy="56.098" r="56.098" />
                  <g>
                    <path
                      style="fill:#F1F2F2;"
                      d="M90.461,40.316c-2.404,1.066-4.99,1.787-7.702,2.109c2.769-1.659,4.894-4.284,5.897-7.417
			c-2.591,1.537-5.462,2.652-8.515,3.253c-2.446-2.605-5.931-4.233-9.79-4.233c-7.404,0-13.409,6.005-13.409,13.409
			c0,1.051,0.119,2.074,0.349,3.056c-11.144-0.559-21.025-5.897-27.639-14.012c-1.154,1.98-1.816,4.285-1.816,6.742
			c0,4.651,2.369,8.757,5.965,11.161c-2.197-0.069-4.266-0.672-6.073-1.679c-0.001,0.057-0.001,0.114-0.001,0.17
			c0,6.497,4.624,11.916,10.757,13.147c-1.124,0.308-2.311,0.471-3.532,0.471c-0.866,0-1.705-0.083-2.523-0.239
			c1.706,5.326,6.657,9.203,12.526,9.312c-4.59,3.597-10.371,5.74-16.655,5.74c-1.08,0-2.15-0.063-3.197-0.188
			c5.931,3.806,12.981,6.025,20.553,6.025c24.664,0,38.152-20.432,38.152-38.153c0-0.581-0.013-1.16-0.039-1.734
			C86.391,45.366,88.664,43.005,90.461,40.316L90.461,40.316z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://github.com/chrissiemhrk"
              class="social-media-item"
              ><svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2">
                  <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                  />
                  <path
                    d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1"
                    data-name="github"
                  />
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <p>
        Want to work together? <br />You can reach me via
        <a href="mailto:chrissiemhrk@gmail.com">chrissiemhrk@gmail.com</a>
      </p>
      <p>
        Built with
        <a target="_blank" class="link" href="//gridsome.org">Gridsome</a>
      </p>
    </footer>
  </div>
</template>

<style>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.7;
  font-size: 1.1rem;
  background-color: #fcfcec;
  color: #222222;
}

.layout {
  max-width: 900px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

ul {
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 600;
}

nav {
  margin: 1rem 0rem;
  display: flex;
  justify-content: space-between;
  width: -moz-available;
}

.nav-item {
  text-decoration: none;
  text-transform: uppercase;
}

.nav-item:first-child {
  margin-right: 1.5rem;
}

.social-media-item {
  text-decoration: none;
  text-transform: uppercase;
}
.social-media-item:first-child {
  margin-right: 1.5rem;
}

.social-media-items {
  display: flex;
  list-style: none;
  font-size: 0.8rem;
}

footer {
  margin-top: 4.5rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer p {
  text-align: center;
}

a {
  color: #000;
}

a:hover {
  color: #00835c;
}

svg:hover {
  fill: #00835c;
}
</style>
