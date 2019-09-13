<template>
  <section class="carousel-container">
    <div class="carousel-media">

      <!-- Desktop - multiple carousel items -->
      <ul class="slides" v-if="!mobileView">
        <li
          class="slide"
          v-for="(slide, index) in slidesData.slice(0, this.carouselSize )"
          :key="slide.id"
          :class="{ 'is-active' : index === carouselActiveIndex}"
        >
          <img class="slide__image" :src="slide.webformatURL" :alt="slide.tags" />
          <p class="slide__meta">{{slide.user}} - {{slide.tags}}</p>
        </li>
      </ul>

      <!-- Mobile - single carousel item   -->
      <ul class="slides" v-if="mobileView">
        <li
          class="slide"
          v-for="(slide) in slidesData.slice(0, 1 )"
          :key="slide.id"
        >
          <img class="slide__image" :src="slide.webformatURL" :alt="slide.tags" />
          <p class="slide__meta">{{slide.user}} - {{slide.tags}}</p>
        </li>
      </ul>


    </div>

    <div class="carousel-controls">
      <button aria-label="Previous" class="btn previous" @click="previous()">Previous</button>
      <button aria-label="Next" class="btn next" @click="next()">Next</button>
    </div>

    <div class="mobile-controls">
      <button aria-label="Previous" class="btn previous" @click="previous()">
        <img alt="previous arrow" src="images/arrow.svg" />
      </button>
      <button aria-label="Next" class="btn next" @click="next()">
        <img alt="next arrow" src="images/arrow.svg" />
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

// Libraries
import axios from "axios";

@Component({
  components: {}
})
export default class Carousel extends Vue {

  // Props
  @Prop() private carouselSize!: number;

  // Data types
  public slidesData: any;
  public carouselActiveIndex: number;
  public mobileView: boolean;

  constructor() {
    super();

    this.slidesData = [];
    this.carouselActiveIndex = 0;
    this.mobileView = false;
    console.log(this.carouselSize);
  }

  // Lifecycle hooks
  //-----------------

  created() {
    console.log('created');
    this.checkViewport();
  }

  beforeMount() {
    console.log("before mounted");
    console.log(this.carouselSize);

    // If carousel size is 1 or an even number, just make the active index 0
    if (this.carouselSize === 1 || this.carouselSize % 2 == 0) {
      console.log("single carousel item or even number or items");
      this.carouselActiveIndex === 0;
    } else {
      console.log("multi carousel item with an odd number so the center element should have the active class");
      this.carouselActiveIndex = Math.floor(this.carouselSize / 2);
      console.log(this.carouselActiveIndex);
    }
  }

  async mounted() {
    console.log("mounted");

    // API URL
    const API_URL = `https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo`;

    // Get JSON data
    try {
      // Get result set via Axios using async/await promise method
      const res = await axios.get(API_URL);

      // store resultset in slides array
      this.slidesData = res.data.hits;
      console.log(this.slidesData);
      console.log(this.slidesData.length);
    } catch (e) {
      console.log(e);
    }

    this.resizeViewport();

  }

  // Functions
  //------------

  // resize
  resizeViewport() {
    window.addEventListener('resize', () => {
      console.log('hit resize');
      this.checkViewport();
    });
  }

  // check viewport
  checkViewport() {

      let width = document.body.clientWidth;

      // if width is less than 767px show mobile view carousel otherwise show desktop view
      if (width <= 767) {
        this.mobileView = true;
      } else if (width > 767) {
        this.mobileView = false;
      }    

      console.log(this.mobileView);
  }

  // Click events
  //-----------------

  previous() {
    console.log("clicked previous");

    // remove the last item at the end of array
    const lastItemRemoved = this.slidesData.pop();

    // add the last removed item back to the start of the array
    this.slidesData.unshift(lastItemRemoved);
  }

  next() {
    console.log("clicked next");

    // remove the first item at the beginning of the array
    let firstItemRemoved = this.slidesData.shift();

    // add the first removed back to the end of the array
    this.slidesData.push(firstItemRemoved);
  }
}
</script>


<style lang="scss" scoped>
.carousel-container {
  position: relative;
  margin-top: 20px;
  margin-bottom: 50px;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.carousel-media {
  padding: 30px;
  .slides {
    list-style-type: none;
    display: flex;
    overflow: hidden;
    .slide {
      // flex-basis: 20%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      padding-left: 5px;
      padding-right: 5px;
      &__image {
        height: 300px;
        object-fit: cover;
      }
      opacity: 0.5;
      &.is-active {
        opacity: 1;
      }
      &__meta {
        font-size: 14px;
      }
    }
  }
}

.carousel-controls {
  .btn {
    background-color: #333;
    color: #fff;
    padding: 10px 15px;
    text-transform: uppercase;
    border: 0;
    margin-right: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #fe414d;
    }
  }
}

.mobile-controls {
  display: none;
}

// Responsive view - mobile
@media only screen and (max-width: 767px) {
  .carousel-container {
    margin-top: 0;
  }

  // show only 1 image in mobile view
  .carousel-media {
    padding: 0;
    .slides {
      width: 100%;
      // hide the non-active slides as we have only 1 active slide per view on mobile - hacky workaround earlier what i would do is run an event listener on resize and if it hits mobile viewport I'll pass the carousel size as 1
      // .slide:not(.is-active) {
      //   display: none;
      // }
      // .slide.is-active {
      //   flex-basis: 100%;
      // }
      .slide {
        flex-basis: 100%; // make the single slide full width
        padding-left: 0;
        padding-right: 0;
        opacity: 1;
      }
    }
  }

  .carousel-controls {
    display: none;
  }

  .mobile-controls {
    display: block;
    .btn {
      background-color: #fe414d;
      border: 0;
      padding: 0px;
      cursor: pointer;
      img {
        transform-origin: 50% 50%;
        //transform: scale(0.5) translateX(10px);
      }
      &.previous {
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%) rotate(180deg);
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
        img {
          //transform: translateX(2px);
          transform: scale(0.5) translate(10px, 3px);
        }
      }
      &.next {
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%);
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
        img {
          //transform: translateX(0px);
          transform: scale(0.5) translate(10px, 3px);
        }
      }
    }
  }
}
</style>