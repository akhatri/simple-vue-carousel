<template>
  <footer class="site-footer">
    <nav class="footer-nav">
      <ul>
        <li>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.site-footer {
  padding: 20px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-nav {
  ul {
    list-style-type: none;
    li > a {
      font-size: 12px;
      text-decoration: none;
      color: #fff;
      margin-right: 5px;
    }
  }
}
</style>
