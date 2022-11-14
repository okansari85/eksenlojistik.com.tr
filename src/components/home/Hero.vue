<template>
  <section class="hero w-100 vh-100">
    <div class="overlay"></div>
    <video src="/image/home/eksen_hero_video2.mp4" class=" vh-100  w-100" style="object-fit: cover" autoplay loop
           muted></video>
    <div class="position-absolute hero-content hero-text text-center top-50 start-50 translate-middle px-2 px-lg-0">
      <h1 class="text-white text-uppercase">
        <span class="d-block fw-bold firstchild">sadece bir çağrıda</span>
        <span class="fw-bold rolling-text">en kısa sürede</span>
        <span class="d-block fw-bold mobile-rolling">en kısa sürede</span>
        <span class="d-block fw-bold lastchild">istediğin yere</span>
      </h1>
      <a data-bs-toggle="modal" data-bs-target="#heroVideos" class="playBtn" style="cursor: pointer; z-index: 200000;">
          <img src="/image/home/k2.png" alt="" width="60" height="auto"  class="mt-4">
      </a>
    </div>

    <!-- Modal Solutions -->
    <div class="modal fade" id="heroVideos" tabindex="-1" style="z-index: 20000;">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content py-3 bg-transparent border-0">
          <a href="" class="bi bi-x-circle-fill text-danger position-absolute fs-1" data-bs-dismiss="modal" style="z-index: 5; right:10px;"></a>
          <div class="modal-body p-0 border-0 bg-transparent">
            <div class="modal-video-inner bg-transparent p-0">
              <video src="/image/home/eksen_hero_video2.mp4" autoplay loop muted style="max-width: 100%;"></video>
            </div>
          </div>
        </div>
      </div>
    </div>

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
            line-height: 1;
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
    background-color: rgba(0, 26, 40, 0.35);
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