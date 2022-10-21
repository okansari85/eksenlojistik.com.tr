<template>

        <!-- Calculate Button -->
        <div class="calculate-button position-fixed">
            <div
                class="h-100 w-100 d-flex align-items-center justify-content-between justify-content-lg-center ">
                <span>Maaliyet Hesapla</span>
            </div>
        </div>

        <!-- Calculate Form -->
        <div class="calculate-form position-fixed top-50 left-0 py-4 shadow"
            style="background: rgb(255, 255, 255); color: rgb(27, 27, 27);">
            <div class="h-100 d-flex flex-column px-4 px-lg-5 position-relative">
                <span class="position-absolute pe-3 pt-3 fs-5 pointer end-0 top-0 close-contact d">
                    <i class="bi bi-x-diamond"></i>
                </span>

                <h3 class="fw-bold pt-3 mb-4 ps-3" style="color: rgb(58, 58, 58);">Maaliyet Hesapla</h3>
                <form id="contact-form-left" action="https://sternenloscher.de/contact" method="POST"
                    class="tw-ge pb-4">
                    <form action="" >
                        <div class="row">
                            <div class="col-12">
                                <select name="finishcountry" id=""
                                    class="form-select startCountry">
                                    <option value="1" selected="" >Başlangıç Ülkesi</option>
                                    <option value="2" >Türkiye</option>
                                    <option value="3" >Rusya</option>
                                    <option value="4" >Ukranya</option>
                                    <option value="5" >Fransa</option>
                                    <option value="6" >İspanya</option>
                                    <option value="7" >İsveç</option>
                                    <option value="8" >Norveç</option>
                                    <option value="9" >Almanya</option>
                                    <option value="10" >Romanya</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <select name="startcountry" id=""
                                    class="form-select finishCountry" >
                                    <option value="1" selected="" >Bitiş Ülkesi</option>
                                    <option value="2" >Türkiye</option>
                                    <option value="3" >Rusya</option>
                                    <option value="4" >Ukranya</option>
                                    <option value="5" >Fransa</option>
                                    <option value="6" >İspanya</option>
                                    <option value="7" >İsveç</option>
                                    <option value="8" >Norveç</option>
                                    <option value="9" >Almanya</option>
                                    <option value="10" >Romanya</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <input type="number" class="form-control"
                                    placeholder="ort. ağırlık">
                            </div>
                            <div class="col-12">
                                <input type="date" class="form-control"
                                    placeholder="tarih seç">
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control"
                                    placeholder="email adresi" >
                            </div>
                            <div class="col-12">
                                <input type="tel" class="form-control"
                                    placeholder="telefon numarası" >
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-main rounded-0 mt-3">Hesapla</button>
                            </div>
                        </div>
                    </form>
                </form>
            </div>
        </div>

</template>

<script>
export default {
    mounted() {
        // Calculate FORM
        $('.calculate-button').click(function (){
        $('.calculate-form').toggleClass('active');
        });

        $('.close-contact').click(function (){
        $(".calculate-form").toggleClass('active');
        });
    }
}
</script>

<style lang="">
    
</style>