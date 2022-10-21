<template>
    <div id="custom-cookie-wrapper" class="cookie-wrapper position-fixed bottom-0 shadow bg-white w-100 d-none"
        style="z-index: 999999">
        <div class="cookie-container py-3">
            <div
                class="cookie-content d-flex flex-wrap px-3 justify-content-evenly align-items-center text-center text-lg-start">

                <p class="m-0 py-2 fs-08">
                    Yasal düzenlemelere uygun çerezler kullanıyoruz. Detaylı bilgi için Çerez (Cookie) Aydınlatma
                    Metnimizi inceleyebilir, çerez izinlerinizi Çerez Ayarları üzerinden güncelleyebilirsiniz.
                </p>
                <div class="cookie-buttons py-2">
                    <button id="btn-cookie-accept"
                        class="cookie-button-accept btn py-2 fw-semibold rounded-0 fs-08 text-white"
                        style="width: 170px; max-width:100%; background-color: #1d5699;">Kabul Et</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    mounted() {
        // Cookie
        var cookie_wrapper = $('#custom-cookie-wrapper');
        var temp_cookie = Cookies.get('cookie');

        if (temp_cookie !== 'true') {
            cookie_wrapper.removeClass('d-none');
        }

        $('#btn-cookie-accept').click(function () {
            cookie_wrapper.addClass('d-none');
            var date = new Date();
            var m = 1000000;
            date.setTime(date.getTime() + (m * 60 * 1000));
            Cookies.set('cookie', 'true', { expires: date });
        });
    }
}
</script>
<style lang="">
    
</style>