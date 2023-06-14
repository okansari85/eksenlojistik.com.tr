<template>
    <div class="row ik-policy justify-content-between">
        <div class="col-lg-6">
            <h5 class="mb-4 fs-3 text-black">{{ $t('hr.ik-h2') }}</h5>
            <p>{{ $t('hr.ik-p1') }}</p>
            <p>{{ $t('hr.ik-p2') }}</p>
            <p>{{ $t('hr.ik-p3') }}</p>
            <p style="color:#e53a40 !important; font-weight: bold;">{{ $t('hr.ik-p4-red1') }}</p>
            <ul>
                <li>{{ $t('hr.ik-ul1') }}</li>
            </ul>
            <p class="pt-4" style="color:#e53a40 !important; font-weight: bold;">{{ $t('hr.ik-p5-red2') }}</p>
            <ul>
                <li>{{ $t('hr.ik-ul2') }}</li>
                <li>{{ $t('hr.ik-ul3') }}</li>
                <li>{{ $t('hr.ik-ul4') }}</li>
                <li>{{ $t('hr.ik-ul5') }}</li>
            </ul>
        </div>
        <div class="col-lg-5 pt-4 pt-lg-0">
            <img src="/image/global/policyss.jpg" alt="IK Policy">
        </div>
    </div>
</template>


<style lang="scss">
.ik-policy p, li {
    color:#666e70;
}
.ik-policy ul {
    padding-left: 18px;
    li {
        list-style-image: url(../../../public/image/global/icon/red-dot.png)!important;
    }
}




    /* list-style-type: square !important; */

</style>