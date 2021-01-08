<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <ul class="nav-items">
          <router-link to="/" class="nav-item">About</router-link>
          <router-link to="/writing" class="nav-item">Writing</router-link>
        </ul>
      </nav>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <div>
        <p>
          Want to work together? <br />You can reach me via
          <a href="mailto:chrissiemhrk@gmail.com">chrissiemhrk@gmail.com</a>
        </p>
        <ul class="social-media-items">
          <li>
            <a
              rel="noopener noreferrer"
              href="https://twitter.com/chrissiemhrk"
              class="social-media-items"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://github.com/chrissiemhrk"
              class="social-media-items"
              >github
            </a>
          </li>
        </ul>
      </div>

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
  font-size: 1.2rem;
  background-color: #fcfcec;
  color: #222222;
  border-top: 0.5rem solid #00835c;
  border-bottom: 0.5rem solid #00835c;
}

.layout {
  max-width: 800px;
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
}

.nav-item {
  text-decoration: none;
  text-transform: uppercase;
}

.nav-item:first-child {
  margin-right: 1.5rem;
}

footer {
  margin-top: 4.5rem;
  font-size: 0.98rem;
}

footer div {
  display: flex;
  justify-content: space-between;
}

footer li {
  list-style: none;
  text-transform: uppercase;
  margin: 0.2rem;
}

footer ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
