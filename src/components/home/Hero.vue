<template>
  <section class="hero w-100 vh-100">
    <div class="overlay"></div>
    <video src="/image/home/eksen_hero_video2.mp4" class=" vh-100  w-100" style="object-fit: cover" autoplay loop
           muted></video>
    <div class="position-absolute hero-content hero-text text-center top-50 start-50 translate-middle">
      <h1 class="text-white text-uppercase">
        <span class="d-block fw-bold firstchild">sadece bir çağrıda</span>
        <span class="fw-bold rolling-text">en kısa sürede</span>
        <span class="d-block fw-bold mobile-rolling">en kısa sürede</span>
        <span class="d-block fw-bold lastchild">istediğin yere</span>
      </h1>
    </div>
        <img src="image/home/g1.png" alt="" class="position-absolute bottom-0 start-0" style="z-index: 999;">
  </section>
</template>

<script>
export default {
  name: "Hero",
  mounted() {
    let elements = document.querySelectorAll('.rolling-text');

    elements.forEach(element => {
      let innerText = element.innerText;
      element.innerHTML = '';

      let textContainer = document.createElement('div');
      textContainer.classList.add('block');

      for (let letter of innerText) {
        let span = document.createElement('span');
        span.innerText = letter.trim() === '' ? '\xa0': letter;
        span.classList.add('letter');
        textContainer.appendChild(span);
      }

      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));
    });


// for presentation purpose
    setTimeout(() => {
      elements.forEach(element => {
        element.classList.add('play');
      })
    }, 600);

    elements.forEach(element => {
      element.addEventListener('mouseover', () => {
        element.classList.remove('play');
      });
    });



  }
}
</script>

<style scoped lang="scss">


.hero {
  position: relative;

  @media (min-width: 576px) and (max-width:1521.98px) {
    .hero {
      &-text {
        width: 100%;
        span {
          &.mobile-rolling {
            font-size: 6rem;
          }
        }
      }
    }
  }

  @media(max-width:575.98px) {
    .hero {
      &-text {
        width: 100%;
        span {
          &.mobile-rolling {
            font-size: 4rem;
          }
        }
      }
    }
  }




  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background-color: rgba(0, 26, 40, 0.75);
    transition: all .3s ease;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  &-text {
    z-index: 2;
  }

}



</style>