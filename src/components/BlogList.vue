<template>
    <section>
        <ul class="list">
             <g-link  v-for="post in posts" :key="post.node.title" :to="post.node.path" >
                <li>
                    <div class="hero_image">
                        <g-image 
                          :src="post.node.hero_image" 
                          :alt="post.node.title" 
                          width="300" 
                          height="300" 
                          quality="75">
                        </g-image>
                    </div>
                    <div class="blogList__info">
                        <h2>{{ post.node.title }}</h2>
                        <h3>{{ formatDate(post.node.date) }}</h3>
                        <p v-html="formatExcerpt(post.node.content)"></p>
                    </div>
                </li>
            </g-link>            
        </ul>
    </section>                       
</template>

<script>
    export default {
        props: {
            posts: {
                type: Array,
                required: true
            }
        },
        methods: {
          formatDate(date) {
            return new Date(date).toDateString().slice(4)
          }, 
          formatExcerpt(excerpt) {
            const blurb = excerpt.slice(3,200).trim()
            return blurb.indexOf('</p>') !== -1 ? blurb.slice( 0, blurb.indexOf('</p>')  ).trim()  + "..." : blurb  + "..."
          }
        }
    }
</script>

<style scoped lang="scss">
.list {
    a:hover {
      opacity: 1;
      li {
        div.hero_image {
          img {
            opacity: 0.8;
            transition: opacity 0.3s ease;
          }
        }
      }
    }
    .hero_image {
      width: 100%;
      height: 33vh;
      overflow: hidden;
      background-color: #000;
      img {
        object-fit: cover;
        object-position: 50% 50%;
        opacity: 1;
        transition: opacity 0.3s ease;
        min-height: 100%;
      }
    }
    .blogList__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.5rem 1.25rem;
      border-bottom: 1px solid #ebebeb;
      h2,
      h3,
      p {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
        -webkit-transition: transform 0.5 ease-out;
        transition: transform 0.5s ease-out;
      }
    }
  
    li {
      opacity: inherit;
      display: flex;
      justify-content: center;
      flex-direction: column;
      min-height: 38vh;
      margin-bottom: 0;
    }
    h2 {
      margin-bottom: 0.5rem;
    }
    h3 {
      margin-bottom: 1rem;
    }
    p {
      max-width: 900px;
      color: #464646;
    }
  }
  
  @media (min-width: 768px) {
    .list {
      a:hover {
        opacity: 1;
        li {
          div.hero_image {
            img {
              opacity: 0.8;
              -webkit-transition: opacity 0.3 ease;
              transition: opacity 0.3s ease;
            }
          }
          div.blogList__info {
            h2,
            h3,
            p {
              -webkit-transform: translateX(10px);
              transform: translateX(10px);
              -webkit-transition: transform 0.5s ease-out;
              transition: transform 0.5s ease-out;
            }
          }
        }
      }
      li {
        min-height: 250px;
        height: 33.333vh;
        flex-direction: row;
      }
      .hero_image {
        height: 100%;
        img {
          min-width: 100%;
          height: 100%;
          width: auto;
          min-height: 0;
        }
      }
      .blogList__info {
        min-width: 70%;
      }
    }
  }
  
  @media (min-width: 1280px) {
    .list {
      .blogList__info {
        padding: 3rem;
      }
      h3 {
        margin-bottom: 1.2rem;
      }
    }
  }
</style>