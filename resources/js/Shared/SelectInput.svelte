<script>
  import { nanoid } from 'nanoid'
  import Label from '@/Shared/Label.svelte'

  export let id = `text-input-${nanoid(5)}`
  export let value
  export let label
  export let error
  export let options

  let input

  export const focus = () => input.focus()
  export const select = () => input.select()

  $: props = {
    ...$$restProps,
    class: 'form-select',
  }

  function update(event) {
    value = event.target.value
  }
</script>

<div class={$$restProps.class}>
  <Label {label} {id} />

    <select {...props} aria-label="Default select example" bind:this={input} class:error {id} {value} on:input={update} required>
        <option selected></option>
        {#each options as { id, name }, i}
            <option value="{id}">{name}</option>
        {/each}
    </select>

  {#if error}
    <div class="invalid-feedback d-block">{error}</div>
  {/if}
</div>
