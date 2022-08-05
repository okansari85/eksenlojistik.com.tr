<template>
  <div class="row justify-content-between">
    <div class="col-lg-6">
      <h5 class="fs-3 fw-500">
        Kalite Politikamız
      </h5>
      <p class="py-3">Eksen Lojistik , vizyonu ve stratejisiyle , taşımacılık ve lojistik hizmetlerinde müşteri
        ihtiyaçlarını
        karşılayan, kapsamlı büyümeye odaklanan ve sektörümüzde en karlı şirketler arasında yer alan lider bir küresel
        tedarikçi olmayı hedeflemektedir. Çalışanlarımız bu konuda başrolü oynuyor. Sorumluluk, güçlendirme ve büyüme
        fırsatları sunarak yetenekli insanları cezbetmek, motive etmek ve elde tutmak için çalışıyoruz. Sağlıklı bir iş
        anlayışı geliştiriyor ve işi büyütmek için küresel bir aile olarak birlikte çalışıyoruz.</p>
      <p>Eksen'de staj veya iş ile ilgileniyorsanız, açık pozisyonlarımıza bir göz atın ve yandaki alandaki bilgileri
        doldurduğunuzda, işe alım uzmanlarımız sizinle iletişime geçecektir. İşler ve stajlarla ilgili sürekli
        güncellemeler için sosyal medyamızı takip ettiğinizden emin olun .</p>
    </div>
    <div class="col-lg-5">
      <Form/>
    </div>
  </div>

  <div class="number-wrap mt-5 ">
    <div class="number-item">
      <h3>44</h3>
      <span>Sürücü</span>
    </div>
    <div class="number-item">
      <h3>30</h3>
      <span>Tır</span>
    </div>
    <div class="number-item">
      <h3>87</h3>
      <span>Mekanikler</span>
    </div>
    <div class="number-item">
      <h3>162</h3>
      <span>Çalışan</span>
    </div>
    <div class="number-item">
      <h3>2.901</h3>
      <span>Teslimat</span>
    </div>
  </div>

  <div class="team-bottom py-5 mt-5">
    <div class="row justify-content-between align-items-center">
      <div class="col-lg-6">
        <img src="/image/services/about-team-truck.png" alt="">
      </div>
      <div class="col-lg-5">
        <h5 class="fs-3 fw-500">Kariyerinizi Eksen'de ileriye taşıyın</h5>
        <p class="py-3">Sunduğumuz farklı işler ve bizle çalışmak için daha fazla bilgi edinin.</p>
        <p class="pb-3">Eksen'de, çalışanların farklı bireysel geçmişlerine ve düşünce çeşitliliğine dayalı olarak potansiyellerini
          gerçekleştirebilecekleri, çeşitlilik içeren bir iş gücüne sahip olmanın, şirket olarak yararlanabileceğimiz
          önemli bir avantaj olduğuna inanıyoruz. Kapsayıcı bir kültürde çeşitliliğe sahip bir iş gücü, dinamik iş
          yerlerini ve nihayetinde daha iyi iş kararlarını teşvik eder.</p>
        <hr>
        <ul class="py-3">
          <li class="pb-3"><i class="bi bi-check-lg fs-5"></i> Çalışan mutluluğu ve güven</li>
          <li class="pb-3"><i class="bi bi-check-lg fs-5"></i> Yetkili birimlerle sürekli iletişim</li>
          <li class="pb-3"><i class="bi bi-check-lg fs-5"></i> Açık diyalog kanalı ile doğrudan etkileşim</li>
          <li class="pb-3"><i class="bi bi-check-lg fs-5"></i> Sürdürülebilir büyümede yenilikçi destekler</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>

import Form from '@/components/global/Form'


export default {
  name: "about-team",
  components: {
    Form
  }
}
</script>

<style scoped>

</style>