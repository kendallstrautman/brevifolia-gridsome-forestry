<template>
    <section class="info_blurb">
        <h2> 
            This blog was created using <a href="https://forestry.io">Forestry</a>
            & <a href="https://gatsbyjs.com">Gatsby</a>
            <br />
            <br /> 
            To get started, import this site into Forestry or checkout the
            repository <a href={repoUrl}>here</a>.
        </h2>
        <ul>
            <li>
                <p>
                    <a href="">Email: email</a>
                </p>
            </li>
            <li>
                <p>
                    <a href="">Twitter: twitter</a>
                </p>
            </li>
            <li>
                <p>
                    <a href="">Github: github</a>
                </p>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
      metaInfo: {
        title: "Info"
      }
    }
</script>
