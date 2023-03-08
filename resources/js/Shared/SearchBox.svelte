<script>
    import { imgToThumb, getColorBackground } from "@/utils";

    export let className = "";

    let results = []
    let timer;
    let isFocused = false;
	const changeFocus = (focus) => {
        clearTimeout(timer);
		timer = setTimeout(() => {
			isFocused = focus;
		}, 750);
    };

    async function search(keyword) {

        if (!keyword) {
            results = []
            return
        }

        const url = "/api/search/?format=json&search=" + encodeURIComponent(keyword)
        const response = await fetch(url)
        const json = await response.json()

        results = json
    }

	const debounce = v => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			search(v)
		}, 750);
	}
</script>

<div class="input-group {className}">
    <input class="form-control rounded-end pe-5" type="text" placeholder="{__('Procure os nossos produtos')}" on:input={event => debounce(event.target.value)} on:focusin={() => changeFocus(true)} on:focusout={() => changeFocus(false)}>
    <i class="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
    {#if (results.length > 0) && isFocused}
    <div class="dropdown-menu dropdown-menu-right w-100" style="display:block; max-height: 450px, max-width: 450px; overflow-y: auto; top: 3rem;">
        <div class="widget widget-cart px-3 pt-2 pb-3" style="overflow-y: scroll; max-height: 600px;">
            <div data-simplebar="" data-simplebar-auto-hide="false">
                {#each results as product}
                <a href="/p/{product.slug}">
                <div class="card card-search">
                    <div class="row no-gutters">
                        <div class="img-holder py-1 px-1 text-center" style="width: 150px;" >
                            <img src="{imgToThumb(product.photo)}" class="rounded-left search-img" alt="{product.name}" style="max-height: 7rem; width: auto;">
                        </div>
                        <div class="col">
                        <div class="card-body" style="padding: 0.5rem;">
                            <h5 class="card-title mb-0">{product.name}</h5>
                            <p class="card-text mb-0">{product.short_description}</p>
                            {#each product.colors as color}
                                <div class="form-check form-option form-check-inline">
                                    <label class="form-option-label rounded-circle" for="white">
                                        <span class="form-option-color rounded-circle" style="{getColorBackground(color.codes)}"></span>
                                    </label>
                                </div>
                            {/each}

                            {__('Tamanhos')}:
                            {#each product.sizes as size}
                                <div class="form-check form-option form-check-inline">
                                    <label class="form-option-label">{size}</label>
                                </div>
                            {/each}

                        </div>
                        </div>
                    </div>
                </div>
                </a>
                {/each}

            </div>
        </div>
        <!--<div class="d-flex align-items-center p-2 m-2">
            <a href="action" class="btn btn-primary btn-shadow btn-block"><i class="czi-search font-size-lg mr-2"></i>Ver todos os resultados</a>
        </div>-->
    </div>
    {/if}
</div>
