<template>
    <div class="socialBar d-none d-md-flex flex-column position-fixed translate-middle-y top-50 start-0 ps-3">
        <a class="socialIcon" href="" title="Facebook" target="_blank"><i class="bi bi-facebook text-primary"></i></a>
        <a class="socialIcon" href="" title="Instagram" target="_blank"><i class="bi bi-instagram text-danger"></i></a>
        <a class="socialIcon" href="" title="LinkedIn" target="_blank"><i class="bi bi-twitter text-info"></i></a>
        <a class="socialIcon" href="" title="LinkedIn" target="_blank"><i class="bi bi-linkedin text-primary"></i></a>
    </div>
</template>


<style lang="scss">

.socialBar {
    z-index: 333;
    .socialIcon {
        margin-bottom: 50px;
        height: 40px;
        width: 40px;
        background-color: rgba($color: #000000, $alpha: .05);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        // color: gray;
        font-size: 1rem;
        text-align: center;
        line-height: 2.2;
    }
}

</style>