<template>
    <div class="socialBar d-none d-md-flex flex-column position-fixed translate-middle-y top-50 start-0 ps-3">
        <a class="socialIcon" href="https://www.instagram.com/eksenlojistik/" title="Instagram" target="_blank"><i class="bi bi-instagram"></i></a>
        <a class="socialIcon" href="https://www.linkedin.com/company/86254183/admin/" title="LinkedIn" target="_blank"><i class="bi bi-linkedin"></i></a>
        <a class="socialIcon" href="" title="Twitter" target="_blank"><i class="bi bi-twitter"></i></a>
    </div>
</template>


<style lang="scss">
.socialBar {
    z-index: 333;
    .socialIcon {
        margin-bottom: 30px;
        height: 40px;
        width: 40px;
        background-color: rgba($color: #000000, $alpha: .05);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
        color: rgb(77, 77, 77);
        font-size: 1rem;
        text-align: center;
        line-height: 2.2;
    }
}
</style>