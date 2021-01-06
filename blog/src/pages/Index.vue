<template>
  <Layout>
    <section class="about">
      <div class="about-text">
        <h1 class="title">Hi, I'm Chrissie</h1>
        <p>I'm a front-end web developer from Kigali, Rwanda.</p>
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
      <!-- <div class="me">
        <img src="../favicon.png" alt="Picrew image of Chrissie" />
      </div> -->
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
  },
};
</script>

<style>
.about {
  margin-top: 4rem;
  margin-bottom: 6.2rem;
  display: flex;
  justify-content: space-between;
}

.about-text {
  margin: auto;
  text-align: justify;
}

.title {
  font-size: 2rem;
}

img {
  width: 22rem;
}
</style>
