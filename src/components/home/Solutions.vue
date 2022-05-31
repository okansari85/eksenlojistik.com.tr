  <template>
<section class="solutions">
  <div class="container">
    <div class="row justify-content-between align-items-center">
      <div class="col-lg-5">
        <img src="../../assets/image/home/eksen_video_poster.png" alt="" />
      </div>
      <div class="col-lg-6">
        <Title
            title='büyük sevkiyatlar için premium çözümler'
            subtitle='size özel'
            paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam corporis, numquam quam, aspernatur dicta aut nam inventore maxime unde dolorem consequatur. Rerum, cum velit atque ea quia accusamus magnam minus?'/>
        <a href='#!' class="btn btn-main">iletişime geç</a>
        <a href='#!' class="btn btn-main active ms-2">daha fazla</a>
      </div>
    </div>
    <div class="solutions-icon py-5">
      <div class="row pt-5">
        <div class="col-md-3 solutions-icon-item">
          <img src="../../assets/image/global/icon/icon1.png" alt="" />
          <span> Tır <br /> Filosu </span>
        </div>
        <div class="col-md-3 solutions-icon-item">
          <img src="../../assets/image/global/icon/icon1.png" alt="" />
          <span> Güvenlik <br /> Sözleşmesi </span>
        </div>
        <div class="col-md-3 solutions-icon-item">
          <img src="../../assets/image/global/icon/icon1.png" alt="" />
          <span> Anında <br /> Çözümler </span>
        </div>
        <div class="col-md-3 solutions-icon-item">
          <img src="../../assets/image/global/icon/icon1.png" alt="" />
          <span> Zamanında <br /> Teslimat </span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Title from "@/components/global/Title";
export default {
  name: "Solutions",
  components: { Title }
}
</script>

<style scoped>

</style>