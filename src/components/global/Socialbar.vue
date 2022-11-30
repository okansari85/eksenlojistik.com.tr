<template>
    <div class="socialBar d-none d-md-flex flex-column position-fixed translate-middle-y top-50 start-0 ps-3">
        <a class="socialIcon" href="" title="Facebook" target="_blank"><i class="bi bi-facebook"></i></a>
        <a class="socialIcon" href="" title="Instagram" target="_blank"><i class="bi bi-instagram"></i></a>
        <a class="socialIcon" href="" title="LinkedIn" target="_blank"><i class="bi bi-twitter"></i></a>
    </div>
</template>


<style lang="scss">

.socialBar {
    z-index: 333;
    .socialIcon {
        margin-bottom: 50px;
        height: 50px;
        width: 50px;
        background-color: rgba($color: #000000, $alpha: .1);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: gray;
        font-size: 1.2rem;
        text-align: center;
        line-height: 2.2;
    }
}

</style>