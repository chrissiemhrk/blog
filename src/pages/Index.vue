<template>
  <Layout>
    <section class="about">
      <div class="about-text">
        <h1 class="title">Hi, I'm Chrissie</h1>
        <p>
          I'm a front-end web developer from Kigali, Rwanda.
        </p>
        <p>
          Currently, I'm part of an incredible team at Hacksplash and learning
          user interface design. In addition, I'm the co-lead of the Google
          developer student club (DSC) chapter of my university and working
          towards a bachelor in software engineering.
        </p>
        <p>
          I love writing and have published articles online on Dev and my
          personal website. Apart from that I also enjoy reading both
          non-fiction and fiction,watching crime dramas and anime, and evening
          walks.
        </p>
      </div>
      <img src="../favicon.png" alt="Picrew image of Chrissie" />
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
  },
  meta: [
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:creator",
      content: this.$page.author.twitter,
    },
    { name: "twitter:title", content: this.$page.title },
    { name: "twitter:description", content: this.$page.description },
  ],
};
</script>

<style>
.about {
  display: flex;
  justify-content: space-between;
  text-align: justify;
}

.title {
  font-size: 3rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
}

img {
  width: 20rem;
  height: 20rem;
  margin: auto;
  display: block;
}

@media (max-width: 999px) {
  .about {
    display: flex;
    flex-direction: column;
  }

  .about-text {
    order: 1;
  }

  .title {
    font-size: 2.2rem;
  }
}
</style>
