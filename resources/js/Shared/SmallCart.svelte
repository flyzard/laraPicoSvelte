<script>
    import { inertia, page } from '@inertiajs/svelte'
    import axios from "axios";
    import { showToast, imgToThumb } from "@/utils";
    import { cart } from "@/utils/store";

    if (!$cart.length) {
        cart.set($page.props.cart);
    }

    let removeItem = (item) => {
        axios.delete(route("remove-from-cart", item.id)).then((response) => {
            showToast({type: "success", message: __(response.data.message)});
            cart.set(response.data.cart);
        }).catch((error) => console.error("Error:", error));
    }
</script>

<div class="navbar-tool dropdown ms-3">
    <a class="navbar-tool-icon-box bg-secondary dropdown-toggle" use:inertia href="/cart">
        <span class="navbar-tool-label">{$cart.items.length}</span>
        <i class="navbar-tool-icon ci-cart"></i>
    </a>
    <a class="navbar-tool-text" use:inertia href="/cart"><small>{__('O meu carrinho')}</small>{parseFloat($cart.total).toFixed(2)} €</a>
    <div class="dropdown-menu dropdown-menu-end">
        {#if $cart.items.length > 0}
        <div class="widget widget-cart px-3 pt-2 pb-3" style="width: 25rem;">
            <div style="height: 20rem;" data-simplebar data-simplebar-auto-hide="false">
                {#each $cart.items as item}
                <div class="widget-cart-item pb-2 border-bottom">
                    <button class="btn-close text-danger" type="button" aria-label="Remove" on:click={() => removeItem(item)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="d-flex align-items-center">
                        <a class="d-block flex-shrink-0" href="/">
                            <img src="{imgToThumb(item.photo)}" width="64" alt="{item.product}">
                        </a>
                        <div class="ps-2">
                            <h6 class="widget-product-title">
                                <a href="{item.link}">{item.product} {__('tamanho')} {item.size}</a>
                            </h6>
                            <div class="widget-product-meta">
                                <span class="text-accent me-2">{parseFloat(item.unity_price).toFixed(2)}</span>
                                <span class="text-muted">x {item.quantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/each}
            </div>
            <div class="d-flex flex-wrap justify-content-between align-items-center py-3">
                <div class="fs-sm me-2 py-2">
                    <span class="text-muted">Subtotal:</span>
                    <span class="text-accent fs-base ms-1">{parseFloat($cart.total).toFixed(2)}</span>
                </div>
                <!--<a class="btn btn-outline-secondary btn-sm" href="/cart">{__('Ver carrinho')}
                    <i class="ci-arrow-right ms-1 me-n1"></i>
                </a>-->
            </div>
            <a class="btn btn-primary btn-sm d-block w-100" href="/cart" use:inertia>
                <i class="ci-card me-2 fs-base align-middle"></i>{__('Confirmar encomenda')}
            </a>
        </div>
        {:else}
        <div class="widget widget-cart px-3 pt-2 pb-3" style="width: 25rem;">
            {__('O seu carrinho está vazio')}
        </div>
        {/if}
    </div>
</div>

